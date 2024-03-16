"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

const TestPage = () => {
  // const supabase = createClient();
  // const [response, setResponse] = useState(null);
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

  const saveToBasketLocal = (
    productId: string,
    size: string,
    quantity: number,
  ) => {
    // Get the current basket from local storage
    const currentBasket = JSON.parse(localStorage.getItem("basket") || "[]");

    // Add the new item to the basket
    const newItem = { productId, size, quantity };
    const updatedBasket = [...currentBasket, newItem];

    // Save the updated basket back to local storage
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  return (
    <>
      <div>
        <div>test</div>
      </div>
      <Button onClick={() => saveToBasketLocal("test", "1", 1)}>
        Sign Out
      </Button>
    </>
  );
};

export default TestPage;
