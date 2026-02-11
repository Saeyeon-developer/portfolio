import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "포트폴리오 운영자 소개 페이지"
};

export default function AboutPage() {
  return (
    <section className="panel bg-hero-glow p-8 sm:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sunset">About</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">변화하는 시장에 맞춰 끊임없이 공부하는 사람</h1>
      <p className="mt-4 max-w-3xl leading-7 text-ink/80 dark:text-mist/80">
        2020년 1월부터 지금까지 유튜브 크리에이터로 활동하고 있는 &quot;이재원&quot; 입니다. 지난 기간 동안 쌓아왔던 경력들을 이 포트폴리오 홈페이지에 담았습니다.
      </p>
    </section>
  );
}
