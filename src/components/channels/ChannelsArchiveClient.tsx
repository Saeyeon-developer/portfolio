"use client";

import { useMemo, useState } from "react";

import { ChannelCard } from "@/components/channels/ChannelCard";
import { ChannelFilters } from "@/components/channels/ChannelFilters";
import { VideoModal } from "@/components/channels/VideoModal";
import { Channel, ChannelRole, ChannelTag, VideoItem } from "@/types/content";

type ChannelsArchiveClientProps = {
  channels: Channel[];
  tags: ChannelTag[];
  roles: ChannelRole[];
};

export function ChannelsArchiveClient({ channels, tags, roles }: ChannelsArchiveClientProps) {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<ChannelTag[]>([]);
  const [selectedRole, setSelectedRole] = useState<ChannelRole | "all">("all");
  const [sort, setSort] = useState<"recommended" | "latest" | "performance">("recommended");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const filtered = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    const filteredChannels = channels.filter((channel) => {
      const bySearch =
        keyword.length === 0 ||
        channel.title.toLowerCase().includes(keyword) ||
        channel.summary.toLowerCase().includes(keyword) ||
        channel.tags.some((tag) => tag.toLowerCase().includes(keyword));

      const byTags =
        selectedTags.length === 0 || selectedTags.some((tag) => channel.tags.includes(tag));

      const byRole = selectedRole === "all" || channel.role === selectedRole;

      return bySearch && byTags && byRole;
    });

    return filteredChannels.sort((a, b) => {
      if (sort === "latest") {
        return b.updatedAt.localeCompare(a.updatedAt);
      }
      if (sort === "performance") {
        return b.performanceScore - a.performanceScore;
      }
      return a.recommendedRank - b.recommendedRank;
    });
  }, [channels, search, selectedTags, selectedRole, sort]);

  const toggleTag = (tag: ChannelTag) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]));
  };

  return (
    <>
      <ChannelFilters
        search={search}
        onSearchChange={setSearch}
        selectedTags={selectedTags}
        onToggleTag={toggleTag}
        selectedRole={selectedRole}
        onRoleChange={setSelectedRole}
        sort={sort}
        onSortChange={setSort}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        tags={tags}
        roles={roles}
      />

      <p className="mt-4 text-sm text-ink/70 dark:text-mist/70">총 {filtered.length}개 채널</p>

      {filtered.length === 0 ? (
        <div className="panel mt-4 p-8 text-center text-sm text-ink/70 dark:text-mist/70">
          검색 조건에 맞는 채널이 없습니다.
        </div>
      ) : (
        <section className={`mt-4 grid gap-4 ${viewMode === "grid" ? "md:grid-cols-2" : "grid-cols-1"}`}>
          {filtered.map((channel) => (
            <ChannelCard
              key={channel.slug}
              channel={channel}
              viewMode={viewMode}
              onPlay={(currentChannel) => setSelectedVideo(currentChannel.videos[0])}
            />
          ))}
        </section>
      )}

      <VideoModal isOpen={Boolean(selectedVideo)} video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </>
  );
}
