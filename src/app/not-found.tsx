import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="panel p-10 text-center">
      <h1 className="text-3xl font-bold">페이지를 찾을 수 없습니다</h1>
      <p className="mt-3 text-sm text-ink/70 dark:text-mist/70">요청한 경로가 없거나 삭제되었습니다.</p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-full bg-pine px-5 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-white"
      >
        홈으로 이동
      </Link>
    </section>
  );
}
