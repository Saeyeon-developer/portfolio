"use client";

import Image from "next/image";

import { ExtraItem } from "@/types/content";

type ExtrasCardProps = {
  item: ExtraItem;
  onImageClick?: (item: ExtraItem) => void;
};

export function ExtrasCard({ item, onImageClick }: ExtrasCardProps) {
  return (
    <article className="panel flex flex-col overflow-hidden p-3 sm:flex-row sm:items-stretch sm:gap-4">
      <button
        type="button"
        onClick={() => onImageClick?.(item)}
        className="relative block overflow-hidden rounded-xl border border-black/10 sm:w-64 dark:border-white/10"
        aria-label={`${item.title} 이미지 확대`}
      >
        <div className="relative h-44 w-full">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 100vw, 256px"
            className="object-cover transition hover:scale-105"
          />
        </div>
      </button>

      <div className="mt-3 flex flex-1 flex-col sm:mt-0">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
          <span className="text-xs uppercase tracking-[0.1em] text-ink/60 dark:text-mist/60">{item.date}</span>
        </div>
        <p className="text-sm text-ink/75 dark:text-mist/75">{item.description}</p>
        <p className="mt-3 text-xs text-ink/60 dark:text-mist/60">{item.note}</p>
      </div>
    </article>
  );
}
