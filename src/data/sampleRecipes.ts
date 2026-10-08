import type { RecipeItem } from '../config/salesConfig';
import salmonImg from '../assets/images/salmon_sweet_potato_1791431076235.jpg';
import soupImg from '../assets/images/turmeric_squash_soup_1791431086146.jpg';
import chiaImg from '../assets/images/chia_breakfast_bowl_1791431095579.jpg';
import chickpeaImg from '../assets/images/mediterranean_chickpea_bowl_1791431104828.jpg';

export const SAMPLE_RECIPES: RecipeItem[] = [
  {
    id: 'rec-1',
    title: 'Pavé de Saumon Sauvage aux Herbes & Patates Douces Rôties',
    category: 'dinner',
    categoryLabel: 'Dîners Réconfortants',
    prepTime: '15 min',
    cookTime: '20 min',
    difficulty: 'Très facile',
    benefits: 'Riche en oméga-3 essentiels et antioxydants protecteurs',
    description: 'Un filet de saumon doré à point, accompagné de cubes de patates douces rôties au four et de pointes d\'asperges vertes à l\'huile d\'olive vierge extra.',
    image: salmonImg,
    ingredients: [
      '2 pavés de saumon sauvage (environ 140 g chacun)',
      '1 patate douce moyenne pelée et coupée en dés',
      '8 pointes d\'asperges vertes fraîches',
      '2 c. à soupe d\'huile d\'olive vierge extra première pression',
      '1 c. à café d\'herbes de Provence séchées et aneth frais',
      '1 filet de jus de citron jaune bio',
      'Fleur de sel et poivre noir moulu'
    ],
    steps: [
      'Préchauffer le four à 190 °C. Disposer les dés de patate douce sur une plaque recouverte de papier cuisson.',
      'Arroser d\'une cuillère d\'huile d\'olive, saler légèrement et enfourner pour 12 minutes.',
      'Ajouter les asperges et les pavés de saumon sur la plaque. Saupoudrer d\'herbes de Provence et d\'un filet de jus de citron.',
      'Poursuivre la cuisson 10 à 12 minutes jusqu\'à ce que le saumon soit fondant et la patate douce bien dorée.',
      'Servir immédiatement avec quelques brins d\'aneth frais.'
    ],
    chefTip: 'Le poivre noir stimule naturellement l\'assimilation des nutriments et apporte une touche chaleureuse sans agressivité digestive.'
  },
  {
    id: 'rec-2',
    title: 'Velouté Doré de Potimarron au Curcuma & Lait de Coco',
    category: 'dinner',
    categoryLabel: 'Soupes & Veloutés',
    prepTime: '10 min',
    cookTime: '25 min',
    difficulty: 'Très facile',
    benefits: 'Apaisant pour les muqueuses digestives et gorgé de bêta-carotène',
    description: 'Une texture soyeuse et réconfortante mariant la douceur de la courge d\'automne, la chaleur du curcuma frais et le crémeux du lait de coco léger.',
    image: soupImg,
    ingredients: [
      '600 g de potimarron bio (garder la peau)',
      '1 oignon doux des Cévennes émincé',
      '1 gousse d\'ail pressée',
      '1 c. à café bombée de curcuma moulu (ou 2 cm de racine fraîche râpée)',
      '1 petit morceau de gingembre frais râpé (1 cm)',
      '200 ml de lait de coco crémeux bio',
      '500 ml de bouillon de légumes doux maison',
      '1 c. à soupe de graines de courge toastées pour le dessus'
    ],
    steps: [
      'Laver le potimarron, retirer les graines et couper la chair en gros morceaux avec la peau.',
      'Faire suer l\'oignon dans une cocotte avec une cuillère d\'huile d\'olive pendant 3 minutes.',
      'Ajouter le curcuma, le gingembre et l\'ail pour libérer les arômes pendant 1 minute.',
      'Verser le potimarron et le bouillon chaud. Couvrir et laisser mijoter à feu doux 20 minutes.',
      'Ajouter le lait de coco et mixer au blender plongeant jusqu\'à texture parfaitement veloutée.',
      'Dresser dans des bols et parsemer de graines de courge croquantes.'
    ],
    chefTip: 'Inutile d\'éplucher le potimarron bio : sa peau cuite apporte des fibres tendres et une belle couleur éclatante.'
  },
  {
    id: 'rec-3',
    title: 'Chia Pudding Onctueux aux Myrtilles & Éclats de Noix',
    category: 'breakfast',
    categoryLabel: 'Petits-Déjeuners',
    prepTime: '5 min',
    cookTime: 'Sans cuisson',
    difficulty: 'Très facile',
    benefits: 'Stabilisation de la glycémie matinale et fibres mucilagineuses bienfaisantes',
    description: 'Préparé la veille en 5 minutes pour un matin sans stress : graines de chia gorgées de lait végétal d\'amande, baies sauvages fraîches et noix de Grenoble.',
    image: chiaImg,
    ingredients: [
      '3 c. à soupe de graines de chia blanches ou noires (environ 30 g)',
      '180 ml de boisson végétale d\'amande sans sucre ajouté',
      '1 poignée de myrtilles fraîches sauvages (environ 50 g)',
      '4 cerneaux de noix du Périgord concassés',
      '1/2 banane mûre coupée en fines rondelles',
      '1 pointe de couteau de vanille Bourbon en poudre'
    ],
    steps: [
      'La veille au soir, mélanger vivement les graines de chia, le lait d\'amande et la vanille dans un bocal en verre.',
      'Laisser reposer 10 minutes à température ambiante, puis mélanger à nouveau pour éviter la formation de grumeaux.',
      'Fermer le bocal et placer au réfrigérateur pour la nuit (au minimum 4 heures).',
      'Le matin, mélanger la texture devenue crémeuse.',
      'Déposer sur le dessus les rondelles de banane, les myrtilles et les cerneaux de noix croquants.'
    ],
    chefTip: 'Les noix du Périgord sont une excellente source d\'oméga-3 d\'origine végétale idéale pour les cellules cérébrales.'
  },
  {
    id: 'rec-4',
    title: 'Grand Bowl Méditerranéen aux Pois Chiches Rôtis & Avocat',
    category: 'lunch',
    categoryLabel: 'Déjeuners Équilibrés',
    prepTime: '15 min',
    cookTime: '15 min',
    difficulty: 'Facile',
    benefits: 'Protéines végétales complètes et acides gras mono-insaturés protecteurs',
    description: 'Une assiette fraîche et rassasiante composée de pois chiches dorés au paprika fumé, quinoa tiède, dés d\'avocat fondant, pousses d\'épinards et sauce tahini citronnée.',
    image: chickpeaImg,
    ingredients: [
      '200 g de pois chiches cuits et bien égouttés',
      '80 g de quinoa tricolore cuit',
      '1/2 avocat mûr tranché',
      '1 poignée généreuse de pousses d\'épinards tendres',
      '6 tomates cerises coupées en deux',
      '1 c. à café de paprika doux et cumin',
      'Sauce : 1 c. à soupe de purée de sésame (tahini), jus d\'un demi-citron, 2 c. à soupe d\'eau tiède'
    ],
    steps: [
      'Dans une poêle avec un filet d\'huile d\'olive, faire revenir les pois chiches avec le paprika et le cumin pendant 8 à 10 minutes jusqu\'à ce qu\'ils soient croustillants.',
      'Dans un grand bol, disposer un lit d\'épinards frais et le quinoa tiède.',
      'Ajouter harmonieusement les pois chiches rôtis, les tomates cerises et les lamelles d\'avocat.',
      'Mélanger les ingrédients de la sauce tahini à la fourchette jusqu\'à consistance lisse.',
      'Napper l\'assiette et parsemer de feuilles de menthe ou de coriandre fraîche.'
    ],
    chefTip: 'Bien sécher les pois chiches avec un linge propre avant de les poêler leur confère un croustillant irrésistible.'
  },
  {
    id: 'rec-5',
    title: 'Tartine Rustique de Seigle, Chèvre Doux, Figues & Miel de Lavande',
    category: 'breakfast',
    categoryLabel: 'Petits-Déjeuners & Brunch',
    prepTime: '8 min',
    cookTime: '3 min',
    difficulty: 'Très facile',
    benefits: 'Index glycémique modéré et douceur digestive sans lactose lourd',
    description: 'Une tranche de pain de seigle au levain naturel légèrement toastée, recouverte de chèvre frais fermier, de quartiers de figues fraîches et d\'un trait de miel de Provence.',
    image: chiaImg,
    ingredients: [
      '2 tranches de pain de seigle bio au levain naturel',
      '50 g de fromage de chèvre frais doux fermier',
      '2 figues fraîches de saison lavées et tranchées',
      '1 c. à café de graines de chanvre ou de courge',
      '1 filet de miel de lavande ou de thym de Provence',
      'Quelques feuilles de thym frais'
    ],
    steps: [
      'Faire griller légèrement le pain de seigle.',
      'Tartiner généreusement le chèvre frais sur chaque tranche encore tiède.',
      'Disposer les quartiers de figues harmonieusement.',
      'Arroser d\'un mince filet de miel de lavande et saupoudrer de graines de chanvre et de thym frais.'
    ],
    chefTip: 'Le pain au levain de seigle possède un indice glycémique nettement plus doux pour le pancréas que la baguette blanche classique.'
  },
  {
    id: 'rec-6',
    title: 'Curry Doux de Lentilles Corail au Lait de Coco & Épinards Frais',
    category: 'lunch',
    categoryLabel: 'Plats Végétariens & Déjeuners',
    prepTime: '10 min',
    cookTime: '20 min',
    difficulty: 'Très facile',
    benefits: 'Haute teneur en fer d\'origine végétale, fibres douces et assimilation rapide',
    description: 'Un dahl réconfortant prêt en 20 minutes qui parfume délicatement la maison. Les lentilles corail cuisent très vite sans trempage préalable.',
    image: soupImg,
    ingredients: [
      '180 g de lentilles corail rincées à l\'eau claire',
      '1 échalote et 1 gousse d\'ail hachées',
      '1 c. à soupe de pâte de curry doux ou curry en poudre',
      '1 boîte (400 ml) de pulpe de tomates concassées bio',
      '200 ml de lait de coco crémeux',
      '150 g de jeunes pousses d\'épinards',
      'Coriandre fraîche pour le service'
    ],
    steps: [
      'Faire revenir l\'échalote et l\'ail dans un filet d\'huile d\'olive.',
      'Ajouter le curry doux et mélanger 1 minute.',
      'Verser les lentilles corail, la pulpe de tomates et 300 ml d\'eau.',
      'Laisser mijoter à feu moyen pendant 15 minutes en remuant de temps en temps.',
      'Incorporer le lait de coco et les pousses d\'épinards qui fondent en 2 minutes.',
      'Servir bien chaud parsemé de coriandre fraîche.'
    ],
    chefTip: 'Les lentilles corail sont les plus faciles à digérer de la famille des légumineuses, parfaites pour les intestins délicats.'
  },
  {
    id: 'rec-7',
    title: 'Crumble Rustique Pomme-Noisette sans Sucre Raffiné',
    category: 'dessert',
    categoryLabel: 'Douceurs & Desserts',
    prepTime: '15 min',
    cookTime: '25 min',
    difficulty: 'Très facile',
    benefits: 'Pectine bienfaisante des pommes compotées et bons lipides de la noisette',
    description: 'Toute la gourmandise du crumble traditionnel réinventée avec de la farine d\'avoine, de la poudre de noisettes torréfiées et des pommes acidulées à la cannelle.',
    image: chiaImg,
    ingredients: [
      '4 pommes Reine des Reinettes ou Boskoop',
      '60 g de poudre de noisettes bio',
      '50 g de flocons d\'avoine petits',
      '2 c. à soupe d\'huile de coco vierge fondue (ou purée d\'amande)',
      '1 c. à soupe de sirop d\'érable pur',
      '1 c. à café de cannelle de Ceylan'
    ],
    steps: [
      'Préchauffer le four à 180 °C.',
      'Éplucher et couper les pommes en cubes. Les mélanger avec la cannelle et les déposer dans un plat à four.',
      'Dans un saladier, sabler du bout des doigts la poudre de noisettes, les flocons d\'avoine, l\'huile de coco et le sirop d\'érable.',
      'Répartir cette pâte sablée sur les pommes.',
      'Enfourner 25 minutes jusqu\'à ce que le crumble soit doré et que les fruits compotent au fond du plat.'
    ],
    chefTip: 'La cannelle de Ceylan aide naturellement à réguler la réponse insulinique après le repas.'
  },
  {
    id: 'rec-8',
    title: 'Golden Latte Réconfortant aux Épices Douces & Lait d\'Avoine',
    category: 'snack',
    categoryLabel: 'Boissons & Collations',
    prepTime: '5 min',
    cookTime: '3 min',
    difficulty: 'Très facile',
    benefits: 'Boisson chaude protectrice ancestrale, apaisante pour le système nerveux',
    description: 'Une mousse dorée et veloutée au curcuma, gingembre, pointe de cannelle et lait d\'avoine crémeux. Parfait au goûter ou avant de se coucher.',
    image: soupImg,
    ingredients: [
      '250 ml de boisson d\'avoine barista sans sucre ajouté',
      '1/2 c. à café de curcuma moulu de qualité',
      '1 pincée de gingembre en poudre',
      '1 pincée de cannelle de Ceylan',
      '1 tour de moulin de poivre noir (essentiel pour la curcumine)',
      '1/2 c. à café d\'huile de coco vierge ou miel doux'
    ],
    steps: [
      'Faire chauffer doucement le lait d\'avoine dans une petite casserole sans faire bouillir.',
      'Ajouter toutes les épices et l\'huile de coco.',
      'Fouetter vivement au petit fouet à lait pour créer une mousse crémeuse aérienne.',
      'Verser dans votre tasse préférée et savourer lentement.'
    ],
    chefTip: 'La micro-goutte de matière grasse (huile de coco) permet d\'extraire et d\'assimiler au mieux la curcumine.'
  }
];
