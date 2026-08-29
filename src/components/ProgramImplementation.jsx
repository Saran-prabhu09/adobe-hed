import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "University Registration",
    description: "Share Institutional Details Through The Registration Form.",
  },
  {
    id: 2,
    title: "Consultation",
    description: "Program Walkthrough Tailored To Your Faculties And Goals.",
  },
  {
    id: 3,
    title: "MoU Signing",
    description: "Formalise The Partnership With Skillzza.",
  },
  {
    id: 4,
    title: "Adobe Verification",
    description: "Institution Validation For Licensed Entitlements.",
  },
  {
    id: 5,
    title: "Faculty Enablement",
    description: "Training And Onboarding For Teaching Teams.",
  },
  {
    id: 6,
    title: "Adobe License Activation",
    description: "Apps Deployed Via Admin Console And Federated IDs.",
  },
  {
    id: 7,
    title: "Student Onboarding",
    description: "Learners Enrolled Into Pathways And Tools.",
  },
  {
    id: 8,
    title: "Program Launch",
    description: "Your Campus Goes Live As A Skills Centre.",
  },
];

// Bidirectional Reveal Component utilizing Framer Motion
function Reveal({
  children,
  delay = 0,
  direction = "up",
  amount = 0.1,
  className = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    amount,
    once: false, // Ensures the animation triggers on scroll up AND scroll down
    margin: "0px 0px -10% 0px",
  });

  const hiddenStates = {
    up: { opacity: 0, y: 30, x: 0 },
    left: { opacity: 0, y: 0, x: -30 },
    right: { opacity: 0, y: 0, x: 30 },
    none: { opacity: 0, y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={hiddenStates[direction]}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : hiddenStates[direction]}
      transition={{
        duration: 0.7,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ProgramImplementation() {
  return (
    <section
      id="programmes"
      className="w-full bg-white py-10 md:py-12 px-4 sm:px-6 lg:px-8 font-['Poppins'] text-[#191919] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <Reveal direction="up" delay={0}>
            <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[#7450EE]">
              Program Implementation
            </span>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <h2 className="mt-3 text-[30px] font-bold leading-tight tracking-tight sm:text-[40px] lg:text-[48px] ">
              From Registration To{" "}
              <span className="text-[#7450EE]">Launch</span>To{" "}
              <br className="hidden sm:block" />A Guided Rollout
            </h2>
          </Reveal>
        </div>

        {/* 8-Step Grid Layout */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-6">
          {steps.map((step, index) => (
            <Reveal
              key={step.id}
              direction="up"
              delay={150 + index * 50} // Staggered delay for cascading effect
              className="h-full"
            >
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 sm:p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_30px_-10px_rgba(116,80,238,0.15)] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
                <div className="absolute inset-0 bg-linear-to-br from-[#7450EE]/10 via-transparent to-[#A855F7]/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none" />
                <div className="glimmer pointer-events-none"></div>
                {/* Number Badge with precise custom shadow */}
                <div className=" relative z-10 mb-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#7450EE] text-[15px] font-bold text-white shadow-[inset_0px_4px_17.1px_0px_rgba(255,255,255,0.41)] transition-transform duration-300 group-hover:scale-105">
                  {step.id}
                </div>

                {/* Card Content */}
                <div className="relative z-10 flex flex-col grow ">
                  <h3 className="mb-2.5 text-[17px] font-semibold leading-snug text-[#1A1A1A]">
                    {step.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[#707070]">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
