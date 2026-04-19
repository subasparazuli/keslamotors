import React from 'react';
import { chargingStations } from '@/data/chargingStations';
import { Button } from '@/components/ui/Button';
import { Zap, MapPin, Phone, Activity } from 'lucide-react';

export default function ChargingNetwork() {
  return (
    <div className="w-full min-h-screen bg-surface pt-32 pb-24">
      <div className="container">
        
        <div className="mb-12 border-b border-outline-variant/20 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h1 className="text-5xl font-display font-bold text-white uppercase tracking-tighter mb-4">
              Charging <span className="text-primary">Network</span>
            </h1>
            <p className="text-on-surface-variant font-body text-lg max-w-xl">
              Power up seamlessly across our extensive nationwide network of DC Fast and AC chargers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4 overflow-y-auto max-h-[600px] pr-2 lg:order-1 order-2">
            {chargingStations.map((station) => (
              <div key={station.id} className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/15 hover:bg-surface-container transition-colors group cursor-pointer relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-2 h-full ${station.type === 'DC Fast' ? 'bg-primary' : 'bg-blue-400'}`}></div>
                
                <h3 className="text-xl font-display font-bold text-white tracking-wide mb-1 pr-6">{station.name}</h3>
                <p className="text-sm font-body text-on-surface-variant mb-6 flex items-center gap-2">
                  <MapPin className="w-3 h-3" /> {station.location}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-surface-container-lowest p-3 rounded border border-outline-variant/10 text-center">
                    <span className="block text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Type</span>
                    <span className={`font-display font-bold text-sm ${station.type === 'DC Fast' ? 'text-primary' : 'text-blue-400'}`}>
                      {station.type}
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest p-3 rounded border border-outline-variant/10 text-center">
                    <span className="block text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Output</span>
                    <span className="font-display font-bold text-white text-sm">{station.power} kW</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm font-body text-on-surface-variant border-t border-outline-variant/10 pt-4">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-green-400" /> {station.guns} Guns Available
                  </div>
                  <div className="flex items-center gap-2 text-primary font-display">
                    <Phone className="w-4 h-4" /> {station.phone}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 bg-surface-container rounded-2xl border border-outline-variant/15 h-[600px] flex items-center justify-center relative overflow-hidden lg:order-2 order-1">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-surface-container-highest via-surface-container to-background"></div>
            
            {/* Hex Grid Background for tech feel */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'100\' viewBox=\'0 0 60 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l25.98 15v30L30 60 4.02 45V15z\' fill-opacity=\'0\' stroke=\'%23FFFFFF\' stroke-width=\'1\'/%3E%3C/svg%3E")' }}></div>
            
            <div className="z-10 text-center glass p-8 rounded-2xl max-w-sm">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-display font-bold text-white uppercase mb-2">Live Charger Status Map</h3>
              <p className="text-on-surface-variant text-sm font-body">Map visualization showing real-time availability of EVSE points.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
