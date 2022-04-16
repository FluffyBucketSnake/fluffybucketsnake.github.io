import Footer from "components/Footer";
import NavBar from "components/NavBar";
import NavMenu from "components/NavMenu";
import { FC, ReactNode, useState } from "react";

export type DefaultLayoutProps = {
  children?: ReactNode;
};

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  const [navMenuOpen, setNavMenuOpen] = useState<boolean>(false);
  return (
    <>
      <NavBar onOpenNavMenu={() => setNavMenuOpen(true)} />
      <NavMenu open={navMenuOpen} onClose={() => setNavMenuOpen(false)} />
      <main className="mt-[66px] p-16 pt-0">{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
