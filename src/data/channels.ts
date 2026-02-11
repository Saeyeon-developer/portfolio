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
        note: "기부를 동반한 공동구매 프로젝트",
        contribution: "기여도: 촬영 100%, 편집 100%, 기획 50%"
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
        title: "한잔줍쇼 시리즈",
        thumbnail: "/images/thumbnail/seoulsungyu_1.jpg",
        src: "https://youtu.be/u9UzK3JzN4w?si=XOYrZHxuA1NT-i76",
        date: "2024-03-02",
        contribution: "기여도: 촬영 100%, 편집 100%, 썸네일 100% 기획 50%",
        note: "다른 채널보다 훨씬 자유롭고 원하는대로 영상을 제작하는 채널입니다."
      },
      {
        type: "youtube",
        title: "대기업 브랜디드 콘텐츠",
        thumbnail: "/images/thumbnail/seoulsungyu_2.jpg",
        src: "https://www.youtube.com/watch?v=apf474bQozE",
        date: "2025-09-05",
        contribution: "기여도: 촬영 100%, 편집 100%, 썸네일 100% 기획 50%",
        note: "주류 상품이므로 유튜브 연령 제한이 있습니다."
      },
      {
        type: "picture",
        title: "채널 핸들링 인증 메일함",
        thumbnail: "/images/thumbnail/seoulsungyu_3.png",
        src: "/images/thumbnail/seoulsungyu_3.png",
        note: "실제로 여러 대기업들과 콜라보 콘텐츠를 진행하였습니다."
      }
    ]
  },
  {
    slug: "nagne",
    title: "Nagne (나그네)",
    summary: "밈 채널의 퍼포먼스 실험 채널",
    description: "해외 시청자를 대상으로 얼마나 먹힐 수 있는지를 자체 시험하는 프로젝트 채널",
    role: "Editor",
    period: "2021.12 - 2025.12",
    kpi: ["구독자 200만", "총 조회수: 7억"],
    tags: ["Podcast", "Interview", "Shorts"],
    updatedAt: "2021-10-22",
    recommendedRank: 4,
    performanceScore: 90,
    videos: [
      {
        type: "youtube",
        title: "meme 시장의 이해도",
        thumbnail: "/images/thumbnail/nagne_1.png",
        src: "https://youtube.com/shorts/r1SACy3lx-E?si=kdS3DQLEIS38b02j",
        date: "2022-02-03",
        contribution: "기여도: 편집 100%",
      },
      {
        type: "youtube",
        title: "언리얼엔진4까지 활용했던 프로젝트",
        thumbnail: "/images/thumbnail/nagne_2.jpg",
        src: "https://youtu.be/7uxq5dy1e3s?si=TCshUIOd0d0699vP",
        date: "2021-12-14",
        contribution: "기여도: 편집 100%",
      }
    ]
  },
  {
    slug: "loony-bloxy",
    title: "Loony Bloxy",
    summary: "AI 영상 해외 프로젝트",
    description: "AI 기술을 활용하여 운영했던 해외 채널",
    role: "Developer",
    period: "2024.01 - 진행중",
    kpi: ["개설 20일 유효 조회수 1000만 돌파", "수익 창출 1개월만에 성공"],
    tags: ["Tutorial", "Livestream", "Documentary"],
    updatedAt: "2025-12-01",
    recommendedRank: 3,
    performanceScore: 93,
    videos: [
      {
        type: "picture",
        title: "수익 창출 인증",
        thumbnail: "/images/thumbnail/loony_1.png",
        src: "/images/thumbnail/loony_1.png",
        date: "2026-01-30"
      },
      {
        type: "picture",
        title: "중간 성과 지표들",
        thumbnail: "/images/thumbnail/loony_2.png",
        src: "/images/thumbnail/loony_2.png",
        images: ["/images/thumbnail/loony_2.png", "/images/thumbnail/loony_3.png", "/images/thumbnail/loony_4.png"],
        date: "2026-02-02"
      }
    ]
  },
  {
    slug: "parkholmes",
    title: "박홈즈",
    summary: "AI를 활용한 상황극 콘텐츠",
    description: "2025년 세계적으로 브레인롯 붐이 일어났을 때, AI로 시도해본 채널입니다.",
    role: "Creative Director",
    period: "2025.09 - 2026.01",
    kpi: ["수익 창출 90일만에 성공, 구독자 6.5만, 총 조회수 2500만"],
    tags: ["Livestream", "Brand", "Campaign"],
    updatedAt: "2025-09-19",
    recommendedRank: 5,
    performanceScore: 88,
    videos: [
      {
        type: "youtube",
        title: "블록블라스트(게임) 콜라보 콘텐츠",
        thumbnail: "/images/thumbnail/parkholmes_1.jpg",
        src: "https://youtube.com/shorts/5Cm-A5mAMxs?si=Sm9zDFjfcXWIjneF",
        date: "2025-11-28",
        contribution: "기여도: 편집 100%, AI: 100%",
        note: "광고 영상임에도 590만 조회수"
      },
      {
        type: "youtube",
        title: "기본적인 AI 활용",
        thumbnail: "/images/thumbnail/parkholmes_2.jpg",
        src: "https://youtube.com/shorts/oRERVm9naOI?si=-cLTXXRTltRH7SQo",
        date: "2025-10-17",
        contribution: "기여도: 편집 100%, AI: 100%",
        note: "AI의 기본 Veo, Nanobanana 활용"
      }
    ]
  },
  {
    slug: "trot",
    title: "다함께 트로트",
    summary: "Suno AI를 활용한 음원 콘텐츠",
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
    slug: "neoguri",
    title: "너굴이",
    summary: "직접적인 참여가 있었던 채널은 아닙니다. 연관 채널입니다.",
    description: "해당 채널은 자문 역할만 수행하였습니다.",
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
    slug: "artist-noob",
    title: "Noob (아티스트 눕)",
    summary: "브랜드 캠페인 과정을 기록한 비하인드 아카이브",
    description: "캠페인 전개 과정과 성과 데이터를 다큐 시리즈로 재구성했습니다.",
    role: "Creative Director",
    period: "2026.02 - ing",
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
