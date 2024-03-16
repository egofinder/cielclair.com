import { createClient } from "@/lib/supabase/server";
import NavbarMenu from "./navbar-menu";

const Navbar = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const isLogin = user ? true : false;

  return <NavbarMenu isLogin={isLogin} />;
};

export default Navbar;
