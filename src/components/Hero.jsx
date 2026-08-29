import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Frame from "../assets/icons/Frame.png";
import HeroGraphic from "../assets/images/hero.png";
{
  /*
const stats = [
  { value: "20+", label: "Adobe Apps" },
  { value: "100 GB", label: "Cloud Storage" },
  { value: "10+", label: "Industry courses" },
  { value: "3", label: "Certificate paths" },
];
*/
}

const hiddenStates = {
  left: {
    opacity: 0,
    x: -24,
    y: 0,
    filter: "blur(4px)",
  },
  right: {
    opacity: 0,
    x: 24,
    y: 0,
    filter: "blur(4px)",
  },
  up: {
    opacity: 0,
    x: 0,
    y: 20,
    filter: "blur(4px)",
  },
  none: {
    opacity: 0,
    x: 0,
    y: 0,
    filter: "blur(4px)",
  },
};

function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  amount = 0.15,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    amount,
    once: false, // Ensures bidirectional scrolling reveals content dynamically
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={
        inView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              filter: "blur(0px)",
            }
          : hiddenStates[direction]
      }
      transition={{
        duration: 0.75,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function LazyHeroGraphic() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.05 });

  return (
    <div ref={ref} className="relative w-full">
      {inView ? (
        <motion.img
          src={HeroGraphic}
          alt="Adobe AI Skills Center Collage"
          loading="lazy"
          decoding="async"
          className="h-auto w-full max-w-full select-none object-contain"
          initial={{
            opacity: 0,
            scale: 0.94,
            x: 30,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          draggable={false}
        />
      ) : (
        <div className="aspect-1000/639 w-full rounded-3xl bg-slate-50 animate-pulse" />
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white font-['Poppins'] antialiased selection:bg-[#5D3BEF]/10">
      <div className="absolute inset-0 lg:hidden pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-linear-to-r from-violet-500/15 via-fuchsia-400/10 to-blue-500/15 blur-[150px]" />
      </div>
      {/* Outer constraint mimicking structural design layouts up to 1441px width */}
      <div className="mx-auto max-w-360.25 px-4 sm:px-6 md:px-10 lg:px-18">
        <div className="relative flex flex-col-reverse gap-10 py-10 lg:h-154 lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:py-0">
          {/* LEFT CONTAINER (50% Layout: 671px max-width boundary) */}
          <div className="relative z-10 flex w-full flex-col justify-start lg:h-full lg:max-w-167.75">
            {/*Heading Layout */}
            <Reveal direction="up" delay={80} className="mt-4 sm:mt-6">
              <h1 className="text-[28px] font-bold leading-[1.12] tracking-tight text-[#222222] sm:text-[40px] md:text-[46px] lg:text-[52px] text-shimmer">
                Build India&apos;s Future <br className="hidden sm:inline" />
                Workforce Through <br />
                <span className="relative inline-block pb-2">
                  <span className="bg-linear-to-r from-[#4F2DDA] via-[#8342FF] to-[#F03878] bg-clip-text text-transparent">
                    Creativity &amp; AI
                  </span>
                  <span className="absolute bottom-0 left-0 h-1 w-32.5 rounded-full bg-[#5D3BEF]" />
                </span>
              </h1>
            </Reveal>

            {/* Content Description */}
            <Reveal direction="up" delay={420} className="mt-5 sm:mt-6">
              <p className="max-w-155 text-[14px] leading-[1.75] text-[#707070] sm:text-[17px]">
                Empower your university with industry-recognised curriculum,
                Creative Cloud tools, AI-powered learning, and professional
                certifications helping students become creative thinkers,
                digital innovators, and career-ready professionals.
              </p>
            </Reveal>

            {/* Core Action Call to Action Buttons */}
            <Reveal
              direction="up"
              delay={600}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <motion.button
                type="button"
                className="inline-flex min-w-52 h-12 items-center justify-center gap-2 rounded-xl bg-[#5D3BEF] px-6 text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(93,59,239,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#4a2cd4] hover:shadow-[0_12px_24px_rgba(93,59,239,0.4)] active:translate-y-0"
              >
                Become a partner
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight size={16} strokeWidth={2.5} />
                </motion.span>
              </motion.button>

              <motion.button
                type="button"
                whileHover={{
                  y: -2,
                  boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  duration: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group inline-flex min-w-52 h-12 items-center justify-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-6 text-[14px] font-medium text-[#222222] transition-colors duration-200 hover:bg-slate-50"
              >
                <span>Register Now</span>

                <motion.span
                  className="flex items-center justify-center w-6 h-6"
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <img
                    src={Frame}
                    alt="frame"
                    className="w-full h-full object-contain"
                  />
                </motion.span>
              </motion.button>
            </Reveal>

            {/* Stats Dashboard Layout Row 
            <Reveal direction="up" delay={320} className="mt-10 sm:mt-12">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-[#F0EDFF] bg-white p-4 shadow-[0_6px_20px_rgba(93,59,239,0.03)] transition-shadow duration-300 hover:shadow-[0_10px_25px_rgba(93,59,239,0.07)]"
                  >
                    <div className="text-[24px] font-bold tracking-tight text-[#4F2DDA] sm:text-[28px]">
                      {item.value}
                    </div>
                    <div className="mt-1 text-[12px] font-medium leading-tight text-[#707070] sm:text-[13px]">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>*/}
          </div>

          {/* RIGHT CONTAINER (Visual Graphics: 1000px layout width capability) */}
          <div className=" hidden relative lg:flex w-full items-center justify-center lg:h-full lg:w-1/2 lg:justify-end">
            <Reveal
              direction="right"
              delay={120}
              className="w-full max-w-137.5 sm:max-w-162.5 md:max-w-187.5 lg:absolute lg:-right-10 lg:w-175 lg:max-w-none xl:-right-20 xl:w-205 2xl:w-250"
            >
              <motion.div
                animate={{
                  y: [0, -7, 0],
                  rotate: [0, 0.3, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <LazyHeroGraphic />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
