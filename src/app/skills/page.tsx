import type { Metadata } from "next";

import { SkillTabs } from "@/components/skills/SkillTabs";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "Editing, Motion, Design, Dev, Content 스킬 구성"
};

export default function SkillsPage() {
  return (
    <div className="space-y-6">
      <section className="panel p-8 sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills</h1>
        <p className="mt-3 max-w-2xl text-sm text-ink/70 dark:text-mist/70">
          실제 업무를 진행하면서 반복적으로 사용하였던 기술 스택입니다. 특히 현재도 사용하고 있는 것들만 기재하였습니다.
        </p>
      </section>

      <SkillTabs groups={skills} />

      <section className="grid gap-4 md:grid-cols-2">
        {skills.map((group) => (
          <article key={group.category} className="panel p-5">
            <h2 className="text-lg font-semibold">{group.category}</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={`${group.category}-${item}`} className="rounded-full bg-pine/10 px-3 py-1 text-sm text-pine dark:bg-pine/30 dark:text-mist">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}
