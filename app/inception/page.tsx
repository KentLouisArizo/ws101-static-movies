import Link from "next/link"
import { SVGProps } from 'react';

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 border-b border-gray-800">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="w-6 h-6" />
          <span className="text-lg font-bold">The Matrix</span>
        </Link>
      </header>
      <section className="relative h-[80vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          <img
            src="https://dreamstudies.org/wp-content/uploads/2010/07/inception-lucid-dreaming.jpg"
            alt="Movie Poster"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
            style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-bold sm:text-6xl">Inception</h1>
              <p className="mt-4 text-lg text-gray-400">
                A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse
                task of planting an idea in the mind of a CEO.
              </p>
              <a href="https://ww4.123moviesfree.net/movie/inception-2756/">Watch Now!</a>
            </div>
          </div>
        </section>
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Movie Details</h2>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Director:</span>
                  <span>Christopher Nolan</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Cast:</span>
                  <span>Leonardo DiCaprio, Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Elliot Page, 
                    Tom Hardy, Cillian Murphy, Tom Berenger, Michael Caine</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Release Date:</span>
                  <span>July 8, 2010</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Runtime:</span>
                  <span>148 minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Genre:</span>
                  <span>Sci-Fi, Heist Film, Film Noir</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Synopsis</h2>
              <p className="text-gray-400">
              Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams 
              and steal their secrets from their subconscious. His skill has made him a hot commodity 
              in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at 
              redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds,
              it will be the perfect crime, but a dangerous enemy anticipates Cobb's every move.
              </p>
            </div>
          </div>
        </section>
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">Related Movies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
                <a href="/terminator">
              <img
                src="https://image.tmdb.org/t/p/original/kdYu7YJJP0uuGEuhUX5toqvBSog.jpg"
                alt="Related Movie 1"
                width={400}
                height={600}
                className="h-64 w-full object-cover"
                style={{ aspectRatio: "400/600", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">The Terminator</h3>
                <p className="text-gray-400 mt-2">
                A cyborg assassin is sent back in time to kill Sarah Connor, whose unborn son is destined to lead the
                resistance against the machines.
                </p>
              </div>
              </a>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden">
                <a href="/">
              <img
                src="https://www.indiewire.com/wp-content/uploads/2021/10/MSDMATR_EC061.jpg?w=3000&h=1687&crop=1&resize=1200%2C675"
                alt="Related Movie 2"
                width={400}
                height={600}
                className="h-64 w-full object-cover"
                style={{ aspectRatio: "400/600", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">The Matrix</h3>
                <p className="text-gray-400 mt-2">
                When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking
                truth--the life he knows is the elaborate deception of an evil cyber- intelligence.
                </p>
              </div>
              </a>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden">
                <a href="/blade">
              <img
                src="https://scifiinterfaces.com/wp-content/uploads/2020/06/BR-untitled.jpg"
                alt="Related Movie 3"
                width={400}
                height={600}
                className="h-64 w-full object-cover"
                style={{ aspectRatio: "400/600", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Blade Runner</h3>
                <p className="text-gray-400 mt-2">
                  A blade runner must pursue and try to terminate four replicants who stole a ship in space and have
                  returned to Earth to find their creator.
                </p>
              </div>
              </a>
            </div>
          </div>
        </section>
      <footer className="bg-gray-800 py-6 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <p className="text-gray-400 text-sm">&copy; 2024 The Matrix. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-gray-400 hover:text-white text-sm" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm" prefetch={false}>
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function MountainIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}