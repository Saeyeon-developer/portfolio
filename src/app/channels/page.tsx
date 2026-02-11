import type { Metadata } from "next";

import { ChannelsArchiveClient } from "@/components/channels/ChannelsArchiveClient";
import { channelRoles, channels, channelTags } from "@/data/channels";

export const metadata: Metadata = {
  title: "Channels",
  description: "채널 아카이브 검색, 필터, 정렬, 대표작 재생"
};

export default function ChannelsPage() {
  return (
    <div className="space-y-6">
      <section className="panel p-8 sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Channels Archive</h1>
        <p className="mt-3 max-w-2xl text-sm text-ink/70 dark:text-mist/70">
          검색, 태그/역할 필터, 정렬, 카드 뷰 전환으로 채널을 탐색하고 대표작을 바로 재생할 수 있습니다.
        </p>
      </section>

      <ChannelsArchiveClient channels={channels} tags={channelTags} roles={channelRoles} />
    </div>
  );
}
