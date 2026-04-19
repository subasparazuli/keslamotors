import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Settings2 } from 'lucide-react';
import { models } from '@/data/models';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function ModelsCatalog() {
  return (
    <div className="w-full flex flex-col pt-32 pb-24 bg-surface min-h-screen">
      <div className="container">
        
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-outline-variant/20 pb-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter mb-4">
              Vehicle <span className="text-on-surface-variant">Catalog</span>
            </h1>
            <p className="text-on-surface-variant font-body text-lg max-w-xl">
              Explore the pinnacle of electric performance. Select a model below to discover its advanced specs and capabilities.
            </p>
          </div>
          
          <div className="flex gap-4">
            <Button variant="secondary" className="px-6 py-2 text-sm flex gap-2">
              <Settings2 size={18} /> Filters
            </Button>
          </div>
        </div>

        {/* Grid Catalog */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model) => (
            <Card key={model.id} hoverable className="p-6 flex flex-col group cursor-pointer bg-surface-container-low" >
              <div className="mb-4 flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-display font-bold text-white uppercase tracking-wider">{model.name}</h3>
                  <p className="text-on-surface-variant font-display text-sm tracking-widest uppercase">{model.category}</p>
                </div>
                <div className="px-3 py-1 bg-surface-container-high rounded-full border border-outline-variant/30 text-primary font-bold text-sm tracking-widest font-display">
                  {model.price}
                </div>
              </div>
              
              {/* Image Placeholder */}
              <div className="w-full h-56 bg-surface-container-highest rounded-xl mb-6 flex justify-center items-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <Image src={model.image} alt={model.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                <div className="flex flex-col">
                  <span className="text-on-surface-variant text-[10px] uppercase tracking-widest">Range</span>
                  <span className="text-white font-display text-lg">{model.range}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-on-surface-variant text-[10px] uppercase tracking-widest">Acceleration (0-100)</span>
                  <span className="text-white font-display text-lg">{model.zeroToHundred}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-on-surface-variant text-[10px] uppercase tracking-widest">Power</span>
                  <span className="text-white font-display text-lg">{model.power}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-on-surface-variant text-[10px] uppercase tracking-widest">Top Speed</span>
                  <span className="text-white font-display text-lg">{model.topSpeed}</span>
                </div>
              </div>
              
              <Button variant="secondary" href={`/models/${model.slug}`} className="mt-auto w-full group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary">
                Explore Core Specs
              </Button>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}
