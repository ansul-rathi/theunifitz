// src/components/Navigation/Navbar.js
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavLink = ({ href, children }) => (
  <a href={href} className="text-gray-300 hover:text-orange-500 transition-colors">
    {children}
  </a>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black/90 fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-orange-500 text-3xl font-bold">Unifitz</h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#programs">Programs</NavLink>
            <NavLink href="#schedule">Schedule</NavLink>
            <NavLink href="#trainers">Trainers</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <NavLink href="#programs">Programs</NavLink>
            <NavLink href="#schedule">Schedule</NavLink>
            <NavLink href="#trainers">Trainers</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;