const translations = {
    en: {
        translation: {
            jobTitle: "Web developer",
            noProjectFound: "Couldn't find a project containing these",
            discoverWebsite: "See website",
            seeSourceCode: "Explore source code of",
            onGithub: "on GitHub",
            projects: [
                {
                  title: "M Publicité",
                  slug: "m-publicite",
                  alt: "Homepage - M Publicité",
                  description:
                    "The website of M Publicité, advertising section of the french newspaper Le Monde.",
                  link: "https://mpublicite.fr",
                  tags: ["javascript", "php", "integration", "lemonde"],
                  id: 1,
                },
                {
                  title: "You Are the Hero",
                  slug: "hero",
                  alt: "Aventure - You Are the Hero",
                  description:
                    'An aventure inspired from "You Are the Hero" books. <br> Make the good choices to finish the game !',
                  link: "https://herobaglia.netlify.com",
                  github: "https://github.com/FRobaglia/hero",
                  tags: ["game", "vue", "perso"],
                  id: 2,
                },
                {
                  title: "Escapades in Great Britain",
                  slug: "grande-bretagne-en-train",
                  alt: "Homepage - Escapades in Great Britain",
                  description:
                    "In collaboration with the British Tourist Office, this website aims to make Le Monde readers discover about Great Britain.",
                  link: "https://la-grande-bretagne-en-train.lemonde.fr",
                  tags: ["javascript", "integration", "lemonde"],
                  id: 3,
                },
                {
                  title: "Le Valais",
                  slug: "le-valais",
                  alt: "Homepage - Le Valais",
                  description:
                    "In collaboration with the Swiss Tourist Office, this website aims to make Le Monde readers discover about the Valais region in Switzerland.",
                  link: "https://valais-ete-ombre-des-sommets.lemonde.fr/",
                  tags: ["javascript", "integration", "lemonde"],
                  id: 4,
                },
                {
                  title: "Paris Districts",
                  slug: "arrondissements",
                  alt: "Paris Districs",
                  description:
                    "<strong> Group Project. </strong> The assignment imposed was to imagine a website to facilitate the organization of the Paris 2024 Olympic Games. This website establishes a score for each district of Paris according to the preferences of the user, in order to inform people who do not know Paris and want to stay there during the Olympics.",
                  link: "https://olympics.kugg.fr",
                  github: "https://github.com/FRobaglia/ArrondissementsParis",
                  tags: ["react", "php", "integration", "school"],
                  id: 5,
                },
                {
                  title: "One Influence",
                  slug: "one-influence",
                  alt: "Homepage - One Influence",
                  description:
                    "The OneNext Influence study conducted by M Publicité (advertising section of Groupe Le Monde) affirms the predominant place of Le Monde, M Le magazine du Monde and L'Obs (french newspapers owned by Groupe Le Monde) among those who « change the game». ",
                  link: "https://mpublicite.fr/one-influence/",
                  tags: ["javascript", "integration", "lemonde"],
                  id: 6,
                },
                {
                  title: "Banking Barometer",
                  slug: "barometre-bancaire",
                  alt: "Homepage - Banking Barometer 2020",
                  description:
                    "A banking barometer made by M Publicité, advertising section of Groupe Le Monde.",
                  link: "https://mpublicite.fr/barometre-bancaire-2020/",
                  tags: ["javascript", "integration", "lemonde"],
                  id: 7,
                },
                {
                  title: "FatFinger",
                  slug: "fatfinger",
                  alt: "Homepage - FatFinger",
                  description:
                    "A skill game to train typing, the goal is to type as many words as possible on the keyboard in 30 seconds. Three different collections of words are playable: the most used English words according to Wikipedia, words related to the web and/or web development, and JavaScript expressions.",
                  link: "https://fatfinger.netlify.com",
                  github: "https://github.com/FRobaglia/FatFinger",
                  tags: ["javascript", "game", "perso"],
                  id: 8,
                  en: true
                },
                {
                  title: "TFT Legends",
                  slug: "tft-legends",
                  alt: "Champions page - TFT Legends",
                  description:
                    "A website that aims to give information to players of Teamfight Tactics, a game published by Riot Games, creator of League of Legends. The 'Champions' part allows you to learn about the abilities of each of the characters in the game. The tracker allows you to type the nickname of a player on the search bar to see his rank in real time, using data retrieved from the API of Riot Games.",
                  link: "https://legendstft.com/champions",
                  github: "https://github.com/FRobaglia/tftlegends",
                  tags: ["game", "vue", "php", "perso"],
                  id: 9,
                  en: true
                },
                {
                  title: "Uryō",
                  slug: "uryo",
                  alt: "Homepage Uryo - Figma",
                  description:
                    "<strong> Group Project. </strong> Week-long UX project as part of my school. We came up with Uryō, raincoats designed with thermochromic inks, which reveal a new design when it rains. Since this week was primarily UX/UI based, we only integrated Uryō's homepage.",
                  link: "https://uryo.netlify.com",
                  github: "https://github.com/FRobaglia/uryo",
                  tags: ["javascript", "school", "integration"],
                  id: 10,
                  en: true
                },
                {
                  title: "Snake",
                  slug: "snake",
                  alt: "Snake Game",
                  description: "Snake game in JavaScript.",
                  link: "https://snakee.netlify.com",
                  github: "https://github.com/FRobaglia/snake",
                  tags: ["javascript", "game", "perso"],
                  id: 11,
                  en: true
                },
                {
                  title: "Chess",
                  slug: "chess",
                  alt: "Chess Game",
                  description:
                    'Chess game in JavaScript.',
                  link: "https://chessr.netlify.app/",
                  github: "https://github.com/FRobaglia/chess",
                  tags: ["javascript", "game", "perso"],
                  id: 12,
                  en: true
                },
                {
                  title: "Learmy",
                  slug: "learmy",
                  alt: "Homepage - Learmy",
                  description:
                    'A website that uses NASA\'s API Picture Of The Day and display new pictures every day.',
                  link: "https://learmy.netlify.app/astronomy-picture-of-the-day",
                  github: "https://github.com/FRobaglia/learmy",
                  tags: ["vue", "perso", "integration"],
                  id: 13,
                  en: true
                },
                {
                  title: "Wallonia",
                  slug: "wallonie",
                  alt: "Homepage - Wallonia",
                  description:
                    'In collaboration with the Belgium Tourist Office, this website aims to make HuffPost readers discover about Wallonia.',
                  link: "https://lavieestbelge-en-wallonie.huffingtonpost.fr/",
                  tags: ["javascript" ,"lemonde", "integration"],
                  id: 14
                },
                {
                  title: "Swiss cities discover themselves",
                  slug: "suisse",
                  alt: "Homepage - Swiss cities discover themselves",
                  description:
                    'In collaboration with the Swiss Tourist Office, this website aims to make Le Monde readers discover about Switzerland.',
                  link: "https://les-villes-suisses-se-decouvrent.lemonde.fr/",
                  tags: ["javascript" ,"lemonde", "integration"],
                  id: 15
                },
                {
                  title: "Keycodes",
                  slug: "keycodes",
                  alt: "Keycodes website",
                  description:
                    'A mini-tool to know about the different keyCodes, unique ID given to each key in Javascript.',
                  link: "https://keycode.netlify.com",
                  github: "https://github.com/FRobaglia/KeyCodes",
                  tags: ["javascript"],
                  id: 16,
                  en: true
                },
              ],
              tags: [
                {
                  slug: "javascript",
                  name: "JavaScript",
                  tooltip: "Projects realized without the use of a front-end framework",
                  checked: false,
                  id: 1,
                },
                {
                  slug: "vue",
                  name: "Vue.js",
                  tooltip: "Projects realized with the Vue.js JavaScript framework",
                  checked: false,
                  id: 2,
                },
                {
                  slug: "react",
                  name: "React.js",
                  tooltip: "Projects realized with the React.js JavaScript framework",
                  checked: false,
                  id: 3,
                },
                {
                  slug: "php",
                  name: "PHP",
                  tooltip: "Projects realized with PHP and/or the WordPress CMS",
                  checked: false,
                  id: 4,
                },
                {
                  slug: "game",
                  name: "Games",
                  tooltip: "Games and projects related to gaming",
                  checked: false,
                  id: 5,
                },
                {
                  slug: "school",
                  name: "School projects",
                  tooltip:
                    'Projects realized during my 3 years in my web development school',
                  checked: false,
                  id: 6,
                },
                {
                  slug: "integration",
                  name: "Integration",
                  tooltip:
                    "Projects that required a significant HTML/CSS integration step (HTML templating, CSS/SVG animations...)",
                  checked: false,
                  id: 7,
                },
                {
                  slug: "lemonde",
                  name: "Le Monde",
                  tooltip:
                    "Projects I worked on during my 2 years apprenticeship at the french newspaper Le Monde",
                  checked: false,
                  id: 8,
                },
                {
                  slug: "perso",
                  name: "Personal projects",
                  tooltip: "Things I made on my free time",
                  checked: false,
                  id: 9,
                },
              ]
        }
    },
    fr: {
        translation: {
            jobTitle: "Développeur web",
            noProjectFound: "Aucun projet ne comporte ces",
            discoverWebsite: "Voir le site web",
            seeSourceCode: "Explorer le code source de",
            onGithub: "sur GitHub",
            projects: [
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
                    'Une aventure inspirée des "Livres dont vous êtes le héros". <br> Faites les bons choix pour finir le jeu !',
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
                    "En collaboration avec l'Office de Tourisme de Suisse, pour faire découvrir la région du Valais aux lecteurs du Monde et de M, le magazine du Monde.",
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
                  alt: "Page d'accueil - One Influence",
                  description:
                    "L'étude OneNext Influence réalisée par M Publicité affirme la place prépondérante du Monde, de M Le magazine du Monde et de L’Obs auprès de ceux qui « changent la donne ».",
                  link: "https://mpublicite.fr/one-influence/",
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
                    "Un jeu d'adresse pour s'entraîner en dactylographie, le but est de taper le plus de mots possibles au clavier en 30 secondes. Trois collections de mots différentes sont jouables : les mots anglais les plus utilisés selon Wikipédia, des mots en rapport avec le web et/ou le développement web, et des expressions JavaScript.",
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
                    "<strong> Projet de groupe. </strong> Projet UX d'une semaine dans le cadre de mon école. Nous avons imaginé Uryō, des imperméables conçus avec des encres thermochromiques, qui dévoilent un nouveau design lorsqu'il pleut. Cette semaine étant essentiellement basée sur l'UX/UI, nous avons seulement intégré la page d'accueil d'Uryō.",
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
                  title: "Échecs",
                  slug: "chess",
                  alt: "Jeu d'échecs",
                  description:
                    'Le jeu d\'échecs en JavaScript.',
                  link: "https://chessr.netlify.app/",
                  github: "https://github.com/FRobaglia/chess",
                  tags: ["javascript", "game", "perso"],
                  id: 12
                },
                {
                  title: "Learmy",
                  slug: "learmy",
                  alt: "Homepage - Learmy",
                  description:
                    'Un site utilisant l\'API Picture Of The Day de la NASA et affichant chaque jour de nouvelles photos.',
                  link: "https://learmy.netlify.app/astronomy-picture-of-the-day",
                  github: "https://github.com/FRobaglia/learmy",
                  tags: ["vue", "perso", "integration"],
                  id: 13,
                  en: true
                },
                {
                  title: "Wallonie : la vie est belge",
                  slug: "wallonie",
                  alt: "Homepage - Wallonie",
                  description:
                    'En collaboration avec l\'Office de Tourisme de Belgique, pour faire découvrir la Wallonie aux lecteurs du HuffPost.',
                  link: "https://lavieestbelge-en-wallonie.huffingtonpost.fr/",
                  tags: ["javascript" ,"lemonde", "integration"],
                  id: 14
                },
                {
                  title: "Les villes suisses se découvrent",
                  slug: "suisse",
                  alt: "Homepage - Les villes suisses se découvrent",
                  description:
                    'En collaboration avec l\'Office de Tourisme de Suisse, pour faire découvrir les villes suisses aux lecteurs du Monde et de M, le magazine du Monde.',
                  link: "https://les-villes-suisses-se-decouvrent.lemonde.fr/",
                  tags: ["javascript" ,"lemonde", "integration"],
                  id: 15
                },
                {
                  title: "Keycodes",
                  slug: "keycodes",
                  alt: "Site web Keycodes",
                  description:
                    'Un mini-outil pour connaître les différents "keyCode" des touches en JavaScript.',
                  link: "https://keycode.netlify.com",
                  github: "https://github.com/FRobaglia/KeyCodes",
                  tags: ["javascript"],
                  id: 16,
                },
              ],
              tags: [
                {
                  slug: "javascript",
                  name: "JavaScript",
                  tooltip: "Projets réalisés sans l'utilisation de framework front-end",
                  checked: false,
                  id: 1,
                },
                {
                  slug: "vue",
                  name: "Vue.js",
                  tooltip: "Projets réalisés avec le framework JavaScript Vue.js",
                  checked: false,
                  id: 2,
                },
                {
                  slug: "react",
                  name: "React.js",
                  tooltip: "Projets réalisés avec le framework JavaScript React",
                  checked: false,
                  id: 3,
                },
                {
                  slug: "php",
                  name: "PHP",
                  tooltip: "Projets utilisant PHP et/ou le CMS Wordpress.",
                  checked: false,
                  id: 4,
                },
                {
                  slug: "game",
                  name: "Jeux",
                  tooltip: "Jeux vidéos et autres projets en lien avec le jeu vidéo.",
                  checked: false,
                  id: 5,
                },
                {
                  slug: "school",
                  name: "Projets scolaires",
                  tooltip:
                    'Projets réalisés durant mes 3 ans en école',
                  checked: false,
                  id: 6,
                },
                {
                  slug: "integration",
                  name: "Intégration",
                  tooltip:
                    "Projets ayant nécessité une étape d'intégration HTML/CSS importante (templating HTML, animations CSS/SVG...)",
                  checked: false,
                  id: 7,
                },
                {
                  slug: "lemonde",
                  name: "Le Monde",
                  tooltip:
                    "Projets sur lesquels j'ai travaillé durant mon alternance au journal Le Monde",
                  checked: false,
                  id: 8,
                },
                {
                  slug: "perso",
                  name: "Projets personnels",
                  tooltip: "Projets développés sur mon temps libre",
                  checked: false,
                  id: 9,
                },
              ]
        }
    }
}

export default translations