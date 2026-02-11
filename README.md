# Portfolio Base (Next.js 14 + TypeScript + Tailwind)

영상/채널 포트폴리오를 위한 App Router 기반 기본틀입니다.

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS

## Routes
- `/` Home
- `/channels` 채널 아카이브
- `/channels/[slug]` 채널 상세
- `/about`
- `/skills`
- `/extras`

## Features
- 상단 고정 Header + Footer
- 다크모드 토글(클라이언트 상태 + localStorage)
- Channels 아카이브 검색/필터/정렬/리스트-그리드 전환
- 대표작 재생 모달(YouTube embed / HTML5 video)
- 모달 접근성: ESC 닫기, 바깥 클릭 닫기, 포커스 제어, 스크롤 잠금
- Extras 이미지 라이트박스
- 페이지별 metadata + `channels/[slug]` 동적 metadata

## Getting Started
```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속.

## Build
```bash
npm run build
npm run start
```

## Data Structure
### 1) Channels
- 파일: `src/data/channels.ts`
- 타입: `src/types/content.ts`의 `Channel`, `VideoItem`, `ChannelTag`, `ChannelRole`
- 비디오 타입:
```ts
{
  type: "youtube" | "file";
  title: string;
  thumbnail: string;
  src: string; // youtube: videoId or full URL, file: mp4 URL or /public/videos/...
  date?: string;
  note?: string;
}
```

### 2) Extras
- 파일: `src/data/extras.ts`
- 타입: `ExtraItem`

### 3) Skills
- 파일: `src/data/skills.ts`
- 타입: `SkillGroup`, `SkillCategory`

## 데이터 추가 방법
1. `src/data/channels.ts`에 채널 객체를 추가하고 `slug`를 고유하게 설정합니다.
2. 각 채널의 `videos[0]`이 카드 대표작으로 사용됩니다.
3. 채널 썸네일은 `public/images/thumbnail`에 넣고 `thumbnail` 값을 `/images/thumbnail/파일명`으로 지정합니다.
4. youtube 타입 영상은 `src`에 videoId 또는 유튜브 전체 URL을 입력할 수 있습니다.
5. file 타입 영상은 `public/videos/...` 또는 외부 mp4 URL을 `src`에 입력합니다.
6. `src/data/extras.ts`에 항목 추가 후 `public/images`에 이미지 파일을 넣습니다.
7. `src/data/skills.ts`에서 카테고리별 기술 목록을 수정합니다.

## Component Split
- Layout: `Header`, `Footer`, `ThemeToggle`, `ClientProviders`
- Channels: `ChannelCard`, `ChannelFilters`, `VideoModal`, `ChannelsArchiveClient`, `ChannelDetailClient`
- Skills: `SkillTabs`
- Extras: `ExtrasCard`, `Lightbox`, `ExtrasArchiveClient`

## 참고
- 현재 샘플 데이터/이미지는 placeholder입니다.
- `metadataBase`는 `src/app/layout.tsx`의 `https://example.com`을 실제 도메인으로 교체하세요.
