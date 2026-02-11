type BaseMediaItem = {
  title: string;
  thumbnail: string;
  date?: string;
  note?: string;
  contribution?: string;
};

export type YouTubeItem = BaseMediaItem & {
  type: "youtube";
  src: string;
};

export type FileItem = BaseMediaItem & {
  type: "file";
  src: string;
};

export type PictureItem = BaseMediaItem & {
  type: "picture";
  // Backward-compatible single source. Used when images is omitted.
  src: string;
  // Multi-image source list for carousel in modal.
  images?: string[];
};

export type VideoItem = YouTubeItem | FileItem | PictureItem;

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
