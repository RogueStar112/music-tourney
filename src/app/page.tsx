import Image from "next/image";

import Logo from "./components/Logo";

import MenuNav from "./components/MenuNav";

export default function Home() {
  return (

    <>
      <main className="flex min-h-screen flex-col items-center p-24 max-w-[512px] mx-auto">
        <Logo />

        <p className="text-white">Music tournament game.</p>
        <p className="text-sm" id="version">v0.0.1 - 07/04/2024</p>

        <MenuNav />

      </main>

    </>
  );
}
