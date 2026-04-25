import React from 'react';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, MapPin, Award, Calendar } from 'lucide-react';

export const metadata = {
  title: 'About Us | Kesla Auto Pvt. Ltd.',
  description:
    'Learn about Kesla Auto Pvt. Ltd. — the exclusive authorized dealer for Chufeng M31 1.5-ton light truck pickup in Nepal, authorized by Xizang Xima Auto Automotive Technology Co., Ltd.',
};

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-surface pt-32 pb-24">
      <div className="container max-w-4xl mx-auto">

        {/* Hero heading */}
        <div className="text-center mb-14">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-widest font-semibold">
            Authorized Dealer · Nepal
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-on-background uppercase tracking-tighter mb-4">
            Our <span className="text-primary">Story</span>
          </h1>
          <p className="text-on-surface-variant font-body text-lg">
            Kesla Auto Pvt. Ltd. — driving Nepal forward.
          </p>
        </div>

        {/* About content */}
        <div className="bg-surface-container-low p-8 md:p-12 rounded-2xl border border-outline-variant/15 flex flex-col gap-6 text-on-surface-variant font-body leading-relaxed text-lg mb-12">
          <p>
            <strong className="text-on-background">Kesla Auto Pvt. Ltd.</strong> is the exclusive authorized dealer for the
            <strong className="text-primary"> Chufeng M31 1.5-ton light truck pickup</strong> within the territory of Nepal.
            Our authorization has been granted by <strong className="text-on-background">Xizang Xima Auto Automotive Technology Co., Ltd.</strong>
            — a formal and reputable enterprise engaged in automotive technology and trade, headquartered in the Lhasa Economic and
            Technological Development Zone, Xizang Autonomous Region, China.
          </p>
          <p>
            Based at <strong className="text-on-background">Gathhaghar, Bhaktapur, Nepal</strong>, we are committed to bringing
            high-quality, reliable utility vehicles to Nepali businesses and individuals. The Chufeng M31 is engineered for Nepal's
            diverse terrain — from the bustling Kathmandu Valley to the rugged hills and plains of the Terai.
          </p>
          <p>
            Our mission is to offer exceptional after-sales support, genuine parts availability, and a transparent buying experience
            — backed by the trust of an internationally recognized manufacturer.
          </p>
        </div>

        {/* Authorization highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 flex gap-4">
            <Award className="text-primary w-8 h-8 mt-1 shrink-0" />
            <div>
              <h3 className="text-on-background font-display font-bold text-lg mb-1 uppercase tracking-wide">Exclusive Authorization</h3>
              <p className="text-on-surface-variant text-sm">
                Sole authorized dealer for Chufeng M31 marketing &amp; sales in Nepal, issued by Xizang Xima Auto Automotive Technology Co., Ltd.
              </p>
            </div>
          </div>
          <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 flex gap-4">
            <Calendar className="text-primary w-8 h-8 mt-1 shrink-0" />
            <div>
              <h3 className="text-on-background font-display font-bold text-lg mb-1 uppercase tracking-wide">Authorization Period</h3>
              <p className="text-on-surface-variant text-sm">
                Valid from <strong className="text-on-background">April 1, 2026</strong> to <strong className="text-on-background">March 31, 2027</strong>.
                Signed by General Manager Huang Xu Ling, International Sales Division.
              </p>
            </div>
          </div>
          <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 flex gap-4">
            <MapPin className="text-primary w-8 h-8 mt-1 shrink-0" />
            <div>
              <h3 className="text-on-background font-display font-bold text-lg mb-1 uppercase tracking-wide">Our Location</h3>
              <p className="text-on-surface-variant text-sm">
                Gathhaghar, Bhaktapur, Nepal
              </p>
            </div>
          </div>
          <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 flex gap-4">
            <CheckCircle2 className="text-primary w-8 h-8 mt-1 shrink-0" />
            <div>
              <h3 className="text-on-background font-display font-bold text-lg mb-1 uppercase tracking-wide">Manufacturer</h3>
              <p className="text-on-surface-variant text-sm">
                Xizang Xima Auto Automotive Technology Co., Ltd.<br />
                2nd Floor, No. 248, Standard Factory Building No. 1, Lhasa Comprehensive Bonded Zone, China.
              </p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 mb-16 text-center">
          <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10">
            <h3 className="text-4xl font-display font-bold text-primary mb-2">1st</h3>
            <p className="text-sm font-display uppercase tracking-widest text-on-background">Exclusive Chufeng Dealer in Nepal</p>
          </div>
          <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10">
            <h3 className="text-4xl font-display font-bold text-primary mb-2">1.5T</h3>
            <p className="text-sm font-display uppercase tracking-widest text-on-background">Chufeng M31 Payload Capacity</p>
          </div>
          <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10">
            <h3 className="text-4xl font-display font-bold text-primary mb-2">100%</h3>
            <p className="text-sm font-display uppercase tracking-widest text-on-background">Genuine Parts &amp; Service</p>
          </div>
        </div>

        <div className="flex justify-center">
          <Button variant="primary" href="/contact">Contact Us</Button>
        </div>

      </div>
    </div>
  );
}
