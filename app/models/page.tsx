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
              Explore the Nano Banana — Nepal&rsquo;s most playful mini EV in 7 stunning solid colors. Select a variant to see full specs.
            </p>
          </div>

          <div className="flex gap-4">
            <Button variant="secondary" className="px-6 py-2 text-sm flex gap-2">
              <Settings2 size={18} /> Filters
            </Button>
          </div>
        </div>

        {/* Grid Catalog */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {models.map((model) => (
            <Card key={model.id} hoverable className="p-0 flex flex-col group cursor-pointer bg-surface-container-low overflow-hidden">

              {/* Image area — white bg to showcase studio shots */}
              <div className="w-full h-56 bg-white relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <Image
                  src={model.image}
                  alt={`${model.name} — ${model.colorName}`}
                  fill
                  className="object-contain p-4"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                {/* Color swatch row */}
                <div className="flex items-center gap-1 mb-3 flex-wrap">
                  {model.colors.map((c) => (
                    <Link
                      key={c.name}
                      href={`/models/${models.find(m => m.colorName === c.name)?.slug ?? model.slug}`}
                      title={c.name}
                      className={`w-5 h-5 rounded-full border-2 transition-transform hover:scale-110 ${
                        c.name === model.colorName
                          ? 'border-primary scale-110'
                          : 'border-outline-variant/40'
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>

                <div className="mb-3 flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider">{model.name}</h3>
                    <p className="text-on-surface-variant font-display text-xs tracking-widest uppercase">{model.colorName} · {model.category}</p>
                  </div>
                  <div className="px-3 py-1 bg-surface-container-high rounded-full border border-outline-variant/30 text-primary font-bold text-xs tracking-widest font-display whitespace-nowrap">
                    {model.price}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                  <div className="flex flex-col">
                    <span className="text-on-surface-variant text-[10px] uppercase tracking-widest">Range</span>
                    <span className="text-white font-display text-base">{model.range}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-on-surface-variant text-[10px] uppercase tracking-widest">0–100 km/h</span>
                    <span className="text-white font-display text-base">{model.zeroToHundred}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-on-surface-variant text-[10px] uppercase tracking-widest">Power</span>
                    <span className="text-white font-display text-base">{model.power}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-on-surface-variant text-[10px] uppercase tracking-widest">Top Speed</span>
                    <span className="text-white font-display text-base">{model.topSpeed}</span>
                  </div>
                </div>

                <Button
                  variant="secondary"
                  href={`/models/${model.slug}`}
                  className="mt-auto w-full group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary text-sm"
                >
                  View Details <ArrowRight size={14} className="ml-1 inline" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}
