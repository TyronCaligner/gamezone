import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import minecraft from './assets/games/minecraft.jpg'
import valorant from './assets/games/valorant.jpg'
import fortnite from './assets/games/fortnite.jpg'

function App() {
  const [selectedGame, setSelectedGame] = useState(null)

  const games = [
    {
      name: 'Minecraft',
      image: minecraft,
      description: 'Build, explore, and survive in an endless world.',
      genre: 'Sandbox / Survival',
    },
    {
      name: 'Valorant',
      image: valorant,
      description: 'Team up with your friends and compete in tactical battles.',
      genre: 'Tactical Shooter',
    },
    {
      name: 'Fortnite',
      image: fortnite,
      description: 'Battle, build, and fight to become the last player standing.',
      genre: 'Battle Royale',
    },
  ]

  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">
        <h2 className="logo">GAMEZONE</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#games">Games</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hero-small">WELCOME TO GAMEZONE</p>

          <h1>
            LEVEL UP
            <br />
            YOUR GAMING
          </h1>

          <p className="hero-description">
            Discover new games. Explore new worlds. 
            Play your way.
          </p>

          <a href="#games" className="hero-button">
            EXPLORE GAMES
          </a>
        </div>
      </section>

      {/* Games */}
      <section id="games" className="games-section">
        <p className="section-small">DISCOVER</p>
        <h2>FEATURED GAMES</h2>

        <div className="game-container">
          {games.map((game) => (
            <div className="game-card" key={game.name}>

              <img src={game.image} alt={game.name} />

              <div className="game-info">
                <span className="game-genre">{game.genre}</span>

                <h3>{game.name}</h3>

                <p>{game.description}</p>

                <button onClick={() => setSelectedGame(game)}>
                  VIEW GAME
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Game Details */}
        {selectedGame && (
          <div className="game-details">
            <div className="details-content">

              <button
                className="close-button"
                onClick={() => setSelectedGame(null)}
              >
                ×
              </button>

              <img
                src={selectedGame.image}
                alt={selectedGame.name}
              />

              <div>
                <span className="game-genre">
                  {selectedGame.genre}
                </span>

                <h2>{selectedGame.name}</h2>

                <p>{selectedGame.description}</p>

                <button onClick={() => setSelectedGame(null)}>
                  CLOSE
                </button>
              </div>

            </div>
          </div>
        )}
      </section>

      {/* About */}
      <section id="about" className="about-section">
        <div className="about-content">
          <p className="section-small">ABOUT US</p>

          <h2>WELCOME TO GAMEZONE</h2>

          <p>
            GameZone is a gaming website created for players who
            enjoy discovering games, exploring new experiences,
            and connecting with the gaming community.
          </p>

          <p>
            Our goal is to create a simple place where gamers can
            discover popular games and learn more about them.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <p className="section-small">GET IN TOUCH</p>

        <h2>READY TO PLAY?</h2>

        <p>
          Have a question or want to share your favorite game?
          We'd love to hear from you.
        </p>

        <a
          href="mailto:gamezone@example.com"
          className="contact-button"
        >
          CONTACT US
        </a>
      </section>

      {/* Footer */}
      <footer>
        <h3>GAMEZONE</h3>
        <p>© 2026 GameZone. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default App