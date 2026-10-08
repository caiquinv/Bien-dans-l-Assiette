import React from 'react';
import { Check, ShieldCheck, Download, Smartphone, Star, ArrowRight } from 'lucide-react';
import { SALES_CONFIG } from '../config/salesConfig';
import ebookCover from '../assets/images/ebook_bundle_cover_1791431064879.jpg';

interface HeroSectionProps {
  onOpenCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout }) => {
  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('offre');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenCheckout();
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#2B4022] via-[#334D28] to-[#25371D] text-white pt-10 pb-16 md:pt-14 md:pb-24 border-b border-[#3B542E]">
      {/* Subtle organic pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Kicker Tag */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A2814]/80 text-[#D4E8B7] border border-[#446235] text-xs font-semibold tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#99D25C] animate-pulse"></span>
            {SALES_CONFIG.hero.topBadge}
          </span>
          <div className="flex items-center gap-1 text-xs text-[#D5E4C4]">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="ml-1 font-medium">4.9/5 · Recommandé par +2 400 foyers</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-[#FAFCF8] text-balance mb-5 font-serif-display">
            LES {SALES_CONFIG.product.totalRecipes} RECETTES ANTI-INFLAMMATOIRES QUI RENDENT LE{' '}
            <span className="text-[#D3EEA0] underline decoration-[#7DA658]/40 underline-offset-4">
              MANGER SAIN
            </span>{' '}
            ENFIN FACILE.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#D8E6C8] max-w-2xl mx-auto leading-relaxed">
            {SALES_CONFIG.hero.subHeadline}
          </p>
        </div>

        {/* Trust bullets grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-[#E2EED3] mb-10 max-w-3xl mx-auto">
          {SALES_CONFIG.hero.trustBullets.map((bullet, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-[#1F2F19]/60 px-3 py-1.5 rounded-lg border border-[#3C572D]">
              <div className="w-4 h-4 rounded-full bg-[#7DA658] flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 text-[#142010] stroke-[3]" />
              </div>
              <span className="font-medium">{bullet}</span>
            </div>
          ))}
        </div>

        {/* Hero Visual Mockup & Immediate CTA */}
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <div className="relative w-full max-w-md sm:max-w-lg mb-8 group">
            {/* Soft Ambient Glow */}
            <div className="absolute -inset-4 bg-[#76A44F]/20 rounded-3xl blur-2xl pointer-events-none"></div>

            {/* Mockup Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#52743D] bg-[#1B2915] p-2 transition-transform duration-300 hover:scale-[1.01]">
              <img
                src={ebookCover}
                alt={`Pack complet ${SALES_CONFIG.product.name} sur tablette et livre`}
                className="w-full h-auto rounded-xl object-cover shadow-inner"
                loading="eager"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#142010]/90 backdrop-blur-md border border-[#405C2E] p-3 rounded-xl flex items-center justify-between text-xs text-[#E1EDD2]">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[#A4D56E]" />
                  <span>Format PDF HD adapté mobile, tablette & PC</span>
                </div>
                <span className="font-bold text-[#A4D56E]">+ 4 Bonus Offerts Inclus</span>
              </div>
            </div>
          </div>

          {/* Primary CTA Decision Area */}
          <div className="w-full max-w-xl text-center space-y-4">
            <a
              href="#offre"
              onClick={scrollToOffer}
              className="group relative inline-flex items-center justify-center w-full px-6 py-4 text-base sm:text-lg md:text-xl font-bold text-[#14220F] bg-gradient-to-r from-[#BBE87A] via-[#A8DE60] to-[#96D34B] hover:from-[#C7EE8A] hover:to-[#A4DF55] rounded-xl shadow-xl shadow-[#1B2A15]/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 border-b-4 border-[#689B31]"
            >
              <span className="flex items-center gap-2">
                {SALES_CONFIG.hero.ctaText}
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </a>

            <p className="text-xs sm:text-sm text-[#BFD4AC] flex items-center justify-center gap-2">
              <span>Seulement <strong>{SALES_CONFIG.product.priceCurrentFormatted} {SALES_CONFIG.product.currencySymbol}</strong> aujourd'hui</span>
              <span>·</span>
              <span className="line-through opacity-70">{SALES_CONFIG.product.priceOriginal} {SALES_CONFIG.product.currencySymbol}</span>
              <span>·</span>
              <span>{SALES_CONFIG.hero.ctaSubtext}</span>
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-[#CADBB9]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#A2D26C]" />
                <span>Garantie 15 jours satisfait ou remboursé</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Download className="w-4 h-4 text-[#A2D26C]" />
                <span>Téléchargement immédiat sécurisé</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
