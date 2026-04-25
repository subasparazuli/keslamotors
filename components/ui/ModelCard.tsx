import React from 'react';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import { type EVModel } from '@/data/models';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export function ModelCard({ model }: { model: EVModel }) {
  const isComingSoon = model.comingSoon;

  return (
    <Card
      hoverable={!isComingSoon}
      className={`p-0 flex flex-col group cursor-pointer overflow-hidden relative ${
        isComingSoon
          ? 'bg-surface-container-low/50 border-outline-variant/10'
          : 'bg-surface-container-low'
      }`}
    >
      {/* Coming Soon Overlay */}
      {isComingSoon && (
        <div className="absolute inset-0 z-30 bg-background/40 backdrop-blur-[2px] flex flex-col items-center justify-center pointer-events-none">
          <div className="bg-primary/10 border border-primary/30 rounded-full px-5 py-2 flex items-center gap-2">
            <Clock size={16} className="text-primary" />
            <span className="text-primary font-display font-bold text-sm tracking-widest uppercase">
              Coming Soon
            </span>
          </div>
        </div>
      )}

      {/* Image area */}
      <div className={`w-full h-56 bg-white relative overflow-hidden transition-transform duration-500 ${
        isComingSoon ? '' : 'group-hover:scale-105'
      }`}>
        <Image
          src={model.image}
          alt={model.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-contain p-4 ${isComingSoon ? 'opacity-50 grayscale-30' : ''}`}
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Color swatches */}
        <div className="flex items-center gap-1 mb-3 flex-wrap">
          {model.colors.map((c) => (
            <div
              key={c.name}
              title={c.name}
              className="w-5 h-5 rounded-full border-2 border-outline-variant/40"
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>

        <div className="mb-3 flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-display font-bold text-on-background uppercase tracking-wider">{model.name}</h3>
            <p className="text-on-surface-variant font-display text-xs tracking-widest uppercase">
              {model.colorName ? `${model.colorName} · ` : ''}{model.category}
            </p>
          </div>
          <div className="px-3 py-1 bg-surface-container-high rounded-full border border-outline-variant/30 text-primary font-bold text-xs tracking-widest font-display whitespace-nowrap">
            {model.price}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
          <div className="flex flex-col">
            <span className="text-on-surface-variant text-[10px] uppercase tracking-widest">Range</span>
            <span className="text-on-background font-display text-base">{model.range}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-on-surface-variant text-[10px] uppercase tracking-widest">
              {model.category === 'Pickup' ? 'Payload' : '0–100 km/h'}
            </span>
            <span className="text-on-background font-display text-base">
              {model.category === 'Pickup' ? model.payload ?? 'N/A' : model.zeroToHundred}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-on-surface-variant text-[10px] uppercase tracking-widest">Power</span>
            <span className="text-on-background font-display text-base">{model.power}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-on-surface-variant text-[10px] uppercase tracking-widest">
              {model.category === 'Microvan' ? 'Seats' : 'Top Speed'}
            </span>
            <span className="text-on-background font-display text-base">
              {model.category === 'Microvan' ? `${model.seats} seats` : model.topSpeed}
            </span>
          </div>
        </div>

        {isComingSoon ? (
          <button
            disabled
            className="mt-auto w-full py-2.5 rounded-xl border border-outline-variant/20 text-on-surface-variant/50 font-display text-sm tracking-wider cursor-not-allowed"
          >
            Coming Soon
          </button>
        ) : (
          <Button
            variant="secondary"
            href={`/models/${model.slug}`}
            className="mt-auto w-full group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary text-sm"
          >
            View Details <ArrowRight size={14} className="ml-1 inline" />
          </Button>
        )}
      </div>
    </Card>
  );
}
