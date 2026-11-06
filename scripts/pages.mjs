// Every public route with its own title and description (written from that page's content).
// public/sitemap.xml lists the same routes.
export const SITE = 'https://www.4utreeservicellc.com';
const svc = (name, blurb) => ({
  title: `${name} in Fort Payne, AL | 4-U Tree Service LLC`,
  description: `${blurb} 4-U Tree Service LLC is licensed and insured in Fort Payne, AL, serving DeKalb, Jackson and Cherokee counties. Call 256-996-4740.`,
});
export const pages = {
  '/': {
    title: '4-U Tree Service LLC | Professional Tree Care in Northeast Alabama',
    description: 'Licensed & insured tree service in Fort Payne, AL. Expert tree removal, trimming, emergency services & stump grinding throughout DeKalb, Jackson & Cherokee counties. Call 256-996-4740.',
  },
  '/services/tree-work': svc('Tree Removal & Trimming', 'Expert removal and precision trimming for trees of any size, from hazardous tree identification to stump grinding.'),
  '/services/land-clearing': svc('Land Clearing', 'Large scale vegetation management and site preparation.'),
  '/services/bush-hogging': svc('Bush Hogging', 'Brush and pasture maintenance for large properties, fields and right-of-ways.'),
  '/services/pressure-washing': svc('Pressure Washing', 'Surface restoration for driveways, siding and decks: mold, mildew and grime removed.'),
  '/services/heavy-equipment': svc('Heavy Equipment Services', 'Professional-grade machinery and operators for grading, hauling and other property tasks.'),
  '/services/hard-access-trees': svc('Hard-Access Tree Removal', 'Specialized climbing and extraction for trees over structures, power lines or tight backyards.'),
  '/services/storm-relief': svc('24/7 Storm Relief', 'Emergency response for post-storm recovery: trees removed from structures and access paths cleared.'),
  '/services/hardscaping': svc('Hardscaping', 'Custom driveways, patios, retaining walls and structural land features.'),
  '/gallery': {
    title: 'Project Gallery | 4-U Tree Service LLC, Fort Payne, AL',
    description: 'Photos of tree removals, land clearing and property work by 4-U Tree Service LLC across Northeast Alabama.',
  },
  '/contact': {
    title: 'Contact 4-U Tree Service LLC | Free Estimate in Fort Payne, AL',
    description: 'Request a free estimate from 4-U Tree Service LLC. Serving a 60-mile radius of Fort Payne, AL, including DeKalb, Jackson and Cherokee counties. Call 256-996-4740.',
  },
};
