import { useState } from 'react'
import './App.css'
import diamondhead from './asset/diamondhead.png'
import electrowater from './asset/electrowater.png'
import Rath from './asset/Rath.png'
import TerraSpin from './asset/TerraSpin.png'
import Weevil from './asset/Weevil.png'
import CannonBolt from './asset/CannonBolt.png'
import ChromaStone from './asset/ChromaStone.png'
import EyeGuy from './asset/EyeGuy.png'
import EchoEcho from './asset/EchoEcho.png'
import FeedBack from './asset/FeedBack.png'

const aliens = [
  { name: 'Ampfibian',   image: electrowater, color: '#00cfff', species: 'Amperi',        powers: 'Electrokinesis, Flight, Intangibility' },
  { name: 'Rath',        image: Rath,         color: '#ff8800', species: 'Appoplexian',   powers: 'Super Strength, Claws, Combat Instinct' },
  { name: 'Diamondhead', image: diamondhead,  color: '#7df9ff', species: 'Petrosapien',   powers: 'Crystal Generation, Shard Projectiles' },
  { name: 'TerraSpin',   image: TerraSpin,    color: '#a0ff60', species: 'Geochelone Aerio', powers: 'Wind Generation, Flight, Tornado Spin' },
  { name: 'CannonBolt',  image: CannonBolt,   color: '#ffe066', species: 'Arburian Pelarota', powers: 'Invulnerable Rollout, High Speed Ball' },
  { name: 'Weevil',      image: Weevil,       color: '#c8ff00', species: 'Lepidopterran', powers: 'Flight, Slime Spit, Tail Stinger' },
  { name: 'ChromaStone', image: ChromaStone,  color: '#cc88ff', species: 'Crystalsapien', powers: 'Energy Absorption & Redirection' },
  { name: 'EyeGuy',      image: EyeGuy,       color: '#00ffaa', species: 'Opticoid',      powers: 'Multi-Eye Vision, Energy Beams' },
  { name: 'EchoEcho',    image: EchoEcho,     color: '#ffffff', species: 'Sonorosian',    powers: 'Sonic Screams, Self-Duplication' },
  { name: 'FeedBack',    image: FeedBack,     color: '#ffcc00', species: 'Conductoid',    powers: 'Energy Absorption, Electric Blasts' },
]

const RING_COUNT = 6   // aliens surrounding the center
const RADIUS     = 240 // px from center of wheel to center of ring alien

export default function Characters() {
  const [current, setCurrent] = useState(0)
  const total = aliens.length

  const handleClick = () => {
    setCurrent(prev => (prev + 1) % total)
  }

  // center alien
  const centerAlien = aliens[current]

  // 6 surrounding aliens: indices current+1 … current+6
  const ringAliens = Array.from({ length: RING_COUNT }, (_, i) =>
    aliens[(current + 1 + i) % total]
  )

  return (
    <div className="char-page">

      {/* ── LEFT: Omnitrix Wheel ── */}
      <div className="wheel-section" onClick={handleClick}>

        {/* Center alien */}
        <div className="wheel-center">
          <img
            src={centerAlien.image}
            alt={centerAlien.name}
            className="alien-center"
            style={{ filter: `drop-shadow(0 0 18px ${centerAlien.color})` }}
          />
        </div>

        {/* 6 surrounding aliens */}
        {ringAliens.map((alien, i) => {
          // distribute evenly; start from top (−90°)
          const angleDeg = (i * 360) / RING_COUNT - 90
          const angleRad = (angleDeg * Math.PI) / 180
          const x = Math.cos(angleRad) * RADIUS
          const y = Math.sin(angleRad) * RADIUS

          return (
            <div
              key={`${alien.name}-${i}`}
              className="wheel-slot"
              style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
            >
              <img
                src={alien.image}
                alt={alien.name}
                className="alien-ring"
              />
            </div>
          )
        })}

        <p className="click-hint">TAP TO CYCLE</p>
      </div>

      {/* ── RIGHT: Info Card ── */}
      <div className="info-card" style={{ borderColor: centerAlien.color, boxShadow: `0 0 30px ${centerAlien.color}55` }}>

        <div className="info-alien-preview">
          <img
            src={centerAlien.image}
            alt={centerAlien.name}
            className="info-alien-img"
            style={{ filter: `drop-shadow(0 0 12px ${centerAlien.color})` }}
          />
        </div>

        <h2 className="info-name" style={{ color: centerAlien.color, textShadow: `0 0 12px ${centerAlien.color}88` }}>
          {centerAlien.name}
        </h2>

        <div className="info-divider" style={{ background: centerAlien.color }} />

        <div className="info-row">
          <span className="info-label">Species</span>
          <span className="info-value">{centerAlien.species}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Powers</span>
          <span className="info-value">{centerAlien.powers}</span>
        </div>

        <button
          className="transform-btn"
          style={{ background: centerAlien.color, boxShadow: `0 0 20px ${centerAlien.color}` }}
        >
          TRANSFORM
        </button>
      </div>

    </div>
  )
}
