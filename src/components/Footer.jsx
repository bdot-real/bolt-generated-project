import React from 'react';
    import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

    function Footer() {
      return (
        <footer className="bg-primary text-white py-8">
          <div className="container mx-auto flex justify-between items-center">
            <p>&copy; 2023 3 Halves Labs. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="https://github.com/3halveslabs" className="text-gray-400 hover:text-gray-300"><FaGithub size={20} /></a>
              <a href="https://twitter.com/3halveslabs" className="text-gray-400 hover:text-gray-300"><FaTwitter size={20} /></a>
              <a href="https://discord.gg/3halveslabs" className="text-gray-400 hover:text-gray-300"><FaDiscord size={20} /></a>
            </div>
          </div>
        </footer>
      );
    }

    export default Footer;
