import { createClient } from "@/lib/supabase/server";
import NavbarMenu from "./navbar-menu";

const Navbar = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return <NavbarMenu user={data.user} />;
};

export default Navbar;
