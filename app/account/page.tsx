import AccountForm from "./account-form";
import { createClient } from "@/lib/supabase/server";

export default async function Account() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  let metadata = user?.user_metadata;
  console.table(user);
  console.table(metadata);

  return null;
  //   return <AccountForm user={user} />;
}
