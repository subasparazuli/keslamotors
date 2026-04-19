export interface Dealer {
  id: string;
  name: string;
  location: string;
  province: string;
  type: string;
  phone: string;
  email: string;
  coordinates: { lat: number; lng: number };
}

export const dealers: Dealer[] = [
  {
    id: '1',
    name: 'Kesla Auto Pvt. Ltd. — Bouddha (Head Office)',
    location: 'Ward No. 6, Bouddha, Kathmandu',
    province: 'Bagmati',
    type: 'Authorized Showroom, Sales & Service',
    phone: '+977-1-4900000',
    email: 'info@keslaauto.com.np',
    coordinates: { lat: 27.7215, lng: 85.3618 },
  },
];
