import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import './App.css'

const words = [
  'platforms',
  'brands',
  'experiences',
  'stories',
  'interfaces',
  'tools',
  'campaigns',
  'products',
]

function FlipCard({
  frontContent,
  backContent,
}: {
  frontContent: ReactNode
  backContent: ReactNode
}) {
  const [flipped, setFlipped] = useState(false)
  const [dir, setDir] = useState(1)

  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    setDir(x < rect.width / 2 ? 1 : -1)
    setFlipped(true)
  }

  return (
    <div
      className={`flip-card ${flipped ? 'flipped' : ''}`}
      style={{ ['--dir' as any]: dir }}
      onMouseEnter={handleEnter}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="flip-inner">
        <div className="flip-front">{frontContent}</div>
        <div className="flip-back">{backContent}</div>
      </div>
    </div>
  )
}

function App() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      2500
    )
    return () => clearInterval(t)
  }, [])

  return (
    <div className="container">
      <h1 className="hero">
        We build <span className="word">{words[index]}</span> that matter.
      </h1>
      <div className="cards">
        <FlipCard
          frontContent={<div className="card-logo">ZUP! MEDIA</div>}
          backContent={
            <div className="card-back-text">
              "Marketing that converts. For brands that matter."
            </div>
          }
        />
        <FlipCard
          frontContent={<div className="card-logo">ZUP! DISPATCH</div>}
          backContent={
            <div className="card-back-text">
              "One app. All taxis. Across Romania."
            </div>
          }
        />
      </div>
    </div>
  )
}

export default App
