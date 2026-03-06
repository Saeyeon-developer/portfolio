import type { ExtraItem, LocalImageSrc, PictureItem } from "@/types/content";

type PictureItemInput = Omit<PictureItem, "type" | "thumbnail" | "src"> & {
  image: LocalImageSrc;
  images?: readonly LocalImageSrc[];
};

type ExtraItemInput = Omit<ExtraItem, "image" | "images"> & {
  images: readonly [LocalImageSrc, ...LocalImageSrc[]];
};

export function createPictureItem({
  image,
  images,
  ...item
}: PictureItemInput): PictureItem {
  return {
    ...item,
    type: "picture",
    // Picture entries use the same local asset for both preview and modal source by default.
    thumbnail: image,
    src: image,
    ...(images ? { images: [...images] } : {}),
  };
}

export function createExtraItem({ images, ...item }: ExtraItemInput): ExtraItem {
  return {
    ...item,
    image: images[0],
    images: [...images],
  };
}
