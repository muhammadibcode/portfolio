import Link from 'next/link'

export default function BoyfriendProject() {
  return (
    <main className="page">
      <div className="container">
        <Link href="/" className="back-link">
          ← Back
        </Link>

        <header className="case-header">
          <div className="case-icon">💍</div>
          <h1 className="case-title">Boyfriend</h1>
          <p className="case-subtitle">Serious gay dating</p>
          
          <div className="case-meta">
            <div className="case-meta-item">
              <span className="case-meta-label">Role</span>
              <span className="case-meta-value">Founder</span>
            </div>
            <div className="case-meta-item">
              <span className="case-meta-label">Stage</span>
              <span className="case-meta-value">Pre-launch</span>
            </div>
            <div className="case-meta-item">
              <span className="case-meta-label">Focus</span>
              <span className="case-meta-value">London</span>
            </div>
          </div>
        </header>

        <section className="case-section">
          <h2>Overview</h2>
          <p>
            Boyfriend is a dating service for gay men seeking long-term monogamous relationships. 
            The gay dating market is dominated by apps optimised for casual encounters: Grindr's 
            grid interface and swipe mechanics create low-consideration environments that work 
            against users genuinely seeking commitment. There's a gap for a premium product that 
            filters for intent.
          </p>
        </section>

        <section className="case-section">
          <h2>Go-to-Market Strategy</h2>
          <p>
            Rather than competing for attention on social media, we're building an initial email list 
            through guerrilla marketing—posters in gay bars across London. The approach creates 
            word-of-mouth and filters for our target audience.
          </p>
          <p>
            The posters are designed to be provocative and memorable. They cut through the noise 
            by saying what everyone's thinking but no one's saying out loud.
          </p>
        </section>

        <div className="case-image poster-grid">
          <div className="poster-row">
            <img src="/images/boyfriend-poster-1.jpg" alt="Make Monogamy Great Again poster" />
            <img src="/images/boyfriend-poster-2.jpg" alt="You're not gonna find your husband on Grindr poster" />
          </div>
          <p className="case-image-caption">Guerrilla marketing: provocative posters for gay bars in London</p>
        </div>

        <section className="case-section">
          <h2>Brand Strategy</h2>
          <p>
            The brand takes a deliberately divisive stance against hook-up culture. "Make Monogamy 
            Great Again" and "You're not gonna find your husband on Grindr" are intentionally 
            polarising: they filter out users who aren't aligned with the product's purpose while 
            resonating strongly with those who are.
          </p>
          <p>
            The visual identity uses bold typography and direct messaging. Paintings by Henry Scott Tuke 
            sets the tone to be romantic rather than sexual. The premium positioning is reinforced through curated 
            weekly matching rather than infinite swiping.
          </p>
        </section>

        <section className="case-section">
          <h2>Status</h2>
          <p>
            Currently building the email waitlist through poster distribution in London. The 
            positioning has resonated in early testing. The 
            email list will serve as the platform for launching a curated dating service.
          </p>
        </section>

        <footer className="footer">
          <Link href="/projects/bumble">← Previous: Bumble</Link>
          <Link href="/">Back to all projects →</Link>
        </footer>
      </div>
    </main>
  )
}
