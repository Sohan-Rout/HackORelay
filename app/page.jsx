"use client";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/Components/Hero";
import About from "@/app/Components/About"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-neutral-900">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}