import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest pt-20 pb-10 mt-auto border-t border-outline-variant/10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <span className="text-3xl font-display font-bold tracking-tighter text-white">
              Kesla<span className="text-primary">Auto</span>
            </span>
          </Link>
          <p className="text-on-surface-variant font-body leading-relaxed mb-2">
            Authorized exclusive dealer for Chufeng M31 in Nepal.
          </p>
          <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6">
            Authorization valid: Apr 1, 2026 – Mar 31, 2027
          </p>
          <p className="text-on-surface-variant/60 font-body text-xs">
            Authorized by Xizang Xima Auto Automotive Technology Co., Ltd.
          </p>
        </div>

        <div>
          <h4 className="text-white font-display font-bold uppercase tracking-wider mb-6 text-sm">Vehicles</h4>
          <ul className="space-y-4 text-on-surface-variant">
            <li><Link href="/models/nano-cherry-red" className="hover:text-primary transition-colors">Nano Banana — Cherry Red</Link></li>
            <li><Link href="/models/nano-ruby-black" className="hover:text-primary transition-colors">Nano Banana — Ruby Black</Link></li>
            <li><Link href="/models/nano-berry-blue" className="hover:text-primary transition-colors">Nano Banana — Berry Blue</Link></li>
            <li><Link href="/models" className="hover:text-primary transition-colors">All Color Variants</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-bold uppercase tracking-wider mb-6 text-sm">Quick Links</h4>
          <ul className="space-y-4 text-on-surface-variant">
            <li><Link href="/charging-network" className="hover:text-primary transition-colors">Charging Network</Link></li>
            <li><Link href="/find-dealer" className="hover:text-primary transition-colors">Find a Dealer</Link></li>
            <li><Link href="/test-drive" className="hover:text-primary transition-colors">Book Test Drive</Link></li>
            <li><Link href="/price-list" className="hover:text-primary transition-colors">Price List</Link></li>
            <li><Link href="/exchange" className="hover:text-primary transition-colors">Vehicle Exchange</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            <li><Link href="/blog" className="hover:text-primary transition-colors">News &amp; Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-bold uppercase tracking-wider mb-6 text-sm">Newsletter</h4>
          <p className="text-on-surface-variant mb-4 font-body text-sm">
            Subscribe for the latest Kesla Auto updates &amp; offers.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-surface-container px-4 py-3 rounded-md w-full border-b border-outline-variant/30 text-white focus:outline-none focus:border-primary transition-colors font-body"
            />
            <button className="bg-primary text-on-primary px-4 py-3 rounded-md font-display font-bold uppercase tracking-wider hover:bg-primary-container transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 border-t border-outline-variant/20 pt-8 flex flex-col md:flex-row justify-between items-center text-on-surface-variant text-sm font-body">
        <p>&copy; {new Date().getFullYear()} Kesla Auto Pvt. Ltd. Ward No. 6, Bouddha, Kathmandu, Nepal. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0 font-display uppercase tracking-widest text-xs">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
