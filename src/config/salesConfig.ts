export interface RecipeItem {
  id: string;
  title: string;
  category: 'breakfast' | 'lunch' | 'dinner' | 'dessert' | 'snack';
  categoryLabel: string;
  prepTime: string;
  cookTime: string;
  difficulty: 'Très facile' | 'Facile' | 'Intermédiaire';
  benefits: string;
  description: string;
  image: string;
  ingredients: string[];
  steps: string[];
  chefTip: string;
}

export interface BonusItem {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  estimatedValue: number;
  highlights: string[];
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  age: number;
  rating: number;
  headline: string;
  quote: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const SALES_CONFIG = {
  product: {
    name: "Bien dans l’Assiette",
    fullName: "Bien dans l’Assiette : 250 Recettes Anti-Inflammatoires & Vitalité",
    tagline: "Le guide culinaire complet pour apaiser la digestion, réduire les inconforts et cuisiner sainement avec plaisir.",
    totalRecipes: 250,
    priceCurrent: 14.90,
    priceCurrentFormatted: "14,90",
    priceOriginal: 59,
    discountPercent: 75,
    currencySymbol: "€",
    guaranteeDays: 15,
    checkoutUrl: "https://pay.hotmart.com/EXEMPLE_CHECKOUT?checkoutMode=10",
    supportEmail: "contact@biendanslassiette.fr",
  },
  
  hero: {
    topBadge: "BIEN DANS L’ASSIETTE · FORMAT 100 % NUMÉRIQUE",
    mainHeadline: "Les 250 recettes anti-inflammatoires qui rendent la cuisine saine enfin simple, gourmande et accessible.",
    subHeadline: "Oubliez les régimes drastiques et la monotonie. Découvrez Bien dans l’Assiette : 250 préparations pleines de goût, pensées pour soulager la digestion, retrouver votre vitalité et simplifier vos repas de la semaine.",
    trustBullets: [
      "250 recettes testées et approuvées",
      "Ingrédients courants des marchés et supermarchés français",
      "Préparations rapides (la plupart en moins de 25 min)",
      "Accès immédiat sur smartphone, tablette et ordinateur"
    ],
    ctaText: "OUI, JE VEUX BIEN DANS L’ASSIETTE",
    ctaSubtext: "Accès instantané par e-mail · Paiement unique sans abonnement caché",
  },

  problemSection: {
    kicker: "LA VÉRITÉ QUE PERSONNE NE VOUS DIT",
    title: "Le problème n'est pas votre manque de volonté. C'est l'inflammation silencieuse du quotidien.",
    description: "Jour après jour, des habitudes alimentaires involontaires surchargent votre organisme sans que vous ne compreniez pourquoi votre énergie chute après le déjeuner ou pourquoi vos repas deviennent un casse-tête.",
    symptoms: [
      {
        title: "Ballonnements et lourdeurs",
        description: "Vous sortez souvent de table l'estomac tendu, avec une sensation de fatigue pesante au lieu d'un regain d'énergie.",
        icon: "ShieldAlert"
      },
      {
        title: "Coup de fatigue brutal à 14h",
        description: "Une baisse d'attention et d'énergie dans l'après-midi qui vous pousse vers le sucre rapide ou le café supplémentaire.",
        icon: "BatteryLow"
      },
      {
        title: "Manque d'inspiration quotidien",
        description: "À 19h30, la même question revient : « Qu'est-ce qu'on mange ce soir ? » Vous finissez par faire toujours les 4 mêmes plats.",
        icon: "ChefHat"
      },
      {
        title: "Frustration des régimes drastiques",
        description: "Marre des listes d'aliments interdits impossibles à tenir en famille et des assiettes tristes sans la moindre saveur.",
        icon: "Flame"
      }
    ],
    transitionQuote: "Imaginez maintenant disposer d'un recueil complet de 250 recettes anti-inflammatoires savoureuses, créées pour régaler toute la tablée sans jamais compter la moindre calorie."
  },

  comparison: {
    title: "Qu'est-ce qui entretient l'inconfort dans l'assiette ?",
    subtitle: "Et par quoi le remplacer facilement au quotidien dans vos habitudes ?",
    badHabits: [
      "Sucres raffinés et sirops cachés dans les sauces",
      "Plats ultra-transformés et additifs industriels",
      "Huiles hydrogénées ou raffinées riches en oméga-6 pro-inflammatoires",
      "Farines blanches à indice glycémique élevé",
      "Boissons industrielles sucrées ou sodas édulcorés",
      "Assaisonnements monotones dépourvus de micronutriments"
    ],
    goodHabits: [
      "Huile d'olive vierge extra première pression à froid & huile de colza",
      "Légumes de saison gorgés d'antioxydants naturels",
      "Épices protectrices douces : curcuma, gingembre, cannelle de Ceylan",
      "Poissons gras & graines riches en oméga-3 bienfaisants",
      "Légumineuses fondantes et céréales complètes douces",
      "Herbes aromatiques fraîches : romarin, thym, basilic et persil"
    ]
  },

  pillars: [
    {
      number: "01",
      category: "50 Petits-Déjeuners Énergisants",
      description: "Pour démarrer la journée sans pic d'insuline ni fringale à 10h. Puddings de chia crémeux, porridges parfumés, pancakes moelleux à la farine d'avoine et tartines salées d'inspiration provençale.",
      badge: "Matin sans coup de pompe"
    },
    {
      number: "02",
      category: "50 Déjeuners Complets & Équilibrés",
      description: "Des assiettes composées, bowls vitaminés et plats chauds rapides qui nourrissent en profondeur et vous évitent le coup de barre de début d'après-midi.",
      badge: "Vitalité pour l'après-midi"
    },
    {
      number: "03",
      category: "50 Dîners Réconfortants & Légers",
      description: "Veloutés soyeux aux épices douces, poissons vapeur aux aromates, poêlées de légumes de saison et mijotés légers pour un endormissement paisible et une nuit réparatrice.",
      badge: "Digestion sereine pour la nuit"
    },
    {
      number: "04",
      category: "50 Douceurs & Desserts Équilibrés",
      description: "Crumble pomme-noisette sans sucre raffiné, fondants au chocolat noir 85% et crème d'avocat, mousses fruitées. Le plaisir sucré sans l'inflammation.",
      badge: "Plaisir 100% déculpabilisant"
    },
    {
      number: "05",
      category: "50 Collations & Boissons Bienfaisantes",
      description: "Golden Lattes onctueux, infusions digestives maison aux herbes du jardin, energy balls aux dattes et amandes pour combler les petits creux sainement.",
      badge: "Pause réconfortante"
    }
  ],

  bonuses: [
    {
      id: 1,
      badge: "BONUS OFFERT #1",
      title: "28 Jours de Menus Anti-Inflammatoires Clé-en-Main",
      subtitle: "4 semaines complètes planifiées du lundi au dimanche",
      description: "Ne vous demandez plus quoi préparer. Suivez un calendrier complet de 4 semaines équilibrant petits-déjeuners, déjeuners et dîners avec les listes de courses associées pour gagner un temps précieux chaque semaine.",
      estimatedValue: 19.90,
      highlights: ["4 semaines structurées", "Listes de courses par rayon", "Zéro gaspillage alimentaire"],
      iconName: "CalendarDays"
    },
    {
      id: 2,
      badge: "BONUS OFFERT #2",
      title: "Le Guide du Placard Sain & 60 Substitutions Magiques",
      subtitle: "Transformez vos recettes favorites en versions anti-inflammatoires",
      description: "Comment remplacer la crème, le beurre, le sucre blanc ou la farine de blé sans perdre une once de saveur ni de texture dans vos recettes de famille.",
      estimatedValue: 14.90,
      highlights: ["60 équivalences faciles", "Guide d'achat supermarché & bio", "Les indispensables à avoir"],
      iconName: "BookOpenCheck"
    },
    {
      id: 3,
      badge: "BONUS OFFERT #3",
      title: "Batch Cooking Express : Cuisinez 1 Fois, Mangez Bien Toute la Semaine",
      subtitle: "2 heures le week-end pour libérer vos soirs de semaine",
      description: "La méthode pas-à-pas pour préparer vos bases, découper vos légumes et assembler des dîners frais et chauds en 10 minutes chrono du lundi au vendredi.",
      estimatedValue: 17.90,
      highlights: ["Méthode 100% pratique", "Conservation optimale au frigo", "Fini le stress du dîner"],
      iconName: "ClockAlert"
    },
    {
      id: 4,
      badge: "BONUS OFFERT #4",
      title: "30 Sauces, Vinaigrettes & Dips Bienfaisants",
      subtitle: "Le secret pour sublimer n'importe quel légume ou plat en 2 minutes",
      description: "Vinaigrettes au curcuma et citron confit, pesto d'herbes fraîches aux noix, sauce tahini crémeuse à l'ail doux... Donnez une dimension gastronomique à toutes vos assiettes.",
      estimatedValue: 9.90,
      highlights: ["30 recettes express", "Prêtes en 3 minutes", "Subliment les légumes"],
      iconName: "Sparkles"
    }
  ],

  testimonials: [
    {
      id: "test-1",
      name: "Claire Rodier",
      location: "Lyon (69)",
      age: 44,
      rating: 5,
      headline: "« Une vraie renaissance pour ma digestion après les repas »",
      quote: "En seulement deux semaines, j'ai senti une différence incroyable. Fini le ventre gonflé après le déjeuner et le coup de pompe au bureau. Les recettes sont ultra simples, les ingrédients s'achètent au Carrefour du coin et même mes ados en redemandent.",
      verified: true
    },
    {
      id: "test-2",
      name: "Antoine Lemaire",
      location: "Marseille (13)",
      age: 51,
      rating: 5,
      headline: "« De l'énergie retrouvée pour mes journées de travail »",
      quote: "J'avais peur de tomber sur un livre de graines fades et compliquées. Au contraire ! Le saumon rôti aux herbes et le velouté au curcuma sont devenus des classiques chez nous. Je ne me sens plus lourd en sortant de table.",
      verified: true
    },
    {
      id: "test-3",
      name: "Julie Martin",
      location: "Paris (75)",
      age: 38,
      rating: 5,
      headline: "« Le bonus batch cooking m'a sauvée après le travail »",
      quote: "Rentrer à 19h30 et savoir exactement quoi préparer en 15 minutes sans prise de tête, ça n'a pas de prix. Le livre est superbement mis en page, les explications sont limpides et claires. Bravo !",
      verified: true
    },
    {
      id: "test-4",
      name: "Sophie Duval",
      location: "Bordeaux (33)",
      age: 49,
      rating: 5,
      headline: "« Gourmand, varié et zéro sensation de privation »",
      quote: "J'ai essayé beaucoup de guides dits « santé » qui donnaient l'impression d'être malade. Ici c'est de la vraie bonne cuisine de tous les jours avec de l'huile d'olive, des épices savoureuses et des desserts délicieux.",
      verified: true
    },
    {
      id: "test-5",
      name: "Maxime Tessier",
      location: "Toulouse (31)",
      age: 46,
      rating: 5,
      headline: "« Les douleurs articulaires du matin se sont nettement atténuées »",
      quote: "En changeant simplement les huiles de cuisson et en intégrant les soupes et smoothies riches en antioxydants, je me réveille avec beaucoup plus de souplesse. Très belle découverte !",
      verified: true
    },
    {
      id: "test-6",
      name: "Émilie Gérard",
      location: "Nantes (44)",
      age: 41,
      rating: 5,
      headline: "« Mes enfants adorent les crumbles et les bowls »",
      quote: "C'est la première fois qu'un livre culinaire sain fait l'unanimité pour toute la famille. Le format PDF sur iPad dans la cuisine avec les temps de préparation est extrêmement pratique.",
      verified: true
    }
  ],

  guarantee: {
    durationDays: 15,
    title: "Garantie Inconditionnelle 100 % « Satisfait ou Remboursé » de 15 Jours",
    text: "Nous avons conçu ce recueil pour qu'il devienne votre compagnon de cuisine le plus précieux. Prenez le temps de feuilleter le guide, de tester les petits-déjeuners, les dîners et les bonus offerts. Si pour une raison quelconque vous n'êtes pas entièrement comblé(e) par la simplicité et les saveurs des recettes, envoyez-nous simplement un e-mail dans les 15 jours suivant votre achat. Vous serez intégralement remboursé(e), sans aucune question ni démarche fastidieuse.",
    secureBadge: "Engagement sans risque · Remboursement en 24h à 48h"
  },

  faq: [
    {
      id: "faq-1",
      question: "Comment vais-je recevoir mon guide après le règlement ?",
      answer: "L'accès est immédiat et 100 % automatique. Dès votre commande validée, vous recevez un e-mail contenant votre lien d'accès sécurisé pour consulter ou télécharger instantanément le livre principal ainsi que vos 4 bonus au format numérique (PDF haute définition adapté à tous les écrans)."
    },
    {
      id: "faq-2",
      question: "Puis-je consulter les recettes sur mon téléphone ou ma tablette ?",
      answer: "Oui, absolument ! Le format numérique a été spécialement optimisé pour une lecture très confortable sur smartphone, tablette (iPad / Android), liseuse et ordinateur de bureau. Vous pouvez également imprimer vos fiches recettes préférées si vous aimez les avoir sur papier dans votre cuisine."
    },
    {
      id: "faq-3",
      question: "Les ingrédients sont-ils faciles à trouver dans un supermarché français ?",
      answer: "C'est l'un des piliers de ce recueil : 100 % des ingrédients se trouvent couramment dans n'importe quel supermarché (Carrefour, Auchan, Leclerc, Monoprix...), magasin bio ou sur vos marchés locaux. Pas besoin d'ingrédients introuvables ou excessivement chers."
    },
    {
      id: "faq-4",
      question: "Ce programme convient-il aux débutants en cuisine ?",
      answer: "Totalement. Toutes les recettes sont expliquées étape par étape, avec des indications claires de temps de préparation (la majorité en 15 à 25 minutes) et des astuces simples pour réussir chaque plat à tous les coups, même si vous n'avez pas l'habitude de cuisiner."
    },
    {
      id: "faq-5",
      question: "Le paiement est-il sécurisé et s'agit-il d'un paiement unique ?",
      answer: "Oui, le règlement se fait via une passerelle de paiement sécurisée aux normes bancaires les plus strictes (chiffrement SSL 256 bits). Il s'agit d'un achat unique de 14,90 € : aucun abonnement récurrent, aucun prélèvement surprise futur."
    },
    {
      id: "faq-6",
      question: "Combien de temps ai-je accès au contenu ?",
      answer: "Votre accès est illimité et à vie. Une fois téléchargé, vous gardez vos fichiers sans limite de temps. Vous bénéficiez en plus de toutes les futures mises à jour du recueil gratuitement."
    },
    {
      id: "faq-7",
      question: "Les recettes conviennent-elles à toute la famille ?",
      answer: "Absolument. Ce ne sont pas des plats « médicaux » ou austères, mais de délicieux plats traditionnels réinventés : gratins savoureux, crumbles dorés, viandes fondantes, poissons aux aromates et bowls colorés qui plaisent aussi bien aux adultes qu'aux enfants."
    },
    {
      id: "faq-8",
      question: "Comment fonctionne la garantie de 15 jours ?",
      answer: "C'est très simple : vous disposez de 15 jours complets pour explorer le livre. Si vous n'êtes pas entièrement satisfait(e), écrivez-nous simplement à l'adresse support indiquée et nous vous remboursons intégralement la totalité du montant versé."
    }
  ]
};
