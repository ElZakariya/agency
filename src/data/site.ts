export const site = {
  name: 'DevStudio',
  legalName: 'DevStudio Maroc',
  tagline: 'Agence de développement web, apps & mobile au Maroc',
  description:
    'DevStudio crée des sites web, applications web et applications mobiles pour les entreprises à Dakhla, El Kelaa des Sraghna, Casablanca et partout au Maroc.',
  url: 'https://devstudio.ma',
  locale: 'fr-MA',
  email: 'elhaouszakariya@gmail.com',
  phone: '+212641519004',
  phoneDisplay: '06 41 51 90 04',
  whatsapp: '212641519004',
  instagram: 'https://www.instagram.com/devstudio.ma/',
  ogImage: '/images/og-default.png',
  address: {
    streetAddress: 'Avenue Mohammed V',
    addressLocality: 'Dakhla',
    addressRegion: 'Dakhla-Oued Ed-Dahab',
    postalCode: '73000',
    addressCountry: 'MA',
  },
} as const;

export type ServiceIcon = 'monitor' | 'layout' | 'smartphone' | 'cart';

export const services = [
  {
    slug: 'sites-web',
    title: 'Sites web',
    short: 'Sites vitrines et institutionnels rapides, SEO-ready.',
    description:
      'Création de sites web professionnels, responsives et optimisés pour Google — idéals pour les entreprises marocaines qui veulent une présence digitale solide.',
    href: '/services/sites-web',
    keywords: 'création site web Maroc, site vitrine',
    icon: 'monitor' as ServiceIcon,
    imageAlt:
      'Création de site web professionnel au Maroc — maquette de site vitrine responsive par DevStudio',
    ogImage: '/images/service-sites-web.png',
  },
  {
    slug: 'applications-web',
    title: 'Applications web',
    short: 'Outils métier, dashboards et plateformes sur mesure.',
    description:
      'Développement d’applications web sur mesure pour automatiser vos processus, gérer vos clients et accélérer votre activité.',
    href: '/services/applications-web',
    keywords: 'application web Maroc, développement web',
    icon: 'layout' as ServiceIcon,
    imageAlt:
      'Développement d’application web sur mesure au Maroc — tableau de bord métier DevStudio',
    ogImage: '/images/service-applications-web.png',
  },
  {
    slug: 'applications-mobiles',
    title: 'Applications mobiles',
    short: 'Apps iOS & Android adaptées à vos utilisateurs.',
    description:
      'Conception et développement d’applications mobiles natives ou cross-platform pour toucher vos clients partout.',
    href: '/services/applications-mobiles',
    keywords: 'application mobile Maroc',
    icon: 'smartphone' as ServiceIcon,
    imageAlt:
      'Création d’application mobile iOS et Android au Maroc — écrans app DevStudio',
    ogImage: '/images/service-applications-mobiles.png',
  },
  {
    slug: 'e-commerce',
    title: 'E-commerce',
    short: 'Boutiques en ligne convertissantes et sécurisées.',
    description:
      'Création de boutiques e-commerce performantes avec paiement local, catalogue clair et expérience d’achat fluide.',
    href: '/services/e-commerce',
    keywords: 'création site e-commerce Maroc',
    icon: 'cart' as ServiceIcon,
    imageAlt:
      'Création de boutique e-commerce au Maroc — interface catalogue et panier DevStudio',
    ogImage: '/images/service-e-commerce.png',
  },
] as const;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const cities = [
  {
    slug: 'dakhla',
    name: 'Dakhla',
    priority: 1,
    title: 'Agence web & développeur à Dakhla',
    metaDescription:
      'DevStudio, agence web à Dakhla : création de sites, applications web et mobiles. Développeur web local pour entreprises et entrepreneurs à Dakhla.',
    intro:
      'Votre partenaire digital à Dakhla pour créer un site web, une application ou une boutique en ligne qui attire des clients locaux.',
    region: 'Dakhla-Oued Ed-Dahab',
    focusKeywords: [
      'création site web Dakhla',
      'agence web Dakhla',
      'développeur web Dakhla',
    ],
  },
  {
    slug: 'el-kelaa-des-sraghna',
    name: 'El Kelaa des Sraghna',
    priority: 1,
    title: 'Création de sites web à El Kelaa des Sraghna',
    metaDescription:
      'DevStudio accompagne les entreprises d’El Kelaa des Sraghna : création de sites web, apps et e-commerce. Développeur web local, devis rapide.',
    intro:
      'Faites rayonner votre activité à El Kelaa des Sraghna avec un site web moderne, rapide et visible sur Google.',
    region: 'Marrakech-Safi',
    focusKeywords: [
      'création site web El Kelaa des Sraghna',
      'développeur web Kelaa Sraghna',
      'agence web El Kelaa',
    ],
  },
  {
    slug: 'casablanca',
    name: 'Casablanca',
    priority: 2,
    title: 'Développement web & mobile à Casablanca',
    metaDescription:
      'DevStudio développe sites web, applications web et mobiles à Casablanca. Agence digitale pour startups et PME du Grand Casablanca.',
    intro:
      'À Casablanca, la concurrence digitale est forte : nous construisons des produits web et mobile conçus pour convertir.',
    region: 'Casablanca-Settat',
    focusKeywords: [
      'création site web Casablanca',
      'développement application Casablanca',
      'agence web Casablanca',
    ],
  },
  {
    slug: 'marrakech',
    name: 'Marrakech',
    priority: 3,
    title: 'Agence web à Marrakech',
    metaDescription:
      'Création de sites web et applications à Marrakech avec DevStudio. Sites vitrines, e-commerce et apps pour entreprises touristiques et locales.',
    intro:
      'Accompagnement digital pour les entreprises de Marrakech : sites, réservations, e-commerce et applications.',
    region: 'Marrakech-Safi',
    focusKeywords: ['agence web Marrakech', 'création site web Marrakech'],
  },
  {
    slug: 'agadir',
    name: 'Agadir',
    priority: 3,
    title: 'Création de sites web à Agadir',
    metaDescription:
      'DevStudio crée des sites web et applications pour les entreprises d’Agadir. Visibilité locale, design moderne, performance SEO.',
    intro:
      'Développez votre présence en ligne à Agadir avec un site ou une app pensés pour vos clients locaux et touristiques.',
    region: 'Souss-Massa',
    focusKeywords: ['création site web Agadir', 'agence web Agadir'],
  },
  {
    slug: 'rabat',
    name: 'Rabat',
    priority: 3,
    title: 'Développeur web à Rabat',
    metaDescription:
      'DevStudio, développement web et mobile à Rabat : sites institutionnels, applications métier et solutions digitales pour entreprises.',
    intro:
      'Solutions digitales pour administrations, PME et startups de Rabat — claires, sécurisées et performantes.',
    region: 'Rabat-Salé-Kénitra',
    focusKeywords: ['développeur web Rabat', 'création site web Rabat'],
  },
] as const;

export function whatsappUrl(message?: string) {
  const text = encodeURIComponent(
    message ?? 'Bonjour DevStudio, je souhaite un devis pour mon projet.',
  );
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}
