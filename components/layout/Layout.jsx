import { useState } from "react";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  const [PageOn, setPageOn] = useState("/");

  return (
    <div className="bg-black overflow-y-scroll h-screen w-full text-white">
      <NavBar PageOn={PageOn} setPageOn={setPageOn} />
      {children}
    </div>
  );
}
