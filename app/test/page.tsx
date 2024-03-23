"use client";

import { Button } from "@/components/ui/button";
import { useCartContext } from "@/context/cartContextProvider";
import { useEffect } from "react";

const TestPage = () => {
  return (
    <>
      <div>
        <div>test</div>
      </div>
      <Button onClick={() => {}}>Sign Out</Button>
    </>
  );
};

export default TestPage;
