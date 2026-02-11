"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import { ExtraItem } from "@/types/content";

type LightboxProps = {
  item: ExtraItem | null;
  isOpen: boolean;
  onClose: () => void;
};

export function Lightbox({ item, isOpen, onClose }: LightboxProps) {
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
    getFocusable()[0]?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previous?.focus();
    };
  }, [isOpen, onClose]);

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

        <div className="relative h-[75vh] overflow-hidden rounded-xl">
          <Image src={item.image} alt={item.title} fill sizes="100vw" className="object-contain" />
        </div>
      </div>
    </div>
  );
}
