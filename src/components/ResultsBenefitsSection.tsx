import React from 'react';
import { Zap, HeartPulse, Sparkles, Utensils, Smile, Flame } from 'lucide-react';

export const ResultsBenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Zap className="w-5 h-5 text-[#4E683C]" />,
      text: "Plus d'énergie dans la journée"
    },
    {
      icon: <HeartPulse className="w-5 h-5 text-[#4E683C]" />,
      text: "Moins de ballonnements et de lourdeurs"
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#4E683C]" />,
      text: "Une digestion apaisée après chaque repas"
    },
    {
      icon: <Flame className="w-5 h-5 text-[#4E683C]" />,
      text: "Moins d'envies irrépressibles de grignotage"
    },
    {
      icon: <Smile className="w-5 h-5 text-[#4E683C]" />,
      text: "Plus d'équilibre sans sensation de privation"
    },
    {
      icon: <Utensils className="w-5 h-5 text-[#4E683C]" />,
      text: "Des repas simples et rapides pour la vraie vie"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-20 border-b border-[#E3E8DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#4B683B] tracking-widest uppercase mb-2 block">
            LA TRANSFORMATION QUE VOUS RECHERCHEZ
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-serif-display mb-3">
            LES RÉSULTATS QUE LES GENS CONSTATENT
          </h2>
          <p className="text-sm text-slate-600">
            Voici ce que ressentent la plupart des personnes lorsqu'elles commencent à mieux manger avec ce recueil :
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAF5] border border-[#E3E8DC] rounded-xl p-4 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-[#EBF2E4] flex items-center justify-center shrink-0">
                {b.icon}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800">
                {b.text}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[11px] text-slate-400 italic">
          Bénéfices généraux de bien-être. Les résultats varient d'une personne à l'autre selon le mode de vie et la régularité.
        </p>
      </div>
    </section>
  );
};
