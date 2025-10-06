import Hero from "@/components/hero/hero";
import Services from "@/components/services/services";
import AboutUs from "@/components/about-us/about-us";
import LetsWork from "@/components/lets-work/lets-work";
import HowWeWork from "@/components/how-we-work/how-we-work";
import Timeline from "@/components/timeline/timeline";
import LetsTalk from "@/components/lets-talk/lets-talk";
import Footer from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import Expertise from "@/components/expertise/expertise";
import { BackgroundPaths as AnimatedBackground } from "@/components/ui/animated-background";
import Partners from "@/components/partners/partners";

export default function Home() {
  return (
    <main className="flex flex-col items-center relative">
      <AnimatedBackground />
      
      <Navbar />

      {/* Home Section */}
      <section id="home" className="w-full flex flex-col items-center pt-24 pb-12 lg:pb-20">
        <Hero />
        <Services />
      </section> 

      {/* About Section - Dark Background */}
      <section id="about" className="w-full px-4 sm:px-6 py-12 lg:py-20">
        <div className="bg-foreground text-background rounded-3xl py-12 lg:py-16">
          <div className="max-w-[80rem] mx-auto">
            <AboutUs />
            <hr className="my-12 lg:my-16 border-background/20" />
            <LetsWork />
            <hr className="my-12 lg:my-16 border-background/20" />
            <Expertise />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="w-full max-w-[80rem] mx-auto py-12 lg:py-20 px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 md:items-start">
          <HowWeWork />
          <Timeline />
        </div>
      </section>

      <Partners />

      {/* Contact Section - Dark Background */}
      <section id="contact" className="w-full px-4 sm:px-6 py-12 lg:py-20">
        <div className="bg-foreground text-background rounded-3xl">
          <div className="max-w-[80rem] mx-auto">
            <LetsTalk />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}