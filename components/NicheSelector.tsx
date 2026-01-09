
import React from 'react';

interface NicheSelectorProps {
  niches: string[];
  selectedNiche: string | null;
  onSelectNiche: (niche: string) => void;
}

export const NicheSelector: React.FC<NicheSelectorProps> = ({ niches, selectedNiche, onSelectNiche }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-center text-indigo-300 mb-5">
        1-qadam: Yo'nalishni tanlang
      </h2>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {niches.map((niche) => (
          <button
            key={niche}
            onClick={() => onSelectNiche(niche)}
            className={`px-4 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300 ease-in-out border-2
              ${selectedNiche === niche
                ? 'bg-indigo-500 border-indigo-400 text-white shadow-lg'
                : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:border-gray-500'
              }`}
          >
            {niche}
          </button>
        ))}
      </div>
    </div>
  );
};
