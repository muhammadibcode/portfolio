import Link from 'next/link'

export default function ShroomyProject() {
  return (
    <main className="page">
      <div className="container">
        <Link href="/" className="back-link">
          ← Back
        </Link>

        <header className="case-header">
          <div className="case-icon">🍄</div>
          <h1 className="case-title">Shroomy</h1>
        
        </header>

        <section className="case-section">
          <h2>Overview</h2>
          <p>
          Anxiety, like most things, requires daily consistent practice to improve. However therapy tends to be scheduled once a week, and most mental health apps offer generic support. 
          Shroomy delivers short, AI-personalized therapeutic exercises daily, which adapt to what users share about their specific anxieties, thought patterns, and life context,  to help them build therapeutic habits that stick in order to produce real improvement.
          You can try it out <a href="https://apps.apple.com/us/app/shroomy-daily-stress-relief/id6737152971" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>here</a>.
</p>
          <p>
            All screenshots on this page are taken directly from the live app.
          </p>
        </section>

        <div className="case-image">
          <img src="/images/shroomy-hero.png" alt="Shroomy My Plan and Chat tabs" />
          <p className="case-image-caption">Two modes: weekly plan for proactive improvement, chat for reactive support</p>
        </div>

        <section className="case-section">
          <h2>AI-Generated Exercises</h2>
          <p>
            The exercises are intentionally simple and bite-sized: designed for people who feel 
            time-constrained and are easily overwhelmed. Each exercise is AI-generated and unique to the user's situation, 
            whether that's guided love & kindness meditation or exploratory journaling to reveal subconscious beliefs. The AI 
            learns based on what users share, and further personalises their self-care suggestions accordingly.
          </p>
        </section>

        <div className="case-image">
          <img src="/images/shroomy-exercises.png" alt="Shroomy exercise screens" />
          <p className="case-image-caption">Bite-sized AI generated exercises: breathwork and gratitude journaling</p>
        </div>

        <section className="case-section">
          <h2>Reactive Support</h2>
          <p>
            The chat interface provides conversational support for moments when users are struggling. 
            Shroomy acknowledges emotions, asks clarifying questions, and suggests relevant exercises 
            based on what users share.
          </p>
        </section>

        <div className="case-image">
          <img src="/images/shroomy-chat.png" alt="Shroomy chat interface" />
          <p className="case-image-caption">Chat provides reactive support and connects to proactive exercises</p>
        </div>

        <section className="case-section">
          <h2>Celebrating Progress</h2>
          <p>
            Drawing from Nir Eyal's framework for building habit-forming apps, the app celebrates wins with 
            completion screens and reveals insights about the user at random. This creates moments 
            of delight that reinforce habit formation - users don't just complete exercises, they 
            discover new things about themselves in the process.
          </p>
        </section>

        <div className="case-image">
          <img src="/images/shroomy-rewards.png" alt="Shroomy completion and insights screens" />
          <p className="case-image-caption">Completion celebrations and unlockable insights</p>
        </div>

        <section className="case-section">
          <h2>Outcome</h2>
          <p>
            Built and scaled solo to $5k MRR with 35% D1 retention (beating the 28% Health & Fitness 
            median) and a 4.8/5 App Store rating.
          </p>
        </section>

        <footer className="footer">
          <Link href="/">← Back to all projects</Link>
          <Link href="/projects/bumble">Next: Bumble →</Link>
        </footer>
      </div>
    </main>
  )
}
