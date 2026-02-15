"use client";

import { ChannelRole } from "@/types/content";

type ChannelFiltersProps = {
  search: string;
  onSearchChange: (value: string) => void;
  selectedRole: ChannelRole | "all";
  onRoleChange: (role: ChannelRole | "all") => void;
  sort: "recommended" | "latest" | "performance";
  onSortChange: (sort: "recommended" | "latest" | "performance") => void;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
  roles: ChannelRole[];
};

export function ChannelFilters({
  search,
  onSearchChange,
  selectedRole,
  onRoleChange,
  sort,
  onSortChange,
  viewMode,
  onViewModeChange,
  roles
}: ChannelFiltersProps) {
  return (
    <section className="panel space-y-5 p-5">
      <label className="block">
        <span className="mb-2 block text-sm font-semibold">검색</span>
        <input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="채널명, 설명 검색"
          aria-label="채널 검색"
          className="w-full rounded-xl border border-black/10 bg-white/90 px-3 py-2 text-sm outline-none ring-sunset/40 transition focus:ring-2 dark:border-white/20 dark:bg-white/5"
        />
      </label>

      <div>
        <p className="mb-2 text-sm font-semibold">역할 필터(단일 선택)</p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => onRoleChange("all")}
            className={`rounded-full border px-3 py-1 text-xs font-medium ${
              selectedRole === "all"
                ? "border-sunset bg-sunset text-white"
                : "border-black/15 bg-white/70 dark:border-white/20 dark:bg-white/5"
            }`}
          >
            All
          </button>
          {roles.map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => onRoleChange(role)}
              aria-label={`${role} 역할 필터`}
              className={`rounded-full border px-3 py-1 text-xs font-medium ${
                selectedRole === role
                  ? "border-sunset bg-sunset text-white"
                  : "border-black/15 bg-white/70 dark:border-white/20 dark:bg-white/5"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm font-semibold">
            정렬
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(event) => onSortChange(event.target.value as "recommended" | "latest" | "performance")}
            className="rounded-lg border border-black/15 bg-white/90 px-2.5 py-1.5 text-sm dark:border-white/20 dark:bg-white/5"
            aria-label="정렬 옵션"
          >
            <option value="recommended">추천</option>
            <option value="latest">최신</option>
            <option value="performance">성과</option>
          </select>
        </div>

        <div className="flex gap-2" role="group" aria-label="카드 뷰 모드">
          <button
            type="button"
            onClick={() => onViewModeChange("grid")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
              viewMode === "grid" ? "bg-pine text-white" : "bg-black/5 dark:bg-white/10"
            }`}
          >
            Grid
          </button>
          <button
            type="button"
            onClick={() => onViewModeChange("list")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
              viewMode === "list" ? "bg-pine text-white" : "bg-black/5 dark:bg-white/10"
            }`}
          >
            List
          </button>
        </div>
      </div>
    </section>
  );
}
