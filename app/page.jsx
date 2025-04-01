"use client";
import { useEffect, useState } from "react";
import Navbar from "@/app/Components/Navbar";
import Hero from "@/app/Components/Hero";
import About from "@/app/Components/About";
import Theme from "./Components/theme";
import Gallery from "./Components/Gallery";

export default function Home() {
  return (
    <div className="relative max-h-screen bg-neutral-900">
      <Navbar />
      <Hero />
      <About />
      <Theme />
      <Gallery />
    </div>
  );
};