import React, { useRef } from 'react'

import { GlowingCard } from './GlowingCard'

export const Cards = () => {
  const cardsRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (cardsRef.current) {
      const cards = cardsRef.current.getElementsByClassName('card')
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i] as HTMLElement
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        card.style.setProperty('--mouse-x', `${x}px`)
        card.style.setProperty('--mouse-y', `${y}px`)
      }
    }
  }

  return (
    <div
      id="cards"
      className="group mx-auto min-h-screen max-w-4xl columns-1 items-center justify-center gap-2 space-y-2 md:columns-3"
      ref={cardsRef}
      onMouseMove={handleMouseMove}
    >
      {[
        ...new Set(
          Array.from({ length: 6 }).map((_card, idx) => (
            <GlowingCard key={idx}>
              <h2 className="font-space-grotesk">Card {idx + 1}</h2>
            </GlowingCard>
          ))
        ),
      ]}
    </div>
  )
}
