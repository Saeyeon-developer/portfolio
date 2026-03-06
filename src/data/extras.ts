import { ExtraItem } from "@/types/content";
import { createExtraItem } from "@/data/contentBuilders";
import { extraAssets } from "@/data/imageAssets";

export const extras: ExtraItem[] = [
  createExtraItem({
    id: "homepage",
    title: "지금 보시는 홈페이지 역시",
    description:
      "플랫폼이나 템플릿이 아니라 코딩으로 만들어진 개인 홈페이지 입니다.",
    images: [extraAssets.homepage],
    date: "2025-09-01",
    note: "",
  }),
  createExtraItem({
    id: "blog",
    title: "네이버 블로그",
    description:
      "중학교 시절부터 운영하였던 곳이자, 제 인생 첫 번째 크리에이터 생활",
    images: [extraAssets.blog],
    date: "2012-07-12",
    note: "현재는 운영 중단 상태입니다.",
  }),
  createExtraItem({
    id: "legal-action",
    title: "채널 법적 대응",
    description:
      "2026년 초 유튜브 업계 전반적으로 발생한 채널 정지 사태에서 대응한 기록",
    images: [
      extraAssets.legalAction1,
      extraAssets.legalAction2,
      extraAssets.legalAction3,
    ],
    date: "2026-01-20",
    note: "일반적으로는 복구가 어려운 일 입니다만 결국 해냈습니다.",
  }),
  createExtraItem({
    id: "ai-skill",
    title: "AI 기술",
    description: "상용화된 거의 모든 AI를 활용합니다.",
    images: [
      extraAssets.aiSkill1,
      extraAssets.aiSkill2,
      extraAssets.aiSkill3,
    ],
    date: "2026-01-11",
    note: "현재도 공부 진행 중입니다.",
  }),
  createExtraItem({
    id: "patent",
    title: "VR 특허",
    description: "VR 코디네이터 관련 특허 보유",
    images: [extraAssets.patent1, extraAssets.patent2],
    date: "2017-12-12",
    note: "특허청 정보",
  }),
];
