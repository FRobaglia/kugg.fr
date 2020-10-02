const projects = [
  {
    title: "M Publicité",
    slug: "m-publicite",
    alt: "Page d'accueil - M Publicité",
    description:
      "Le site web de M Publicité, la régie publicitaire du quotidien Le Monde.",
    link: "https://mpublicite.fr",
    tags: ["javascript", "php", "integration", "lemonde"],
    id: 1,
  },
  {
    title: "Le jeu dont vous êtes le héros",
    slug: "hero",
    alt: "Aventure - le jeu dont vous êtes le héros",
    description:
      'Inspiré des "Livres dont vous êtes le héros", mais sous forme de site internet, vous incarnez un Mage, un Guerrier ou un Voleur, chacun ayant une caractéristique prédominante. Le but du jeu est de venir en aide à un village dont les habitants disparaissent mystérieusement. Pour ce faire, il faudra utiliser vos caractéristiques à bon escient...',
    link: "https://herobaglia.netlify.com",
    github: "https://github.com/FRobaglia/hero",
    tags: ["game", "vue", "perso"],
    id: 2,
  },
  {
    title: "Escapades en Grande-Bretagne",
    slug: "grande-bretagne-en-train",
    alt: "Page d'accueil - Escapades en Grande-Bretagne",
    description:
      "En collaboration avec l'Office de Tourisme de Grande-Bretagne, pour faire découvrir la Grande-Bretagne aux lecteurs du Monde.",
    link: "https://la-grande-bretagne-en-train.lemonde.fr",
    tags: ["javascript", "integration", "lemonde"],
    id: 3,
  },
  {
    title: "Le Valais",
    slug: "le-valais",
    alt: "Page d'accueil - Le Valais",
    description:
      "En collaboration avec l'Office de Tourisme de Suisse, pour faire découvrir la région du Valais aux lecteurs du Monde et M, le magazine du Monde.",
    link: "https://valais-ete-ombre-des-sommets.lemonde.fr/",
    tags: ["javascript", "integration", "lemonde"],
    id: 4,
  },
  {
    title: "Arrondissements de Paris",
    slug: "arrondissements",
    alt: "Page 12ème arrondissement — Olympics",
    description:
      "<strong> Projet de groupe. </strong> La consigne imposée était d'imaginer un site web pour faciliter l'organisation des Jeux Olympiques de Paris 2024. Ce site web établit une note pour chaque arrondissement de Paris en fonction des préférences de l'utilisateur, afin de renseigner les personnes ne connaissant pas ou peu Paris et voulant y séjourner le temps des JO.",
    link: "https://olympics.kugg.fr",
    github: "https://github.com/FRobaglia/ArrondissementsParis",
    tags: ["react", "php", "integration", "school"],
    id: 5,
  },
  {
    title: "One Influence",
    slug: "one-influence",
    alt: "Page d'accueil - One Influence 2020",
    description:
      "L'étude OneNext Influence réalisée par M Publicité affirme la place prépondérante du Monde, de M Le magazine du Monde et de L’Obs auprès de ceux qui « changent la donne ».",
    link: "https://mpublicite.fr/one-influence-2020/",
    tags: ["javascript", "integration", "lemonde"],
    id: 6,
  },
  {
    title: "Baromètre Bancaire",
    slug: "barometre-bancaire",
    alt: "Page d'accueil - Baromètre Bancaire 2020",
    description:
      "Baromètre bancaire réalisé par M Publicité, à l'occasion de la sortie du supplément Le Monde Argent sur le sujet.",
    link: "https://mpublicite.fr/barometre-bancaire-2020/",
    tags: ["javascript", "integration", "lemonde"],
    id: 7,
  },
  {
    title: "FatFinger",
    slug: "fatfinger",
    alt: "Page d'accueil - FatFinger",
    description:
      "Un jeu d'adresse pour s'entraîner en dactylographie, vous avez 30 secondes pour taper le plus de mots possibles au clavier. Trois collections de mots différentes sont jouables : les mots anglais les plus utilisés selon Wikipédia, des mots en rapport avec le web et/ou le développement web, et des expressions JavaScript.",
    link: "https://fatfinger.netlify.com",
    github: "https://github.com/FRobaglia/FatFinger",
    tags: ["javascript", "game", "perso"],
    id: 8,
  },
  {
    title: "TFT Legends",
    slug: "tft-legends",
    alt: "Page des champions - TFT Legends",
    description:
      "Un site ayant pour but de donner des informations aux joueurs de Teamfight Tactics, un jeu édité par Riot Games, créateur de League of Legends notamment. La partie 'Champions' permet de se renseigner sur les capacités de chacuns des personnages du jeu. Le tracker permet de taper le pseudo d'un joueur sur la barre de recherche pour voir son rang en temps réel, à l'aide des données récupérées depuis l'API de Riot Games.",
    link: "https://legendstft.com/champions",
    github: "https://github.com/FRobaglia/tftlegends",
    tags: ["game", "vue", "php", "perso"],
    id: 9,
  },
  {
    title: "Uryō",
    slug: "uryo",
    alt: "Homepage Uryo - Maquettes Figma",
    description:
      "<strong> Projet de groupe. </strong> Semaine intensive d'UX (User eXperience) dans le cadre de mon école. Nous avions 4 jours pour penser, designer et intégrer un site web de customisation de vêtements. Nous avons imaginé Uryō, des imperméables conçus avec des encres thermochromiques, qui dévoilent un nouveau design lorsqu'il pleut. Cette semaine étant essentiellement basée sur l'UX/UI, nous avons seulement intégré la page d'accueil d'Uryō.",
    link: "https://uryo.netlify.com",
    github: "https://github.com/FRobaglia/uryo",
    tags: ["javascript", "school", "integration"],
    id: 10,
  },
  {
    title: "Snake",
    slug: "snake",
    alt: "Jeu Snake",
    description: "Le jeu Snake en JavaScript.",
    link: "https://snakee.netlify.com",
    github: "https://github.com/FRobaglia/snake",
    tags: ["javascript", "game", "perso"],
    id: 11,
  },
  {
    title: "Keycodes",
    slug: "keycodes",
    alt: "Site web Keycodes",
    description:
      'Un mini-outil pour connaître les différents "keyCode" des touches en JavaScript. (identifiant numérique que le langage donne arbitrairement à chaque touche du clavier).',
    link: "https://keycode.netlify.com",
    github: "https://github.com/FRobaglia/KeyCodes",
    tags: ["javascript"],
    id: 12,
  },
];

export default projects;
