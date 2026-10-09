import React from 'react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="bg-white text-slate-900 py-10 sm:py-14 px-4 border-b border-[#E1E7D8]">
      <div className="max-w-xl mx-auto text-center">
        {/* Large SVG graphic seal: "15 jours · satisfait ou remboursé" */}
        <div className="flex justify-center mb-4">
          <svg
            className="w-24 h-24 sm:w-28 sm:h-28 text-[#2D3E1E] drop-shadow-sm"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Sceau de garantie 15 jours satisfait ou remboursé"
          >
            {/* Outer scallop / starburst seal */}
            <circle cx="60" cy="60" r="56" fill="#F4F8EE" stroke="#A7C986" strokeWidth="2.5" />
            <circle cx="60" cy="60" r="50" fill="#FFFFFF" stroke="#2D3E1E" strokeWidth="1.5" strokeDasharray="3 3" />
            
            {/* Shield in center */}
            <path
              d="M60 26L40 35V56C40 69.5 48.5 82 60 86C71.5 82 80 69.5 80 56V35L60 26Z"
              fill="#2D3E1E"
            />
            {/* Inner check / number */}
            <text
              x="60"
              y="56"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="16"
              fontWeight="900"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              15
            </text>
            <text
              x="60"
              y="68"
              textAnchor="middle"
              fill="#D8ECA8"
              fontSize="9"
              fontWeight="800"
              letterSpacing="1"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              JOURS
            </text>

            {/* Bottom ribbon banner */}
            <rect x="20" y="88" width="80" height="18" rx="9" fill="#2D3E1E" />
            <text
              x="60"
              y="100.5"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="7.5"
              fontWeight="800"
              letterSpacing="0.5"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              SATISFAIT OU REMBOURSÉ
            </text>
          </svg>
        </div>

        {/* Max 2 sentences */}
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif-display leading-tight mb-2">
          Garantie 15 jours
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mx-auto">
          Consultez et testez les 250 recettes chez vous en toute liberté. Un simple e-mail suffit pour être intégralement remboursé sans justification.
        </p>
      </div>
    </section>
  );
};
