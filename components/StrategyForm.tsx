
import React from 'react';
import { StrategyDetails } from '../types';

interface StrategyFormProps {
  details: StrategyDetails;
  setDetails: React.Dispatch<React.SetStateAction<StrategyDetails>>;
}

const FormField: React.FC<{
  id: keyof StrategyDetails;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}> = ({ id, label, placeholder, value, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-indigo-300 mb-2">
      {label}
    </label>
    <textarea
      id={id}
      name={id}
      rows={2}
      className="w-full bg-gray-900/50 border-2 border-gray-700 rounded-lg p-3 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 placeholder-gray-500"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export const StrategyForm: React.FC<StrategyFormProps> = ({ details, setDetails }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDetails(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-center text-indigo-300 mb-5">
        1-qadam: Sahifa ma'lumotlarini kiriting
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="niche"
          label="ASOSIY YO'NALISH (NICHE)"
          placeholder="Masalan: Forex trading, Motivatsiya, IT dasturlash..."
          value={details.niche}
          onChange={handleChange}
        />
        <FormField
          id="targetAudience"
          label="MAQSADLI AUDITORIYA"
          placeholder="Masalan: 18–30 yoshlar, boshlovchi traderlar, talabalar..."
          value={details.targetAudience}
          onChange={handleChange}
        />
        <FormField
          id="goal"
          label="SAHIFANING MAQSADI"
          placeholder="Masalan: Shaxsiy brend yaratish, xizmat sotish..."
          value={details.goal}
          onChange={handleChange}
        />
        <FormField
          id="style"
          label="USLUB VA TON"
          placeholder="Masalan: Professional, do'stona, motivatsion, minimalist..."
          value={details.style}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
