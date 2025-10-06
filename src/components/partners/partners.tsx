import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Marquee from "@/components/ui/marquee";
import React from "react";

const partners = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    company: "TechCorp",
    testimonial:
      "This product has completely transformed the way we work. The efficiency and ease of use are unmatched!",
  },
  {
    id: 2,
    name: "Sophia Lee",
    designation: "Data Analyst",
    company: "InsightTech",
    testimonial:
      "This tool has saved me hours of work! The analytics and reporting features are incredibly powerful.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "UX Designer",
    company: "DesignPro",
    testimonial:
      "An amazing tool that simplifies complex tasks. Highly recommended for professionals in the industry.",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Marketing Specialist",
    company: "BrandBoost",
    testimonial:
      "I've seen a significant improvement in our team's productivity since we started using this service.",
  },
  {
    id: 5,
    name: "Daniel Martinez",
    designation: "Full-Stack Developer",
    company: "CodeCrafters",
    testimonial:
      "The best investment we've made! The support team is also super responsive and helpful.",
  },
  {
    id: 6,
    name: "Jane Smith",
    designation: "Product Manager",
    company: "InnovateX",
    testimonial:
      "The user experience is top-notch! The interface is clean, intuitive, and easy to navigate.",
  },
];

const Partners = () => (
  <section className="w-full py-12 lg:py-20 overflow-hidden">
    <div className="max-w-[80rem] mx-auto px-4 sm:px-6">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center tracking-tight">
        Partners in Success
      </h2>
      <p className="mt-4 lg:mt-6 text-center text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
        We believe in the power of working together. Here are some of the great companies we are proud to call our partners.
      </p>
    </div>
    
    <div className="mt-12 lg:mt-16 relative">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-background to-transparent z-10" />
      
      <Marquee pauseOnHover className="[--duration:30s] py-4">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="mx-4 w-[400px] bg-card border border-border rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="sm:text-lg lg:text-xl font-semibold bg-primary text-primary-foreground">
                  {partner.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-base font-semibold">{partner.name}</p>
                <p className="sm:text-xl lg:text-2xl text-muted-foreground">{partner.designation}</p>
              </div>
            </div>
            <p className="mt-4 sm:text-lg lg:text-xl leading-relaxed text-muted-foreground">
              {partner.testimonial}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  </section>
);

export default Partners;