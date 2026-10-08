import React from 'react';
import { Zap, HeartPulse, ShoppingBag, Clock, Smile, Sparkles } from 'lucide-react';

export const WhyChangeSection: React.FC = () => {
  const cards = [
    {
      icon: <Zap className="w-5 h-5 text-[#4E703A]" />,
      title: "Plus d'énergie tout au long de la journée",
      text: "Des repas qui vous apportent une vraie vitalité durable au lieu d'une lourdeur digestive qui vous donne envie de faire la sieste."
    },
    {
      icon: <HeartPulse className="w-5 h-5 text-[#4E703A]" />,
      title: "Adieu les ballonnements d'après repas",
      text: "Des associations d'ingrédients sélectionnées pour apaiser l'estomac et préserver un confort intestinal au fil des semaines."
    },
    {
      icon: <ShoppingBag className="w-5 h-5 text-[#4E703A]" />,
      title: "Des ingrédients faciles à trouver",
      text: "Tout s'achète dans votre supermarché habituel ou sur votre marché de quartier. Zéro produit introuvable ou ruineux."
    },
    {
      icon: <Clock className="w-5 h-5 text-[#4E703A]" />,
      title: "Des préparations simples en moins de 25 min",
      text: "Des étapes courtes et limpides pensées pour les personnes actives qui n'ont pas des heures à passer devant les fourneaux."
    },
    {
      icon: <Smile className="w-5 h-5 text-[#4E703A]" />,
      title: "Zéro frustration ni restrictions absurdes",
      text: "Ce n'est pas un régime punitif. Vous dégustez des tartines, gratins, currys et desserts gourmands sans culpabilité."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#4E703A]" />,
      title: "Une variété infinie pour toute la tablée",
      text: "280 recettes pour changer chaque jour. Plus jamais la sensation monotone de manger toujours la même chose."
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-b border-[#E8ECE2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#4E703A] tracking-widest uppercase mb-2 block">
            POURQUOI VOUS ALLEZ L'ADORER
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-serif-display mb-3">
            MIEUX MANGER SANS SACRIFIER LE GOÛT.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Un guide pensé pour s'intégrer naturellement à votre vie quotidienne, sans bouleverser vos habitudes de fond en comble.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cards.map((c, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAF5] rounded-xl p-6 border border-[#E3E8DC] hover:border-[#6C9251] transition-all duration-200 hover:shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-[#EBF2E4] flex items-center justify-center mb-4 border border-[#D5E1CC]">
                {c.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {c.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
