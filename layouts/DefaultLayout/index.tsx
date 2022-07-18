import Footer from "components/Footer";
import NavBar from "components/NavBar";
import NavMenu from "components/NavMenu";
import { FC, ReactNode, useState } from "react";

import SITE_CONFIG from "config/site.json";
import Head from "next/head";

export type DefaultLayoutProps = {
  children?: ReactNode;
  title: string;
};

const DefaultLayout: FC<DefaultLayoutProps> = ({ children, title }) => {
  const actualTitle = `${title} << ${SITE_CONFIG.title}`;
  const [navMenuOpen, setNavMenuOpen] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>{actualTitle}</title>
      </Head>
      <NavBar onOpenNavMenu={() => setNavMenuOpen(true)} />
      <NavMenu open={navMenuOpen} onClose={() => setNavMenuOpen(false)} />
      <main className="mt-[66px] p-16 pt-0">{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
