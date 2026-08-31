import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef
} from 'react';

const getGsap = () => {
  if (typeof window !== 'undefined' && window.gsap) return window.gsap;
  return null;
};

export const Card = forwardRef(({ customClass = '', className = '', children, style = {}, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`card-swap-item ${customClass} ${className}`.trim()}
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      borderRadius: '20px',
      border: '1px solid var(--border)',
      backgroundColor: 'var(--ink)',
      boxShadow: '0 20px 50px rgba(0,0,0,0.9), 0 0 30px var(--red-glow)',
      transformStyle: 'preserve-3d',
      willChange: 'transform',
      backfaceVisibility: 'hidden',
      overflow: 'hidden',
      ...style
    }}
  >
    {children}
  </div>
));

Card.displayName = 'Card';

const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
});

const placeNow = (gsapInstance, el, slot, skew) => {
  if (!gsapInstance || !el) return;
  gsapInstance.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });
};

export const CardSwap = ({
  width = 460,
  height = 320,
  cardDistance = 45,
  verticalDistance = 35,
  delay = 4000,
  pauseOnHover = true,
  onCardClick,
  skewAmount = 4,
  easing = 'elastic',
  children
}) => {
  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(() => childArr.map(() => React.createRef()), [childArr.length]);
  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));
  const tlRef = useRef(null);
  const intervalRef = useRef(0);
  const container = useRef(null);

  useEffect(() => {
    const gsapInstance = getGsap();
    if (!gsapInstance) return;

    const config =
      easing === 'elastic'
        ? {
            ease: 'elastic.out(0.6,0.9)',
            durDrop: 1.8,
            durMove: 1.8,
            durReturn: 1.8,
            promoteOverlap: 0.9,
            returnDelay: 0.05
          }
        : {
            ease: 'power1.inOut',
            durDrop: 0.8,
            durMove: 0.8,
            durReturn: 0.8,
            promoteOverlap: 0.45,
            returnDelay: 0.2
          };

    const total = refs.length;
    refs.forEach((r, i) => {
      if (r.current) {
        placeNow(gsapInstance, r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount);
      }
    });

    const swap = () => {
      if (order.current.length < 2) return;
      const [front, ...rest] = order.current;
      const elFront = refs[front]?.current;
      if (!elFront) return;

      const tl = gsapInstance.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: '+=450',
        duration: config.durDrop,
        ease: config.ease
      });

      tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx]?.current;
        if (!el) return;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, 'promote');
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease
          },
          `promote+=${i * 0.15}`
        );
      });

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          gsapInstance.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        'return'
      );

      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease
        },
        'return'
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover && container.current) {
      const node = container.current;
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener('mouseenter', pause);
      node.addEventListener('mouseleave', resume);
      return () => {
        node.removeEventListener('mouseenter', pause);
        node.removeEventListener('mouseleave', resume);
        clearInterval(intervalRef.current);
      };
    }

    return () => clearInterval(intervalRef.current);
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing, refs]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: {
            width: typeof width === 'number' ? `${width}px` : width,
            height: typeof height === 'number' ? `${height}px` : height,
            ...(child.props.style ?? {})
          },
          onClick: (e) => {
            child.props.onClick?.(e);
            onCardClick?.(i);
          }
        })
      : child
  );

  return (
    <div
      ref={container}
      className="card-swap-container"
      style={{
        position: 'relative',
        perspective: '1200px',
        transformStyle: 'preserve-3d',
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        maxWidth: '100%'
      }}
    >
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          transformStyle: 'preserve-3d' 
        }}
      >
        {rendered}
      </div>
    </div>
  );
};

export default CardSwap;
