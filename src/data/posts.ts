export interface Comment {
  id: string;
  author: string;
  body: string;
  timestamp: string;
}

export interface Post {
  id: string;
  category: 'announcement' | 'culture' | 'leadership' | 'recognition';
  title: string;
  body: string;
  author: { name: string; role: string };
  timestamp: string;
  likes: number;
  comments: Comment[];
  featured?: boolean;
}

export const posts: Post[] = [
  {
    id: '1',
    category: 'announcement',
    title: 'Q3 Results: We Smashed It',
    body: 'This quarter we exceeded every target across all regions. Revenue is up 18% year-on-year and guest satisfaction scores are the highest we have ever recorded. None of this happens without every single one of you. Thank you for showing up, bringing your best, and living our values every day.',
    author: { name: 'Sipho Nkosi', role: 'CEO' },
    timestamp: '2h ago',
    likes: 142,
    featured: true,
    comments: [
      { id: 'c1a', author: 'Aisha Osei', body: 'So proud of this team!', timestamp: '1h ago' },
      { id: 'c1b', author: 'Marco Ferreira', body: 'Incredible result. Well deserved.', timestamp: '45m ago' },
      { id: 'c1c', author: 'Priya Mehta', body: 'This made my morning!', timestamp: '30m ago' },
    ],
  },
  {
    id: '2',
    category: 'leadership',
    title: 'Welcome to Our New Head of People',
    body: 'We are thrilled to announce that Naledi Dlamini is joining us as Head of People, effective 1 April. Naledi brings 12 years of HR leadership experience across hospitality and retail. She will be visiting restaurants across all regions in her first month — look out for an introduction from her soon.',
    author: { name: 'Sipho Nkosi', role: 'CEO' },
    timestamp: '5h ago',
    likes: 89,
    comments: [
      { id: 'c2a', author: 'Tom Lawson', body: 'Excited to meet her!', timestamp: '4h ago' },
      { id: 'c2b', author: 'Yuki Tanaka', body: 'Welcome Naledi!', timestamp: '3h ago' },
    ],
  },
  {
    id: '3',
    category: 'culture',
    title: 'Pride Month: How We Are Celebrating',
    body: 'This June we are going all in on Pride. Each restaurant will have a celebration day with rainbow decorations, playlist takeovers, and a donation jar for our charity partner. Staff who want to share their stories can submit them to the Nossa Casa zine — details in the link below.',
    author: { name: 'Culture Team', role: 'People & Culture' },
    timestamp: '1d ago',
    likes: 211,
    comments: [
      { id: 'c3a', author: 'Jordan Ellis', body: 'Love this so much', timestamp: '22h ago' },
      { id: 'c3b', author: 'Sam Rivera', body: 'Already planning our restaurant day!', timestamp: '18h ago' },
      { id: 'c3c', author: 'Chris Lee', body: 'The zine idea is brilliant', timestamp: '12h ago' },
    ],
  },
  {
    id: '4',
    category: 'recognition',
    title: 'Flamer of the Month: May 2026',
    body: 'Huge congratulations to Thandi Mokoena at our Cape Town V&A restaurant for being voted Flamer of the Month by her team. Thandi has gone above and beyond every shift this month, covering last-minute gaps and always bringing positive energy. Buy her a peri-peri chicken if you see her!',
    author: { name: 'Recognition Committee', role: 'People & Culture' },
    timestamp: '1d ago',
    likes: 176,
    comments: [
      { id: 'c4a', author: 'Manager V&A', body: 'She absolutely deserves this!', timestamp: '20h ago' },
      { id: 'c4b', author: 'Thandi M', body: 'Oh wow, I am speechless. Thank you all!', timestamp: '18h ago' },
    ],
  },
  {
    id: '5',
    category: 'announcement',
    title: 'New App: Order & Pay Is Live',
    body: "Guests at all UK restaurants can now order and pay from their phones using the updated Nando's app. Early results show a 14% increase in table spend and significantly faster table turns. If you get questions from guests, the quick-start guide is pinned in the ops folder.",
    author: { name: 'Digital Team', role: 'Product & Technology' },
    timestamp: '2d ago',
    likes: 94,
    comments: [
      { id: 'c5a', author: 'Ops Manager North', body: 'Guests love it so far.', timestamp: '1d ago' },
      { id: 'c5b', author: 'Dev Lead', body: 'Great team effort to ship this!', timestamp: '1d ago' },
    ],
  },
  {
    id: '6',
    category: 'culture',
    title: 'Sustainability Update: Zero Waste Progress',
    body: 'We are 78% of the way to our zero-waste-to-landfill target. The composting pilots in Joburg and London are delivering well ahead of projections. We will share the full annual sustainability report at the end of June — but wanted to celebrate this milestone with you now.',
    author: { name: 'Sustainability Team', role: 'Operations' },
    timestamp: '3d ago',
    likes: 130,
    comments: [
      { id: 'c6a', author: 'Ana Costa', body: 'Really proud of this progress!', timestamp: '2d ago' },
      { id: 'c6b', author: 'Kwame Asante', body: 'The composting pilot has been smooth from day one.', timestamp: '2d ago' },
    ],
  },
  {
    id: '7',
    category: 'leadership',
    title: 'Message from Our Chair: Our Next Chapter',
    body: 'As we close out our strongest quarter in five years, I want to take a moment to reflect. When we talk about our values — courage, integrity, family, diversity, and pride in what we do — these are not words on a wall. They are the choices you make every day. I am proud of every one of you.',
    author: { name: 'Board Chair', role: 'Board of Directors' },
    timestamp: '4d ago',
    likes: 203,
    comments: [
      { id: 'c7a', author: 'Store Manager JHB', body: 'Needed to read this today.', timestamp: '3d ago' },
      { id: 'c7b', author: 'Senior Chef', body: 'This genuinely means a lot.', timestamp: '3d ago' },
      { id: 'c7c', author: 'HR Business Partner', body: 'Sharing this with my whole team.', timestamp: '2d ago' },
    ],
  },
  {
    id: '8',
    category: 'recognition',
    title: 'Long-Service Awards: 10-Year Flamers',
    body: "This month we celebrate ten flamers who have each given a decade of service to Nando's. From front-of-house to kitchen to head office, these colleagues have been part of our story through thick and thin. We will be hosting a celebratory dinner in each region — invitations coming soon.",
    author: { name: 'People Team', role: 'People & Culture' },
    timestamp: '5d ago',
    likes: 318,
    comments: [
      { id: 'c8a', author: 'Long-Service Flamer', body: '10 years and I would do it all again!', timestamp: '4d ago' },
      { id: 'c8b', author: 'Restaurant Manager', body: 'So proud of my team members in this list.', timestamp: '4d ago' },
    ],
  },
];
