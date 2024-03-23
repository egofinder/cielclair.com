"use client";

import useSession from "@/hooks/useSession";
import NavbarMenu from "./navbar-menu";

const Navbar = () => {
  const { session } = useSession();
  let isLogin = false;
  (session) ? isLogin = true : isLogin = false;

  return <NavbarMenu isLogin={isLogin} />;
};

export default Navbar;
