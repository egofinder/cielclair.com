import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";

const TestPage = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  console.log(data);
  // useEffect(() => {
  //   const fetchSession = async () => {
  //     const { data: session } = await supabase.auth.getSession();
  //     const accessToken = session.session?.access_token;
  //     try {
  //       const response = await axios.post(
  //         "http://api.cielclair.test/api/test2",
  //         {},
  //         {
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         },
  //       );
  //       setResponse(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchSession();
  // }, [supabase]);

  return (
    <>
      <div>
        <div>test</div>
      </div>
      <Button>Sign Out</Button>
    </>
  );
};

export default TestPage;
