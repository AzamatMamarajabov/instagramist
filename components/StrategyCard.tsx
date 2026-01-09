
import React, { ReactNode } from 'react';

interface StrategyCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export const StrategyCard: React.FC<StrategyCardProps> = ({ title, icon, children }) => {
  return (
    <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg h-full">
      <div className="p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-indigo-400">{icon}</div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
        <div className="text-sm">{children}</div>
      </div>
    </div>
  );
};
