import React from 'react';

import ChessImage1 from '../assets/chess-playing-hand.webp';
import ChessImage2 from '../assets/27319.746c2259.5000x5000o.5f1afccd859f.png';
import CountDown from '../CountDown';

const Home = () => {
  return (
    <div className="bg-gray-100">
     
      <header className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-800">Welcome to the Online Chess App</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src={ChessImage1} alt="Chess Board" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Play Chess Online</h2>
              <p className="mt-4 text-gray-600">
                Experience the thrill of playing chess against opponents from around the world. Improve your skills,
                participate in tournaments, and challenge your friends to intense matches.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Join Chess Community</h2>
              <p className="mt-4 text-gray-600">
                Connect with other chess enthusiasts, discuss strategies, share your achievements, and stay updated
                with the latest news in the chess world.
              </p>
            </div>
            <div>
              <img src={ChessImage2} alt="Chess Pieces" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-300">
            &copy; 2023 Online Chess App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
