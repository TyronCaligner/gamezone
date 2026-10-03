import { useState } from 'react'
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
    <div className="min-h-screen bg-[#080808] text-white">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex h-[75px] items-center justify-between border-b border-[#222] bg-[#0b0b0b] px-[8%]">
        <h2 className="text-2xl font-bold tracking-[2px] text-[#00ff88]">
          GAMEZONE
        </h2>

        <div className="flex gap-7">
          <a href="#home" className="text-[#ccc] transition hover:text-[#00ff88]">
            Home
          </a>
          <a href="#games" className="text-[#ccc] transition hover:text-[#00ff88]">
            Games
          </a>
          <a href="#about" className="text-[#ccc] transition hover:text-[#00ff88]">
            About
          </a>
          <a href="#contact" className="text-[#ccc] transition hover:text-[#00ff88]">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="flex min-h-[90vh] items-center justify-center bg-[radial-gradient(circle_at_center,#15251d_0%,#080808_60%)] px-5 py-20 text-center"
      >
        <div className="max-w-4xl">
          <p className="mb-5 text-[13px] font-bold tracking-[4px] text-[#00ff88]">
            WELCOME TO GAMEZONE
          </p>

          <h1 className="mb-8 text-6xl font-bold leading-[0.95] tracking-[-3px] md:text-8xl">
            LEVEL UP
            <br />
            YOUR GAMING
          </h1>

          <p className="mx-auto mb-9 max-w-xl text-lg leading-7 text-[#aaa]">
            Discover new games. Explore new worlds. Play your way.
          </p>

          <a
            href="#games"
            className="inline-block rounded bg-[#00ff88] px-8 py-4 text-sm font-bold text-black transition hover:-translate-y-1 hover:bg-white"
          >
            EXPLORE GAMES
          </a>
        </div>
      </section>

      {/* Games */}
      <section id="games" className="bg-[#0d0d0d] px-[8%] py-24 text-center">
        <p className="mb-5 text-[13px] font-bold tracking-[4px] text-[#00ff88]">
          DISCOVER
        </p>

        <h2 className="mb-12 text-4xl font-bold md:text-5xl">
          FEATURED GAMES
        </h2>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {games.map((game) => (
            <div
              className="overflow-hidden rounded-lg border border-[#262626] bg-[#151515] text-left transition hover:-translate-y-2 hover:border-[#00ff88]"
              key={game.name}
            >
              <img
                src={game.image}
                alt={game.name}
                className="h-[210px] w-full object-cover"
              />

              <div className="p-6">
                <span className="text-xs font-bold tracking-wider text-[#00ff88]">
                  {game.genre}
                </span>

                <h3 className="my-2 text-2xl font-bold">
                  {game.name}
                </h3>

                <p className="mb-5 leading-6 text-[#999]">
                  {game.description}
                </p>

                <button
                  onClick={() => setSelectedGame(game)}
                  className="rounded bg-[#00ff88] px-5 py-3 text-sm font-bold text-black transition hover:bg-white"
                >
                  VIEW GAME
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Game Details */}
        {selectedGame && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-5">
            <div className="relative grid w-[800px] max-w-full gap-7 rounded-lg border border-[#333] bg-[#151515] p-7 md:grid-cols-2">

              <button
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#00ff88] text-xl font-bold text-black hover:bg-white"
                onClick={() => setSelectedGame(null)}
              >
                ×
              </button>

              <img
                src={selectedGame.image}
                alt={selectedGame.name}
                className="h-[300px] w-full rounded-md object-cover"
              />

              <div>
                <span className="text-xs font-bold tracking-wider text-[#00ff88]">
                  {selectedGame.genre}
                </span>

                <h2 className="my-4 text-4xl font-bold">
                  {selectedGame.name}
                </h2>

                <p className="mb-6 leading-7 text-[#aaa]">
                  {selectedGame.description}
                </p>

                <button
                  onClick={() => setSelectedGame(null)}
                  className="rounded bg-[#00ff88] px-5 py-3 font-bold text-black hover:bg-white"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* About */}
      <section
        id="about"
        className="bg-[#111] px-[8%] py-28 text-center"
      >
        <div className="mx-auto max-w-3xl">
          <p className="mb-5 text-[13px] font-bold tracking-[4px] text-[#00ff88]">
            ABOUT US
          </p>

          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            WELCOME TO GAMEZONE
          </h2>

          <p className="mb-5 text-lg leading-8 text-[#999]">
            GameZone is a gaming website created for players who enjoy
            discovering games, exploring new experiences, and connecting
            with the gaming community.
          </p>

          <p className="text-lg leading-8 text-[#999]">
            Our goal is to create a simple place where gamers can discover
            popular games and learn more about them.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-[#080808] px-[8%] py-28 text-center"
      >
        <p className="mb-5 text-[13px] font-bold tracking-[4px] text-[#00ff88]">
          GET IN TOUCH
        </p>

        <h2 className="mb-5 text-4xl font-bold md:text-5xl">
          READY TO PLAY?
        </h2>

        <p className="mx-auto mb-8 max-w-xl leading-7 text-[#999]">
          Have a question or want to share your favorite game?
          We'd love to hear from you.
        </p>

        <a
          href="mailto:gamezone@example.com"
          className="inline-block rounded bg-[#00ff88] px-8 py-4 text-sm font-bold text-black transition hover:-translate-y-1 hover:bg-white"
        >
          CONTACT US
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#222] bg-[#050505] px-5 py-10 text-center">
        <h3 className="mb-2 font-bold tracking-[2px] text-[#00ff88]">
          GAMEZONE
        </h3>

        <p className="text-sm text-[#666]">
          © 2026 GameZone. All rights reserved.
        </p>
      </footer>

    </div>
  )
}

export default App