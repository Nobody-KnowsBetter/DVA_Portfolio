export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img
        src="https://github.com/Nobody-KnowsBetter.png"
        alt="Profile"
        className="sidebar-avatar"
      />
      <h1 className="sidebar-name">Himank Kaushik</h1>
      <p className="sidebar-username">Nobody-KnowsBetter</p>
      <p className="sidebar-bio">
        Full Stack Developer and Data Analyst enthusiast with strong skills in React, Node.js, Next.js, Python, and SQL, focused on extracting insights, building web applications, and solving real-world problems.
      </p>

      <a
        href="https://github.com/Nobody-KnowsBetter"
        target="_blank"
        rel="noreferrer"
        className="sidebar-follow-btn"
      >
        View GitHub
      </a>
      <div className="sidebar-socials">
        <a
          href="https://github.com/Nobody-KnowsBetter"
          target="_blank"
          rel="noreferrer"
          className="sidebar-social-btn"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/himank-kaushik-015011324/"
          target="_blank"
          rel="noreferrer"
          className="sidebar-social-btn"
        >
          LinkedIn
        </a>
        <a
          href="https://www.kaggle.com/himankkaushik"
          target="_blank"
          rel="noreferrer"
          className="sidebar-social-btn"
        >
          Kaggle
        </a>
        <a
          href="https://drive.google.com/file/d/1xR3K_Lw_TJhP9k6rfLMMavs9BrYHNhcQ/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="sidebar-social-btn"
        >
          Resume
        </a>
      </div>

      <div className="sidebar-info">
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
          <span>Delhi</span>
        </div>
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5C0 2.784.784 2 1.75 2zM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809v6.442zm13-8.181v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88z" />
          </svg>
          <a href="mailto:itshimankkaushik@gmail.com">itshimankkaushik@gmail.com</a>
        </div>
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M2 1h12a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1zm0 1v12h12V2H2zm5.5 8h1v3h-1v-3zm0-5h1v4h-1V5z" />
          </svg>
          <a href="tel:7042977972">7042977972</a>
        </div>
      </div>

      <div className="sidebar-orgs">
        <h3 className="sidebar-orgs-title">Skills</h3>
        <div className="sidebar-orgs-list">
          <span className="org-pill">Tableau</span>
          <span className="org-pill">Power BI</span>
          <span className="org-pill">Advanced Excel</span>
          <span className="org-pill">SQL</span>
          <span className="org-pill">Python</span>
          <span className="org-pill">Pandas</span>
          <span className="org-pill">NumPy</span>
          <span className="org-pill">Matplotlib</span>
          <span className="org-pill">Seaborn</span>
          <span className="org-pill">Data Storytelling</span>
          <span className="org-pill">Dashboard Design</span>
          <span className="org-pill">Statistical Analysis</span>
          <span className="org-pill">Business Intelligence</span>
          <span className="org-pill">Google Analytics</span>
          <span className="org-pill">Data Cleaning</span>
          <span className="org-pill">Machine Learning Basics</span>
          <span className="org-pill">Problem-Solving</span>
          <span className="org-pill">Critical Thinking</span>
        </div>
      </div>
    </aside>
  )
}
