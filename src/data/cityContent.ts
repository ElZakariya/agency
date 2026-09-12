export type CityContent = {
  slug: string;
  sections: { heading: string; paragraphs: string[] }[];
  faqs: { question: string; answer: string }[];
};

export const cityContent: Record<string, CityContent> = {
  dakhla: {
    slug: 'dakhla',
    sections: [
      {
        heading: 'Pourquoi un site web à Dakhla aujourd’hui ?',
        paragraphs: [
          'Dakhla connaît une dynamique économique forte : tourisme, pêche, commerce, immobilier et projets d’infrastructures. Dans ce contexte, les clients cherchent de plus en plus leurs prestataires sur Google avant de passer un coup de fil. Un site web professionnel à Dakhla n’est plus un luxe — c’est souvent le premier contact avec votre entreprise.',
          'DevStudio accompagne les entrepreneurs et PME de Dakhla dans la création de sites web, d’applications web et d’applications mobiles. Notre objectif : vous rendre visible sur les requêtes locales comme « création site web Dakhla », « agence web Dakhla » ou « développeur web Dakhla », tout en livrant un produit clair et utile.',
        ],
      },
      {
        heading: 'Nos services de développement à Dakhla',
        paragraphs: [
          'Nous concevons des sites vitrines pour présenter votre activité (hôtel, restaurant, agence, cabinet, commerce), des boutiques e-commerce pour vendre en ligne, et des applications sur mesure pour automatiser votre gestion. Chaque projet est pensé mobile-first : vos clients à Dakhla naviguent majoritairement sur smartphone.',
          'Au-delà du design, nous soignons le référencement local : structure de pages, balises, vitesse de chargement, sitemap, et contenu qui répond vraiment aux questions de votre audience dakhlawie. Vous pouvez aussi nous suivre sur Instagram @devstudio.ma pour découvrir nos services en images.',
        ],
      },
      {
        heading: 'Une agence web proche de votre réalité locale',
        paragraphs: [
          'Beaucoup d’agences nationales publient une page « Dakhla » générique. Nous privilégions une approche concrète : comprendre votre secteur à Dakhla, vos clients, vos contraintes de budget et de délai. Que vous soyez dans le tourisme, le commerce ou les services B2B, le site doit parler le langage de votre marché.',
          'Nous travaillons aussi en lien avec El Kelaa des Sraghna et Casablanca, ce qui nous permet de mutualiser les bonnes pratiques SEO tout en restant ancrés dans le tissu local.',
        ],
      },
      {
        heading: 'Processus simple, devis clair',
        paragraphs: [
          '1) Brief WhatsApp ou appel — 2) Proposition et devis — 3) Design & développement — 4) Mise en ligne & formation. Vous gardez la main sur vos contenus ; nous restons disponibles pour la maintenance et les évolutions.',
          'Prêt à lancer votre présence digitale à Dakhla ? Contactez DevStudio pour un devis gratuit et sans engagement.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Combien coûte un site web à Dakhla ?',
        answer:
          'Le prix dépend du nombre de pages, du design et des fonctionnalités (formulaire, réservation, e-commerce…). Après un brief, nous vous envoyons un devis transparent adapté aux budgets locaux.',
      },
      {
        question: 'Pouvez-vous m’aider à apparaître en premier sur Google à Dakhla ?',
        answer:
          'Nous mettons en place les bases SEO techniques et un contenu local fort. Le ranking dépend aussi de la concurrence et de la régularité (Google Business Profile, avis, backlinks). À Dakhla, une page bien construite a d’excellentes chances de bien se positionner.',
      },
      {
        question: 'Travaillez-vous uniquement à Dakhla ?',
        answer:
          'Dakhla et El Kelaa des Sraghna sont nos priorités locales ; nous servons aussi Casablanca et d’autres villes du Maroc.',
      },
    ],
  },
  'el-kelaa-des-sraghna': {
    slug: 'el-kelaa-des-sraghna',
    sections: [
      {
        heading: 'Création de site web à El Kelaa des Sraghna',
        paragraphs: [
          'El Kelaa des Sraghna (Kalaat Sraghna) est un bassin économique agricole et commercial où de nombreuses entreprises n’ont pas encore de présence web solide. C’est une opportunité : apparaître sur Google pour « création site web El Kelaa des Sraghna » ou « développeur web Kelaa Sraghna » permet de capter des clients avant vos concurrents.',
          'DevStudio propose aux commerces, agriculteurs transformateurs, artisans et services locaux d’El Kelaa des sites web modernes, rapides et optimisés pour le référencement local.',
        ],
      },
      {
        heading: 'Ce que nous construisons pour les entreprises locales',
        paragraphs: [
          'Site vitrine pour présenter vos produits et votre zone d’intervention, page contact avec WhatsApp, éventuellement catalogue ou boutique en ligne pour vendre hors de la ville. Nous pouvons aussi développer une petite application web (gestion de commandes, stocks, clients).',
          'Le design reste simple et professionnel : electric blue & blanc DevStudio, lisible sur mobile, avec des appels à l’action clairs. L’objectif n’est pas « faire joli » seulement — c’est générer des appels et des messages.',
        ],
      },
      {
        heading: 'SEO local : une chance réelle à El Kelaa',
        paragraphs: [
          'Contrairement à Casablanca, la concurrence SEO à El Kelaa des Sraghna est encore limitée. Une page dédiée, un Google Business Profile cohérent, et un contenu utile (horaires, services, zone couverte) suffisent souvent à se placer en tête des résultats locaux.',
          'Nous rédigeons vos pages en français, avec les formulations que vos clients tapent vraiment, et nous reliions votre site à vos réseaux (Instagram @devstudio.ma pour découvrir nos réalisations).',
        ],
      },
      {
        heading: 'Démarrer avec DevStudio',
        paragraphs: [
          'Envoyez-nous un message WhatsApp avec votre activité et votre ville. Nous vous répondons avec une proposition adaptée à El Kelaa des Sraghna — budget réaliste, délais clairs, livrable concret.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Faut-il un site si mon commerce est surtout local à El Kelaa ?',
        answer:
          'Oui : beaucoup de clients comparent en ligne avant de se déplacer. Un site + WhatsApp rassure et vous différencie des concurrents sans présence digitale.',
      },
      {
        question: 'Proposez-vous aussi l’e-commerce à El Kelaa des Sraghna ?',
        answer:
          'Oui. Nous pouvons créer une boutique en ligne pour vendre à El Kelaa et dans les villes voisines, avec catalogue et options de livraison adaptées.',
      },
      {
        question: 'Intervenez-vous sur place ?',
        answer:
          'Nous pouvons échanger à distance (WhatsApp, visioconférence) et organiser des points physiques selon besoin. L’essentiel du projet se mène efficacement en ligne.',
      },
    ],
  },
  casablanca: {
    slug: 'casablanca',
    sections: [
      {
        heading: 'Développement web & mobile à Casablanca',
        paragraphs: [
          'Casablanca concentre une part importante de la demande digitale au Maroc : startups, PME, groupes et commerces. La concurrence y est forte sur des mots-clés comme « création site web Casablanca », « agence web Casablanca » ou « développement application Casablanca ». DevStudio se positionne sur la qualité d’exécution, la performance technique et des offres produits claires (sites, apps web, apps mobiles, e-commerce).',
          'Nous aidons les entreprises casablancaises à lancer des sites qui convertissent et des applications qui tiennent la charge — avec une attention particulière au SEO, aux Core Web Vitals et aux parcours mobile. L’objectif n’est pas seulement d’être en ligne : c’est d’être trouvé, compris, et contacté.',
        ],
      },
      {
        heading: 'Une offre adaptée au marché casaoui',
        paragraphs: [
          'Landing pages et sites corporate, e-commerce, MVP d’application, refonte de sites lents… Nous priorisons les livrables mesurables : vitesse, clarté du message, formulaires, WhatsApp et tracking. Pour les projets plus ambitieux, nous structurons le backlog et livrons par itérations.',
          'Notre ancrage à Dakhla et El Kelaa des Sraghna nous différencie aussi : nous savons construire des stratégies multi-villes pour les marques qui veulent rayonner hors Grand Casablanca — tout en restant compétitifs sur le marché casaoui.',
        ],
      },
      {
        heading: 'Comment se démarquer à Casablanca',
        paragraphs: [
          'Sur un marché saturé, le contenu générique ne suffit pas. Nous travaillons des pages services précises, des preuves (process, livrables, FAQ), et une technique irréprochable. L’objectif réaliste : viser la première page Google sur des requêtes pertinentes (service + intention), puis consolider avec du contenu et des signaux locaux (Google Business Profile, avis, cohérence NAP).',
          'Exemples de projets fréquents à Casablanca : site vitrine B2B, boutique e-commerce, portail client, application métier interne, app mobile de fidélité ou de prise de rendez-vous.',
        ],
      },
      {
        heading: 'Processus et devis',
        paragraphs: [
          '1) Brief WhatsApp — 2) Proposition & devis — 3) Design & développement — 4) Mise en ligne, formation et suivi. Vous gardez la main sur vos contenus ; nous restons disponibles pour la maintenance.',
          'Prêt à lancer ou refondre votre présence digitale à Casablanca ? Contactez DevStudio pour un devis clair, sans engagement.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Êtes-vous basés à Casablanca ?',
        answer:
          'Nous servons Casablanca à distance et sur rendez-vous. Nos priorités locales sont Dakhla et El Kelaa des Sraghna, avec une couverture active sur Casa et le Grand Casablanca.',
      },
      {
        question: 'Faites-vous des applications mobiles à Casablanca ?',
        answer:
          'Oui — applications iOS/Android pour startups et PME, avec publication sur les stores et back-office associé si besoin.',
      },
      {
        question: 'Combien de temps pour un site web à Casablanca ?',
        answer:
          'Un site vitrine bien cadré se livre souvent en quelques semaines. Une application ou un e-commerce dépend du périmètre : nous indiquons un planning dès le devis.',
      },
    ],
  },
  marrakech: {
    slug: 'marrakech',
    sections: [
      {
        heading: 'Agence web à Marrakech : tourisme, commerce et services',
        paragraphs: [
          'Marrakech concentre riads, restaurants, artisans, agences de voyage, immobilier et services B2B. Les clients cherchent déjà en ligne : « riad Marrakech », « restaurant Medina », « agence web Marrakech », « création site web Marrakech ». Un site lent ou peu clair fait perdre des réservations et des demandes de devis.',
          'DevStudio crée des sites web, boutiques e-commerce et applications adaptés à cette économie : mobile-first, photos soignées, appels à l’action (WhatsApp, réservation, formulaire) et bases SEO locales pour apparaître devant vos concurrents.',
        ],
      },
      {
        heading: 'Ce que nous construisons pour Marrakech',
        paragraphs: [
          'Sites vitrines pour riads et restaurants (galeries, chambres, menus, contact), pages de réservation ou demande de devis, catalogues produits pour artisans, e-commerce pour vendre hors de la médina, et petites applications (fidélité, planning, back-office).',
          'Nous pouvons aussi préparer une structure multilingue (FR / EN / éventuellement AR) selon votre audience touristique, tout en gardant des performances élevées — crucial pour le SEO et le taux de conversion.',
        ],
      },
      {
        heading: 'SEO local à Marrakech : comment viser la première page',
        paragraphs: [
          'La concurrence est plus forte qu’à Dakhla ou El Kelaa, mais des requêtes longue traîne restent accessibles : service + quartier, type d’établissement, intention (« devis », « réservation », « livraison »). Nous structurons vos pages autour de ces intentions, avec FAQ, maillage interne et données techniques propres (vitesse, balises, sitemap).',
          'Ensuite, alignez Google Business Profile, avis clients et réseaux (Instagram) sur les mêmes informations. Le site reste le socle ; les signaux locaux accélèrent le ranking.',
        ],
      },
      {
        heading: 'Démarrer avec DevStudio à Marrakech',
        paragraphs: [
          'Envoyez un brief WhatsApp : activité, ville/quartier, langues, objectif (réservations, ventes, leads). Nous répondons avec une proposition réaliste — budget, délais, livrables. Vous pouvez aussi consulter nos pages Services et le hub Villes au Maroc.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Pouvez-vous faire un site pour un riad ou un restaurant à Marrakech ?',
        answer:
          'Oui. Nous concevons des sites orientés réservation et contact, optimisés mobile et SEO, avec galeries et CTA WhatsApp.',
      },
      {
        question: 'Faites-vous des sites multilingues à Marrakech ?',
        answer:
          'Oui. Nous pouvons structurer FR/EN (et d’autres langues selon besoin) tout en préservant performance et SEO.',
      },
      {
        question: 'Intervenez-vous uniquement à Marrakech ?',
        answer:
          'Non. Marrakech fait partie de notre couverture Maroc ; nos priorités locales restent Dakhla et El Kelaa des Sraghna, avec livraison à distance partout.',
      },
    ],
  },
  agadir: {
    slug: 'agadir',
    sections: [
      {
        heading: 'Création de sites web à Agadir',
        paragraphs: [
          'Agadir mêle tourisme balnéaire, hôtellerie, agriculture, pêche et commerce. Les visiteurs et clients locaux comparent de plus en plus en ligne avant de réserver ou d’acheter. Un site web professionnel à Agadir aide à toucher ces deux audiences : résidents et touristes.',
          'DevStudio propose création de sites vitrines, e-commerce et applications pour les entreprises d’Agadir et du Souss-Massa — avec design clair, performance mobile et référencement local sur des requêtes comme « création site web Agadir » ou « agence web Agadir ».',
        ],
      },
      {
        heading: 'Projets typiques à Agadir',
        paragraphs: [
          'Hôtels et maisons d’hôtes (vitrine + demandes de devis), restaurants et activités (menus, galeries, WhatsApp), commerces et producteurs (catalogue ou boutique), PME de services (pages SEO + formulaire), et outils métier simples (planning, stocks, clients).',
          'Nous construisons d’abord un socle solide : architecture de pages, vitesse, balises, sitemap, CTA. Ensuite on enrichit selon vos priorités business (réservation, paiement, multilingue).',
        ],
      },
      {
        heading: 'Référencement local à Agadir',
        paragraphs: [
          'Agadir est moins saturé que Casablanca sur de nombreuses requêtes locales, ce qui laisse une fenêtre pour viser la première page Google avec un contenu utile et une fiche Google Business Profile cohérente. Nous rédigeons des pages qui répondent aux vraies questions de vos clients (tarifs, zone, services, contact).',
          'Le maillage interne (services ↔ page Agadir ↔ articles de blog) et des preuves concrètes (process, FAQ) renforcent aussi la compréhension de votre activité par Google et les moteurs d’IA (GEO).',
        ],
      },
      {
        heading: 'Lancer votre projet à Agadir',
        paragraphs: [
          'Contactez DevStudio sur WhatsApp avec une courte description de votre activité à Agadir. Nous revenons avec un devis indicatif et les prochaines étapes — sans jargon inutile. Si vous opérez aussi à Marrakech, nous pouvons aligner une stratégie multi-villes.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Travaillez-vous avec des hôtels à Agadir ?',
        answer:
          'Oui — sites vitrines, galeries, formulaires de demande et intégrations selon vos outils de réservation.',
      },
      {
        question: 'Proposez-vous l’e-commerce à Agadir ?',
        answer:
          'Oui. Boutiques en ligne pour vendre localement et au Maroc, avec catalogue, panier et options de paiement adaptées.',
      },
      {
        question: 'Combien coûte un site à Agadir ?',
        answer:
          'Cela dépend du nombre de pages et des fonctionnalités. Après brief, nous envoyons un devis transparent — souvent plus accessible qu’une grande agence nationale pour un site vitrine bien fait.',
      },
    ],
  },
  rabat: {
    slug: 'rabat',
    sections: [
      {
        heading: 'Développeur web à Rabat : sites institutionnels et apps métier',
        paragraphs: [
          'À Rabat, administrations, cabinets, ONG, startups et PME ont besoin de sites institutionnels fiables et d’applications métier sécurisées. Les attentes sont élevées sur la clarté, l’accessibilité, la conformité et la maintenance dans la durée.',
          'DevStudio livre des solutions sobres, accessibles et maintenables : sites corporate, portails d’information, outils internes, dashboards et applications web — avec une base SEO technique pour les requêtes « développeur web Rabat » et « création site web Rabat ».',
        ],
      },
      {
        heading: 'Ce que nous développons à Rabat',
        paragraphs: [
          'Sites vitrines institutionnels, pages de services et recrutement, espaces documentaires, applications web de gestion (clients, dossiers, planning), et parfois des apps mobiles pour équipes terrain. Nous cadrons le besoin avant de coder : objectifs, utilisateurs, contraintes de sécurité et d’hébergement.',
          'La priorité : un produit compréhensible pour vos équipes, rapide pour vos usagers, et documenté pour rester évolutif.',
        ],
      },
      {
        heading: 'SEO et crédibilité digitale à Rabat',
        paragraphs: [
          'Pour les cabinets et PME de Rabat-Salé-Kénitra, apparaître sur Google reste un levier de confiance. Nous structurons titres, contenus et FAQ autour des services réellement proposés, et nous évitons le remplissage générique. Un site crédible + une fiche Google Business Profile alignée améliore vos chances d’atteindre la première page sur des requêtes locales ciblées.',
          'Nous relions aussi votre présence à vos autres canaux (LinkedIn, Instagram) pour renforcer l’entité de marque — utile au SEO classique comme au GEO (citations par les IA).',
        ],
      },
      {
        heading: 'Démarrer un projet à Rabat',
        paragraphs: [
          'Décrivez votre projet sur WhatsApp : type d’organisation, besoin (site, app, refonte), contraintes. Nous proposons un devis et un planning clairs. Sur l’axe Rabat–Casablanca, une même base technique peut servir plusieurs implantations.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Proposez-vous la maintenance à Rabat ?',
        answer:
          'Oui. Mises à jour, sauvegardes, petites évolutions et support après mise en ligne — avec un canal WhatsApp dédié.',
      },
      {
        question: 'Pouvez-vous reprendre un site institutionnel existant ?',
        answer:
          'Oui — audit, refonte progressive, migration de contenu, amélioration performance et SEO technique.',
      },
      {
        question: 'Travaillez-vous avec des cabinets et associations à Rabat ?',
        answer:
          'Oui. Nous adaptons le ton, la structure et les formulaires aux contraintes des cabinets, associations et structures semi-publiques.',
      },
    ],
  },
};
