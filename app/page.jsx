"use client";
import { useEffect, useState } from "react";
import Navbar from "@/app/Components/Navbar";
import Hero from "@/app/Components/Hero";
import About from "@/app/Components/About";
import Theme from "@/app/Components/theme";
import Gallery from "@/app/Components/Gallery";
import Contact from "@/app/Components/contact";
import Footer from "@/app/Components/footer";

export default function Home() {
  return (
    <div className="relative max-h-screen bg-neutral-900">
      <Navbar />
      <Hero />
      <About />
      <Theme />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};