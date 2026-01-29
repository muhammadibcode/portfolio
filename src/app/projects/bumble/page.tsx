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

        <div className="case-image">
          <img src="/images/bumble-hero.png" alt="Bumble profile and matching interface" />
          <p className="case-image-caption">Surfacing compatibility signals above the fold</p>
        </div>

        <section className="case-section">
          <h2>Swiping Experience Redesign</h2>
          <ul>
            <li>Data showed women's "no" votes happened in under 1 second, based almost entirely on the first photo—users who struggled on appearance alone never got a fair shot</li>
            <li>Introduced UX patterns that injected non-appearance-based relevance signals above the fold for targeted segments</li>
            <li>Below the fold, highlighted compatibility signals to convert maybes into matches</li>
          </ul>
        </section>

        <div className="case-image">
          <img src="/images/bumble-interests.png" alt="Bumble interest badges" />
          <p className="case-image-caption">Interest selection flow and how badges appear on profiles</p>
        </div>

        <section className="case-section">
          <h2>Interest Badges</h2>
          <ul>
            <li>New profile content system surfacing compatibility beyond photos—users select interests, and shared interests are highlighted when viewing profiles</li>
            <li>Became the fastest-adopted in-app content type ever</li>
            <li>Helped men build better profiles while giving women more signal on compatibility</li>
          </ul>
        </section>

        <section className="case-section">
          <h2>Outcome</h2>
          <p>
            Improved marketplace health by giving everyone a fair shot while maintaining the fast swiping experience users love. Contributed to +20% MAU and +22.8% revenue YoY.
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