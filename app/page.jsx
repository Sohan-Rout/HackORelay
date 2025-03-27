"use client";
import Navbar from "@/app/components/Navbar.jsx";
import Hero from "@/app/Components/Hero.jsx";
import About from "@/app/Components/About.jsx"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-neutral-900">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};