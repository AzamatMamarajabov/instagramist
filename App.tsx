
import React, { useState, useCallback } from 'react';
import { InstagramStrategy, StrategyDetails } from './types';
import { generateInstagramStrategy } from './services/geminiService';
import { StrategyForm } from './components/StrategyForm';
import { StrategyDisplay } from './components/StrategyDisplay';
import { LoadingSkeleton } from './components/LoadingSkeleton';
import { SparklesIcon } from './components/Icons';

const App: React.FC = () => {
  const [strategyDetails, setStrategyDetails] = useState<StrategyDetails>({
    niche: '',
    targetAudience: '',
    goal: '',
    style: '',
  });
  const [strategy, setStrategy] = useState<InstagramStrategy | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // FIX: Explicitly check if the field is a string before calling .trim() to satisfy TypeScript's type checker for `Object.values`.
  const allFieldsFilled = Object.values(strategyDetails).every(field => typeof field === 'string' && field.trim() !== '');

  const handleGenerateStrategy = useCallback(async () => {
    if (!allFieldsFilled) {
      setError("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setStrategy(null);

    try {
      const result = await generateInstagramStrategy(strategyDetails);
      setStrategy(result);
    } catch (err) {
      console.error(err);
      setError("Strategiya yaratishda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring.");
    } finally {
      setIsLoading(false);
    }
  }, [strategyDetails, allFieldsFilled]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight flex items-center justify-center gap-3">
            <span className="text-indigo-400">Uzbek</span> Insta-Strategist
            <SparklesIcon className="w-8 h-8 text-yellow-400" />
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Instagram sahifangiz uchun sun'iy intellekt yordamida to'liq strategiya yarating.
          </p>
        </header>

        <main>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-700">
            <StrategyForm
              details={strategyDetails}
              setDetails={setStrategyDetails}
            />

            <div className="mt-8 text-center">
              <button
                onClick={handleGenerateStrategy}
                disabled={isLoading || !allFieldsFilled}
                className="w-full sm:w-auto bg-indigo-600 text-white font-semibold py-3 px-10 rounded-xl hover:bg-indigo-500 disabled:bg-indigo-800 disabled:text-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-indigo-500/50 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              >
                {isLoading ? 'Yaratilmoqda...' : "Strategiya Yaratish"}
              </button>
            </div>
            {error && <p className="text-red-400 text-center mt-4 animate-pulse">{error}</p>}
          </div>

          <div className="mt-10">
            {isLoading && <LoadingSkeleton />}
            {strategy && !isLoading && <StrategyDisplay strategy={strategy} />}
            {!strategy && !isLoading && (
              <div className="text-center py-16 px-6 bg-gray-800/30 rounded-2xl border-2 border-dashed border-gray-700">
                <h2 className="text-2xl font-semibold text-gray-400">Strategiyangiz shu yerda paydo bo'ladi</h2>
                <p className="text-gray-500 mt-2">Boshlash uchun yuqoridagi maydonlarni to'ldiring va tugmani bosing.</p>
              </div>
            )}
          </div>
        </main>
        <footer className="text-center mt-12 text-gray-500 text-sm">
            <p>Azamat Akramov</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
