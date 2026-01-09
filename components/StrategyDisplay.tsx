
import React from 'react';
import { InstagramStrategy } from '../types';
import { StrategyCard } from './StrategyCard';
import { UserIcon, EditIcon, CameraIcon, ContentIcon, HashtagIcon, MicIcon, ClockIcon, RocketIcon, QuoteIcon } from './Icons';
import { CopyButton } from './CopyButton';

interface StrategyDisplayProps {
  strategy: InstagramStrategy;
}

export const StrategyDisplay: React.FC<StrategyDisplayProps> = ({ strategy }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
      {/* Column 1 */}
      <div className="flex flex-col gap-6">
        <StrategyCard title="Sahifa Nomi" icon={<UserIcon />}>
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold text-indigo-300">{strategy.pageName}</p>
            <CopyButton textToCopy={strategy.pageName} />
          </div>
        </StrategyCard>
        <StrategyCard title="Bio" icon={<EditIcon />}>
            <div className="space-y-3 whitespace-pre-wrap text-gray-300">
                <p>{strategy.bio}</p>
            </div>
            <div className="text-right mt-2">
                <CopyButton textToCopy={strategy.bio} />
            </div>
        </StrategyCard>
        <StrategyCard title="Profil Rasmi G'oyasi" icon={<CameraIcon />}>
          <p className="text-gray-300">{strategy.profilePhotoIdea}</p>
        </StrategyCard>
        <StrategyCard title="Ovoz Toni va Xarakter" icon={<MicIcon />}>
          <p className="text-gray-300">{strategy.toneOfVoice}</p>
        </StrategyCard>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-6">
        <StrategyCard title="Kontent G'oyalari" icon={<ContentIcon />}>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-indigo-300 mb-2">Postlar:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {strategy.contentStrategy.posts.map((idea, i) => <li key={i}>{idea}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-300 mb-2">Reels:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {strategy.contentStrategy.reels.map((idea, i) => <li key={i}>{idea}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-300 mb-2">Stories:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {strategy.contentStrategy.stories.map((idea, i) => <li key={i}>{idea}</li>)}
              </ul>
            </div>
          </div>
        </StrategyCard>
        <StrategyCard title="Posting Jadvali" icon={<ClockIcon />}>
          <p className="text-gray-300">{strategy.postingSchedule}</p>
        </StrategyCard>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-6">
        <StrategyCard title="Tayyor Matnlar" icon={<QuoteIcon />}>
          <div className="space-y-6">
            {strategy.captions.map((caption, i) => (
              <div key={i} className="p-3 bg-gray-900/50 rounded-lg">
                <h4 className="font-semibold text-indigo-300">{caption.title}</h4>
                <p className="whitespace-pre-wrap text-gray-300 mt-1">{caption.text}</p>
                <div className="text-right mt-2">
                  <CopyButton textToCopy={caption.text} />
                </div>
              </div>
            ))}
          </div>
        </StrategyCard>
        <StrategyCard title="Heshteglar" icon={<HashtagIcon />}>
            <div className="flex flex-wrap gap-2">
                {strategy.hashtags.map((tag, i) => <span key={i} className="bg-gray-700 text-indigo-300 text-sm font-medium px-2.5 py-1 rounded-full">{tag}</span>)}
            </div>
             <div className="text-right mt-4">
                <CopyButton textToCopy={strategy.hashtags.join(' ')} />
            </div>
        </StrategyCard>
        <StrategyCard title="O'sish Maslahatlari" icon={<RocketIcon />}>
          <ul className="list-decimal list-inside space-y-2 text-gray-300">
            {strategy.growthTips.map((tip, i) => <li key={i}>{tip}</li>)}
          </ul>
        </StrategyCard>
      </div>
    </div>
  );
};
