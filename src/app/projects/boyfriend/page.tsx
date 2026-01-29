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
        </header>

        <section className="case-section">
          <p>
            <strong>Problem:</strong> Gay dating apps are optimised for casual encounters—grid interfaces and swipe mechanics work against users seeking commitment.
          </p>
          <p>
            <strong>Solution:</strong> A premium dating service for gay men seeking long-term relationships, with curated weekly matching instead of infinite swiping.
          </p>
        </section>

        <div className="case-image poster-grid">
          <div className="poster-row">
            <img src="/images/boyfriend-poster-1.jpg" alt="Make Monogamy Great Again poster" />
            <img src="/images/boyfriend-poster-2.jpg" alt="You're not gonna find your husband on Grindr poster" />
          </div>
          <p className="case-image-caption">Guerrilla marketing posters for gay bars in London</p>
        </div>

        <section className="case-section">
          <h2>Go-to-Market</h2>
          <ul>
            <li>Building initial waitlist through provocative posters in gay bars—saying what everyone's thinking but no one's saying out loud</li>
            <li>Deliberately divisive positioning filters out misaligned users while resonating strongly with the target audience</li>
            <li>Henry Scott Tuke paintings set a romantic rather than sexual tone</li>
          </ul>
        </section>

        <section className="case-section">
          <h2>Status</h2>
          <p>
            Pre-launch, currently building the email waitlist through poster distribution in London.
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