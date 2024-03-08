import { createClient } from "@/lib/supabase/server";
import NavbarMenu from "./navbar-menu";

const Navbar = async () => {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <NavbarMenu session={session} />;
};

export default Navbar;
