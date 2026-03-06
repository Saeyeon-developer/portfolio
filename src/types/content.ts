export type LocalImageSrc = `/${string}`;

type BaseMediaItem = {
  title: string;
  thumbnail: LocalImageSrc;
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
  // Supports: absolute URL, /public/videos/... path, or blob:videos/file.mp4 shorthand.
  src: string;
};

export type PictureItem = BaseMediaItem & {
  type: "picture";
  // Backward-compatible single source. Used when images is omitted.
  src: LocalImageSrc;
  // Multi-image source list for carousel in modal.
  images?: LocalImageSrc[];
};

export type VideoItem = YouTubeItem | FileItem | PictureItem;

export type ChannelRole =
  | "Producer"
  | "Editor"
  | "Motion Designer"
  | "Creative Director"
  | "Developer";

export type SkillCategory = "Editing" | "Motion" | "Design" | "AI" | "Content";

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
  updatedAt: string;
  recommendedRank: number;
  performanceScore: number;
  videos: VideoItem[];
};

export type ExtraItem = {
  id: string;
  title: string;
  description: string;
  // Backward-compatible single source. Used when images is omitted.
  image: LocalImageSrc;
  // Multi-image source list for lightbox carousel.
  images?: LocalImageSrc[];
  date: string;
  note: string;
};
