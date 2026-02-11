"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import { VideoModal } from "@/components/channels/VideoModal";
import { Channel, VideoItem } from "@/types/content";

type ChannelDetailClientProps = {
  channel: Channel;
};

export function ChannelDetailClient({ channel }: ChannelDetailClientProps) {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const sortedVideos = useMemo(
    () => channel.videos.slice().sort((a, b) => (b.date || "").localeCompare(a.date || "")),
    [channel.videos]
  );

  return (
    <>
      <section className="panel p-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{channel.title}</h1>
        <p className="mt-3 max-w-3xl text-base text-ink/75 dark:text-mist/75">{channel.description}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-xl border border-black/10 p-4 dark:border-white/10">
            <p className="text-xs uppercase tracking-[0.12em] text-ink/60 dark:text-mist/60">Role</p>
            <p className="mt-2 font-semibold">{channel.role}</p>
          </article>
          <article className="rounded-xl border border-black/10 p-4 dark:border-white/10">
            <p className="text-xs uppercase tracking-[0.12em] text-ink/60 dark:text-mist/60">Period</p>
            <p className="mt-2 font-semibold">{channel.period}</p>
          </article>
          <article className="rounded-xl border border-black/10 p-4 dark:border-white/10 sm:col-span-2">
            <p className="text-xs uppercase tracking-[0.12em] text-ink/60 dark:text-mist/60">KPI</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {channel.kpi.map((item) => (
                <li key={item} className="rounded-full bg-pine/10 px-3 py-1 text-xs text-pine dark:bg-pine/30 dark:text-mist">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="section-title">대표작 리스트</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {sortedVideos.map((video) => (
            <article key={`${video.title}-${video.src}`} className="panel overflow-hidden p-4">
              <button
                type="button"
                onClick={() => setSelectedVideo(video)}
                aria-label={`${video.title} ${video.type === "picture" ? "보기" : "재생"}`}
                className="relative block aspect-video w-full overflow-hidden rounded-xl"
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition hover:scale-[1.02]"
                />
              </button>
              <div className="mt-3 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold">{video.title}</h3>
                  {video.date || video.contribution ? (
                    <p className="text-xs text-ink/60 dark:text-mist/60">
                      {video.date ? <span>{video.date}</span> : null}
                      {video.date && video.contribution ? <span className="mx-1">·</span> : null}
                      {video.contribution ? <span>{video.contribution}</span> : null}
                    </p>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedVideo(video)}
                  className="shrink-0 rounded-full bg-pine px-3 py-1.5 text-xs font-semibold text-white"
                  aria-label={`${video.title} ${video.type === "picture" ? "보기" : "재생"}`}
                >
                  {video.type === "picture" ? "보기" : "재생"}
                </button>
              </div>
              {video.note ? <p className="mt-2 text-sm text-ink/70 dark:text-mist/70">{video.note}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <VideoModal isOpen={Boolean(selectedVideo)} video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </>
  );
}
