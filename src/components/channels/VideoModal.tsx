"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import { extractYouTubeVideoId } from "@/lib/youtube";
import { VideoItem } from "@/types/content";

type VideoModalProps = {
  isOpen: boolean;
  video: VideoItem | null;
  onClose: () => void;
};

export function VideoModal({ isOpen, video, onClose }: VideoModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  const isYouTube = video?.type === "youtube";
  const isPicture = video?.type === "picture";
  const pictureSources = useMemo(() => {
    if (!video || video.type !== "picture") {
      return [];
    }

    if (video.images && video.images.length > 0) {
      return video.images;
    }

    return video.src ? [video.src] : [];
  }, [video]);

  const pictureCount = pictureSources.length;
  const currentPicture = pictureCount > 0 ? pictureSources[currentPictureIndex] : null;

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    setCurrentPictureIndex(0);
  }, [isOpen, video]);

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

      if (isPicture && pictureCount > 1 && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
        event.preventDefault();
        if (event.key === "ArrowLeft") {
          setCurrentPictureIndex((prev) => (prev - 1 + pictureCount) % pictureCount);
        } else {
          setCurrentPictureIndex((prev) => (prev + 1) % pictureCount);
        }
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
  }, [isOpen, isPicture, onClose, pictureCount]);

  if (!isOpen || !video) {
    return null;
  }

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
            {video.date || video.contribution ? (
              <p className="text-xs text-mist/70">
                {video.date ? <span>{video.date}</span> : null}
                {video.date && video.contribution ? <span className="mx-1">·</span> : null}
                {video.contribution ? <span>{video.contribution}</span> : null}
              </p>
            ) : null}
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
          ) : isPicture && currentPicture ? (
            <div className="relative h-full w-full">
              <Image
                src={currentPicture}
                alt={`${video.title} (${currentPictureIndex + 1}/${pictureCount})`}
                fill
                sizes="100vw"
                className="object-contain"
              />

              {pictureCount > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentPictureIndex((prev) => (prev - 1 + pictureCount) % pictureCount)
                    }
                    aria-label="이전 이미지"
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/65 px-3 py-2 text-xs font-semibold text-white"
                  >
                    이전
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentPictureIndex((prev) => (prev + 1) % pictureCount)}
                    aria-label="다음 이미지"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/65 px-3 py-2 text-xs font-semibold text-white"
                  >
                    다음
                  </button>
                  <p className="absolute bottom-3 right-3 rounded-full bg-black/65 px-2.5 py-1 text-xs text-white">
                    {currentPictureIndex + 1} / {pictureCount}
                  </p>
                </>
              ) : null}
            </div>
          ) : isPicture ? (
            <div className="flex h-full w-full items-center justify-center px-6 text-center text-sm text-mist/80">
              표시할 이미지가 없습니다. `src` 또는 `images`를 확인해주세요.
            </div>
          ) : (
            <video src={video.src} controls autoPlay playsInline className="h-full w-full" />
          )}
        </div>
      </div>
    </div>
  );
}
