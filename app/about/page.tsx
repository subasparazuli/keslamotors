import React from 'react';
import { Button } from '@/components/ui/Button';

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-surface pt-32 pb-24">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-5xl font-display font-bold text-white uppercase tracking-tighter mb-8 text-center">
          Our <span className="text-primary">Story</span>
        </h1>
        <div className="bg-surface-container-low p-8 md:p-12 rounded-2xl border border-outline-variant/15 flex flex-col gap-6 text-on-surface-variant font-body leading-relaxed text-lg mb-12">
          <p>
            Welcome to VoltDrive Nepal, the premier importer and distributor of the world's most advanced electric vehicles. Our mission is to propel Nepal towards a sustainable, zero-emission future by providing vehicles that refuse to compromise on performance, luxury, and technology.
          </p>
          <p>
            Established in 2026, we recognized that the treacherous yet breathtaking terrains of the Himalayas demand nothing less than the highest standard of engineering. By bringing vehicles equipped with revolutionary Blade Battery technology and ePlatform 3.0, we are setting a new standard for mobility in South Asia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-center">
          <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10">
            <h3 className="text-4xl font-display font-bold text-primary mb-2">1st</h3>
            <p className="text-sm font-display uppercase tracking-widest text-white">To implement Blade Battery Tech locally</p>
          </div>
          <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10">
            <h3 className="text-4xl font-display font-bold text-primary mb-2">Zero</h3>
            <p className="text-sm font-display uppercase tracking-widest text-white">Carbon Footprint Mission</p>
          </div>
          <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10">
            <h3 className="text-4xl font-display font-bold text-primary mb-2">100%</h3>
            <p className="text-sm font-display uppercase tracking-widest text-white">Nationwide Charging Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
