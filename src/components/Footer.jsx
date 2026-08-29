import { useEffect, useRef, useState } from "react";
import skillzzalogo from "../assets/images/skillzzalogo.png";

// Bidirectional Intersection Observer Hook
function useInView(threshold = 0.1, rootMargin = "0px 0px -50px 0px") {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Bidirectional update: changes state whenever it enters/leaves viewport
        setInView(entry.isIntersecting);
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}

// Smooth Reveal Component
const Reveal = ({ children, delay = 0, direction = "up", className = "" }) => {
  const [ref, inView] = useInView(0.05);

  const hiddenStates = {
    up: "translateY(24px)",
    down: "translateY(-24px)",
    left: "translateX(-24px)",
    right: "translateX(24px)",
    none: "translate(0,0)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate(0,0)" : hiddenStates[direction],
        transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden bg-white font-['Poppins'] border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          {/* COLUMN 1: Description & Presence */}
          <Reveal
            direction="up"
            delay={0}
            className="md:col-span-12 lg:col-span-5"
          >
            <div className="flex flex-col">
              <img
                src={skillzzalogo}
                alt="Logo"
                loading="lazy"
                decoding="async"
                className="h-8 w-auto object-contain sm:h-10 self-start "
              />

              <p className="mt-6 max-w-105 text-[12px] leading-[1.8] text-[#4A4A4A]">
                The Adobe Digital Creativity & AI Skills Centre for Higher
                Education, building India's future workforce through creativity,
                AI, and industry-recognised credentials.
              </p>

              <div className="mt-8 sm:mt-10">
                <h4 className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#6335D4]">
                  Our Presence
                </h4>
                <p className="mt-3 text-[14px] font-medium text-[#222222]">
                  Mumbai • Thane • Raipur • Delhi NCR •{" "}
                  <span className="text-[#6335D4]">UK • UAE</span>
                </p>
              </div>
            </div>
          </Reveal>

          {/* COLUMN 2: Program Links */}
          <Reveal
            direction="up"
            delay={100}
            className="md:col-span-5 lg:col-span-3 lg:ml-auto lg:w-[18%]"
          >
            <div>
              <h4 className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#6335D4] mb-5 sm:mb-6">
                Program
              </h4>
              <ul className="flex flex-col gap-4">
                {[
                  "About the program",
                  "Learning pathway",
                  "Certifications",
                  "FAQs",
                ].map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="group relative inline-block text-[14px] text-[#4A4A4A] transition-colors duration-200 hover:text-[#6335D4]"
                    >
                      {link}
                      <span className="absolute -bottom-0.5 left-0 h-1px w-0 bg-[#6335D4] transition-all duration-300 ease-out group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* COLUMN 3: Contact Info */}
          <Reveal
            direction="up"
            delay={200}
            className="md:col-span-7 lg:col-span-4 lg:w-[24%]"
          >
            <div>
              <h4 className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#6335D4] mb-5 sm:mb-6">
                Contact
              </h4>

              <div className="flex flex-col gap-5 text-[14px] text-[#4A4A4A]">
                <p className="max-w-85 leading-[1.7]">
                  We Work India, Chromium, CTS No. 106/1-5, JPLR Road, Milind
                  Nagar, Powai, Mumbai - 400076
                </p>

                <a
                  href="tel:+919136961978"
                  className="inline-block text-[#6335D4] font-medium hover:underline underline-offset-4 decoration-1 transition-all"
                >
                  +91 91369 61978
                </a>

                <a
                  href="mailto:Contact@Skillza.Com"
                  className="inline-block text-[#6335D4] font-medium hover:underline underline-offset-4 decoration-1 transition-all"
                >
                  Contact@Skillzza.Com
                </a>

                <a
                  href="https://www.Skillzza.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-[#6335D4] font-medium hover:underline underline-offset-4 decoration-1 transition-all"
                >
                  www.Skillzza.Com
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
