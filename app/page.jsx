"use client";
import Navbar from "@/app/Components/Navbar";
import Hero from "@/app/Components/Hero";
import About from "@/app/Components/About";
import Theme from "@/app/Components/theme";
import Prizes from "@/app/Components/prizes";
import Gallery from "@/app/Components/Gallery";
import FAQ from "@/app/Components/faq";
import Contact from "@/app/Components/contact";
import Footer from "@/app/Components/footer";

export default function Home() {
  return (
    <div className="relative max-h-screen bg-neutral-900">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="themes">
        <Theme />
      </div>
      <div id="prizes">
        <Prizes />
      </div>
      <Gallery />
      <div id="#faqs">
        <FAQ />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};