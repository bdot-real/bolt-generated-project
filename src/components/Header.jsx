import React from 'react';
    import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

    function Header() {
      return (
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <a href="/" className="flex items-center text-xl font-bold">
              <span className="font-bold text-2xl">3HL</span>
            </a>
            <nav className="flex items-center">
              <ul className="flex space-x-6 mr-6">
                <li><a href="#products" className="hover:text-accent">Products</a></li>
                <li><a href="#developers" className="hover:text-accent">Developers</a></li>
                 <li><a href="#resources" className="hover:text-accent">Resources</a></li>
                <li><a href="#contact" className="hover:text-accent">Contact</a></li>
              </ul>
              <div className="flex space-x-4">
                <a href="https://github.com/3halveslabs" className="text-gray-500 hover:text-gray-700"><FaGithub size={20} /></a>
                <a href="https://twitter.com/3halveslabs" className="text-gray-500 hover:text-gray-700"><FaTwitter size={20} /></a>
                <a href="https://discord.gg/3halveslabs" className="text-gray-500 hover:text-gray-700"><FaDiscord size={20} /></a>
              </div>
            </nav>
          </div>
        </header>
      );
    }

    export default Header;
