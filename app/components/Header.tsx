'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full bg-white shadow-sm z-50 sticky top-0 border-t-4 border-brand-blue">
      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3 relative z-50">
        <div className="flex flex-col xl:flex-row justify-between items-center">
          {/* Logo & Mobile Menu Button Wrapper */}
          <div className="flex justify-between w-full xl:w-auto items-center">
            <Link href="/" className="flex flex-col py-2" onClick={closeMenu}>
              <div className="relative h-6 md:h-8 w-auto">
                <Image 
                  src="/logo.png" 
                  alt="GENERAL CONSULTING GROUP" 
                  width={160}
                  height={60}
                  className="h-full w-auto object-contain object-left"
                />
              </div>
            </Link>
            
            {/* Mobile Menu Button (Hamburger) */}
            <button 
              className="xl:hidden p-2 text-gray-600 focus:outline-none" 
              onClick={toggleMenu}
              aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex gap-5 items-center font-bold text-sm text-gray-700 mt-4 xl:mt-0">
            <Link href="/" className="hover:text-brand-blue transition-colors py-2 whitespace-nowrap">TOP</Link>
            <Link href="/company-profile" className="hover:text-brand-blue transition-colors py-2 whitespace-nowrap">会社概要</Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out xl:hidden pt-24 pb-10 px-6 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '0' }}
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button (visible inside menu) */}
        <button
          type="button"
          className="fixed top-4 right-4 p-2 text-gray-600 xl:hidden z-50"
          onClick={closeMenu}
          aria-label="メニューを閉じる"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav className="flex flex-col gap-6 text-lg font-bold text-gray-700">
          <Link href="/" onClick={closeMenu} className="border-b border-gray-100 pb-2">TOP</Link>
          <Link href="/company-profile" onClick={closeMenu} className="border-b border-gray-100 pb-2">会社概要</Link>
        </nav>
      </div>
    </header>
  );
}
