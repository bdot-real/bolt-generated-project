import React from 'react';

    function Hero() {
      return (
        <section className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-24">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Unlock Your Potential with SCORE</h1>
            <p className="text-xl mb-8">The ultimate platform for sports and music industries, designed to revolutionize fan engagement, data management, and app development.</p>
            <div className="flex justify-center space-x-4">
              <a href="#beta" className="bg-white text-primary py-2 px-6 rounded font-semibold hover:bg-gray-100">Join our beta program</a>
              <a href="#learn-more" className="bg-transparent border border-white text-white py-2 px-6 rounded font-semibold hover:bg-white hover:text-primary">Learn More</a>
            </div>
          </div>
        </section>
      );
    }

    export default Hero;
