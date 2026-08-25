import React from 'react';

export default function LearnerProjects({ handleAction }) {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="tag">Built by learners</div>
        <h2 className="title">
          Learn it.<br />
          <span className="red">Build it.</span>
        </h2>
        <p className="sub">
          Projects turn knowledge into something you can actually show.
        </p>

        <div className="projectGrid">
          <article 
            className="project large"
            onClick={(e) => handleAction('admission', e)}
          >
            <div className="projectImageWrapper">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85" 
                alt="Real-world Full-Stack Web Platform & Cloud Applications" 
                className="projectMovingImg"
                loading="lazy"
              />
            </div>
            <div className="projectOverlay" />
            <div className="projectScanline" />

            <div className="projectTopBar">
              <div className="projectBadgePill">
                <span className="projectLiveDot" />
                <span>FULL STACK &amp; CLOUD</span>
              </div>
              <div className="projectArrowBtn">↗</div>
            </div>

            <div className="projectInfo">
              <div className="projectSkillsList">
                <span className="projectSkillTag">React 19</span>
                <span className="projectSkillTag">Next.js</span>
                <span className="projectSkillTag">Node.js</span>
                <span className="projectSkillTag">PostgreSQL</span>
                <span className="projectSkillTag">Docker</span>
              </div>
              <h3>Real-world web products</h3>
              <p>Full-stack platforms, scalable SaaS architectures, secure auth APIs, and cloud deployments.</p>
            </div>
          </article>

          <div>
            <article 
              className="project" 
              style={{ marginBottom: '20px' }}
              onClick={(e) => handleAction('admission', e)}
            >
              <div className="projectImageWrapper">
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=85" 
                  alt="Generative AI & LLM Automation Workflows" 
                  className="projectMovingImg"
                  loading="lazy"
                />
              </div>
              <div className="projectOverlay" />
              <div className="projectScanline" />

              <div className="projectTopBar">
                <div className="projectBadgePill">
                  <span className="projectLiveDot" />
                  <span>GEN AI &amp; LLMS</span>
                </div>
                <div className="projectArrowBtn">↗</div>
              </div>

              <div className="projectInfo">
                <div className="projectSkillsList">
                  <span className="projectSkillTag">Python</span>
                  <span className="projectSkillTag">LangChain</span>
                  <span className="projectSkillTag">OpenAI / Claude</span>
                  <span className="projectSkillTag">Vector DBs</span>
                </div>
                <h3>AI experiments &amp; agents</h3>
                <p>Practical GenAI workflows, intelligent RAG pipelines, and automated agent tool-calling.</p>
              </div>
            </article>

            <article 
              className="project"
              onClick={(e) => handleAction('admission', e)}
            >
              <div className="projectImageWrapper">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=85" 
                  alt="Cybersecurity Offensive Security & Defense Matrix" 
                  className="projectMovingImg"
                  loading="lazy"
                />
              </div>
              <div className="projectOverlay" />
              <div className="projectScanline" />

              <div className="projectTopBar">
                <div className="projectBadgePill">
                  <span className="projectLiveDot" />
                  <span>OFFENSIVE DEFENSE</span>
                </div>
                <div className="projectArrowBtn">↗</div>
              </div>

              <div className="projectInfo">
                <div className="projectSkillsList">
                  <span className="projectSkillTag">Kali Linux</span>
                  <span className="projectSkillTag">Metasploit</span>
                  <span className="projectSkillTag">Wireshark</span>
                  <span className="projectSkillTag">SOC SIEM</span>
                </div>
                <h3>Hands-on security labs</h3>
                <p>Real penetration testing targets, malware analysis, firewall defense, and live threat hunting.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
