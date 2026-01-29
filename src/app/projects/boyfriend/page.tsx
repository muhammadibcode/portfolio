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
            <strong>Problem:</strong> Gay dating apps are optimised for casual encounters—Grindr's grid interface and swipe mechanics create low-consideration environments that work against users seeking commitment.
          </p>
          <p>
            <strong>Solution:</strong> A premium dating service for gay men seeking long-term monogamous relationships, with curated weekly matching instead of infinite swiping.
          </p>
        </section>

        <section className="case-section">
          <h2>Go-to-Market</h2>
          <p>
            Building an initial email list through guerrilla marketing—provocative posters in gay bars across London. The approach creates word-of-mouth and filters for our target audience by saying what everyone's thinking but no one's saying out loud.
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
            Deliberately divisive positioning against hook-up culture. "Make Monogamy Great Again" filters out users who aren't aligned while resonating strongly with those who are. Paintings by Henry Scott Tuke set the tone to be romantic rather than sexual.
          </p>
        </section>

        <section className="case-section">
          <h2>Status</h2>
          <p>
            Pre-launch, currently building the email waitlist through poster distribution in London. The positioning has resonated in early testing.
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
