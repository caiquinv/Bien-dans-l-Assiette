import salmonImg from '../assets/images/salmon_sweet_potato_1791431076235.webp';
import soupImg from '../assets/images/turmeric_squash_soup_1791431086146.webp';
import chiaImg from '../assets/images/chia_breakfast_bowl_1791431095579.webp';
import chickpeaImg from '../assets/images/mediterranean_chickpea_bowl_1791431104828.webp';
import chickenImg from '../assets/images/recipe_roasted_chicken_1791510178825.webp';
import crumbleImg from '../assets/images/recipe_apple_crumble_1791510169259.webp';

export interface RecipeCardItem {
  id: string;
  title: string;
  category: string;
  prepTime: string;
  image: string;
}

export const SIX_SAMPLE_RECIPES: RecipeCardItem[] = [
  {
    id: 'rec-1',
    title: 'Velouté de potimarron au curcuma & lait de coco',
    category: 'Dîners & Soupes',
    prepTime: '25 min',
    image: soupImg,
  },
  {
    id: 'rec-2',
    title: 'Pavé de saumon aux herbes & patates douces',
    category: 'Dîners',
    prepTime: '20 min',
    image: salmonImg,
  },
  {
    id: 'rec-3',
    title: 'Chia pudding crémeux aux myrtilles & noix',
    category: 'Petits-déjeuners',
    prepTime: '5 min',
    image: chiaImg,
  },
  {
    id: 'rec-4',
    title: 'Bowl méditerranéen aux pois chiches & avocat',
    category: 'Déjeuners',
    prepTime: '20 min',
    image: chickpeaImg,
  },
  {
    id: 'rec-5',
    title: 'Filet de poulet doré au thym & légumes',
    category: 'Déjeuners & Dîners',
    prepTime: '25 min',
    image: chickenImg,
  },
  {
    id: 'rec-6',
    title: 'Crumble rustique pomme-noisette à la cannelle',
    category: 'Desserts',
    prepTime: '25 min',
    image: crumbleImg,
  },
];

export const FULL_EXTRACT_RECIPE = {
  title: 'Velouté de potimarron au curcuma & lait de coco',
  portions: '4 personnes',
  timing: '10 min prép. · 25 min cuisson',
  ingredients: [
    '600 g de potimarron coupé en cubes (avec la peau)',
    '1 oignon doux émincé',
    '1 gousse d\'ail pressée',
    '1 c. à café de curcuma moulu',
    '1 cm de gingembre frais râpé',
    '200 ml de lait de coco',
    '500 ml de bouillon de légumes',
    '1 c. à soupe d\'huile d\'olive vierge extra',
    '1 c. à soupe de graines de courge'
  ],
  steps: [
    'Faire revenir l’oignon dans l’huile d’olive pendant 3 minutes dans une grande casserole.',
    'Ajouter le curcuma et le gingembre frais râpé, mélanger à feu doux pendant 1 minute.',
    'Ajouter les cubes de potimarron et verser le bouillon de légumes.',
    'Porter à ébullition, puis couvrir et laisser mijoter 20 minutes jusqu’à tendreté.',
    'Verser le lait de coco, poivrer et mixer jusqu’à texture lisse et onctueuse.',
    'Servir bien chaud dans des bols, parsemé de graines de courge croquantes.'
  ]
};

export const SAMPLE_RECIPES = SIX_SAMPLE_RECIPES;
