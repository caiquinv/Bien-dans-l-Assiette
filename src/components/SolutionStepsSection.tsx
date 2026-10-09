import React from 'react';
import { SALES_CONFIG } from '../config/salesConfig';
import { ChevronRight } from 'lucide-react';

export const SolutionStepsSection: React.FC = () => {
  const steps = [
    {
      num: '1',
      word: 'Choisissez',
      img: '/src/assets/images/step_choose_1791511774946.webp',
      alt: 'Sélectionner une recette sur téléphone',
      caption: 'Parmi 250 idées classées.',
    },
    {
      num: '2',
      word: 'Vérifiez',
      img: '/src/assets/images/step_verify_1791511785609.webp',
      alt: 'Liste de courses et légumes frais',
      caption: 'Ingrédients simples du quotidien.',
    },
    {
      num: '3',
      word: 'Cuisinez',
      img: '/src/assets/images/step_cook_1791511794061.webp',
      alt: 'Plat chaud servi à table',
      caption: 'Prêt en moins de 25 min.',
    },
  ];

  return (
    <section className="bg-white text-slate-900 py-10 sm:py-14 px-4 border-b border-[#E1E7D8]">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-display leading-tight mb-6 text-balance">
          {SALES_CONFIG.solutionSteps.title}
        </h2>

        {/* Horizontal scroll strip on mobile with snap and visual arrows */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 sm:pb-0 sm:grid sm:grid-cols-3 sm:gap-4 no-scrollbar snap-x snap-mandatory">
          {steps.map((step, idx) => (
            <React.Fragment key={step.num}>
              <div className="min-w-[190px] sm:min-w-0 flex-1 snap-center bg-[#FAFBF8] rounded-2xl p-3 border border-[#E2EAD9] shadow-xs flex flex-col items-center text-center">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-2.5 bg-[#EAEFE3]">
                  <img
                    src={step.img}
                    alt={step.alt}
                    width={400}
                    height={400}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 w-6 h-6 rounded-full bg-[#2D3E1E] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-[#2D3E1E] font-serif-display mb-0.5">
                  {step.word}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-snug">
                  {step.caption}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden sm:hidden items-center justify-center text-[#4E683C] shrink-0">
                  <ChevronRight className="w-5 h-5" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
