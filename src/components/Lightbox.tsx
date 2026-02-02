'use client'

import { useEffect } from 'react'

interface LightboxProps {
  src: string | null
  onClose: () => void
}

export default function Lightbox({ src, onClose }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (src) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [src, onClose])

  if (!src) return null

  return (
    <>
      <div
        className="lightbox-overlay"
        onClick={onClose}
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
          src={src}
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
    </>
  )
}
