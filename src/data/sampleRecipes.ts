import salmonImg from '../assets/images/salmon_sweet_potato_1791431076235.jpg';
import soupImg from '../assets/images/turmeric_squash_soup_1791431086146.jpg';
import chiaImg from '../assets/images/chia_breakfast_bowl_1791431095579.jpg';
import chickpeaImg from '../assets/images/mediterranean_chickpea_bowl_1791431104828.jpg';
import chickenImg from '../assets/images/recipe_roasted_chicken_1791510178825.jpg';
import crumbleImg from '../assets/images/recipe_apple_crumble_1791510169259.jpg';

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
    prepTime: 'Préparation : 10 min · Cuisson : 25 min',
    image: soupImg,
  },
  {
    id: 'rec-2',
    title: 'Pavé de saumon aux herbes de Provence & patates douces',
    category: 'Dîners',
    prepTime: 'Préparation : 15 min · Cuisson : 20 min',
    image: salmonImg,
  },
  {
    id: 'rec-3',
    title: 'Chia pudding crémeux aux myrtilles & éclats de noix',
    category: 'Petits-déjeuners',
    prepTime: 'Préparation : 5 min · Sans cuisson',
    image: chiaImg,
  },
  {
    id: 'rec-4',
    title: 'Grand bowl méditerranéen aux pois chiches rôtis & avocat',
    category: 'Déjeuners',
    prepTime: 'Préparation : 15 min · Cuisson : 15 min',
    image: chickpeaImg,
  },
  {
    id: 'rec-5',
    title: 'Filet de poulet doré au thym & légumes de saison',
    category: 'Déjeuners & Dîners',
    prepTime: 'Préparation : 15 min · Cuisson : 20 min',
    image: chickenImg,
  },
  {
    id: 'rec-6',
    title: 'Crumble rustique pomme-noisette à la cannelle',
    category: 'Desserts',
    prepTime: 'Préparation : 15 min · Cuisson : 25 min',
    image: crumbleImg,
  },
];

export const FULL_EXTRACT_RECIPE = {
  title: 'Velouté de potimarron au curcuma & lait de coco',
  portions: '4 portions',
  timing: 'Préparation : 10 min · Cuisson : 25 min',
  ingredients: [
    '600 g de potimarron coupé en cubes (avec la peau)',
    '1 oignon doux émincé',
    '1 gousse d\'ail pressée',
    '1 c. à café de curcuma moulu',
    '1 cm de gingembre frais râpé',
    '200 ml de lait de coco',
    '500 ml de bouillon de légumes doux',
    '1 c. à soupe d\'huile d\'olive vierge extra',
    '1 c. à soupe de graines de courge pour le dessus'
  ],
  steps: [
    'Faire suer l\'oignon dans l\'huile d\'olive pendant 3 minutes dans une cocotte.',
    'Ajouter le curcuma, le gingembre et l\'ail pour libérer les arômes pendant 1 minute.',
    'Ajouter les cubes de potimarron et verser le bouillon chaud. Couvrir et laisser mijoter 20 minutes à feu moyen.',
    'Verser le lait de coco et mixer jusqu\'à obtenir une texture soyeuse et onctueuse.',
    'Servir bien chaud dans des bols, parsemé de graines de courge croquantes.'
  ]
};

export const SAMPLE_RECIPES = SIX_SAMPLE_RECIPES;
