import type { Metadata } from "next";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mino Intern Docs",
    template: "%s - Mino Intern Docs",
  },
  description: "Documentation and guides for Mino interns",
};

const navbar = (
  <Navbar
    logo={<span className="font-semibold text-lg">Mino Intern Docs</span>}
    projectLink="https://github.com/tinyfish-io/mino-apps"
  />
);

const footer = (
  <Footer>
    <div className="text-sm text-gray-500">
      © {new Date().getFullYear()} pranavjana • Built with{" "}
      <a href="https://nextra.site" target="_blank" rel="noreferrer" className="underline">
        Nextra
      </a>
    </div>
  </Footer>
);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (!localStorage.getItem('theme')) {
                localStorage.setItem('theme', 'light');
              }
            `,
          }}
        />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          docsRepositoryBase="https://github.com/tinyfish-io/mino-apps/tree/main/intern-docs"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
