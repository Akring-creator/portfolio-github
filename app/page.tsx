"use client";
import { LoadingScreen } from "@/components/loadingscreen";
import { MobileMenu } from "@/components/mobilemenu";
import { Navbar } from "@/components/navbar";
import { About } from "@/components/sections/about";
import { Introduction } from "@/components/sections/introduction";
import { Projects } from "@/components/sections/projects";
import { useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        <Introduction />
        <About />
        <Projects />
      </div>
    </div>
  );
}
