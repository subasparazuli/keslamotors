export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
}

export const blogs: BlogPost[] = [
  {
    id: '1',
    title: 'Kesla Auto is Now Nepal\'s Exclusive Chufeng M31 Dealer',
    slug: 'kesla-auto-exclusive-chufeng-m31-dealer-nepal',
    excerpt:
      'We are proud to announce that Kesla Auto Pvt. Ltd. has been officially authorized by Xizang Xima Auto Automotive Technology Co., Ltd. as the exclusive dealer for the Chufeng M31 1.5-ton light truck pickup in Nepal.',
    content: `Kesla Auto Pvt. Ltd., based at Ward No. 6, Bouddha, Kathmandu, has been granted exclusive authorization to carry out marketing and related sales of the Chufeng M31 1.5-ton light truck pickup within the territory of Nepal.

The authorization was issued by Xizang Xima Auto Automotive Technology Co., Ltd. — a reputable enterprise headquartered in the Lhasa Economic and Technological Development Zone, Xizang Autonomous Region, China. The exclusive authorization is valid from April 1, 2026 to March 31, 2027.

The Chufeng M31 is a 1.5-ton light truck pickup engineered for utility, reliability, and performance — making it ideal for Nepal's diverse terrain, from the Kathmandu Valley to highland and Terai routes.

We invite businesses and individuals to visit our showroom at Bouddha, Kathmandu for a test drive and to learn more about specifications, pricing, and financing options.`,
    date: '2026-04-01',
    author: 'Kesla Auto Team',
    image: '/images/models/nano-cherry-red.png',
  },
  {
    id: '2',
    title: 'Why the Chufeng M31 is Perfect for Nepal\'s Roads',
    slug: 'chufeng-m31-perfect-for-nepal-roads',
    excerpt:
      'The Chufeng M31 1.5-ton light truck pickup is built for tough conditions — exactly what Nepal\'s roads demand. Here\'s why it\'s the right vehicle for Nepali businesses and entrepreneurs.',
    content: `Nepal's roads present unique challenges: steep gradients, narrow mountain passes, unpaved rural tracks, and congested city streets. The Chufeng M31 1.5-ton light truck pickup is designed to handle all of these with confidence.

With a robust 1.5-ton payload capacity, the M31 is ideal for goods transport, construction, agriculture, and commercial delivery. Its compact dimensions make it maneuverable in city traffic while its rugged build ensures durability on rough rural roads.

As the exclusive authorized dealer, Kesla Auto Pvt. Ltd. provides full after-sales support including genuine spare parts, trained mechanics, and warranty service — right from our Bouddha, Kathmandu showroom.

Come visit us today and find out how the Chufeng M31 can power your business.`,
    date: '2026-04-10',
    author: 'Kesla Auto Team',
    image: '/images/models/nano-berry-blue.png',
  },
  {
    id: '3',
    title: 'Meet Xizang Xima Auto: The Manufacturer Behind the Chufeng M31',
    slug: 'xizang-xima-auto-manufacturer-chufeng-m31',
    excerpt:
      'Get to know Xizang Xima Auto Automotive Technology Co., Ltd., the Chinese automotive manufacturer that authorized Kesla Auto as the exclusive Nepali dealer for the Chufeng M31 pickup.',
    content: `Xizang Xima Auto Automotive Technology Co., Ltd. is a formal and reputable enterprise engaged in automotive technology and trade, headquartered at 2nd Floor, No. 248, Standard Factory Building No. 1, Lhasa Comprehensive Bonded Zone, Lhasa Economic and Technological Development Zone, Xizang Autonomous Region, China.

Their flagship product — the Chufeng M31 1.5-ton light truck pickup — represents a high standard of manufacturing quality and engineering robustness. The company's International Sales Division, led by General Manager Huang Xu Ling, actively expands its global footprint by partnering with trusted local dealers.

In Nepal, this trusted partnership is with Kesla Auto Pvt. Ltd., based at Ward No. 6, Bouddha, Kathmandu — the sole entity authorized to carry out exclusive marketing and sales of the Chufeng M31 in Nepal from April 2026.`,
    date: '2026-04-15',
    author: 'Kesla Auto Team',
    image: '/images/models/nano-future-gray.png',
  },
];
