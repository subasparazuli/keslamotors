import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, MapPin, Battery } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { models } from '@/data/models';

export default function Home() {
  const featuredModels = models.slice(0, 3);

  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Abstract Background pattern / gradient instead of an image, or use a placeholder */}
        <div className="absolute inset-0 z-0 bg-surface">
          <Image src="/images/models/volt-hatch.jpg" alt="Hero EV Background" fill sizes="100vw" className="object-cover opacity-40 mix-blend-luminosity" priority />
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary/20 via-background/80 to-background/95"></div>
          {/* Faux Car Silhouette */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[300px] bg-linear-to-t from-background via-background/80 to-transparent z-10"></div>
        </div>

        <div className="container relative z-20 text-center px-4">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-widest font-semibold">
            Welcome to VoltDrive Nepal
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 uppercase leading-none tracking-tighter">
            The Future Is <br className="hidden md:block" />
            <span className="text-primary italic pr-2">Electric</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl font-body max-w-2xl mx-auto mb-10">
            Experience uncompromised performance, cutting-edge technology, and zero emissions with our premium line of electric vehicles.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="primary" href="/models">
              Explore Models
            </Button>
            <Button variant="secondary" href="/test-drive">
              Book Test Drive
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Featured Models */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 uppercase tracking-tighter">
                Featured <span className="text-on-surface-variant">Models</span>
              </h2>
              <p className="text-on-surface-variant text-lg font-body max-w-xl">
                Discover our flagship vehicles engineered for maximum range, safety, and exhilarating dynamics.
              </p>
            </div>
            <Button variant="tertiary" href="/models" className="group">
              View All Catalog <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredModels.map((model) => (
              <Card key={model.id} hoverable className="p-6 flex flex-col group cursor-pointer bg-surface" >
                <div className="mb-4">
                  <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider">{model.name}</h3>
                  <p className="text-primary font-display font-medium">{model.price}</p>
                </div>
                {/* Image Placeholder */}
                <div className="w-full h-48 bg-surface-container-high rounded-xl mb-6 flex justify-center items-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <Image src={model.image} alt={model.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                  <div className="flex flex-col">
                    <span className="text-on-surface-variant text-xs uppercase tracking-widest">Range</span>
                    <span className="text-white font-display">{model.range}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-on-surface-variant text-xs uppercase tracking-widest">Acceleration</span>
                    <span className="text-white font-display">{model.zeroToHundred}</span>
                  </div>
                </div>
                <Button variant="secondary" href={`/models/${model.slug}`} className="mt-auto w-full group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary">
                  View Details
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Technology Highlight */}
      <section className="py-24 bg-surface">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden bg-surface-container border border-outline-variant/15 p-8 flex items-end group">
            <Image src="/images/models/tech-bg.jpg" alt="Technology" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-primary/10 via-background/60 to-background/95 z-0"></div>
            <div className="relative z-10 glass p-6 rounded-xl w-full">
              <div className="flex items-center gap-3 mb-2">
                <Battery className="text-primary w-6 h-6" />
                <h4 className="text-white font-display font-bold">Cell-to-Pack Tech</h4>
              </div>
              <p className="text-on-surface-variant text-sm">Ultra-safe, high-density architecture providing unprecedented thermal stability.</p>
            </div>
          </div>
          <div>
            <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-widest font-semibold">
              Innovation
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-tighter leading-tight">
              Powered by <br />Blade Battery
            </h2>
            <p className="text-on-surface-variant font-body text-lg mb-8">
              Our vehicles are built upon the revolutionary Blade Battery architecture. Passing the rigorous nail penetration test without emitting fire or smoke, it redefines the safety standards for the entire EV industry.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4">
                <div className="bg-surface-container-high p-3 rounded-xl h-fit border border-outline-variant/20">
                  <Shield className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-white font-display font-bold mb-1">Max Safety</h5>
                  <p className="text-on-surface-variant text-sm">No fire during nail penetration test.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-surface-container-high p-3 rounded-xl h-fit border border-outline-variant/20">
                  <Zap className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-white font-display font-bold mb-1">Long Range</h5>
                  <p className="text-on-surface-variant text-sm">Optimized space utilization.</p>
                </div>
              </div>
            </div>

            <Button variant="tertiary" href="/technology/blade-battery" className="group">
              Explore Technology <ArrowRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Statistics Counter */}
      <section className="py-20 border-y border-outline-variant/10 bg-surface-container-low">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-outline-variant/20">
          <div className="text-center px-4">
            <h3 className="text-5xl font-display font-bold text-primary mb-2">3</h3>
            <p className="text-on-surface-variant font-display text-sm uppercase tracking-widest">Premium Models</p>
          </div>
          <div className="text-center px-4">
            <h3 className="text-5xl font-display font-bold text-white mb-2">15+</h3>
            <p className="text-on-surface-variant font-display text-sm uppercase tracking-widest">Charging Stations</p>
          </div>
          <div className="text-center px-4">
            <h3 className="text-5xl font-display font-bold text-white mb-2">10+</h3>
            <p className="text-on-surface-variant font-display text-sm uppercase tracking-widest">Service Centers</p>
          </div>
          <div className="text-center px-4">
            <h3 className="text-5xl font-display font-bold text-white mb-2">8yr</h3>
            <p className="text-on-surface-variant font-display text-sm uppercase tracking-widest">Battery Warranty</p>
          </div>
        </div>
      </section>

    </div>
  );
}
