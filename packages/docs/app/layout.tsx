import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: {
    default: "MUI components with StyleX",
  },
  openGraph: {
    url: "https://nextra.site",
    siteName: "OptimisticUI",
    locale: "en_US",
    type: "website",
  },
};

const banner = <Banner storageKey='some-key'>banner</Banner>;
const navbar = (
  <Navbar
    logo={<b>OptiUI</b>}
    projectLink='https://github.com/jeongminsang/OptiUI'
  />
);
const footer = (
  <Footer className='flex-col items-center md:items-start'>
    {new Date().getFullYear()} © OptiUI.
  </Footer>
);

export default async function RootLayout({ children }) {
  return (
    <html lang='en' dir='ltr' suppressHydrationWarning>
      <Head
        backgroundColor={{
          dark: "rgb(17,17,17)",
          light: "rgb(250, 250, 250)",
        }}
        color={{
          hue: 200,
          saturation: 100,
        }}
      />
      <body>
        <Layout
          //   banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase='https://github.com/jeongminsang/OptiUI/tree/main/docs'
          editLink='Edit this page on GitHub'
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
