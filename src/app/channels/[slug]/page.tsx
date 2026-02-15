import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ChannelDetailClient } from "@/components/channels/ChannelDetailClient";
import { channels } from "@/data/channels";

type ChannelDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return channels.map((channel) => ({ slug: channel.slug }));
}

export async function generateMetadata({ params }: ChannelDetailPageProps): Promise<Metadata> {
  const channel = channels.find((item) => item.slug === params.slug);
  if (!channel) {
    return {
      title: "Channel Not Found",
      description: "요청한 채널을 찾을 수 없습니다."
    };
  }

  return {
    title: channel.title,
    description: channel.summary
  };
}

export default function ChannelDetailPage({ params }: ChannelDetailPageProps) {
  const channel = channels.find((item) => item.slug === params.slug);

  if (!channel) {
    notFound();
  }

  return (
    <div className="space-y-8 pb-3">
      <div className="flex justify-end">
        <Link
          href="/channels"
          className="rounded-full border border-black/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] dark:border-white/20"
        >
          다른 채널 보기
        </Link>
      </div>

      <ChannelDetailClient channel={channel} />
    </div>
  );
}
