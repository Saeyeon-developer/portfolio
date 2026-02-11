export type VideoItem = {
  type: "youtube" | "file";
  title: string;
  thumbnail: string;
  // youtube: videoId or full URL, file: mp4 URL or /public/videos/... path
  src: string;
  date?: string;
  note?: string;
};

export type ChannelTag =
  | "Brand"
  | "Documentary"
  | "Interview"
  | "Shorts"
  | "Tutorial"
  | "Podcast"
  | "Campaign"
  | "Livestream";

export type ChannelRole =
  | "Producer"
  | "Editor"
  | "Motion Designer"
  | "Creative Director"
  | "Developer";

export type SkillCategory = "Editing" | "Motion" | "Design" | "Dev" | "Content";

export type SkillGroup = {
  category: SkillCategory;
  items: string[];
};

export type Channel = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  role: ChannelRole;
  period: string;
  kpi: string[];
  tags: ChannelTag[];
  updatedAt: string;
  recommendedRank: number;
  performanceScore: number;
  videos: VideoItem[];
};

export type ExtraItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  note: string;
};
