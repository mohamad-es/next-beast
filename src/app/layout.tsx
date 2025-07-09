import type { Metadata } from "next";
import { ThemeProvider } from "@/components/shared/darkmode/theme-provider";
import { Toaster } from "@/components/ui/sonner";

import QueryProvider from "@/providers/query-provider";
import localFont from "next/font/local";

import "../globals.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: {
    default: "روجابوم | اقامت راحت و خاطره‌ساز",
    template: "%s | روجابوم",
  },
  description:
    "در روجابوم می‌توانید اقامتی دل‌انگیز و به‌یادماندنی را در ویلاها و سوئیت‌های مجهز تجربه کنید. رزرو آنلاین آسان، قیمت‌های شفاف و خدمات ویژه.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    locale: "fa_IR",
    type: "website",
    siteName: "روجابوم",
    url: baseUrl,
    images: [
      {
        url: `${baseUrl}/logo.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

const alibaba = localFont({
  src: [
    {
      path: "../../public/font/alibaba-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/alibaba-regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa" suppressHydrationWarning>
      <body className={`${alibaba.className}`}>
        <QueryProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
            <Toaster position="top-center" richColors />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
