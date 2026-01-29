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
          <p className="case-subtitle">Core Discovery Experience</p>
          
          <div className="case-meta">
            <div className="case-meta-item">
              <span className="case-meta-label">Remit</span>
              <span className="case-meta-value">Core Experience</span>
            </div>
            <div className="case-meta-item">
              <span className="case-meta-label">Team</span>
              <span className="case-meta-value">Led 2 teams of 10 pods each</span>
            </div>
            <div className="case-meta-item">
              <span className="case-meta-label">Period</span>
              <span className="case-meta-value">2019 – 2024</span>
            </div>
          </div>
        </header>

        <section className="case-section">
          <h2>Overview</h2>
          <p>
            At Bumble I led the vision and strategy for Bumble's people 
            discovery and chat experiences, including determing the design for the swiping UX which millions of users interact with daily. 
          </p>
        </section>

        <div className="metrics-grid">
          <div className="metric">
            <div className="metric-value">+20%</div>
            <div className="metric-label">MAU Year-over-Year</div>
          </div>
          <div className="metric">
            <div className="metric-value">+22.8%</div>
            <div className="metric-label">Revenue Year-over-Year</div>
          </div>
          <div className="metric">
            <div className="metric-value">~$20M</div>
            <div className="metric-label">Premium+ Annual Revenue</div>
          </div>
        </div>

        <section className="case-section">
          <h2>Swiping Experience Redesign</h2>
          <p>
            Dating marketplaces have an inherent asymmetry problem. Data analysis revealed that 
            women's voting behaviour was extremely bifurcated: the majority "no" votes happened above 
            the fold in under 1 second, based almost entirely on the first photo. Meanwhile, "yes" 
            votes were more considered, with the majority happening after a scroll.
          </p>
          <p>
            This created a distribution problem: users who struggled to compete on appearance alone 
            received almost all of their votes above the fold, never getting the chance to showcase 
            other compatibility signals that might change a voter's mind.
          </p>
        </section>

        <div className="case-image">
          <img src="/images/bumble-hero.png" alt="Bumble profile and matching interface" />
          <p className="case-image-caption">Example of surfacing compatibility signals</p>
        </div>

        <section className="case-section">
          <p>
            The opportunity was to turn quick "no" votes into considered "yes" votes - without 
            slowing down the overall voting experience on which monetisation depended. To solve within this constraint, I introduced UX patterns that flexibly 
            injected non-appearance-based points of relevance above the fold on targeted segments. 
            Data science recommendations determined both which profiles needed consideration boosting 
            and which content would be most relevant to surface.
          </p>
          <p>
            Below the fold, for users who had started scrolling (signaling potential interest), 
            we highlighted compatibility signals to further reduce doubt and convert 
            maybes into matches.
          </p>
        </section>

        <section className="case-section">
          <h2>Interest Badges</h2>
          <p>
            Alongside this work I introduced a new profile content system to better surface compatibility signals. Users 
            select interests across categories, which then appear on their profile as easily parseable badges. 
            When viewing someone's profile, shared interests are highlighted - giving users a reason 
            to swipe yes beyond just photos.
          </p>
          <p>
            Interest Badges became the fastest-adopted in-app content type ever. The feature was designed to work across the marketplace: it helps men who typically struggle to express themselves to build 
            better profiles, while giving women more information on how a man might actually fit into their lives.
          </p>
        </section>

        <div className="case-image">
          <img src="/images/bumble-interests.png" alt="Bumble interest badges" />
          <p className="case-image-caption">Interest selection flow and how badges appear on profiles</p>
        </div>

        <section className="case-section">
          <h2>Additional Features Delivered</h2>
          <p>
            <strong>Premium+:</strong> New subscription tier giving power users control over the 
            algorithm.
          </p>
          <p>
            <strong>Photo Testing:</strong> Helped users understand which photos performed best.
          </p>
          <p>
            <strong>Smart Swipe Caps:</strong> Improved marketplace efficiency by limiting excessive swipers.
          </p>
        </section>


        <section className="case-section">
          <h2>Outcome</h2>
          <p>
            The work improved marketplace health by balancing the needs of all participants. Rather 
            than optimising purely for vote volume (which favoured already-popular users), I focussed on designing 
            systems that gave everyone a fair shot while maintaining the fast, enjoyable swiping 
            experience users love.
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