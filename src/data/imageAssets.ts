import type { LocalImageSrc } from "@/types/content";

type AssetFileName = `${string}.${string}`;

function createImageCatalog<const T extends Record<string, AssetFileName>>(
  directory: `/images/${string}`,
  files: T
) {
  return Object.freeze(
    Object.fromEntries(
      Object.entries(files).map(([key, fileName]) => [key, `${directory}/${fileName}` as LocalImageSrc])
    ) as { readonly [K in keyof T]: LocalImageSrc }
  );
}

// Register local image files here so content data stays free of raw path strings.
export const thumbnailAssets = createImageCatalog("/images/thumbnail", {
  nugulmon1: "nugulmon_1.jpg",
  nugulmon2: "nugulmon_2.jpg",
  nugulmon3: "nugulmon_3.jpg",
  seoulsungyu1: "seoulsungyu_1.jpg",
  seoulsungyu2: "seoulsungyu_2.jpg",
  seoulsungyu3: "seoulsungyu_3.png",
  nagne1: "nagne_1.png",
  nagne2: "nagne_2.jpg",
  nagne3: "nagne_3.png",
  loony1: "loony_1.png",
  loony2: "loony_2.png",
  loony3: "loony_3.png",
  loony4: "loony_4.png",
  loony5: "loony_5.png",
  loony6: "loony_6.png",
  parkholmes1: "parkholmes_1.jpg",
  parkholmes2: "parkholmes_2.jpg",
  parkholmes3: "parkholmes_3.png",
  parkholmes4: "parkholmes_4.png",
  trot1: "trot_1.jpg",
  trot2: "trot_2.jpg",
  trot3: "trot_3.png",
  neoguri1: "neoguri_1.jpg",
  neoguri2: "neoguri_2.jpg",
  neoguri3: "neoguri_3.png",
  artistNoobMakingFilm: "mRf3-JkwqfU.svg",
  personalMotionGraphic: "personal_1.jpg",
  filePlaceholder: "file-placeholder.svg",
} as const);

export const workPhotoAssets = createImageCatalog("/images/workphotos", {
  work1: "works_1.png",
  work2: "works_2.png",
  work3: "works_3.jpg",
  work4: "works_4.png",
  work5: "works_5.png",
  work6: "works_6.png",
} as const);

export const extraAssets = createImageCatalog("/images/extras", {
  homepage: "extras_1.png",
  blog: "extras_2.png",
  legalAction1: "extras_3.png",
  legalAction2: "extras_4.png",
  legalAction3: "extras_5.png",
  aiSkill1: "extras_6.png",
  aiSkill2: "extras_7.png",
  aiSkill3: "extras_8.png",
  patent1: "patent_0.png",
  patent2: "patent_1.png",
} as const);

export const profileAssets = createImageCatalog("/images/profile", {
  main: "profile.png",
} as const);

export const imageAssets = {
  extras: extraAssets,
  profiles: profileAssets,
  thumbnails: thumbnailAssets,
  workPhotos: workPhotoAssets,
} as const;
