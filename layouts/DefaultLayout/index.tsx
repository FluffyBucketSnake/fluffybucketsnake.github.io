import Footer from "components/Footer";
import NavBar from "components/NavBar";
import NavMenu from "components/NavMenu";
import { FC, useState } from "react";

const DefaultLayout: FC = ({ children }) => {
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
