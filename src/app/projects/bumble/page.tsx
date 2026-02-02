'use client'

import Link from 'next/link'
import { useState } from 'react'
import Lightbox from '@/components/Lightbox'

export default function BumbleProject() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

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
          <img
            src="/images/bumble-hero.png"
            alt="Bumble profile and matching interface"
            onClick={() => setLightboxSrc('/images/bumble-hero.png')}
          />
          <p className="case-image-caption">Surfacing compatibility signals above the fold</p>
        </div>

        <section className="case-section">
          <h2>Swiping Experience Redesign</h2>
          <ul>
            <li>Data analysis revealed that women's voting behaviour was extremely bifurcated: the majority of "no" votes happened above the fold in under 1 second, based almost entirely on the first photo.</li>
            <li>This created a distribution problem: users who struggled to compete on appearance alone received almost all of their votes above the fold, never getting the chance to showcase other compatibility signals.</li>
            <li>The goal was to turn quick "no" votes into considered "yes" votes without slowing down the overall voting experience on which monetisation depended.</li>
            <li>Based on this I introduced UX patterns that flexibly injected non-appearance-based points of relevance above the fold, on targeted segments.</li>
          </ul>
        </section>

        <div className="case-image">
          <img
            src="/images/bumble-interests.png"
            alt="Bumble interest badges"
            onClick={() => setLightboxSrc('/images/bumble-interests.png')}
          />
          <p className="case-image-caption">Interest selection flow and how badges appear on profiles</p>
        </div>

        <section className="case-section">
          <h2>Interest Badges</h2>
          <ul>
            <li>To support this work I also introduced a new profile content system to help provide compatibility signals.</li>
            <li>This was designed to help men who typically struggle to express themselves build better profiles, while giving women more information on how a man might fit into their lives.</li>
            <li>Interest Badges quickly became the most-adopted profile content type in Bumble's history.</li>
          </ul>
        </section>

        <section className="case-section">
          <h2>Outcome</h2>
          <ul>
            <li>Increased the % of men with a yes swipe received by 8pp</li>
            <li>Contributed to +20% MAU and +22.8% revenue YoY</li>
          </ul>
        </section>

        <footer className="footer">
          <Link href="/projects/shroomy">← Previous: Shroomy</Link>
          <Link href="/projects/boyfriend">Next: Boyfriend →</Link>
        </footer>
      </div>

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </main>
  )
}
