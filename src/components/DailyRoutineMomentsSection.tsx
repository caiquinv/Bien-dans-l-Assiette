import React from 'react';
import { SunMedium, Sunrise, Moon, Cookie, Coffee, Sparkles, HeartHandshake, Compass, Flame } from 'lucide-react';

export const DailyRoutineMomentsSection: React.FC = () => {
  const moments = [
    {
      title: "Petits-déjeuners énergisants",
      desc: "Commencez la journée avec une énergie stable, sans pic de sucre ni fringale à 10 heures.",
      icon: <Sunrise className="w-5 h-5 text-[#4E683C]" />
    },
    {
      title: "Déjeuners nourrissants",
      desc: "Des repas légers, rassasiants et complets qui vous évitent le coup de barre de 14 heures.",
      icon: <SunMedium className="w-5 h-5 text-[#4E683C]" />
    },
    {
      title: "Dîners réconfortants",
      desc: "Soupes, currys doux et mijotés légers pour apaiser la digestion et préparer un sommeil serein.",
      icon: <Moon className="w-5 h-5 text-[#4E683C]" />
    },
    {
      title: "Snacks sains & express",
      desc: "Pour vos petites faims entre les repas, avec des ingrédients nutritifs faciles à emporter.",
      icon: <Cookie className="w-5 h-5 text-[#4E683C]" />
    },
    {
      title: "Boissons bienfaisantes",
      desc: "Golden lattes onctueux, smoothies aux fruits rouges et infusions digestives aux herbes.",
      icon: <Coffee className="w-5 h-5 text-[#4E683C]" />
    },
    {
      title: "Desserts équilibrés",
      desc: "Des douceurs préparées avec des édulcorants naturels et des farines complètes, sans frustration.",
      icon: <Sparkles className="w-5 h-5 text-[#4E683C]" />
    }
  ];

  const mindsetCards = [
    {
      title: "Énergie au quotidien",
      desc: "Une alimentation adaptée aide à maintenir des niveaux d'énergie plus stables tout au long de vos journées.",
      icon: <Flame className="w-5 h-5 text-amber-500" />
    },
    {
      title: "Des choix conscients",
      desc: "De petits ajustements progressifs peuvent créer une vraie différence sur votre bien-être général, sans bouleverser votre rythme.",
      icon: <Compass className="w-5 h-5 text-[#4E683C]" />
    },
    {
      title: "Des habitudes durables",
      desc: "Les recettes simples sont plus faciles à intégrer dans la durée, loin des régimes éphémères et contraignants.",
      icon: <HeartHandshake className="w-5 h-5 text-emerald-600" />
    }
  ];

  return (
    <section className="bg-[#FAFBF7] py-16 md:py-24 border-b border-[#E3E8DC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section 1: Moments of the day */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#4B683B] tracking-widest uppercase mb-2 block">
            CE QUE VOUS ALLEZ TROUVER
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-serif-display mb-3">
            DES RECETTES POUR TOUS LES MOMENTS DE LA JOURNÉE
          </h2>
          <p className="text-sm text-slate-600">
            Classées par moment et par type de préparation pour vous permettre de trouver la recette idéale en quelques secondes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-20">
          {moments.map((m, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border border-[#E3E8DB] shadow-xs flex items-start gap-3.5 hover:border-[#6C9251] transition-colors"
            >
              <div className="p-2 rounded-lg bg-[#F0F5EC] shrink-0">
                {m.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {m.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section 2: Mindset / Vitality Callout */}
        <div className="bg-[#F0F4EC] rounded-2xl p-7 sm:p-10 border border-[#D7E3D0]">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#4B683B] tracking-wider uppercase mb-1 block">
              POURQUOI PRENDRE LE PAS AUJOURD'HUI
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif-display mb-2">
              SAVIEZ-VOUS QUE L'ALIMENTATION JOUE UN RÔLE CLÉ DANS VOTRE VITALITÉ ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              De petites décisions, répétées chaque jour, font une réelle différence avec le temps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {mindsetCards.map((mc, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-[#DDE7D6] text-center flex flex-col items-center"
              >
                <div className="w-10 h-10 rounded-full bg-[#F5F8F2] flex items-center justify-center mb-3">
                  {mc.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                  {mc.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {mc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
