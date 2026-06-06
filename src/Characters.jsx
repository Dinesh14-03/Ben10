import { useState } from 'react'
import './App.css'
import diamondhead from './asset/diamondhead.png'
import electrowater from './asset/electrowater.png'
import Rath from './asset/rath.png'
import TerraSpin from './asset/TerraSpin.png'
import Weevil from './asset/Weevil.png'
import CannonBolt from './asset/CannonBolt.png'
import ChromaStone from './asset/ChromaStone.png'
import EyeGuy from './asset/EyeGuy.png'
import EchoEcho from './asset/EchoEcho.png'
import FeedBack from './asset/FeedBack.png'
import Bigchill from './asset/Bigchill.png'
import Eatle from './asset/Eatle.png'
import Ghostfreak from './asset/Ghostfreak.png'
import Gravattack from './asset/Gravattack.png'
import Greymatter from './asset/Greymatter.png'
import KickinHawk from './asset/KickinHawk.png'
import Ripjaws from './asset/Ripjaws.png'
import Swampfire from './asset/Swampfire.png'
import Waterguy from './asset/Waterguy.png'
import Wildmutt from './asset/Wildmutt.png'
import Armodrillo from './asset/Armodrillo.png'
import Goop from './asset/Goop.png'
import WayBig from './asset/WayBig.png'
import Heatblast from './asset/Heatblast.png'
import HeatblastTransformation from './asset/Heatblast-Transformation.mp4'
import WildmuttTransformation from './asset/WildmuttTransformation.mp4'
import DiamondHeadTransformation from './asset/DiamondHeadTransformation.mp4'

import sound from './asset/sound.mp3'

const aliens = [
  { name: 'Ampfibian',   image: electrowater, color: '#00cfff', species: 'Amperi',        powers: 'Electrokinesis, Flight, Intangibility' },
  { name: 'Rath',        image: Rath,         color: '#ff8800', species: 'Appoplexian',   powers: 'Super Strength, Claws, Combat Instinct' },
  { name: 'Diamondhead', image: diamondhead,  color: '#7df9ff', species: 'Petrosapien',   powers: 'Crystal Generation, Shard Projectiles', video : DiamondHeadTransformation},
  { name: 'TerraSpin',   image: TerraSpin,    color: '#a0ff60', species: 'Geochelone Aerio', powers: 'Wind Generation, Flight, Tornado Spin' },
  { name: 'CannonBolt',  image: CannonBolt,   color: '#ffe066', species: 'Arburian Pelarota', powers: 'Invulnerable Rollout, High Speed Ball' },
  { name: 'Weevil',      image: Weevil,       color: '#c8ff00', species: 'Lepidopterran', powers: 'Flight, Slime Spit, Tail Stinger' },
  { name: 'ChromaStone', image: ChromaStone,  color: '#cc88ff', species: 'Crystalsapien', powers: 'Energy Absorption & Redirection' },
  { name: 'EyeGuy',      image: EyeGuy,       color: '#00ffaa', species: 'Opticoid',      powers: 'Multi-Eye Vision, Energy Beams' },
  { name: 'EchoEcho',    image: EchoEcho,     color: '#ffffff', species: 'Sonorosian',    powers: 'Sonic Screams, Self-Duplication' },
  { name: 'FeedBack',    image: FeedBack,     color: '#ffcc00', species: 'Conductoid',    powers: 'Energy Absorption, Electric Blasts' },
  { name: 'Bigchill',    image: Bigchill,     color: '#ffcc00', species: 'Conductoid',    powers: 'Energy Absorption, Electric Blasts' },
  { name: 'Eatle',       image: Eatle,        color: '#ffcc00', species: 'Conductoid',    powers: 'Energy Absorption, Electric Blasts' },
  { name: 'Ghostfreak',  image: Ghostfreak,   color: '#ffcc00', species: 'Conductoid',    powers: 'Energy Absorption, Electric Blasts' },
  { name: 'Gravattack',  image: Gravattack,   color: '#ffcc00', species: 'Conductoid',    powers: 'Energy Absorption, Electric Blasts' },
  { name: 'Greymatter',  image: Greymatter,   color: '#ffcc00', species: 'Conductoid',    powers: 'Energy Absorption, Electric Blasts' },
  { name: 'KickinHawk',  image: KickinHawk,   color: '#ffcc00', species: 'Conductoid',    powers: 'Energy Absorption, Electric Blasts' },
  { name: 'Ripjaws',     image: Ripjaws,      color: '#ffcc00', species: 'Conductoid',    powers: 'Energy Absorption, Electric Blasts' },
  { name: 'Swampfire',   image: Swampfire,    color: '#c8ff00', species: 'Lepidopterran', powers: 'Flight, Slime Spit, Tail Stinger' },
  { name: 'Waterguy',    image: Waterguy,     color: '#c8ff00', species: 'Lepidopterran', powers: 'Flight, Slime Spit, Tail Stinger' },
  { name: 'Wildmutt',    image: Wildmutt,     color: '#c8ff00', species: 'Lepidopterran', powers: 'Flight, Slime Spit, Tail Stinger' , video : WildmuttTransformation },
  { name: 'WayBig',      image: WayBig,       color: '#c8ff00', species: 'Lepidopterran', powers: 'Flight, Slime Spit, Tail Stinger' },
  { name: 'Goop',        image: Goop,         color: '#c8ff00', species: 'Lepidopterran', powers: 'Flight, Slime Spit, Tail Stinger' },
  { name: 'Armodrillo',  image: Armodrillo,   color: '#c8ff00', species: 'Lepidopterran', powers: 'Flight, Slime Spit, Tail Stinger' },
  { name: 'Heatblast',  image: Heatblast,     color: '#c8ff00', species: 'Lepidopterran', powers: 'Flight, Slime Spit, Tail Stinger' , video : HeatblastTransformation},

]

const RING_COUNT = 6   
const RADIUS     = 240 

export default function Characters() {
  const [current, setCurrent] = useState(0)
  const [playingVideo, setPlayingVideo] = useState(null)
  const total = aliens.length

  const handleClick = () => {
    const audio = new Audio(sound)
    audio.play()
    setCurrent(prev => (prev + 1) % total)
  }

  const handleTransform = (e) => {
    e.stopPropagation() // don't trigger wheel click
    const alien = aliens[current]
    if (alien.video) {
      setPlayingVideo(alien.video)
    }
  }

  // center alien
  const centerAlien = aliens[current]

  // 6 surrounding aliens: indices current+1 … current+6
  const ringAliens = Array.from({ length: RING_COUNT }, (_, i) =>
    aliens[(current + 1 + i) % total]
  )

  return (
    <div className="char-page">
      {playingVideo && (
        <div className="video-overlay">
          <video
            src={playingVideo}
            autoPlay
            className="transform-video"
            onEnded={() => setPlayingVideo(null)}
          />
          {/* Skip button */}
          <button
            className="skip-btn"
            onClick={() => setPlayingVideo(null)}
          >
            SKIP ▶
          </button>
        </div>
      )}

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
          style={{
            background: centerAlien.color,
            boxShadow: `0 0 20px ${centerAlien.color}`,
            opacity: centerAlien.video ? 1 : 0.4,
            cursor: centerAlien.video ? 'pointer' : 'not-allowed',
          }}
          onClick={handleTransform}
          disabled={!centerAlien.video}
        >
          TRANSFORM
        </button>
      </div>

    </div>
  )
}
