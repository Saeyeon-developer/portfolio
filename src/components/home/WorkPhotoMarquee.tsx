import Image from "next/image";

import { WorkPhoto } from "@/data/workPhotos";

type WorkPhotoMarqueeProps = {
  photos: WorkPhoto[];
};

export function WorkPhotoMarquee({ photos }: WorkPhotoMarqueeProps) {
  const repeatedPhotos = [...photos, ...photos];

  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sunset">On Set</p>
          <h2 className="section-title mt-2">실제 작업 모습</h2>
        </div>
      </div>

      <div className="panel group relative overflow-hidden p-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-mist to-transparent dark:from-ink" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-mist to-transparent dark:from-ink" />

        <div className="flex w-max gap-4 animate-marquee-left group-hover:[animation-play-state:paused]">
          {repeatedPhotos.map((photo, index) => (
            <figure
              key={`${photo.id}-${index}`}
              className="relative h-44 w-72 shrink-0 overflow-hidden rounded-xl border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 80vw, 288px"
                className="object-cover"
                priority={index < photos.length}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
