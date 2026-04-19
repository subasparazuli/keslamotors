import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, MapPin, Award } from 'lucide-react';
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
          <Image src="/images/models/nano-berry-blue.png" alt="Hero EV Background" fill sizes="100vw" className="object-cover opacity-60 mix-blend-luminosity" priority />
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary/20 via-background/80 to-background/95"></div>
          {/* Faux Car Silhouette */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[300px] bg-linear-to-t from-background via-background/80 to-transparent z-10"></div>
        </div>

        <div className="container relative z-20 text-center px-4">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-widest font-semibold">
            Kesla Auto Pvt. Ltd. · Exclusive Authorized Dealer
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 uppercase leading-none tracking-tighter">
            The Future Is <br className="hidden md:block" />
            <span className="text-primary italic pr-2">Electric</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl font-body max-w-2xl mx-auto mb-10">
            Nepal&rsquo;s exclusive dealer for the <strong className="text-white">Chufeng M31</strong> 1.5-ton light truck pickup.
            Authorized by Xizang Xima Auto Automotive Technology Co., Ltd. — serving Kathmandu and beyond.
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
                Discover the Nano Banana mini EV in 7 stunning solid colors — the perfect urban companion for Kathmandu&rsquo;s streets.
              </p>
            </div>
            <Button variant="tertiary" href="/models" className="group">
              View All Catalog <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredModels.map((model) => (
              <Card key={model.id} hoverable className="p-0 flex flex-col group cursor-pointer bg-surface overflow-hidden" >
                {/* White image panel */}
                <div className="w-full h-48 bg-white relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <Image src={model.image} alt={`${model.name} — ${model.colorName}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain p-4" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider">{model.name}</h3>
                    <p className="text-on-surface-variant text-xs uppercase tracking-widest">{model.colorName}</p>
                    <p className="text-primary font-display font-medium mt-1">{model.price}</p>
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
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Authorization Highlight */}
      <section className="py-24 bg-surface">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden bg-surface-container border border-outline-variant/15 p-8 flex items-end group">
            <Image src="/images/models/tech-bg.jpg" alt="Kesla Auto Showroom" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-primary/10 via-background/60 to-background/95 z-0"></div>
            <div className="relative z-10 glass p-6 rounded-xl w-full">
              <div className="flex items-center gap-3 mb-2">
                <Award className="text-primary w-6 h-6" />
                <h4 className="text-white font-display font-bold">Officially Authorized · April 2026</h4>
              </div>
              <p className="text-on-surface-variant text-sm">Authorized by Xizang Xima Auto Automotive Technology Co., Ltd., International Sales Division.</p>
            </div>
          </div>
          <div>
            <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-widest font-semibold">
              Chufeng M31
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-tighter leading-tight">
              Nepal&rsquo;s Exclusive <br />Light Truck Dealer
            </h2>
            <p className="text-on-surface-variant font-body text-lg mb-8">
              Kesla Auto Pvt. Ltd. is the sole entity in Nepal authorized to market and sell the
              <strong className="text-white"> Chufeng M31 1.5-ton light truck pickup</strong>.
              Built for Nepal&rsquo;s terrain — from the valley floor to highland routes — the M31 delivers rugged reliability
              for businesses and individuals alike.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4">
                <div className="bg-surface-container-high p-3 rounded-xl h-fit border border-outline-variant/20">
                  <Shield className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-white font-display font-bold mb-1">1.5 Ton Payload</h5>
                  <p className="text-on-surface-variant text-sm">Heavy-duty capacity for commercial use.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-surface-container-high p-3 rounded-xl h-fit border border-outline-variant/20">
                  <Zap className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-white font-display font-bold mb-1">Multi-Terrain</h5>
                  <p className="text-on-surface-variant text-sm">Engineered for Nepal&rsquo;s diverse road conditions.</p>
                </div>
              </div>
            </div>

            <Button variant="tertiary" href="/about" className="group">
              About Our Authorization <ArrowRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Statistics Counter */}
      <section className="py-20 border-y border-outline-variant/10 bg-surface-container-low">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-outline-variant/20">
          <div className="text-center px-4">
            <h3 className="text-5xl font-display font-bold text-primary mb-2">7</h3>
            <p className="text-on-surface-variant font-display text-sm uppercase tracking-widest">Color Variants</p>
          </div>
          <div className="text-center px-4">
            <h3 className="text-5xl font-display font-bold text-white mb-2">1.5T</h3>
            <p className="text-on-surface-variant font-display text-sm uppercase tracking-widest">M31 Payload Capacity</p>
          </div>
          <div className="text-center px-4">
            <h3 className="text-5xl font-display font-bold text-white mb-2">2026</h3>
            <p className="text-on-surface-variant font-display text-sm uppercase tracking-widest">Authorization Year</p>
          </div>
          <div className="text-center px-4">
            <h3 className="text-5xl font-display font-bold text-white mb-2">1st</h3>
            <p className="text-on-surface-variant font-display text-sm uppercase tracking-widest">Exclusive Nepal Dealer</p>
          </div>
        </div>
      </section>

    </div>
  );
}
