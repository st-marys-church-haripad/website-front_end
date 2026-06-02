import { jubilee } from '@/assets/asset'
import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

const PopupCelebrations = () => {
  const [size, setSize] = useState({ width: 0, height: 0 })
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const updateSize = () => {
      if (typeof window !== 'undefined') {
        setSize({ width: window.innerWidth, height: window.innerHeight })
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') setVisible(false)
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('resize', updateSize)
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  if (!visible || !size.width || !size.height) return null

  return (
    <div
      className="celebration-overlay"
      aria-modal="true"
      role="dialog"
      onClick={() => setVisible(false)}
    >
      <Confetti
        width={size.width}
        height={size.height}
        numberOfPieces={500}
        tweenDuration={6000}
        recycle={false}
      />

      <div
        className="celebration-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="btn-close celebration-close"
          aria-label="Close celebration popup"
          onClick={() => setVisible(false)}
        />

        <p className="celebration-kicker mb-1">A Blessed Milestone</p>
        <h2 className="celebration-title mb-2">125 Years of Grace</h2>

        <img
          src={jubilee}
          className="celebration-logo"
          loading="lazy"
          alt="125 Years Celebrations"
        />

        <p className="celebration-message mb-3">
          St.Mary&apos;s Church joyfully celebrates a legacy of faith, service,
          and unity.
        </p>

        {/* <button
          type="button"
          className="btn celebration-dismiss-btn"
          onClick={() => setVisible(false)}
        >
          Join The Celebration
        </button> */}
      </div>
    </div>
  )
}

export default PopupCelebrations