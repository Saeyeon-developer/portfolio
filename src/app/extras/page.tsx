import type { Metadata } from "next";

import { ExtrasArchiveClient } from "@/components/extras/ExtrasArchiveClient";
import { extras } from "@/data/extras";

export const metadata: Metadata = {
  title: "Extras",
  description: "이미지와 텍스트 기반의 추가 아카이브 항목"
};

export default function ExtrasPage() {
  return (
    <div className="space-y-6">
      <section className="panel p-8 sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Extras</h1>
        <p className="mt-3 max-w-2xl text-sm text-ink/70 dark:text-mist/70">
          제작 과정에서 파생된 템플릿, 노트, 실험 기록을 이미지+텍스트 카드로 정리했습니다.
        </p>
      </section>

      <ExtrasArchiveClient items={extras} />
    </div>
  );
}
