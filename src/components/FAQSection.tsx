import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SALES_CONFIG } from '../config/salesConfig';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-16 md:py-24 border-b border-[#E3E8DC]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1 text-xs font-bold text-[#4B683B] tracking-widest uppercase mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            ENCORE DES QUESTIONS ?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-serif-display mb-3">
            QUESTIONS FRÉQUENTES
          </h2>
          <p className="text-sm text-slate-600">
            Toutes les réponses à vos interrogations avant de commencer votre découverte culinaire.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {SALES_CONFIG.faq.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border border-[#E0E7D8] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-4 sm:p-5 bg-[#FAFBF8] hover:bg-[#F2F6ED] flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 transition-colors cursor-pointer"
                >
                  <span className="leading-snug">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#506D3E] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 bg-[#FAFBF8] text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
