import Hero from "@/components/hero/hero";
import Services from "@/components/services/services";
import AboutUs from "@/components/about-us/about-us";
import LetsWork from "@/components/lets-work/lets-work";
import HowWeWork from "@/components/how-we-work/how-we-work";
import Timeline from "@/components/timeline/timeline";
import LetsTalk from "@/components/lets-talk/lets-talk";
import Footer from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import Expretise from "@/components/expertise/expertise";

export default function Home() {
  return (
    <main className="flex flex-col items-center relative">
      <Navbar />

      <section id="home" className="w-full flex flex-col items-center mb-12">
        <Hero />
        <Services />
      </section> 

      <section id="about" className="w-full p-6">
        <div className="bg-foreground text-background rounded-3xl py-12">
          <div className="max-w-[var(--breakpoint-xl)] mx-auto">
            <AboutUs />
            <hr className="my-12 border-border" />
            <LetsWork />
            <hr className="my-12 border-border" />
            <Expretise />
          </div>
        </div>
      </section>

      <section id="process" className="w-full max-w-[var(--breakpoint-xl)] mx-auto md:grid md:grid-cols-2 md:items-center">
        <HowWeWork />
        <Timeline />
      </section>

      <section id="contact" className="w-full p-6">
        <div className="bg-foreground text-background rounded-3xl">
          <div className="max-w-[var(--breakpoint-xl)] mx-auto">
            <LetsTalk />
          </div>
        </div>
      </section>

      <Footer />
      
    </main>
  );
}