import React from 'react';
import { Button } from '@/components/ui/Button';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="w-full min-h-screen bg-surface pt-32 pb-24">
      <div className="container max-w-5xl mx-auto">
        <h1 className="text-5xl font-display font-bold text-white uppercase tracking-tighter mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h1>
        <p className="text-center text-on-surface-variant font-body mb-12">
          Have questions about our EVs? Reach out to our dedicated support team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/15 flex gap-4">
               <Phone className="text-primary w-6 h-6 mt-1" />
               <div>
                 <h4 className="font-display font-bold text-white uppercase mb-1">Phone</h4>
                 <p className="text-on-surface-variant font-body">+977-1-4400000</p>
               </div>
            </div>
            <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/15 flex gap-4">
               <Mail className="text-primary w-6 h-6 mt-1" />
               <div>
                 <h4 className="font-display font-bold text-white uppercase mb-1">Email</h4>
                 <p className="text-on-surface-variant font-body">info@voltdrive.com.np</p>
               </div>
            </div>
            <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/15 flex gap-4">
               <MapPin className="text-primary w-6 h-6 mt-1" />
               <div>
                 <h4 className="font-display font-bold text-white uppercase mb-1">Headquarters</h4>
                 <p className="text-on-surface-variant font-body">VoltDrive Global Plaza<br/>Naxal, Kathmandu, Nepal</p>
               </div>
            </div>
          </div>

          <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/15">
            <h3 className="font-display font-bold text-white text-2xl mb-6">Send a Message</h3>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Full Name" className="bg-surface-container-lowest border border-outline-variant/20 py-3 px-4 rounded text-white focus:outline-none focus:border-primary" />
              <input type="email" placeholder="Email Address" className="bg-surface-container-lowest border border-outline-variant/20 py-3 px-4 rounded text-white focus:outline-none focus:border-primary" />
              <input type="text" placeholder="Subject" className="bg-surface-container-lowest border border-outline-variant/20 py-3 px-4 rounded text-white focus:outline-none focus:border-primary" />
              <textarea placeholder="Your Message..." rows={5} className="bg-surface-container-lowest border border-outline-variant/20 py-3 px-4 rounded text-white focus:outline-none focus:border-primary"></textarea>
              <Button variant="primary" className="mt-4">Submit Inquiry</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
