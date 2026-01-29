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
            <li>Data analysis revealed that women's voting behaviour was extremely bifurcated: the majority of "no" votes happened above the fold in under 1 second, based almost entirely on the first photo</li>
            <li>This created a distribution problem: users who struggled to compete on appearance alone received almost all of their votes above the fold, never getting the chance to showcase other compatibility signals</li>
            <li>The goal was to turn quick "no" votes into considered "yes" votes without slowing down the overall voting experience on which monetisation depended</li>
            <li>I introduced UX patterns that flexibly injected non-appearance-based points of relevance above the fold on targeted segments</li>
          </ul>
        </section>

        <div className="case-image">
          <img src="/images/bumble-interests.png" alt="Bumble interest badges" />
          <p className="case-image-caption">Interest selection flow and how badges appear on profiles</p>
        </div>

        <section className="case-section">
          <h2>Interest Badges</h2>
          <ul>
            <li>Introduced a new profile content system to better surface compatibility signals</li>
            <li>Designed to help men who typically struggle to express themselves build better profiles, while giving women more information on how a man might fit into their lives</li>
            <li>Interest Badges became the fastest-adopted in-app content type ever</li>
          </ul>
        </section>

        <section className="case-section">
          <h2>Outcome</h2>
          <ul>
            <li>Improved marketplace health by giving everyone a fair shot while maintaining the fast swiping experience</li>
            <li>Contributed to +20% MAU and +22.8% revenue YoY</li>
          </ul>
        </section>

        <footer className="footer">
          <Link href="/projects/shroomy">← Previous: Shroomy</Link>
          <Link href="/projects/boyfriend">Next: Boyfriend →</Link>
        </footer>
      </div>
    </main>
  )
}
