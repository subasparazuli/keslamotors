import React from 'react';
import { dealers } from '@/data/dealers';
import { Button } from '@/components/ui/Button';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';

export default function FindDealer() {
  return (
    <div className="w-full min-h-screen bg-surface pt-32 pb-24">
      <div className="container">
        
        <div className="mb-12 border-b border-outline-variant/20 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h1 className="text-5xl font-display font-bold text-white uppercase tracking-tighter mb-4">
              Find a <span className="text-primary">Dealer</span>
            </h1>
            <p className="text-on-surface-variant font-body text-lg max-w-xl">
              Locate your nearest authorized VoltDrive dealership for sales, service, and test drives.
            </p>
          </div>
          <div>
            <div className="flex gap-2 relative">
              <input type="text" placeholder="Search by city or province..." className="bg-surface-container-low border border-outline-variant/20 rounded-md px-4 py-3 text-white placeholder-on-surface-variant/50 focus:outline-none focus:border-primary w-[300px]" />
              <Button variant="primary" className="px-6">Search</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Area Placeholder */}
          <div className="lg:col-span-2 bg-surface-container rounded-2xl border border-outline-variant/15 h-[600px] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-surface-container-high via-surface-container to-surface-container-lowest"></div>
            
            {/* Faux Map Grid Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
            
            <div className="z-10 text-center glass p-8 rounded-2xl max-w-sm">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4 animate-bounce" />
              <h3 className="text-xl font-display font-bold text-white uppercase mb-2">Interactive Map</h3>
              <p className="text-on-surface-variant text-sm font-body">Map visualization initialized in production with Live Location Services.</p>
            </div>
          </div>

          {/* List Details */}
          <div className="flex flex-col gap-4 overflow-y-auto max-h-[600px] pr-2">
            {dealers.map((dealer) => (
              <div key={dealer.id} className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/15 hover:border-primary/50 transition-colors group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-display font-bold text-white tracking-wide">{dealer.name}</h3>
                  <span className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded-sm uppercase tracking-widest font-display font-bold border border-primary/20">
                    {dealer.province}
                  </span>
                </div>
                
                <div className="space-y-3 mb-6 text-sm font-body text-on-surface-variant">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{dealer.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Navigation className="w-4 h-4 text-primary" />
                    <span>{dealer.type}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>{dealer.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>{dealer.email}</span>
                  </div>
                </div>

                <Button variant="secondary" className="w-full text-xs">
                  Get Directions
                </Button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
