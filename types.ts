
export interface InstagramStrategy {
  pageName: string;
  bio: string;
  profilePhotoIdea: string;
  contentStrategy: {
    posts: string[];
    reels: string[];
    stories: string[];
  };
  captions: {
    title: string;
    text: string;
  }[];
  hashtags: string[];
  toneOfVoice: string;
  postingSchedule: string;
  growthTips: string[];
}

export interface StrategyDetails {
  niche: string;
  targetAudience: string;
  goal: string;
  style: string;
}
