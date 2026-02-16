import Link from "next/link";

type ViewAllButtonProps = {
  href: string;
  label?: string;
};

export function ViewAllButton({ href, label = "전체보기" }: ViewAllButtonProps) {
  return (
    <Link href={href} className="rounded-full bg-sunset px-4 py-2 text-sm font-semibold text-white">
      {label}
    </Link>
  );
}
