export interface RecipePreviewItem {
  id: string;
  title: string;
  category: string;
  prepTime: string;
  image: string;
}

export interface BonusItem {
  id: number;
  title: string;
  description: string;
  bullets: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SalesConfig {
  checkoutUrl: string;
  metaPixelId: string | null;
  supportEmail: string;
  launchEndDate: string | null;
  product: {
    name: string;
    totalRecipes: number;
    price: string;
    currencySymbol: string;
  };
  hero: {
    badge: string;
    h1: string;
    subtitle: string;
    cta: string;
    trustSubline: string;
    trustBullets: string[];
  };
  problem: {
    title: string;
    text: string;
    cards: Array<{
      title: string;
      desc: string;
    }>;
  };
  solutionSteps: {
    title: string;
    steps: Array<{
      number: string;
      title: string;
      desc: string;
    }>;
  };
  content: {
    title: string;
    categories: Array<{
      title: string;
      desc: string;
    }>;
    note: string;
  };
  ingredientsSection: {
    title: string;
    text: string;
    items: string[];
  };
  bonuses: BonusItem[];
  offer: {
    title: string;
    included: string[];
    price: string;
    priceSubline: string;
    cta: string;
    trustLine: string;
  };
  guarantee: {
    title: string;
    text: string;
  };
  faq: FAQItem[];
  finalCta: {
    title: string;
    cta: string;
  };
  testimonials: Array<any>;
}

export const SALES_CONFIG: SalesConfig = {
  checkoutUrl: "https://pay.hotmart.com/H107953147Q",
  metaPixelId: null, // "por enquanto nao tenho, depois peço para adicionar"
  supportEmail: "supportbiedanslassiete@gmail.com",
  launchEndDate: null, // se null, nenhuma mensagem de urgência/prazo é exibida

  product: {
    name: "Bien dans l'Assiette",
    totalRecipes: 250,
    price: "14,90",
    currencySymbol: "€",
  },

  hero: {
    badge: "GUIDE NUMÉRIQUE · 250 RECETTES · PDF",
    h1: "« Qu'est-ce qu'on mange ce soir ? » Vous aurez enfin la réponse.",
    subtitle: "250 recettes simples, inspirées de l'alimentation anti-inflammatoire, avec 28 jours de menus et les listes de courses déjà prêtes.",
    cta: "JE VEUX MES 250 RECETTES · 14,90 €",
    trustSubline: "Paiement unique · Accès immédiat par e-mail · Garantie 15 jours",
    trustBullets: [
      "Ingrédients de supermarché",
      "La plupart prêtes en moins de 25 min",
      "Sur téléphone, tablette et ordinateur"
    ]
  },

  problem: {
    title: "19h30. Tout le monde a faim. Et rien n'est décidé.",
    text: "Le frigo n'est pas vide. C'est l'idée qui manque. Alors on refait l'un des quatre plats habituels, ou on commande.",
    cards: [
      {
        title: "La même question, tous les soirs",
        desc: "Décider du repas quand on est déjà fatigué, c'est le plus difficile."
      },
      {
        title: "Toujours les mêmes plats",
        desc: "Par manque d'idées, pas par manque d'envie."
      },
      {
        title: "Des recettes « saines » trop compliquées",
        desc: "Ingrédients introuvables, étapes interminables."
      }
    ]
  },

  solutionSteps: {
    title: "La solution : décider avant d'avoir faim.",
    steps: [
      {
        number: "1",
        title: "Choisissez",
        desc: "Parcourez le sommaire et repérez un plat qui vous fait envie."
      },
      {
        number: "2",
        title: "Vérifiez",
        desc: "Ingrédients et quantités sont indiqués : ajoutez ce qui manque à votre liste de courses."
      },
      {
        number: "3",
        title: "Cuisinez",
        desc: "Le soir venu, suivez les étapes numérotées. Vous savez par où commencer."
      }
    ]
  },

  content: {
    title: "250 recettes pour toute la journée",
    categories: [
      {
        title: "50 petits-déjeuners",
        desc: "Des préparations salées ou sucrées faciles pour démarrer la journée sans hésiter."
      },
      {
        title: "50 déjeuners",
        desc: "Des assiettes composées, bowls et plats complets pour le repas du midi."
      },
      {
        title: "50 dîners",
        desc: "Des veloutés, poissons au four et poêlées simples pour le repas du soir."
      },
      {
        title: "50 desserts",
        desc: "Des douceurs aux fruits, crumbles et compotes avec des ingrédients simples."
      },
      {
        title: "50 snacks & boissons",
        desc: "Des en-cas maison, infusions et boissons douces pour les pauses de la journée."
      }
    ],
    note: "Chaque recette indique les portions, le temps de préparation, les ingrédients et les étapes numérotées. Le sommaire cliquable vous emmène directement à la recette."
  },

  ingredientsSection: {
    title: "Une cuisine inspirée de l'alimentation anti-inflammatoire",
    text: "Des produits bruts, des légumes de saison, de bonnes huiles et des épices. Ce n'est ni un régime ni un traitement : c'est de la cuisine de tous les jours.",
    items: [
      "Huile d'olive vierge extra première pression à froid et huile de colza",
      "Légumes frais de saison et herbes aromatiques de nos terroirs",
      "Épices douces de cuisine : curcuma, gingembre, cannelle de Ceylan",
      "Poissons et graines pour de bons apports au quotidien",
      "Légumineuses fondantes et céréales complètes accessibles",
      "Fruits frais et oléagineux non grillés non salés"
    ]
  },

  bonuses: [
    {
      id: 1,
      title: "28 jours de menus clé-en-main",
      description: "4 semaines de repas organisées du lundi au dimanche pour ne plus vous poser la question du menu.",
      bullets: [
        "Menus structurés semaine par semaine",
        "Listes de courses organisées par rayon",
        "Planification du lundi au dimanche"
      ]
    },
    {
      id: 2,
      title: "Batch cooking express",
      description: "Une session courte le week-end pour préparer vos bases et assembler vos dîners en 10 minutes.",
      bullets: [
        "Méthode d'organisation pratique",
        "Conseils de conservation des préparations",
        "Assemblage rapide les soirs de semaine"
      ]
    },
    {
      id: 3,
      title: "Placard sain & 60 substitutions",
      description: "Le guide pratique pour adapter vos recettes du quotidien avec ce que vous avez sous la main.",
      bullets: [
        "60 équivalences faciles d'ingrédients",
        "Les essentiels à toujours garder en réserve",
        "Repères d'achat pour le supermarché habituel"
      ]
    },
    {
      id: 4,
      title: "30 sauces, vinaigrettes & dips",
      description: "30 recettes rapides pour assaisonner vos légumes et renouveler vos plats en 2 minutes.",
      bullets: [
        "Préparations express en quelques minutes",
        "Ingrédients simples du placard",
        "Variations d'herbes et d'épices douces"
      ]
    }
  ],

  offer: {
    title: "Tout ce que vous recevez aujourd'hui",
    included: [
      "Le guide « Bien dans l'Assiette » (250 recettes, PDF)",
      "Bonus 1 : 28 jours de menus clé-en-main avec listes de courses par rayon",
      "Bonus 2 : Guide du batch cooking express",
      "Bonus 3 : Guide du placard sain + 60 substitutions",
      "Bonus 4 : 30 sauces, vinaigrettes & dips",
      "Accès immédiat par e-mail sur téléphone, tablette et ordinateur"
    ],
    price: "14,90",
    priceSubline: "Paiement unique · moins de 6 centimes par recette",
    cta: "ACCÉDER AU GUIDE MAINTENANT",
    trustLine: "Paiement sécurisé · Garantie 15 jours · Accès immédiat"
  },

  guarantee: {
    title: "Garantie 15 jours satisfait ou remboursé",
    text: "Prenez le temps d'explorer le guide et de tester les recettes chez vous pendant 15 jours. Si le recueil ne répond pas à vos attentes, écrivez-nous simplement à supportbiedanslassiete@gmail.com pour être remboursé intégralement. Vous ne prenez aucun risque."
  },

  faq: [
    {
      id: "faq-1",
      question: "Comment vais-je recevoir mon guide après le règlement ?",
      answer: "L'accès est immédiat et automatique. Dès votre commande validée, vous recevez un e-mail contenant votre lien d'accès pour télécharger le guide « Bien dans l'Assiette » et ses 4 compléments au format numérique PDF haute définition."
    },
    {
      id: "faq-2",
      question: "Puis-je consulter les recettes sur mon téléphone ou ma tablette ?",
      answer: "Oui, le format PDF est optimisé pour une lecture claire et fluide sur smartphone, tablette (iPad et Android), liseuse et ordinateur. Vous pouvez aussi imprimer les fiches recettes si vous préférez un support papier."
    },
    {
      id: "faq-3",
      question: "Les ingrédients sont-ils faciles à trouver dans un supermarché français ?",
      answer: "Oui, 100 % des ingrédients utilisés se trouvent facilement dans vos commerces habituels (supermarchés, marchés locaux, primeurs). Aucune dépense superflue ni ingrédient introuvable."
    },
    {
      id: "faq-4",
      question: "Ce recueil convient-il aux débutants en cuisine ?",
      answer: "Tout à fait. Les recettes sont pensées avec des explications claires étape par étape, des temps de préparation courts (la plupart en moins de 25 minutes) et des gestes simples accessibles à tous."
    },
    {
      id: "faq-5",
      question: "Le paiement est-il sécurisé et s'agit-il d'un paiement unique ?",
      answer: "Oui, la transaction s'effectue via une plateforme bancaire sécurisée avec chiffrement SSL. Il s'agit d'un paiement unique de 14,90 €, sans aucun abonnement ni frais cachés."
    },
    {
      id: "faq-6",
      question: "Combien de temps ai-je accès au contenu ?",
      answer: "Votre accès est illimité. Une fois les fichiers téléchargés, vous les conservez sur vos appareils sans limite de durée."
    },
    {
      id: "faq-7",
      question: "Les recettes conviennent-elles à toute la famille ?",
      answer: "Oui, ce sont des recettes du quotidien faites avec des ingrédients simples et des préparations conviviales qui s'adaptent naturellement aux repas de toute la maison."
    },
    {
      id: "faq-8",
      question: "Comment fonctionne la garantie de 15 jours ?",
      answer: "Si le guide ne vous convient pas, envoyez simplement un message à supportbiedanslassiete@gmail.com dans les 15 jours suivant votre achat pour obtenir un remboursement complet."
    },
    {
      id: "faq-9",
      question: "Est-ce un régime ou un traitement médical ?",
      answer: "Non. C'est un recueil de recettes du quotidien. Il ne remplace pas l'avis d'un professionnel de santé."
    }
  ],

  finalCta: {
    title: "Ce soir, vous saurez quoi cuisiner.",
    cta: "JE VEUX MES 250 RECETTES · 14,90 €"
  },

  // Laisser vide. La section de témoignages ne s'affiche que si ce tableau contient des avis réels
  testimonials: []
};
