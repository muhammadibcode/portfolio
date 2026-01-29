import Link from 'next/link'

export default function BumbleProject() {
  return (
    <main className="page">
      <div className="container">
        <Link href="/" className="back-link">
          ← Back
        </Link>

        <header className="case-header">
          <div className="case-icon">💛</div>
          <h1 className="case-title">Bumble</h1>
        </header>

        <section className="case-section">
          <p>
            <strong>Problem:</strong> Dating apps have an inherent asymmetry: quick "no" votes happen above the fold based on photos alone, meaning users who don't lead with looks never get a fair chance.
          </p>
          <p>
            <strong>Solution:</strong> Surface non-appearance compatibility signals (shared interests, prompts) above the fold on targeted profiles to turn quick rejections into considered matches.
          </p>
        </section>

        <div className="case-image">
          <img src="/images/bumble-hero.png" alt="Bumble profile and matching interface" />
          <p className="case-image-caption">Surfacing compatibility signals above the fold</p>
        </div>

        <section className="case-section">
          <h2>Swiping Experience Redesign</h2>
          <p>
            Data showed women's voting was bifurcated: "no" votes happened in under 1 second above the fold, while "yes" votes came after scrolling. I designed patterns that flexibly injected relevance signals above the fold on profiles that needed them—determined by data science recommendations—without slowing the overall voting experience.
          </p>
        </section>

        <section className="case-section">
          <h2>Interest Badges</h2>
          <p>
            A new profile content system where users select interests that appear as badges on their profile, with shared interests highlighted. This became the fastest-adopted content type ever, helping men express themselves better while giving women more signal beyond photos.
          </p>
        </section>

        <div className="case-image">
          <img src="/images/bumble-interests.png" alt="Bumble interest badges" />
          <p className="case-image-caption">Interest selection and how badges appear on profiles</p>
        </div>

        <section className="case-section">
          <h2>Additional Features</h2>
          <p>
            <strong>Premium+:</strong> New tier giving power users algorithm control (~$20M annual revenue). <strong>Photo Testing:</strong> Helped users understand which photos performed best. <strong>Smart Swipe Caps:</strong> Improved marketplace efficiency by limiting excessive swipers.
          </p>
        </section>

        <section className="case-section">
          <h2>Outcome</h2>
          <p>
            Led two teams of 10 pods each (2019–2024), driving +20% MAU and +22.8% revenue year-over-year. The work improved marketplace health by giving everyone a fair shot while maintaining the fast swiping experience.
          </p>
        </section>

        <footer className="footer">
          <Link href="/projects/shroomy">← Previous: Shroomy</Link>
          <Link href="/projects/boyfriend">Next: Boyfriend →</Link>
        </footer>
      </div>
    </main>
  )
}
