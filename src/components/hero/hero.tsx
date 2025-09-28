import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-screen max-w-[var(--breakpoint-xl)] flex md:grid md:grid-cols-4 items-center justify-center px-6">
      <div className="relative lg:col-span-3 z-10 sm:text-center md:text-left">
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          Empowering Businesses to Build Faster and Smarter by leveraging{' '}
          <span className="text-primary">AI</span> and{' '}
          <span className="text-primary">Low-Code</span> Development
        </h1>
        <p className="mt-6 md:text-lg max-w-2xl">
          JCS constructs technology teams, offers managed services, and provides solutions tailored for both startup and enterprise clients.
        </p>
      </div>
      <div className="hidden lg:block md:flex md:block lg:col-span-1">
        <Image
          src="/getintouch.svg"
          alt="Get in Touch"
          width={140}
          height={140}
          className="animate-[spin_7s_linear_infinite]"
        />
      </div>
    </div>
  );
};

export default Hero;
