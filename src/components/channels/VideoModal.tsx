"use client";

import { useEffect, useRef } from "react";

import { extractYouTubeVideoId } from "@/lib/youtube";
import { VideoItem } from "@/types/content";

type VideoModalProps = {
  isOpen: boolean;
  video: VideoItem | null;
  onClose: () => void;
};

export function VideoModal({ isOpen, video, onClose }: VideoModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previous = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const getFocusable = () => {
      const panel = panelRef.current;
      if (!panel) {
        return [] as HTMLElement[];
      }
      return Array.from(
        panel.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      );
    };

    const initial = getFocusable()[0];
    initial?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = getFocusable();
      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previous?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen || !video) {
    return null;
  }

  const isYouTube = video.type === "youtube";
  const isPicture = video.type === "picture";
  const youtubeId = isYouTube ? extractYouTubeVideoId(video.src) : null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 px-4"
      onMouseDown={onClose}
      aria-hidden={!isOpen}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${video.title} media preview`}
        className="w-full max-w-4xl rounded-2xl bg-ink/95 p-4 text-mist shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold sm:text-lg">{video.title}</h3>
            {video.note ? <p className="text-sm text-mist/70">{video.note}</p> : null}
          </div>
          <button
            type="button"
            aria-label="Close media modal"
            onClick={onClose}
            className="rounded-full border border-white/20 px-3 py-1.5 text-xs uppercase tracking-[0.12em]"
          >
            Close
          </button>
        </div>

        <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-black">
          {isYouTube && youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          ) : isYouTube ? (
            <div className="flex h-full w-full items-center justify-center px-6 text-center text-sm text-mist/80">
              유효한 YouTube 링크(videoId 또는 전체 URL)를 입력해주세요.
            </div>
          ) : isPicture ? (
            <div
              role="img"
              aria-label={video.title}
              className="h-full w-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${video.src})` }}
            />
          ) : (
            <video src={video.src} controls autoPlay playsInline className="h-full w-full" />
          )}
        </div>
      </div>
    </div>
  );
}
