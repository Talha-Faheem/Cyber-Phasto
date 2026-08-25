import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

const RouterContext = createContext(null);

export function Router({ children, location, navigator, basename = '' }) {
  const value = useMemo(() => ({
    location,
    navigator,
    basename
  }), [location, navigator, basename]);

  return (
    <RouterContext.Provider value={value}>
      {children}
    </RouterContext.Provider>
  );
}

export function BrowserRouter({ children, basename = '' }) {
  const [location, setLocation] = useState(() => ({
    pathname: window.location.pathname || '/',
    search: window.location.search || '',
    hash: window.location.hash || '',
    state: null
  }));

  useEffect(() => {
    const handlePopState = (e) => {
      setLocation({
        pathname: window.location.pathname || '/',
        search: window.location.search || '',
        hash: window.location.hash || '',
        state: e.state || null
      });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const push = useCallback((to, state = null) => {
    if (typeof to === 'number') {
      window.history.go(to);
      return;
    }
    const targetPath = typeof to === 'string' ? to : (to.pathname || '/');
    const targetSearch = typeof to === 'object' && to.search ? to.search : '';
    const targetHash = typeof to === 'object' && to.hash ? to.hash : '';
    const fullUrl = targetPath + targetSearch + targetHash;

    window.history.pushState(state, '', fullUrl);
    setLocation({
      pathname: targetPath,
      search: targetSearch,
      hash: targetHash,
      state
    });
  }, []);

  const replace = useCallback((to, state = null) => {
    if (typeof to === 'number') {
      window.history.go(to);
      return;
    }
    const targetPath = typeof to === 'string' ? to : (to.pathname || '/');
    const targetSearch = typeof to === 'object' && to.search ? to.search : '';
    const targetHash = typeof to === 'object' && to.hash ? to.hash : '';
    const fullUrl = targetPath + targetSearch + targetHash;

    window.history.replaceState(state, '', fullUrl);
    setLocation({
      pathname: targetPath,
      search: targetSearch,
      hash: targetHash,
      state
    });
  }, []);

  const navigator = useMemo(() => ({
    push,
    replace,
    go: (n) => window.history.go(n),
    back: () => window.history.back(),
    forward: () => window.history.forward()
  }), [push, replace]);

  return (
    <Router location={location} navigator={navigator} basename={basename}>
      {children}
    </Router>
  );
}

export function HashRouter({ children, basename = '' }) {
  const parseHash = () => {
    const raw = window.location.hash.slice(1) || '/';
    const [pathAndSearch, hashPart] = raw.split('#');
    const [pathname, searchPart] = pathAndSearch.split('?');
    return {
      pathname: pathname ? (pathname.startsWith('/') ? pathname : '/' + pathname) : '/',
      search: searchPart ? '?' + searchPart : '',
      hash: hashPart ? '#' + hashPart : '',
      state: null
    };
  };

  const [location, setLocation] = useState(parseHash);

  useEffect(() => {
    const handleHashChange = () => {
      setLocation(parseHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const push = useCallback((to) => {
    if (typeof to === 'number') {
      window.history.go(to);
      return;
    }
    const target = typeof to === 'string' ? to : (to.pathname + (to.search || '') + (to.hash || ''));
    window.location.hash = target.startsWith('/') ? target : '/' + target;
  }, []);

  const replace = useCallback((to) => {
    if (typeof to === 'number') {
      window.history.go(to);
      return;
    }
    const target = typeof to === 'string' ? to : (to.pathname + (to.search || '') + (to.hash || ''));
    const url = window.location.pathname + window.location.search + '#' + (target.startsWith('/') ? target : '/' + target);
    window.location.replace(url);
  }, []);

  const navigator = useMemo(() => ({
    push,
    replace,
    go: (n) => window.history.go(n),
    back: () => window.history.back(),
    forward: () => window.history.forward()
  }), [push, replace]);

  return (
    <Router location={location} navigator={navigator} basename={basename}>
      {children}
    </Router>
  );
}

export function useLocation() {
  const ctx = useContext(RouterContext);
  if (!ctx) {
    return {
      pathname: window.location.pathname || '/',
      search: window.location.search || '',
      hash: window.location.hash || '',
      state: null
    };
  }
  return ctx.location;
}

export function useNavigate() {
  const ctx = useContext(RouterContext);
  return useCallback((to, options = {}) => {
    if (!ctx) {
      if (typeof to === 'number') {
        window.history.go(to);
      } else if (options.replace) {
        window.history.replaceState(null, '', to);
      } else {
        window.history.pushState(null, '', to);
      }
      return;
    }
    if (options.replace) {
      ctx.navigator.replace(to, options.state);
    } else {
      ctx.navigator.push(to, options.state);
    }
  }, [ctx]);
}

const RouteParamsContext = createContext({});

export function useParams() {
  return useContext(RouteParamsContext);
}

export function useSearchParams() {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);

  const setSearchParams = useCallback((nextParams, options = {}) => {
    const nextSearch = typeof nextParams === 'function' ? nextParams(searchParams) : nextParams;
    const str = nextSearch.toString();
    navigate({
      pathname: location.pathname,
      search: str ? '?' + str : '',
      hash: location.hash
    }, options);
  }, [location.pathname, location.hash, navigate, searchParams]);

  return [searchParams, setSearchParams];
}

function matchPath(pattern, pathname) {
  if (pattern === '*' || pattern === '/*') return {};
  const patternSegments = pattern.split('/').filter(Boolean);
  const pathSegments = pathname.split('/').filter(Boolean);

  if (patternSegments.length !== pathSegments.length && !pattern.endsWith('/*') && pattern !== '*') {
    return null;
  }

  const params = {};
  for (let i = 0; i < patternSegments.length; i++) {
    const pSeg = patternSegments[i];
    const aSeg = pathSegments[i];

    if (pSeg === '*') return params;
    if (pSeg.startsWith(':')) {
      params[pSeg.slice(1)] = aSeg;
    } else if (pSeg.toLowerCase() !== (aSeg || '').toLowerCase()) {
      return null;
    }
  }

  return params;
}

export function Route({ path, element, children }) {
  return element || children || null;
}

export function Routes({ children }) {
  const location = useLocation();
  const currentPath = location.pathname || '/';

  const childArray = React.Children.toArray(children);

  for (const child of childArray) {
    if (!React.isValidElement(child)) continue;
    const { path = '*', element, children: routeChildren } = child.props;
    const params = matchPath(path, currentPath);

    if (params !== null) {
      return (
        <RouteParamsContext.Provider value={params}>
          {element || routeChildren}
        </RouteParamsContext.Provider>
      );
    }
  }

  return null;
}

export const Link = React.forwardRef(function Link({ to, replace = false, state, onClick, target, children, className, style, ...rest }, ref) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && (!target || target === '_self') && e.button === 0 && !e.metaKey && !e.altKey && !e.ctrlKey && !e.shiftKey) {
      e.preventDefault();
      navigate(to, { replace, state });
    }
  };

  const href = typeof to === 'string' ? to : (to.pathname + (to.search || '') + (to.hash || ''));

  return (
    <a ref={ref} href={href} target={target} onClick={handleClick} className={className} style={style} {...rest}>
      {children}
    </a>
  );
});

export const NavLink = React.forwardRef(function NavLink({
  to,
  replace = false,
  state,
  onClick,
  target,
  children,
  className,
  style,
  end = false,
  ...rest
}, ref) {
  const location = useLocation();
  const targetPath = typeof to === 'string' ? to : (to.pathname || '/');
  const currentPath = location.pathname || '/';

  const isActive = end 
    ? currentPath === targetPath 
    : currentPath === targetPath || (targetPath !== '/' && currentPath.startsWith(targetPath));

  const resolvedClassName = typeof className === 'function' ? className({ isActive }) : `${className || ''} ${isActive ? 'active' : ''}`.trim();
  const resolvedStyle = typeof style === 'function' ? style({ isActive }) : style;

  return (
    <Link
      ref={ref}
      to={to}
      replace={replace}
      state={state}
      onClick={onClick}
      target={target}
      className={resolvedClassName}
      style={resolvedStyle}
      {...rest}
    >
      {typeof children === 'function' ? children({ isActive }) : children}
    </Link>
  );
});

export function Navigate({ to, replace = false, state }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to, { replace, state });
  }, [navigate, to, replace, state]);
  return null;
}

export function Outlet() {
  return null;
}

export default {
  BrowserRouter,
  HashRouter,
  Router,
  Routes,
  Route,
  Link,
  NavLink,
  Navigate,
  Outlet,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams
};
