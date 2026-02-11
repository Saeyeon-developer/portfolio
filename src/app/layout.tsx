import type { Metadata } from "next";

import "@/app/globals.css";
import { ClientProviders } from "@/components/layout/ClientProviders";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "LeeJaewon Portfolio",
    template: "%s | LeeJaewon Portfolio"
  },
  description: "Next.js 기반의 채널 아카이브 포트폴리오 템플릿"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="min-h-screen">
        <ClientProviders>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-28 md:pt-20">{children}</main>
            <Footer />
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
