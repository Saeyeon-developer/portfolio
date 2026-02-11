import Image from "next/image";
import Link from "next/link";

import { Channel } from "@/types/content";

type ChannelCardProps = {
  channel: Channel;
  viewMode: "grid" | "list";
  onPlay: (channel: Channel) => void;
};

export function ChannelCard({ channel, viewMode, onPlay }: ChannelCardProps) {
  const representative = channel.videos[0];
  const isPicture = representative.type === "picture";

  return (
    <article
      className={`panel group relative overflow-hidden p-4 ${
        viewMode === "list" ? "flex flex-col gap-4 sm:flex-row" : "flex flex-col"
      }`}
    >
      <Link
        href={`/channels/${channel.slug}`}
        aria-label={`${channel.title} 상세 보기`}
        className="absolute inset-0 z-20 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sunset"
      />

      <div className={`${viewMode === "list" ? "sm:w-72" : "w-full"}`}>
        <div className="relative aspect-video overflow-hidden rounded-xl border border-black/10 dark:border-white/10">
          <Image
            src={representative.thumbnail}
            alt={representative.title}
            fill
            sizes={viewMode === "list" ? "(max-width: 640px) 100vw, 288px" : "(max-width: 768px) 100vw, 50vw"}
            className="object-cover"
          />
          <button
            type="button"
            onClick={() => onPlay(channel)}
            aria-label={`${channel.title} 대표작 ${isPicture ? "보기" : "재생"}`}
            className="absolute inset-x-3 bottom-3 z-30 rounded-lg bg-black/75 px-3 py-2 text-sm font-medium text-white transition hover:bg-black"
          >
            대표작 {isPicture ? "보기" : "1개 재생"}
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">{channel.title}</h3>
            <p className="mt-1 text-sm text-ink/70 dark:text-mist/70">{channel.summary}</p>
          </div>
          <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium dark:border-white/15">
            {channel.role}
          </span>
        </div>

        <ul className="flex flex-wrap gap-2">
          {channel.tags.map((tag) => (
            <li key={tag} className="rounded-full bg-pine/10 px-2.5 py-1 text-xs text-pine dark:bg-pine/30 dark:text-mist">
              #{tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.08em] text-ink/60 dark:text-mist/60">Updated {channel.updatedAt}</p>
          <span className="rounded-full border border-black/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition group-hover:-translate-y-0.5 dark:border-white/20">
            상세 보기
          </span>
        </div>
      </div>
    </article>
  );
}
