"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <nav className={`container mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between rounded-full transition-all duration-300 ${
        scrolled ? 'glass py-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)]' : 'py-2'
      }`}>
        <Link href="/" className="flex items-center gap-2 z-50">
          <span className="text-2xl font-display font-bold tracking-tighter text-white">
            Kesla<span className="text-primary">Auto</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-display text-sm uppercase tracking-widest font-semibold">
          <Link href="/models" className="text-white hover:text-primary transition-colors">Models</Link>
          <Link href="/charging-network" className="text-white hover:text-primary transition-colors">Charging</Link>
          <Link href="/find-dealer" className="text-white hover:text-primary transition-colors">Dealers</Link>
          <Link href="/exchange" className="text-white hover:text-primary transition-colors">Exchange</Link>
          <Link href="/blog" className="text-white hover:text-primary transition-colors">Blog</Link>
          <Link href="/about" className="text-white hover:text-primary transition-colors">About</Link>
        </div>

        <div className="hidden md:block z-50">
          <Button variant="secondary" href="/test-drive" className="text-xs px-6 py-2">
            Book Test Drive
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Content */}
        {mobileMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 z-40">
            <Link href="/models" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display uppercase tracking-widest hover:text-primary">Models</Link>
            <Link href="/charging-network" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display uppercase tracking-widest hover:text-primary">Charging Network</Link>
            <Link href="/find-dealer" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display uppercase tracking-widest hover:text-primary">Find a Dealer</Link>
            <Link href="/exchange" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display uppercase tracking-widest hover:text-primary">Exchange</Link>
            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display uppercase tracking-widest hover:text-primary">Blog</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display uppercase tracking-widest hover:text-primary">About</Link>
            <Button variant="primary" href="/test-drive" className="mt-4">
              Book Test Drive
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
