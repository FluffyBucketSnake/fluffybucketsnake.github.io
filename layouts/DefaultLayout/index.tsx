import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { FC, ReactNode } from "react";

import SITE_CONFIG from "config/site.json";
import Head from "next/head";

export type DefaultLayoutProps = {
  children?: ReactNode;
  title: string;
};

const DefaultLayout: FC<DefaultLayoutProps> = ({ children, title }) => {
  const actualTitle = `${title} << ${SITE_CONFIG.title}`;
  return (
    <>
      <Head>
        <title>{actualTitle}</title>
      </Head>
      <NavBar />
      <main className="mt-[66px] p-16 pt-0 overflow-hidden">{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
