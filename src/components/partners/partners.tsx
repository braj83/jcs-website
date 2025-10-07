import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
} from "@/components/partners/logos";
import { Marquee } from "@/components/ui/marquee";

const Partners = () => {
  return (
    <div className="flex items-center justify-center px-6 py-6">
      <div className="overflow-hidden">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-center mt-4">
          Our Partners
            <span className="text-primary">_</span>
        </h3>
        
        <p className="mt-4 lg:mt-6 text-base sm:text-lg leading-relaxed text-foreground/80 text-center">
          We believe in the power of working together. Here are some of the great companies we are proud to call our partners.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-14 gap-y-10 max-w-(--breakpoint-xl)">
          <Marquee
            pauseOnHover
            className="[--duration:20s] [&_svg]:mr-10 mask-x-from-70% mask-x-to-90%"
          >
            <Logo01 />
            <Logo02 />
            <Logo03 />
            <Logo04 />
            <Logo05 />
            <Logo06 />
            <Logo07 />
            <Logo08 />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Partners;
