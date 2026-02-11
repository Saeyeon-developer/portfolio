"use client";

import { useState } from "react";

import { ExtrasCard } from "@/components/extras/ExtrasCard";
import { Lightbox } from "@/components/extras/Lightbox";
import { ExtraItem } from "@/types/content";

type ExtrasArchiveClientProps = {
  items: ExtraItem[];
};

export function ExtrasArchiveClient({ items }: ExtrasArchiveClientProps) {
  const [selected, setSelected] = useState<ExtraItem | null>(null);

  return (
    <>
      <section className="space-y-4">
        {items.map((item) => (
          <ExtrasCard key={item.id} item={item} onImageClick={setSelected} />
        ))}
      </section>

      <Lightbox item={selected} isOpen={Boolean(selected)} onClose={() => setSelected(null)} />
    </>
  );
}
