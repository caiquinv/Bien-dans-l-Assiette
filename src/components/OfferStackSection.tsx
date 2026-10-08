import React from 'react';
import { ShieldCheck, ArrowRight, Lock, Sparkles, Check, CheckCircle2 } from 'lucide-react';
import { SALES_CONFIG } from '../config/salesConfig';
import ebookCover from '../assets/images/ebook_bundle_cover_1791431064879.jpg';

interface OfferStackSectionProps {
  onOpenCheckout: () => void;
}

export const OfferStackSection: React.FC<OfferStackSectionProps> = ({ onOpenCheckout }) => {
  const offerItems = [
    { title: `Livre Numérique : ${SALES_CONFIG.product.name}`, price: "47,00 €" },
    { title: "Bonus 1 — 28 Jours de Menus : 4 Semaines Organisées Clé-en-Main", price: "19,90 €" },
    { title: "Bonus 2 — Placard Intelligent + 60 Substitutions Saines", price: "14,90 €" },
    { title: "Bonus 3 — Batch Cooking Express : Cuisinez 1 Fois pour la Semaine", price: "17,90 €" },
    { title: "Bonus 4 — 30 Sauces, Vinaigrettes & Dips Bienfaisants", price: "9,90 €" },
    { title: "Mises à jour futures du recueil incluses à vie", price: "Offert", highlight: true },
    { title: "Accès immédiat et illimité par e-mail (Mobile, Tablette, PC)", price: "Offert", highlight: true },
  ];

  return (
    <section id="offre" className="bg-[#4E683C] text-white py-16 md:py-24 relative overflow-hidden">
      {/* Background glow & subtle grain */}
      <div className="absolute inset-0 bg-radial-gradient from-[#5D7C49]/40 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Ribbon */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#3B502D] text-[#D8EEB0] text-xs font-bold uppercase tracking-wider border border-[#5E7E48] mb-3">
            Offre de Lancement Limitée : Plus de {SALES_CONFIG.product.discountPercent}% de réduction
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-serif-display">
            OBTENEZ VOTRE PACK COMPLET AU MEILLEUR TARIF
          </h2>
        </div>

        {/* The White High-Converting Offer Box */}
        <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-[#3D522F] max-w-2xl mx-auto">
          {/* Mockup in Offer Box */}
          <div className="w-full max-w-xs mx-auto mb-6">
            <img
              src={ebookCover}
              alt={`Pack ${SALES_CONFIG.product.name} et ses 4 Bonus`}
              className="w-full h-auto rounded-xl shadow-lg border border-slate-200"
            />
          </div>

          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif-display">
              AUJOURD'HUI, VOUS RECEVEZ TOUT CECI :
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Un recueil complet et ses 4 guides pratiques immédiatement téléchargeables
            </p>
          </div>

          {/* Breakdown checklist table */}
          <div className="divide-y divide-slate-100 text-xs sm:text-sm mb-6 bg-[#F9FAF7] rounded-xl p-4 sm:p-5 border border-[#E4EAD9]">
            {offerItems.map((item, idx) => (
              <div key={idx} className="py-2.5 flex items-center justify-between gap-3 first:pt-0 last:pb-0">
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#E5F0D9] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#4E683C] stroke-[3]" />
                  </div>
                  <span className={`leading-snug ${item.highlight ? 'text-[#3E552F] font-semibold' : 'text-slate-800'}`}>
                    {item.title}
                  </span>
                </div>
                <span className={`font-mono font-bold shrink-0 text-right ${item.highlight ? 'text-[#4E683C] uppercase text-xs' : 'text-slate-500'}`}>
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          {/* Total Value Crossed Out */}
          <div className="flex items-center justify-between px-2 text-xs sm:text-sm text-slate-600 mb-6 pb-4 border-b border-slate-200">
            <span className="font-semibold">Valeur totale réelle du pack :</span>
            <span className="text-base font-bold line-through text-slate-500 font-mono">
              109,60 €
            </span>
          </div>

          {/* Special Price Callout */}
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4E683C] block mb-1">
              AUJOURD'HUI SEULEMENT, POUR SEULEMENT :
            </span>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl sm:text-5xl md:text-6xl font-black text-[#26371D] tracking-tight font-serif-display">
                {SALES_CONFIG.product.priceCurrentFormatted}
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#26371D]">
                {SALES_CONFIG.product.currencySymbol}
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold mt-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Dernières copies numériques disponibles à ce tarif de lancement</span>
            </div>
          </div>

          {/* Primary CTA Button */}
          <div className="space-y-3">
            <button
              onClick={onOpenCheckout}
              className="w-full py-4 px-6 text-base sm:text-lg md:text-xl font-extrabold text-[#111C0C] bg-gradient-to-r from-[#B9E976] via-[#A6DE5E] to-[#92CF47] hover:from-[#C7EE8A] hover:to-[#A4DF55] rounded-xl shadow-xl shadow-[#4E683C]/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 border-b-4 border-[#689B31] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <CheckCircle2 className="w-5 h-5 text-[#243B14]" />
              <span>JE VEUX ACCÉDER AU LIVRE MAINTENANT</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <p className="text-center text-[11px] sm:text-xs text-slate-500">
              Accès immédiat par e-mail · Paiement unique sans abonnement caché
            </p>
          </div>

          {/* Security Features */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#4E683C]" />
              <span>Paiement sécurisé SSL</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#4E683C]" />
              <span>Garantie 15 jours satisfait ou remboursé</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#4E683C]" />
              <span>Données 100 % protégées</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
