import React from 'react';
import { Coffee, UtensilsCrossed, Moon, Cake, Apple } from 'lucide-react';
import { SALES_CONFIG } from '../config/salesConfig';
import salmonImg from '../assets/images/salmon_sweet_potato_1791431076235.jpg';
import soupImg from '../assets/images/turmeric_squash_soup_1791431086146.jpg';
import chiaImg from '../assets/images/chia_breakfast_bowl_1791431095579.jpg';
import chickpeaImg from '../assets/images/mediterranean_chickpea_bowl_1791431104828.jpg';

export const RecipePillarsSection: React.FC = () => {
  const pillars = [
    {
      num: "50",
      title: "Petits-Déjeuners pour commencer avec saveur",
      desc: "Variez vos matins avec de l'avoine complète, des yaourts végétaux aux fruits frais, des tartines au levain et des recettes salées aux œufs et aromates. Des idées sucrées et salées avec les quantités et la préparation étape par étape.",
      badge: "Matin plein d'énergie",
      img: chiaImg,
      icon: <Coffee className="w-4 h-4 text-[#D8EBB8]" />
    },
    {
      num: "50",
      title: "Déjeuners pour renouveler votre menu",
      desc: "Découvrez de nouvelles façons d'associer légumes de saison, légumineuses douces, céréales rustiques, poissons et volailles. Des plats colorés et équilibrés pour profiter d'un bon repas maison sans coup de pompe l'après-midi.",
      badge: "Vitalité & clarté mentale",
      img: chickpeaImg,
      icon: <UtensilsCrossed className="w-4 h-4 text-[#D8EBB8]" />
    },
    {
      num: "50",
      title: "Dîners à savourer à la maison",
      desc: "Veloutés de légumes d'hiver, plats au four aux herbes de Provence et combinaisons douces pour terminer la journée avec un dîner apaisant. Ouvrez le sommaire, choisissez votre recette du soir et suivez les étapes simples.",
      badge: "Digestion sereine pour la nuit",
      img: soupImg,
      icon: <Moon className="w-4 h-4 text-[#D8EBB8]" />
    },
    {
      num: "50",
      title: "Desserts pour votre moment sucré",
      desc: "Crumbles aux pommes rustiques et noisettes, crèmes fondantes au cacao noir, gâteaux moelleux sans farine raffinée. Chaque recette indique ses ingrédients sains, ses substituts et son mode de cuisson.",
      badge: "Gourmandise sans culpabilité",
      img: chiaImg,
      icon: <Cake className="w-4 h-4 text-[#D8EBB8]" />
    },
    {
      num: "50",
      title: "Snacks & Boissons bienfaisantes entre les repas",
      desc: "Goûters sains, tartinades express de légumes, golden lattes réconfortants aux épices douces et thés infusés bienfaisants. Des idées saines pour une pause, un goûter ou un petit réconfort.",
      badge: "Pause bienfaisante",
      img: salmonImg,
      icon: <Apple className="w-4 h-4 text-[#D8EBB8]" />
    }
  ];

  return (
    <section className="bg-[#FAFBF7] py-16 md:py-24 border-b border-[#E2E6DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-[#4B683B] tracking-widest uppercase mb-2 block">
            LE CONTENU DU LIVRE EN DÉTAIL
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-serif-display mb-4 text-balance">
            {SALES_CONFIG.product.totalRecipes} RECETTES POUR REMPLIR VOTRE JOURNÉE DE SAVEUR, DE VARIÉTÉ ET D'INSPIRATION !
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Découvrez une cuisine inspirée de l'alimentation anti-inflammatoire, avec des ingrédients du quotidien et des idées pour tous les repas : petits-déjeuners, déjeuners, dîners, desserts et snacks. Tout est organisé pour choisir et cuisiner facilement.
          </p>
        </div>

        {/* 5 Stacked Visual Cards matching the reference layout */}
        <div className="space-y-6">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-[#D9E1D2] shadow-sm hover:shadow-md transition-all duration-200 grid grid-cols-1 md:grid-cols-12"
            >
              {/* Photo Banner */}
              <div className="md:col-span-5 relative h-48 md:h-auto overflow-hidden bg-slate-100">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#1C2817]/85 backdrop-blur-sm text-white px-2.5 py-1 rounded text-xs font-bold flex items-center gap-1.5">
                  {p.icon}
                  <span>{p.badge}</span>
                </div>
              </div>

              {/* Text Area with Olive Tone Accent */}
              <div className="md:col-span-7 bg-[#4E683C] text-white p-6 sm:p-7 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#D5EEA8]">
                    {p.num}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                    {p.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#DFEBD2] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-slate-500 italic max-w-xl mx-auto">
          Chaque recette comprend une fiche avec illustration, les portions, les temps de préparation et les étapes numérotées. De plus, le sommaire interactif vous emmène en un clic directement à la recette désirée.
        </div>
      </div>
    </section>
  );
};
