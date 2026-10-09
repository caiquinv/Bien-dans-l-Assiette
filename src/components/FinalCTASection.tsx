import React from 'react';
import { ShieldCheck, Download, Lock, ArrowRight, Sparkles } from 'lucide-react';
import { SALES_CONFIG } from '../config/salesConfig';

interface FinalCTASectionProps {
  onOpenCheckout: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="bg-[#182315] text-white py-16 md:py-24 border-b border-[#2B3B26] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#273822] text-[#CCE5A9] text-xs font-semibold mb-4 border border-[#3E5636]">
          <Sparkles className="w-3.5 h-3.5 text-[#A5DB64]" />
          Accès immédiat dès validation
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 font-serif-display text-balance">
          COMMENCEZ AUJOURD'HUI À MIEUX MANGER ET À RETROUVER VOTRE VITALITÉ
        </h2>

        <p className="text-sm sm:text-base text-[#C6D5BD] max-w-2xl mx-auto mb-8 leading-relaxed">
          <strong>Bien dans l’Assiette</strong> : {SALES_CONFIG.product.totalRecipes} recettes gourmandes et simples conçues pour apporter équilibre, légèreté et plaisir à tous vos repas de la semaine.
        </p>

        {/* CTA Container */}
        <div className="max-w-md mx-auto space-y-3 mb-8">
          <button
            onClick={onOpenCheckout}
            className="w-full py-4 px-6 text-base sm:text-lg font-extrabold text-[#111C0C] bg-gradient-to-r from-[#B9E976] via-[#A6DE5E] to-[#92CF47] hover:from-[#C7EE8A] hover:to-[#A4DF55] rounded-xl shadow-xl shadow-[#10190D]/50 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 border-b-4 border-[#689B31] flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>JE VEUX ACCÉDER À BIEN DANS L’ASSIETTE</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          <div className="text-xs text-[#AFC2A3]">
            Tarif exceptionnel de <strong>{SALES_CONFIG.product.priceCurrentFormatted} {SALES_CONFIG.product.currencySymbol}</strong> (au lieu de {SALES_CONFIG.product.priceOriginal} {SALES_CONFIG.product.currencySymbol}) · Paiement unique
          </div>
        </div>

        {/* Reassurance pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#BAD0B0]">
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-[#9FD860]" />
            <span>Paiement sécurisé</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Download className="w-3.5 h-3.5 text-[#9FD860]" />
            <span>Livraison immédiate</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#9FD860]" />
            <span>Garantie 15 jours</span>
          </div>
        </div>
      </div>
    </section>
  );
};
