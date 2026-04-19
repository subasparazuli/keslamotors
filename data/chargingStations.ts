export interface ChargingStation {
  id: string;
  name: string;
  location: string;
  type: string; // 'DC Fast' or 'AC Slow'
  power: number; // in kW
  guns: number;
  phone: string;
  coordinates: { lat: number; lng: number };
}

export const chargingStations: ChargingStation[] = [
  {
    id: '1',
    name: 'VoltDrive Fast Charge - Naxal',
    location: 'Naxal, Kathmandu',
    type: 'DC Fast',
    power: 120,
    guns: 2,
    phone: '+977-1-4400010',
    coordinates: { lat: 27.712, lng: 85.324 },
  },
  {
    id: '2',
    name: 'VoltDrive Charger - Kurintar',
    location: 'Kurintar Highway',
    type: 'DC Fast',
    power: 60,
    guns: 1,
    phone: '+977-1-4400011',
    coordinates: { lat: 27.818, lng: 84.629 },
  },
  {
    id: '3',
    name: 'VoltDrive AC - Lakeside',
    location: 'Lakeside, Pokhara',
    type: 'AC',
    power: 7,
    guns: 4,
    phone: '+977-61-530005',
    coordinates: { lat: 28.205, lng: 83.958 },
  },
];
