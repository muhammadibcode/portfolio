import Link from 'next/link'

export default function Home() {
  return (
    <main className="page">
      <div className="container">
        {/* Header */}
        <h1 className="name">Muhammad Bhatti</h1>
        
        <p className="intro">
          I design and build consumer products.
        </p>
        
        <p className="intro">
  I'm currently building{' '}
  <strong>Shroomy</strong> as a solo founder; an app to support people with severe stress and anxiety through AI-generated mental health exercises. Prior to this I led the core experience product team at <strong>Bumble</strong>
</p>
        {/* Experience */}
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          <div className="experience-item">
            <div>
              <a href="https://shroomyapp.com" target="_blank" rel="noopener noreferrer">Shroomy</a>
              <span className="experience-role"> — Solo Founder</span>
            </div>
            <div className="experience-dates">2024 – Present</div>
          </div>
          
          <div className="experience-item">
            <div>
              <a href="https://bumble.com" target="_blank" rel="noopener noreferrer">Bumble</a>
              <span className="experience-role"> — Product, Core Experience</span>
            </div>
            <div className="experience-dates">2019 – 2024</div>
          </div>
          
          <div className="experience-item">
            <div>
              <a href="https://barclays.com" target="_blank" rel="noopener noreferrer">Barclays</a>
              <span className="experience-role"> — Product, Ad Platform</span>
            </div>
            <div className="experience-dates">2016 – 2019</div>
          </div>
        </div>

        {/* Projects */}
        <h2 className="section-title">Projects</h2>
        <div className="project-grid">
          <Link href="/projects/shroomy" className="project-card">
            <div className="project-image-wrapper">
              <img 
                src="/images/shroomy-hero.png" 
                alt="Shroomy app screens showing weekly plan and chat interface"
              />
            </div>
            <h3 className="project-title">Shroomy</h3>
            <p className="project-meta">AI Anxiety Companion · Live on iOS & Android</p>
          </Link>

          <Link href="/projects/bumble" className="project-card">
            <div className="project-image-wrapper">
              <img 
                src="/images/bumble-hero.png" 
                alt="Bumble profile and matching interface"
              />
            </div>
            <h3 className="project-title">Bumble</h3>
            <p className="project-meta">Core Experience</p>
          </Link>

          <Link href="/projects/boyfriend" className="project-card">
            <div className="project-image-wrapper boyfriend-wrapper">
              <img 
                src="/images/boyfriend-poster-2.jpg" 
                alt="Boyfriend marketing poster"
              />
            </div>
            <h3 className="project-title">Boyfriend</h3>
            <p className="project-meta">Brand & Guerrilla Marketing</p>
          </Link>
        </div>

        {/* Footer */}
        <footer className="footer">
          <a href="mailto:muhammad.i.b@outlook.com">muhammad.i.b@outlook.com</a>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/muhammad-bhatti-029a37a1/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </footer>
      </div>
    </main>
  )
}
