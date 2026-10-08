import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { SALES_CONFIG } from '../config/salesConfig';

interface StickyBottomBarProps {
  onOpenCheckout: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onOpenCheckout }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 650px
      if (window.scrollY > 650) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#162114]/95 backdrop-blur-md border-t border-[#374C30] text-white px-3 sm:px-4 py-2.5 shadow-2xl transition-all duration-300">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Product & Discount */}
        <div className="flex items-center gap-2 truncate">
          <div className="w-7 h-7 rounded-lg bg-[#425C34] flex items-center justify-center shrink-0 text-[#CBE7A1]">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div className="truncate">
            <div className="text-xs sm:text-sm font-bold text-white truncate">
              {SALES_CONFIG.product.name}
            </div>
            <div className="text-[11px] text-[#BFD4B2] flex items-center gap-1.5">
              <span className="font-bold text-[#A7DE66]">
                {SALES_CONFIG.product.priceCurrentFormatted} {SALES_CONFIG.product.currencySymbol}
              </span>
              <span className="line-through text-slate-400">
                {SALES_CONFIG.product.priceOriginal} {SALES_CONFIG.product.currencySymbol}
              </span>
              <span className="hidden sm:inline text-amber-300">
                (-{SALES_CONFIG.product.discountPercent}%)
              </span>
            </div>
          </div>
        </div>

        {/* Right: Quick Action Button */}
        <button
          onClick={onOpenCheckout}
          className="shrink-0 px-4 sm:px-6 py-2 bg-gradient-to-r from-[#AEE068] to-[#8FD147] hover:from-[#BDE87E] hover:to-[#9EDC57] text-[#13200F] font-extrabold text-xs sm:text-sm rounded-lg shadow-md transition-transform active:scale-95 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
        >
          <span>ACCÉDER AU LIVRE</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
