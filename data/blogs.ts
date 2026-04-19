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
    title: 'The Future of Electric Mobility in Nepal',
    slug: 'future-electric-mobility-nepal',
    excerpt: 'How VoltDrive is revolutionizing the way Nepalese traverse the treacherous yet beautiful terrains with zero emissions.',
    content: 'Full article content here...',
    date: '2026-04-10',
    author: 'VoltDrive Editor',
    image: '/images/models/hero.jpg',
  },
  {
    id: '2',
    title: 'Understanding Blade Battery Technology',
    slug: 'blade-battery-technology',
    excerpt: 'Dive deep into the ultra-safe and highly efficient cell-to-pack technology powering our next-generation vehicles.',
    content: 'Full article content here...',
    date: '2026-03-25',
    author: 'Tech Team',
    image: '/images/models/tech-bg.jpg',
  },
];
