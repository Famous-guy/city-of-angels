import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactCTA from "@/components/ContactCTA";
import About from "@/components/About";
import Properties from "@/components/Properties";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Estate video hero */}
        <Hero />

        {/* 2. Primary conversion — WhatsApp + Phone */}
        <ContactCTA />

        {/* 3. About the estate + highlights */}
        <About />

        {/* 4. Available property types + pricing */}
        <Properties />

        {/* 5. Final contact CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
