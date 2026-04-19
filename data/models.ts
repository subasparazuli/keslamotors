export interface EVModel {
  id: string;
  name: string;
  slug: string;
  price: string;
  range: string;
  power: string;
  battery: string;
  zeroToHundred: string;
  topSpeed: string;
  seats: number;
  category: string;
  colors: { name: string; hex: string }[];
  features: string[];
  image: string;
}

export const models: EVModel[] = [
  {
    id: '1',
    name: 'Volt X',
    slug: 'volt-x',
    price: 'NPR 5,599,000',
    range: '420km',
    power: '150kW',
    battery: '60.48kWh Blade Battery',
    zeroToHundred: '7.3s',
    topSpeed: '160km/h',
    seats: 5,
    category: 'SUV',
    colors: [
      { name: 'Surf Blue', hex: '#4472C4' },
      { name: 'Ski White', hex: '#FFFFFF' },
      { name: 'Boulder Grey', hex: '#404040' },
    ],
    features: ['Panoramic Sunroof', '12.8" Rotating Screen', 'Adaptive Cruise Control', 'V2L Technology'],
    image: '/images/models/volt-x.jpg',
  },
  {
    id: '2',
    name: 'Drive Pro',
    slug: 'drive-pro',
    price: 'NPR 10,500,000',
    range: '570km',
    power: '390kW',
    battery: '82.5kWh Blade Battery',
    zeroToHundred: '3.8s',
    topSpeed: '180km/h',
    seats: 5,
    category: 'Sedan',
    colors: [
      { name: 'Arctic Blue', hex: '#6392C6' },
      { name: 'Shadow Black', hex: '#111111' },
    ],
    features: ['AWD Performance', 'Heads-up Display', 'Premium Audio', 'Intelligent Torque Control'],
    image: '/images/models/drive-pro.jpg',
  },
  {
    id: '3',
    name: 'Volt Hatch',
    slug: 'volt-hatch',
    price: 'NPR 3,999,000',
    range: '340km',
    power: '70kW',
    battery: '44.9kWh Blade Battery',
    zeroToHundred: '10.9s',
    topSpeed: '150km/h',
    seats: 5,
    category: 'Hatchback',
    colors: [
      { name: 'Coral Pink', hex: '#FF7F50' },
      { name: 'Urban Grey', hex: '#585858' },
    ],
    features: ['Agile Handling', 'Voice Assistant', '360° Camera', 'Smart Entry'],
    image: '/images/models/volt-hatch.jpg',
  },
];
