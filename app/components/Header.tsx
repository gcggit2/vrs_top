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
    <header className="w-full bg-white shadow-sm z-50 sticky top-0 border-t-4 border-brand-red">
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
            <Link href="/" className="hover:text-brand-red transition-colors py-2 whitespace-nowrap">TOP</Link>
            
            {/* 代表プロフィール */}
            <div className="relative group">
              <Link href="/profile" className="hover:text-brand-red transition-colors py-2 whitespace-nowrap flex items-center gap-1">
                代表プロフィール
              </Link>
            </div>

            {/* サービス一覧 (Dropdown) */}
            <div className="relative group">
              <Link href="/consulting" className="hover:text-brand-red transition-colors py-2 whitespace-nowrap flex items-center gap-1">
                サービス一覧
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-400 group-hover:text-brand-red">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute left-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="bg-white shadow-xl rounded-lg border border-gray-100 overflow-hidden">
                  <Link href="/consulting" className="block px-4 py-3 hover:bg-red-50 hover:text-brand-red transition-colors border-b border-gray-50 text-sm">
                    AIマーケ顧問
                  </Link>
                  <Link href="/ai-marke-training" className="block px-4 py-3 hover:bg-red-50 hover:text-brand-red transition-colors border-b border-gray-50 text-sm">
                    AIマーケ研修
                  </Link>
                  <Link href="/ai-training" className="block px-4 py-3 hover:bg-red-50 hover:text-brand-red transition-colors border-b border-gray-50 text-sm">
                    AI基礎研修
                  </Link>
                  <Link href="/ai-development" className="block px-4 py-3 hover:bg-red-50 hover:text-brand-red transition-colors text-sm">
                    AIツールの受託開発
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/projects" className="hover:text-brand-red transition-colors py-2 whitespace-nowrap">支援事例</Link>
            <Link href="/reviews/1" className="hover:text-brand-red transition-colors py-2 whitespace-nowrap">お客様の声</Link>
            <a href="https://note.com/gcg_maki" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors py-2 whitespace-nowrap">コラム記事</a>
            <Link href="/company" className="hover:text-brand-red transition-colors py-2 whitespace-nowrap">会社紹介</Link>
            
            <Link 
              href="/contact" 
              className="bg-brand-red text-white px-5 py-2.5 rounded hover:bg-red-700 transition-colors shadow-sm font-bold whitespace-nowrap ml-2"
            >
              お問い合わせ
            </Link>
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
          <Link href="/profile" onClick={closeMenu} className="border-b border-gray-100 pb-2">代表プロフィール</Link>
          
          <div className="flex flex-col gap-4 border-b border-gray-100 pb-4">
            <span className="text-gray-400 text-sm font-normal">サービス一覧</span>
            <Link href="/consulting" onClick={closeMenu} className="pl-4 hover:text-brand-red flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span>
              AIマーケ顧問
            </Link>
            <Link href="/ai-marke-training" onClick={closeMenu} className="pl-4 hover:text-brand-red flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span>
              AIマーケ研修
            </Link>
            <Link href="/ai-training" onClick={closeMenu} className="pl-4 hover:text-brand-red flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span>
              AI基礎研修
            </Link>
            <Link href="/ai-development" onClick={closeMenu} className="pl-4 hover:text-brand-red flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span>
              AIツールの受託開発
            </Link>
          </div>

          <Link href="/projects" onClick={closeMenu} className="border-b border-gray-100 pb-2">支援事例</Link>
          <Link href="/reviews/1" onClick={closeMenu} className="border-b border-gray-100 pb-2">お客様の声</Link>
          <a href="https://note.com/gcg_maki" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="border-b border-gray-100 pb-2">コラム記事</a>
          <Link href="/company" onClick={closeMenu} className="border-b border-gray-100 pb-2">会社紹介</Link>
          
          <Link 
            href="/contact" 
            onClick={closeMenu}
            className="bg-brand-red text-white text-center py-4 rounded hover:bg-red-700 transition-colors shadow-sm mt-4"
          >
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
}
