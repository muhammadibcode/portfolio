'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function ShroomyProject() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxSrc(null)
      }
    }

    if (lightboxSrc) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [lightboxSrc])

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
          <ul>
            <li><strong>Problem:</strong> Anxiety improves with consistent practice, but therapy only happens weekly and most mental health apps offer only generic, ad-hoc support.</li>
            <li><strong>Solution:</strong> Shroomy designs you a personalised plan of AI-generated exercises to help you build therapeutic habits, for real improvement over time.</li>
            <li>All screenshots on this page are taken directly from the live app. Try it out{' '}
              <a href="https://apps.apple.com/us/app/shroomy-daily-stress-relief/id6737152971" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>here</a>.
            </li>
          </ul>
        </section>

        <div className="case-image">
          <img
            src="/images/shroomy-hero.png"
            alt="Shroomy My Plan and Chat tabs"
            onClick={() => setLightboxSrc('/images/shroomy-hero.png')}
          />
          <p className="case-image-caption">Two modes: weekly plan for proactive improvement, chat for reactive support</p>
        </div>

        <section className="case-section">
          <h2>AI-Generated Exercises</h2>
          <ul>
            <li>Exercises are intentionally simple and bite-sized: designed for people who feel time-constrained and are easily overwhelmed</li>
            <li>Each exercise is AI-generated and unique to the user's situation</li>
            <li>The AI learns based on what users share, and further personalises their self-care suggestions accordingly</li>
          </ul>
        </section>

        <div className="case-image">
          <img
            src="/images/shroomy-exercises.png"
            alt="Shroomy exercise screens"
            onClick={() => setLightboxSrc('/images/shroomy-exercises.png')}
          />
          <p className="case-image-caption">Bite-sized AI generated exercises: breathwork and gratitude journaling</p>
        </div>

        <section className="case-section">
          <h2>Reactive Support</h2>
          <ul>
            <li>Chat interface provides conversational support for moments when users are struggling</li>
            <li>Shroomy acknowledges emotions, asks clarifying questions, and suggests relevant exercises based on what users share</li>
          </ul>
        </section>

        <div className="case-image">
          <img
            src="/images/shroomy-chat.png"
            alt="Shroomy chat interface"
            onClick={() => setLightboxSrc('/images/shroomy-chat.png')}
          />
          <p className="case-image-caption">Chat provides reactive support and connects to proactive exercises</p>
        </div>

        <section className="case-section">
          <h2>Celebrating Progress</h2>
          <ul>
            <li>Drawing from Nir Eyal's framework for building habit-forming apps, the app celebrates wins with completion screens</li>
            <li>Reveals insights about the user at random, creating moments of delight that reinforce habit formation</li>
          </ul>
        </section>

        <div className="case-image">
          <img
            src="/images/shroomy-rewards.png"
            alt="Shroomy completion and insights screens"
            onClick={() => setLightboxSrc('/images/shroomy-rewards.png')}
          />
          <p className="case-image-caption">Completion celebrations and unlockable insights</p>
        </div>

        <section className="case-section">
          <h2>Outcome</h2>
          <ul>
            <li>Built and scaled solo to $5k MRR</li>
            <li>35% D1 retention (beating the 28% Health & Fitness median)</li>
            <li>4.8/5 App Store rating</li>
          </ul>
        </section>

        <footer className="footer">
          <Link href="/">← Back to all projects</Link>
          <Link href="/projects/bumble">Next: Bumble →</Link>
        </footer>
      </div>

      {lightboxSrc && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxSrc(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 1,
            animation: 'fadeIn 200ms ease-out',
          }}
        >
          <img
            src={lightboxSrc}
            alt="Enlarged view"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '8px',
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </main>
  )
}
