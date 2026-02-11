import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { featuredChannels } from "@/data/channels";
import { extras } from "@/data/extras";
import { skills } from "@/data/skills";
import { SkillTabs } from "@/components/skills/SkillTabs";

export const metadata: Metadata = {
  title: "Home",
  description: "채널 아카이브와 대표 작업을 보여주는 포트폴리오 메인 페이지"
};

export default function HomePage() {
  return (
    <div className="space-y-16 pb-4">
      <section className="panel relative overflow-hidden bg-hero-glow p-8 sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sunset">Portfolio Snapshot</p>
        <h1 className="mt-4 max-w text-4xl font-bold tracking-tight sm:text-5xl">
          영상 제작부터 간단한 홈페이지 구현까지 <br />크리에이터 &quot;이재원&quot; 입니다.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-ink/75 dark:text-mist/75">
          채널 운영, 여러 활동, 시장 전략을 중심으로 작업한 대표작들을 아카이브했습니다. 여기에서 제 프로젝트 및 채널별 대표작과 성과를 빠르게 알아보세요.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/channels"
            className="rounded-full bg-pine px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-white"
          >
            Channels
          </Link>
          <Link
            href="/#contact"
            className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] dark:border-white/20"
          >
            Contact
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2 className="section-title">Featured Channels</h2>
          <Link href="/channels" className="text-sm font-semibold text-pine underline-offset-4 hover:underline">
            전체 채널 보기
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredChannels.slice(0, 12).map((channel) => (
            <article key={channel.slug} className="panel overflow-hidden p-3">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={channel.videos[0].thumbnail}
                  alt={channel.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-3 text-lg font-semibold">{channel.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-ink/70 dark:text-mist/70">{channel.summary}</p>
              <Link href={`/channels/${channel.slug}`} className="mt-3 inline-block text-sm font-semibold text-sunset">
                상세 보기 →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title mb-4">Skills Summary</h2>
        <SkillTabs groups={skills} />
      </section>

      <section>
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2 className="section-title">Extras Teaser</h2>
          <Link href="/extras" className="rounded-full bg-sunset px-4 py-2 text-sm font-semibold text-white">
            전체보기
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {extras.slice(0, 3).map((item) => (
            <article key={item.id} className="panel overflow-hidden p-3">
              <Image src={item.image} alt={item.title} width={640} height={256} className="h-40 w-full rounded-lg object-cover" />
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-ink/70 dark:text-mist/70">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
