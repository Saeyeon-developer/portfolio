"use client";

import { useMemo, useState } from "react";

import { SkillCategory, SkillGroup } from "@/types/content";

type SkillTabsProps = {
  groups: SkillGroup[];
};

export function SkillTabs({ groups }: SkillTabsProps) {
  const [active, setActive] = useState<SkillCategory>(groups[0]?.category ?? "Editing");

  const current = useMemo(
    () => groups.find((group) => group.category === active) ?? groups[0],
    [active, groups]
  );

  if (!current) {
    return null;
  }

  return (
    <div className="panel p-5">
      <div className="mb-4 flex flex-wrap gap-2">
        {groups.map((group) => (
          <button
            key={group.category}
            type="button"
            onClick={() => setActive(group.category)}
            aria-label={`${group.category} skills 보기`}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
              group.category === active
                ? "bg-sunset text-white"
                : "bg-black/5 text-ink hover:bg-black/10 dark:bg-white/10 dark:text-mist dark:hover:bg-white/15"
            }`}
          >
            {group.category}
          </button>
        ))}
      </div>

      <ul className="flex flex-wrap gap-2">
        {current.items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-black/15 bg-white/70 px-3 py-1 text-sm dark:border-white/20 dark:bg-white/5"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
