"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import { ExtraItem } from "@/types/content";

type LightboxProps = {
  item: ExtraItem | null;
  isOpen: boolean;
  onClose: () => void;
};

export function Lightbox({ item, isOpen, onClose }: LightboxProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = useMemo(() => {
    if (!item) {
      return [] as string[];
    }

    if (item.images && item.images.length > 0) {
      return item.images;
    }

    return item.image ? [item.image] : [];
  }, [item]);

  const imageCount = images.length;
  const currentImage = imageCount > 0 ? images[currentIndex] : null;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setCurrentIndex(0);
  }, [isOpen, item]);

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

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (imageCount > 1 && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
        event.preventDefault();
        if (event.key === "ArrowLeft") {
          setCurrentIndex((prev) => (prev - 1 + imageCount) % imageCount);
        } else {
          setCurrentIndex((prev) => (prev + 1) % imageCount);
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
    getFocusable()[0]?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previous?.focus();
    };
  }, [imageCount, isOpen, onClose]);

  if (!isOpen || !item) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[75] flex items-center justify-center bg-black/85 px-4" onMouseDown={onClose}>
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${item.title} 이미지 확대`}
        className="w-full max-w-5xl rounded-2xl bg-ink/95 p-4 text-mist"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-mist/70">{item.note}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close lightbox"
            className="rounded-full border border-white/25 px-3 py-1.5 text-xs uppercase tracking-[0.12em]"
          >
            Close
          </button>
        </div>

        {currentImage ? (
          <div className="relative h-[75vh] overflow-hidden rounded-xl">
            <Image
              src={currentImage}
              alt={`${item.title} (${currentIndex + 1}/${imageCount})`}
              fill
              sizes="100vw"
              className="object-contain"
            />

            {imageCount > 1 ? (
              <>
                <button
                  type="button"
                  onClick={() => setCurrentIndex((prev) => (prev - 1 + imageCount) % imageCount)}
                  aria-label="이전 이미지"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/65 px-3 py-2 text-xs font-semibold text-white"
                >
                  이전
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentIndex((prev) => (prev + 1) % imageCount)}
                  aria-label="다음 이미지"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/65 px-3 py-2 text-xs font-semibold text-white"
                >
                  다음
                </button>
                <p className="absolute bottom-3 right-3 rounded-full bg-black/65 px-2.5 py-1 text-xs text-white">
                  {currentIndex + 1} / {imageCount}
                </p>
              </>
            ) : null}
          </div>
        ) : (
          <div className="flex h-[75vh] items-center justify-center rounded-xl bg-black/40 px-6 text-center text-sm text-mist/80">
            표시할 이미지가 없습니다. `image` 또는 `images`를 확인해주세요.
          </div>
        )}
      </div>
    </div>
  );
}
