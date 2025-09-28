import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-screen max-w-[80rem] mx-auto flex flex-col md:grid md:grid-cols-4 items-center justify-center px-4 sm:px-6 py-8 md:py-0 gap-8 md:gap-0">
      <div className="w-full md:col-span-3 text-left order-1 md:order-1">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-semibold leading-tight tracking-tighter">
          Empowering Businesses to Build Faster and Smarter by leveraging{' '}
          <span className="text-primary">AI</span> and{' '}
          <span className="text-primary">Low-Code</span> Development
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl max-w-2xl">
          JCS constructs technology teams, offers managed services, and provides solutions tailored for both startup and enterprise clients.
        </p>
      </div>
      <div className="w-full md:col-span-1 flex justify-end order-2 md:order-2">
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40">
          <Image
            src="/getintouch.svg"
            alt="Get in Touch"
            width={160}
            height={160}
            className="w-full h-full animate-[spin_7s_linear_infinite]"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;