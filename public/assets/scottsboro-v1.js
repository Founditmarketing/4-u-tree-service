export const scottsboro = {
  path: '/tree-service-scottsboro-al',
  title: 'Tree Service in Scottsboro',
  img: '/treework.jpg',
  secondaryImg: '/treework2.jpg',
  desc: '4-U Tree Service LLC is based in Fort Payne. Our licensed and insured crew comes to Scottsboro and the rest of Jackson County for tree work, storm relief and land clearing.',
  estimate: 'Call 256-996-4740 or use the form below for a free estimate. Enter the address or ZIP code for the property, choose a service and tell us what needs attention. If several trees are involved, tell us which one you want us to look at first.',
};

const services = [
  {
    title: 'Tree removal and trimming',
    path: '/services/tree-work',
    text: 'If a limb hangs over your house, tell us whether you want the limb trimmed or the whole tree assessed for removal. We prune trees, identify hazardous trees and take trees down. For a removal, the crew can use rigging, a bucket truck or a crane. If the branches also need to be chipped, include that in your request.',
  },
  {
    title: 'Stump grinding',
    path: '/services/tree-work',
    text: 'You can ask for stump grinding with a tree removal or request an estimate for a stump that is already in the yard. Tell us where the stump sits and whether there are others you want ground. If the tree is still standing, mention that you want the stump included when we look at the tree.',
  },
  {
    title: 'Trees in tight spaces',
    path: '/services/hard-access-trees',
    text: 'A tree behind the house can be out of reach of a truck. Our climbers use ropes and rigging to lower sections in tight backyards and to remove trees over structures. When you ask for an estimate, describe what is beneath the branches and where a truck can get in. Mention any power lines near the tree.',
  },
  {
    title: '24/7 storm relief',
    path: '/services/storm-relief',
    text: 'Call 256-996-4740 for storm relief, day or night. If a tree is on the house or across the driveway, give us the property address and say what is blocked. The crew removes fallen trees from structures and clears driveways and roads. Storm work also includes tarping damaged structures and help with documentation for insurance.',
  },
  {
    title: 'Land clearing',
    path: '/services/land-clearing',
    text: 'For an overgrown lot, tell us which part you need cleared and what you want to keep. You may only need the brush taken off a fence line, or you may need a larger area cleared for construction. Our land clearing work includes underbrush removal, site preparation and hauling away the debris.',
  },
];

export function serviceDetails(jsx, motion) {
  return jsx.jsx('div', {
    className: 'space-y-12',
    children: services.map(({ title, path, text }) => jsx.jsxs(motion.section, {
      initial: { opacity: 0, x: -15 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true },
      transition: { duration: 0.5 },
      children: [
        jsx.jsx('h2', {
          className: 'text-3xl font-black text-white italic uppercase tracking-tighter mb-6',
          children: jsx.jsx('a', { href: path, className: 'hover:text-brand-red transition-colors', children: title }),
        }),
        jsx.jsx('p', { className: 'text-gray-300 font-medium leading-relaxed', children: linkPhone(jsx, text) }),
      ],
    }, title)),
  });
}

export function linkPhone(jsx, text) {
  const phone = '256-996-4740';
  if (!text.includes(phone)) return text;
  const [before, after] = text.split(phone);
  return [before, jsx.jsx('a', { href: 'tel:' + phone, className: 'text-white hover:text-brand-red', children: phone }, 'phone'), after];
}

export function areaLink(jsx, label = 'Tree service in Scottsboro') {
  return jsx.jsx('a', {
    href: scottsboro.path,
    className: 'text-white hover:text-brand-red transition-colors',
    children: label,
  });
}

export function areasServed(jsx) {
  return jsx.jsxs('p', {
    className: 'mt-1 text-sm text-gray-400',
    children: ['Areas we serve: Fort Payne and ', areaLink(jsx, 'Scottsboro'), ' | DeKalb, Jackson and Cherokee counties.'],
  });
}
