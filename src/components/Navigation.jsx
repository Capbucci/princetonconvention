'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { openBookingEngine } from '@/redux/slices/bookingSlice';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Venues', href: '/venues' },
    { name: 'Events', href: '/events' },
    { name: 'Dining', href: '/dining' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Offers', href: '/offers' },
    // { name: 'Packages', href: '/packages' },
    // { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center space-x-2 relative w-40 h-8">
            <Image src="/images/logo.png" alt="Princeton Convention Centre" fill />
            </Link>

            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-200 hover:text-primary-600 ${scrolled ? 'text-gray-700' : 'text-white'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Book Now -> open panel */}
            {/* <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => dispatch(openBookingEngine())}
                className="bg-primary-600 px-5 py-2 rounded-md text-white"
              >
                Book Now
              </button>
            </div> */}

            {/* Mobile menu button */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2" aria-label="Toggle menu">
              {isOpen ? (
                <FaTimes className={`text-2xl ${scrolled ? 'text-gray-700' : 'text-white'}`} />
              ) : (
                <FaBars className={`text-2xl ${scrolled ? 'text-gray-700' : 'text-white'}`} />
              )}
            </button>
          </div>

          {/* Mobile drawer */}
          {isOpen && (
            <div className="lg:hidden bg-white shadow-lg rounded-lg mx-4 mb-4">
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block font-medium text-gray-700 hover:text-primary-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <a href="tel:+919949736693" className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors">
                    <FaPhone className="text-sm" />
                    <span className="font-medium">+91 99497 36693</span>
                  </a>
                  <a
                    href="https://wa.me/+919949736693"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center justify-center space-x-2 w-full"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span>WhatsApp</span>
                  </a>

                  {/* <button
                    onClick={() => { setIsOpen(false); dispatch(openBookingEngine()); }}
                    className="w-full bg-primary-600 px-5 py-2 rounded-md text-white"
                  >
                    Book Now
                  </button> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>


    </header>
  );
}
