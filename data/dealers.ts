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
    name: 'VoltDrive Kathmandu Heights',
    location: 'Naxal, Kathmandu',
    province: 'Bagmati',
    type: '3S Center (Showroom, Sales, Service)',
    phone: '+977-1-4400001',
    email: 'kathamandu@voltdrive.com.np',
    coordinates: { lat: 27.712, lng: 85.324 },
  },
  {
    id: '2',
    name: 'VoltDrive Pokhara',
    location: 'Srijana Chowk, Pokhara',
    province: 'Gandaki',
    type: 'Showroom & Sales',
    phone: '+977-61-530002',
    email: 'pokhara@voltdrive.com.np',
    coordinates: { lat: 28.209, lng: 83.985 },
  },
  {
    id: '3',
    name: 'VoltDrive Biratnagar',
    location: 'Traffic Chowk, Biratnagar',
    province: 'Koshi',
    type: '3S Center',
    phone: '+977-21-520003',
    email: 'biratnagar@voltdrive.com.np',
    coordinates: { lat: 26.452, lng: 87.271 },
  },
];
