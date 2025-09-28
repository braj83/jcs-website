const steps = [
  {
    title: "The meet",
    description:
      "We work together smoothly from the start by creating open comprehension of what your exact goals are and how you function as a company. Our goal for the first meeting then is to obtain a concrete picture of what you need and establish not only an understanding but clear channels of communication between one another that will carry us on into the project.",
  },
  {
    title: "Proposing solutions",
    description:
      "Our team uses its expertise to carefully assess the challenges you are facing and craft a customized solution that aligns seamlessly with your objectives. By doing so, we help you define the future outputs you will accomplish and map a comprehensive plan outlining key deliverables, goal verification milestones, team setup and efficiency reporting mechanisms.",
  },
  {
    title: "Implementation",
    description:
      "As we assist you in bringing about key project deliverables, we prioritize transparency and clear communication by maintaining detailed reporting protocols that ensure our clients remain at the helm.",
  },
  {
    title: "Partnership",
    description:
      "Our constant ongoing support and maintenance ensures that the solution we provide continues to meet your needs. Moreover, we make it our duty to actively monitor performance and proactively address any potential issues before they arise.",
  },
];

export default function Timeline() {
  return (
    <div className="py-12 md:py-20 px-6">
      <div className="relative ml-6">
        {/* Timeline line */}
        <div className="absolute left-0 inset-y-0 border-l-2" />

        {steps.map(({ title, description }, index) => (
          <div key={index} className="relative pl-10 pb-10 last:pb-0">
            {/* Timeline Icon */}
            <div className="absolute left-px -translate-x-1/2 h-9 w-9 border-2 border-muted-foreground/40 flex items-center justify-center rounded-full bg-accent ring-8 ring-background">
              <span className="font-semibold text-lg text-black">{index + 1}</span>
            </div>

            {/* Content */}
            <div className="pt-1 space-y-2">
              <h3 className="text-xl font-medium tracking-[-0.015em]">
                {title}
              </h3>
              <p className="text-foreground">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
