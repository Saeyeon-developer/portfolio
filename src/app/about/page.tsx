import type { Metadata } from "next";
import Image from "next/image";

import { aboutProfile, careerTimeline, resumeHighlights } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description: "포트폴리오 운영자 소개 페이지"
};

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <section className="panel bg-hero-glow p-8 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sunset">About</p>

        <div className="mt-3 grid gap-6 md:grid-cols-[280px_1fr] md:items-start">
          <article className="rounded-2xl border border-black/10 bg-white/70 p-3 dark:border-white/10 dark:bg-white/5">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={aboutProfile.image}
                alt={`${aboutProfile.name} 프로필 사진`}
                width={900}
                height={1125}
                className="h-auto w-full object-cover"
              />
            </div>
            {/* <p className="mt-2 text-xs text-ink/60 dark:text-mist/60">
              프로필 사진 교체: <code>public/images/about-profile.jpg</code> 등으로 변경 후
              <code> src/data/about.ts</code>의 <code>image</code> 값 수정
            </p> */}
          </article>

          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">변화하는 시장에 맞춰 끊임없이 공부하는 사람</h1>
            <p className="mt-4 max-w-3xl leading-7 text-ink/80 dark:text-mist/80">
              작성 중.
            </p>

            <dl className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-black/10 p-3 dark:border-white/10">
                <dt className="text-xs uppercase tracking-[0.12em] text-ink/60 dark:text-mist/60">Name</dt>
                <dd className="mt-1 font-semibold">{aboutProfile.name}</dd>
              </div>
              <div className="rounded-xl border border-black/10 p-3 dark:border-white/10">
                <dt className="text-xs uppercase tracking-[0.12em] text-ink/60 dark:text-mist/60">Role</dt>
                <dd className="mt-1 font-semibold">{aboutProfile.role}</dd>
              </div>
              <div className="rounded-xl border border-black/10 p-3 dark:border-white/10">
                <dt className="text-xs uppercase tracking-[0.12em] text-ink/60 dark:text-mist/60">Location</dt>
                <dd className="mt-1 font-semibold">{aboutProfile.location}</dd>
              </div>
              <div className="rounded-xl border border-black/10 p-3 dark:border-white/10">
                <dt className="text-xs uppercase tracking-[0.12em] text-ink/60 dark:text-mist/60">Contact</dt>
                <dd className="mt-1 font-semibold">{aboutProfile.email}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="panel p-8 sm:p-10">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">간략 경력 및 이력</h2>
        <p className="mt-3 text-sm text-ink/70 dark:text-mist/70">{aboutProfile.tagline}</p>

        <ol className="mt-6 space-y-4">
          {careerTimeline.map((item) => (
            <li key={`${item.period}-${item.title}`} className="rounded-xl border border-black/10 p-4 dark:border-white/10">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sunset">{item.period}</p>
              <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-ink/75 dark:text-mist/75">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="panel p-8 sm:p-10">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">핵심 이력 요약</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {resumeHighlights.map((item) => (
            <li key={item} className="rounded-xl border border-black/10 p-3 text-sm dark:border-white/10">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
