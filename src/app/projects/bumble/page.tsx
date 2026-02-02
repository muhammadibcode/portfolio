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
          <p>
            <strong>Problem:</strong> In dating apps a major problem is unequal distribution of activity. A minority of popular users tend to get most of the likes. This results in most men struggling to get a match and churning when they don't, and women feeling the app shows them an overwhelming number of irrelevant profiles.
          </p>
          <p>
            At Bumble, I led the team responsible for addressing this problem through the core swiping UX. Data analysis revealed that when women were swiping no, this happened almost exclusively based on the first photo, without scrolling to see additional content. However testing quickly revealed that slowing down time per swipe with additional content significantly impacted total swipes per user, in a product where swipe volume is intrinsically tied to monetisation.
          </p>
          <p>
            <strong>Solution:</strong> The goal was accordingly to use UX nudges tactically to turn no votes into yes votes with minimal impact to time per swipe. Within this context, I led the introducing of UX patterns to flexibly inject non-appearance-based points of relevance above the fold on segments identified as high potential by the Data Science team. This approach successfully increased the % of men with a yes swipe received by 8pp.
          </p>
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
