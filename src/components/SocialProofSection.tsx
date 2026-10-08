import React from 'react';
import { Star, CheckCircle, Quote, ArrowRight } from 'lucide-react';
import { SALES_CONFIG } from '../config/salesConfig';

interface SocialProofSectionProps {
  onSelectOffer: () => void;
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({ onSelectOffer }) => {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-[#E3E8DC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#4B683B] tracking-widest uppercase mb-2 block">
            RETOURS D'EXPÉRIENCE & AVIS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-serif-display mb-3">
            CELLES ET CEUX QUI ONT TESTÉ LE RECOMMANDENT
          </h2>
          <p className="text-sm text-slate-600">
            Des milliers de personnes constatent déjà une différence sur leur digestion et leur énergie au quotidien.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {SALES_CONFIG.testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#FAFBF8] border border-[#E1E7D8] rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#6C9251] transition-all duration-200"
            >
              <div>
                {/* Header: Stars & Verified Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#405A32] bg-[#EAF2E1] px-2 py-0.5 rounded">
                    <CheckCircle className="w-3 h-3 text-[#587D43]" />
                    <span>Avis vérifié</span>
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                  {t.headline}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-4">
                  {t.quote}
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-3 border-t border-[#EDF2E6] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#E2ECDA] text-[#344E27] font-bold text-xs flex items-center justify-center shrink-0">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {t.age} ans · {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial note for customization */}
        <div className="bg-[#F5F8F1] border border-[#DCE6D2] rounded-xl p-4 text-center text-xs text-[#446036] max-w-2xl mx-auto mb-8">
          <Quote className="w-4 h-4 inline-block mr-1 text-[#668B4F]" />
          <span>Structure prête pour vos retours clients réels (témoignages modifiables simplement dans <code>src/config/salesConfig.ts</code>).</span>
        </div>

        {/* Centered CTA Trigger */}
        <div className="text-center">
          <button
            onClick={onSelectOffer}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#4E683C] hover:bg-[#5E7E49] text-white text-sm font-bold rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>JE VEUX ME SENTIR AUSSI BIEN</span>
            <span className="text-xs font-normal opacity-90">· Seulement {SALES_CONFIG.product.priceCurrentFormatted} € aujourd'hui</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
