import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} The Game Shelf. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="#"
            className="hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>
          <a
            href="mailto:support@gameshelf.com"
            className="hover:text-gray-400"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;