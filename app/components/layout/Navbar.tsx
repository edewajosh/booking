'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<number | null>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSubmenu = (index: number) => 
    setSubmenuOpen((prev) => (prev === index ? null : index));

  return (
    <nav className="bg-transparent fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          Booking
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {['Home', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => toggleSubmenu(index)}
                className="flex items-center gap-1 text-white hover:text-gray-300"
              >
                {item} {index === 1 || index === 2 ? <ChevronDown size={16} /> : ''}
              </button>
              {/* Submenu */}
              <AnimatePresence>
                {(submenuOpen === index && (index === 1 || index === 2)) && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 bg-gray-900 shadow-md rounded-lg p-2 w-40"
                  >
                    <Link href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Option 1</Link>
                    <Link href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Option 2</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Login Button */}
        <Link href="/login" className="hidden md:block px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-300">
          Login
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 shadow-md"
          >
            {['Home', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
              <div key={index} className="border-b border-gray-700">
                <button
                  onClick={() => toggleSubmenu(index)}
                  className="flex justify-between items-center w-full p-4 text-white"
                >
                  {item} {index === 1 || index === 2 ? <ChevronDown size={16} /> : ''}
                </button>
                <AnimatePresence>
                  {(submenuOpen === index && (index === 1 || index === 2)) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-6 pb-2"
                    >
                      <Link href="#" className="block py-2 text-white">Option 1</Link>
                      <Link href="#" className="block py-2 text-white">Option 2</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Link href="/login" className="block text-center p-4 bg-white text-gray-900">
              Login
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
