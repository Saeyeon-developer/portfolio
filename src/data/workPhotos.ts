import type { LocalImageSrc } from "@/types/content";

import { workPhotoAssets } from "@/data/imageAssets";

export type WorkPhoto = {
  id: string;
  src: LocalImageSrc;
  alt: string;
};

export const workPhotos: WorkPhoto[] = [
  {
    id: "work-1",
    src: workPhotoAssets.work1,
    alt: "촬영 현장에서 카메라를 세팅하는 모습",
  },
  {
    id: "work-2",
    src: workPhotoAssets.work2,
    alt: "촬영 장비와 모니터를 점검하는 작업 장면",
  },
  {
    id: "work-3",
    src: workPhotoAssets.work3,
    alt: "편집 중 타임라인을 확인하는 화면",
  },
  {
    id: "work-4",
    src: workPhotoAssets.work4,
    alt: "콘텐츠 기획 자료를 검토하는 모습",
  },
  {
    id: "work-5",
    src: workPhotoAssets.work5,
    alt: "프로젝트 결과물을 리뷰하는 화면",
  },
  {
    id: "work-6",
    src: workPhotoAssets.work6,
    alt: "프로젝트 결과물을 리뷰하는 화면",
  },
];
