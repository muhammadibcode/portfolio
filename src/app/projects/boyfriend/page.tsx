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
            <strong>Problem:</strong> Gay men are underserved when it comes to finding long-term relationships given the rampancy of hook-up culture.
          </p>
          <p>
            <strong>Solution:</strong> A dating service designed for gay men seeking a serious relationship, counterpositioned to hook-up apps like Grindr.
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
            <li>I'm building an initial waitlist through provocative posters in gay bars.</li>
            <li>Deliberately divisive positioning is designed to get attention and filter out misaligned users while resonating strongly with the target audience.</li>
            <li>The use of paintings by Henry Scott Tuke is intended to set deliberately romantic and sophisticated tone.</li>
          </ul>
        </section>

        <div className="case-image">
          <img src="/images/boyfriend-conversion-flow.png" alt="Boyfriend Conversion Funnel" />
          <p className="case-image-caption">Boyfriend Conversion Funnel</p>
        </div>

        <section className="case-section">
          <h2>Status</h2>
          <ul>
            <li>Pre-launch, currently building the email waitlist through poster distribution in London</li>
          </ul>
        </section>

        <footer className="footer">
          <Link href="/projects/bumble">← Previous: Bumble</Link>
          <Link href="/">Back to all projects →</Link>
        </footer>
      </div>
    </main>
  )
}
