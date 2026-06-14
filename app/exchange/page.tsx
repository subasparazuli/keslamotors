"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { availableModels } from '@/data/models';

export default function Exchange() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-full min-h-screen bg-surface pt-32 pb-24">
      <div className="container max-w-3xl mx-auto">
        <h1 className="text-5xl font-display font-bold text-on-background uppercase tracking-tighter mb-4 text-center">
          Vehicle <span className="text-primary">Exchange</span>
        </h1>
        <p className="text-center text-on-surface-variant font-body mb-12">
          Trade in your combustion engine vehicle for a new intelligent EV. Provide your details BELOW for a rapid valuation.
        </p>

        <div className="bg-surface-container p-8 md:p-12 rounded-2xl border border-outline-variant/15">
          {!submitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-on-surface-variant uppercase tracking-widest font-display">Current Make</label>
                  <input type="text" placeholder="e.g. Toyota" required className="bg-surface-container-lowest border border-outline-variant/20 py-3 px-4 rounded text-on-background focus:outline-none focus:border-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-on-surface-variant uppercase tracking-widest font-display">Current Model</label>
                  <input type="text" placeholder="e.g. Corolla" required className="bg-surface-container-lowest border border-outline-variant/20 py-3 px-4 rounded text-on-background focus:outline-none focus:border-primary" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-on-surface-variant uppercase tracking-widest font-display">Manufacturing Year</label>
                  <input type="number" placeholder="2018" required className="bg-surface-container-lowest border border-outline-variant/20 py-3 px-4 rounded text-on-background focus:outline-none focus:border-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-on-surface-variant uppercase tracking-widest font-display">Mileage (KM)</label>
                  <input type="number" placeholder="45000" className="bg-surface-container-lowest border border-outline-variant/20 py-3 px-4 rounded text-on-background focus:outline-none focus:border-primary" />
                </div>
              </div>

              <div className="border-t border-outline-variant/10 my-4"></div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-on-surface-variant uppercase tracking-widest font-display">Desired EV to Exchange</label>
                <select className="bg-surface-container-lowest border border-outline-variant/20 py-3 px-4 rounded text-on-background focus:outline-none focus:border-primary">
                  {availableModels.map((model) => (
                    <option key={model.id} value={model.slug}>{model.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <label className="text-xs text-on-surface-variant uppercase tracking-widest font-display">Your Contact Number</label>
                <input type="tel" placeholder="+977-XXXXXXXXXX" required className="bg-surface-container-lowest border border-outline-variant/20 py-3 px-4 rounded text-on-background focus:outline-none focus:border-primary" />
              </div>

              <Button variant="primary" type="submit" className="mt-4 w-full">Request Valuation</Button>
            </form>
          ) : (
            <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
              <h3 className="text-3xl font-display font-bold text-primary mb-4">Request Submitted!</h3>
              <p className="text-on-surface-variant">Our valuation team is analyzing your vehicle's specifications. We will contact you shortly with an estimated trade-in value!</p>
              <Button variant="secondary" onClick={() => setSubmitted(false)} className="mt-8">Submit Another</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
