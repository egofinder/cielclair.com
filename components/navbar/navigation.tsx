"use client";

import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    console.log("toggle clicked");
    setIsOpen(!isOpen);
  };
  return (
    <div className="sticky top-0">
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Sidebar isOpen={isOpen} />
    </div>
  );
};

export default Navigation;
