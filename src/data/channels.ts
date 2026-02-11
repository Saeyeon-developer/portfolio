import { Channel, ChannelRole, ChannelTag } from "@/types/content";

export const channelTags: ChannelTag[] = [
  "Brand",
  "Documentary",
  "Interview",
  "Shorts",
  "Tutorial",
  "Podcast",
  "Campaign",
  "Livestream"
];

export const channelRoles: ChannelRole[] = [
  "Producer",
  "Editor",
  "Motion Designer",
  "Creative Director",
  "Developer"
];

export const channels: Channel[] = [
  {
    slug: "nugulmon",
    title: "너굴몬",
    summary: "첫 채널이자 대표 게임 채널",
    description:
      "게임 채널로 시작하여 지금은 브랜디드 콘텐츠 제작과 채널 브랜딩에 포커스를 두고 있습니다.",
    role: "Producer",
    period: "2020.01 - ing",
    kpi: ["총 조회수 3억 7천만", "구독자 40만", "영상 5500개 이상"],
    tags: ["Documentary", "Interview", "Brand"],
    updatedAt: "2025-12-14",
    recommendedRank: 1,
    performanceScore: 97,
    videos: [
      {
        type: "youtube",
        title: "서울 구세군과 함께하는 브랜디드 콘텐츠",
        thumbnail: "/images/thumbnail/nugulmon_1.jpg",
        src: "https://youtu.be/xuNrxcT1mgY?si=kCJ8N_v6_WlRZYBG",
        date: "2026-02-07",
        note: "기여도: 촬영 100%, 편집 100%, 기획 50%"
      },
      {
        type: "file",
        title: "브랜드 협업 티저 컷",
        thumbnail: "/images/thumbnail/file-placeholder.svg",
        src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        date: "2025-10-01"
      }
    ]
  },
  {
    slug: "seoulsungyu",
    title: "술성규",
    summary: "PD로 참여하고 있는 채널",
    description: "PD로서 영상 제작부터 콜라보 진행까지 모든 걸 직접 담당합니다.",
    role: "Producer",
    period: "2023.02 - ing",
    kpi: ["VLOG", "PD로 참여", "인플루언서"],
    tags: ["Campaign", "Shorts", "Brand"],
    updatedAt: "2025-11-30",
    recommendedRank: 2,
    performanceScore: 95,
    videos: [
      {
        type: "youtube",
        title: "15초 모션 캠페인 리캡",
        thumbnail: "/images/thumbnail/ysz5S6PUM-U.svg",
        src: "ysz5S6PUM-U",
        date: "2025-11-30",
      },
      {
        type: "file",
        title: "브랜드 키비주얼 확장 시퀀스",
        thumbnail: "/images/thumbnail/file-placeholder.svg",
        src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        date: "2025-09-10"
      }
    ]
  },
  {
    slug: "creator-podcast-room",
    title: "Creator Podcast Room",
    summary: "크리에이터 인터뷰 팟캐스트와 하이라이트 클립 운영",
    description: "긴 호흡의 토크를 챕터링하고, 클립 재가공으로 유입 경로를 확장했습니다.",
    role: "Editor",
    period: "2023.11 - 2025.10",
    kpi: ["월간 청취자 18만", "클립 전환 유입 31%", "댓글 참여율 6.4%"],
    tags: ["Podcast", "Interview", "Shorts"],
    updatedAt: "2025-10-22",
    recommendedRank: 4,
    performanceScore: 90,
    videos: [
      {
        type: "youtube",
        title: "AI 시대 크리에이터 생존 전략",
        thumbnail: "/images/thumbnail/ScMzIvxBSi4.svg",
        src: "ScMzIvxBSi4",
        date: "2025-10-22"
      },
      {
        type: "youtube",
        title: "클립 하이라이트 묶음",
        thumbnail: "/images/thumbnail/tgbNymZ7vqY.svg",
        src: "tgbNymZ7vqY",
        date: "2025-08-30"
      }
    ]
  },
  {
    slug: "devlog-theatre",
    title: "Devlog Theatre",
    summary: "개발 과정을 스토리텔링으로 편집한 기술 채널",
    description: "튜토리얼 중심의 긴 영상을 시리즈 구조로 기획하고 썸네일/챕터 실험을 진행했습니다.",
    role: "Developer",
    period: "2024.01 - 진행중",
    kpi: ["구독자 4.8만", "평균 재방문율 42%", "강의 전환 매출 월 1,200만원"],
    tags: ["Tutorial", "Livestream", "Documentary"],
    updatedAt: "2025-12-01",
    recommendedRank: 3,
    performanceScore: 93,
    videos: [
      {
        type: "youtube",
        title: "Next.js App Router 실전 구축기",
        thumbnail: "/images/thumbnail/jNQXAC9IVRw.svg",
        src: "jNQXAC9IVRw",
        date: "2025-12-01"
      },
      {
        type: "file",
        title: "강의 프리뷰 컷",
        thumbnail: "/images/thumbnail/file-placeholder.svg",
        src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        date: "2025-09-02"
      }
    ]
  },
  {
    slug: "brand-lab-live",
    title: "Brand Lab Live",
    summary: "라이브 형식으로 진행되는 브랜드 리뷰 및 제작기",
    description: "주간 라이브 운영 프로세스를 구축하고, 라이브 이후 VOD 전환 편집을 담당했습니다.",
    role: "Creative Director",
    period: "2024.05 - 2025.09",
    kpi: ["라이브 평균 동시 시청 3,200", "VOD 전환율 64%", "스폰서 만족도 4.7/5"],
    tags: ["Livestream", "Brand", "Campaign"],
    updatedAt: "2025-09-19",
    recommendedRank: 5,
    performanceScore: 88,
    videos: [
      {
        type: "youtube",
        title: "브랜드 런칭 라이브 하이라이트",
        thumbnail: "/images/thumbnail/mRf3-JkwqfU.svg",
        src: "mRf3-JkwqfU",
        date: "2025-09-19"
      },
      {
        type: "file",
        title: "라이브 오프닝 타이틀",
        thumbnail: "/images/thumbnail/file-placeholder.svg",
        src: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        date: "2025-07-15"
      }
    ]
  },
  {
    slug: "shortform-playbook",
    title: "Shortform Playbook",
    summary: "포맷 테스트를 중심으로 숏폼 제작 실험을 기록",
    description: "동일 원본을 다양한 후킹 구조로 편집해 성과 차이를 검증했습니다.",
    role: "Editor",
    period: "2025.01 - 진행중",
    kpi: ["실험 포맷 52개", "최고 조회수 640만", "평균 도달 성장 180%"],
    tags: ["Shorts", "Tutorial", "Campaign"],
    updatedAt: "2025-12-10",
    recommendedRank: 6,
    performanceScore: 94,
    videos: [
      {
        type: "youtube",
        title: "0.8초 후킹 실험 리포트",
        thumbnail: "/images/thumbnail/aqz-KE-bpKQ.svg",
        src: "aqz-KE-bpKQ",
        date: "2025-12-10"
      },
      {
        type: "file",
        title: "숏폼 자막 템플릿 예시",
        thumbnail: "/images/thumbnail/file-placeholder.svg",
        src: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        date: "2025-11-01"
      }
    ]
  },
  {
    slug: "insight-weekly",
    title: "Insight Weekly",
    summary: "업계 트렌드 인사이트를 주간 브리핑 형태로 전달",
    description: "리서치 자료를 빠르게 시각화하고 주간 리포트 영상 제작 파이프라인을 운영했습니다.",
    role: "Producer",
    period: "2023.09 - 2025.12",
    kpi: ["주간 조회수 평균 22만", "뉴스레터 전환 11%", "평균 완주율 43%"],
    tags: ["Documentary", "Tutorial", "Podcast"],
    updatedAt: "2025-12-05",
    recommendedRank: 7,
    performanceScore: 89,
    videos: [
      {
        type: "youtube",
        title: "2025 콘텐츠 트렌드 TOP10",
        thumbnail: "/images/thumbnail/ysz5S6PUM-U.svg",
        src: "ysz5S6PUM-U",
        date: "2025-12-05"
      },
      {
        type: "youtube",
        title: "포맷 전환 사례 분석",
        thumbnail: "/images/thumbnail/tgbNymZ7vqY.svg",
        src: "tgbNymZ7vqY",
        date: "2025-10-29"
      }
    ]
  },
  {
    slug: "campaign-docs",
    title: "Campaign Docs",
    summary: "브랜드 캠페인 과정을 기록한 비하인드 아카이브",
    description: "캠페인 전개 과정과 성과 데이터를 다큐 시리즈로 재구성했습니다.",
    role: "Creative Director",
    period: "2024.02 - 2025.08",
    kpi: ["캠페인 총 도달 3,400만", "브랜드 검색량 +54%", "재의뢰 9건"],
    tags: ["Campaign", "Documentary", "Brand"],
    updatedAt: "2025-08-22",
    recommendedRank: 8,
    performanceScore: 92,
    videos: [
      {
        type: "youtube",
        title: "런칭 캠페인 메이킹 필름",
        thumbnail: "/images/thumbnail/mRf3-JkwqfU.svg",
        src: "mRf3-JkwqfU",
        date: "2025-08-22"
      },
      {
        type: "file",
        title: "캠페인 버티컬 컷",
        thumbnail: "/images/thumbnail/file-placeholder.svg",
        src: "https://storage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        date: "2025-07-11"
      }
    ]
  }
];

export const featuredChannels = channels
  .slice()
  .sort((a, b) => a.recommendedRank - b.recommendedRank)
  .slice(0, 12);
