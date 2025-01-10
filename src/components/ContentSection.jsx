import React from 'react';

    function ContentSection() {
      return (
        <div className="container mx-auto py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose SCORE?</h2>
            <p className="text-gray-700 mb-4 text-center">Tired of rigid, expensive systems that limit your innovation? SCORE by 3 Halves Labs offers an open, flexible, and secure alternative, putting you in control of your data and your future.</p>
            <div className="text-center">
              <a href="#signup" className="bg-primary text-white py-2 px-6 rounded font-semibold hover:bg-secondary inline-block">SIGNUP FOR OUR BETA</a>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Key Modules</h2>
            <h3 className="text-2xl font-semibold mb-4">Empowering Your Success</h3>
            <div className="flex flex-wrap justify-center">
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <img src="/src/assets/fan-engagement.png" alt="Fan Engagement" className="rounded-lg mb-4 mx-auto" />
                <p className="text-gray-700 text-center">Fan Engagement Management</p>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <img src="/src/assets/digital-rights.png" alt="Digital Rights" className="rounded-lg mb-4 mx-auto" />
                <p className="text-gray-700 text-center">Digital Rights Management</p>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <img src="/src/assets/contract-signing.png" alt="Contract Signing" className="rounded-lg mb-4 mx-auto" />
                <p className="text-gray-700 text-center">Contract Signing and Management</p>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <img src="/src/assets/sports-management.png" alt="Sports Management" className="rounded-lg mb-4 mx-auto" />
                <p className="text-gray-700 text-center">Sports Management</p>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <img src="/src/assets/loyalty-programs.png" alt="Loyalty Programs" className="rounded-lg mb-4 mx-auto" />
                <p className="text-gray-700 text-center">Loyalty Programs</p>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <img src="/src/assets/music-piracy.png" alt="Music Piracy" className="rounded-lg mb-4 mx-auto" />
                <p className="text-gray-700 text-center">Music Piracy Protection</p>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <img src="/src/assets/ecommerce.png" alt="Ecommerce" className="rounded-lg mb-4 mx-auto" />
                <p className="text-gray-700 text-center">Ecommerce and Merch</p>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <img src="/src/assets/ticket-management.png" alt="Ticket Management" className="rounded-lg mb-4 mx-auto" />
                <p className="text-gray-700 text-center">Ticket and Venue Management</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p className="text-gray-700 mb-4">The music and sports industries face fragmented engagement, limited monetization, and slow adoption of new technologies. SCORE addresses these challenges head-on, providing a unified platform for growth.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">For Sports Organizations</h2>
             <p className="text-gray-700 mb-4">Regain control over your Web3 opportunities, enhance profitability, and strengthen brand loyalty with SCORE. Turn challenges into opportunities and create a more engaging fan experience.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">For Music Artists</h2>
            <p className="text-gray-700 mb-4">Take control of your intellectual property, reduce piracy, and unlock new revenue streams with SCORE. Connect with your fans on a deeper level and reward their loyalty.</p>
            <div className="text-center">
              <a href="#signup" className="bg-primary text-white py-2 px-6 rounded font-semibold hover:bg-secondary inline-block">SIGNUP FOR OUR BETA</a>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Game?</h2>
            <p className="text-gray-700 mb-4">Join our beta program today and be part of the future of fan engagement.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">AI-Powered Innovation</h2>
            <p className="text-gray-700 mb-4">Step into the future with SCORE's advanced AI tools, designed to optimize your systems and provide real-time analytics. Empower your operations with intelligent, adaptable, and secure AI solutions.</p>
          </section>
        </div>
      );
    }

    export default ContentSection;
