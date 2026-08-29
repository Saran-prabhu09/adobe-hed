import { useState, useEffect, useRef } from "react";
import FAQ from "../assets/images/FAQ.png";

// --- Bidirectional Scroll Reveal Component (unchanged) ---
const ScrollReveal = ({ children, direction = "up", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Bidirectional: Updates state both when entering and leaving the viewport
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const getTransformClasses = () => {
    if (isVisible) return "translate-y-0 translate-x-0 opacity-100";
    switch (direction) {
      case "up":
        return "translate-y-12 opacity-0";
      case "down":
        return "-translate-y-12 opacity-0";
      case "left":
        return "-translate-x-12 opacity-0";
      case "right":
        return "translate-x-12 opacity-0";
      default:
        return "translate-y-12 opacity-0";
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out ${getTransformClasses()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Keyframes for the idle float + a tiny bit of extra shadow depth ---
const FaqStyles = () => (
  <style>{`
    @keyframes faqFloat {
      0%   { transform: translateY(0px) rotate(-1deg); }
      50%  { transform: translateY(-14px) rotate(1deg); }
      100% { transform: translateY(0px) rotate(-1deg); }
    }
    .faq-float {
      animation: faqFloat 6s ease-in-out infinite;
    }
    .faq-float:hover {
      animation-play-state: paused;
    }
  `}</style>
);

// --- Main FAQ Component ---
const FAQSection = () => {
  // Initialize with nothing open by default, matching the reference screenshot
  const [openId, setOpenId] = useState("");

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // Mapped from user inputs to exactly match the image's structure
  const leftColumnData = [
    {
      id: "l1",
      question: "What is the Adobe Digital Creativity & AI Skills Centre?",
      answer:
        "An integrated campus program that combines Adobe's industry-recognised curriculum, licensed Creative Cloud tools, AI-powered learning, digital badges, and professional certification pathways, delivered and implemented by Skillzza to transform your campus into a future-ready innovation hub.",
    },
    {
      id: "l2",
      question: "Are Adobe licenses included?",
      answer:
        "Yes. Eligible accredited universities and colleges in India with federated IDs receive free entitlements, 20+ desktop, mobile, and web apps including Photoshop, Illustrator, Express Premium, Premiere, Acrobat, and Firefly, plus standard generative credits and 100GB cloud storage per user.",
    },
    {
      id: "l3",
      question: "Can it be integrated into existing university programs?",
      answer:
        "Absolutely. The pathways are modular, 15 to 30 hour courses that can run as value-added programs, credit-linked electives under NEP 2020, or campus-wide skilling initiatives, depending on your academic structure.",
    },
  ];

  const rightColumnData = [
    {
      id: "r1",
      question: "Who can participate?",
      answer:
        "Students and faculty across every discipline, engineering, management, commerce, science, humanities, law, architecture, media, film, design, healthcare, and education. The foundation journey is designed for every student, with specialised certificate pathways for deeper skill tracks.",
    },
    {
      id: "r2",
      question: "How is the curriculum delivered?",
      answer:
        "Courses are delivered through a blended, project-based model. Learners complete real projects using licensed Adobe tools, earn digital badges along the way, and take final assessments for certification. Faculty receive structured enablement so delivery integrates smoothly into academic calendars.",
    },
    {
      id: "r3",
      question: "Are certifications recognised?",
      answer:
        "Yes. Courses are NSQF 4.5 aligned, and the foundation journey culminates in an SSC-recognised certificate. Adobe courses paired with licensed tools are also available through NASSCOM FutureSkills Prime, a MeitY–NASSCOM digital skilling initiative.",
    },
    {
      id: "r4",
      question: "Is faculty training provided?",
      answer:
        "Yes. Faculty enablement is built into the rollout including training, onboarding, teaching resources, and access to Adobe tools. so your teaching teams are confident and classroom-ready before program launch.",
    },
  ];

  // Single continuous list for the right column
  const allFaqData = [...leftColumnData, ...rightColumnData];

  const AccordionRow = ({ item }) => {
    const isOpen = openId === item.id;

    return (
      <div
        onClick={() => toggleAccordion(item.id)}
        className="w-full border-b border-gray-200 last:border-b-0 py-5 md:py-6 cursor-pointer group"
      >
        <div className="flex items-start justify-between gap-4">
          {/* Text Content Section */}
          <h3 className="text-base md:text-[17px] font-semibold text-gray-900 leading-snug pr-2 transition-colors duration-200 group-hover:text-[#5723db]">
            {item.question}
          </h3>

          {/* Chevron */}
          <span className="shrink-0 mt-0.5">
            <svg
              className={`w-5 h-5 transition-all duration-300 ease-out ${
                isOpen ? "rotate-180 text-[#2DD4BF]" : "rotate-0 text-gray-800"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={isOpen ? "3" : "2.5"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 9l6 6 6-6"
              />
            </svg>
          </span>
        </div>

        {/* Animated Answer Body */}
        <div
          className={`grid transition-all duration-400 ease-in-out ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 mt-4"
              : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed pr-8">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      id="faq"
      className="w-full min-h-screen bg-[#FAFAFA] font-sans px-6 py-20 md:py-32"
    >
      <FaqStyles />

      <div className="max-w-6xl mx-auto">
        {/* FAQ Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading + 3D illustration */}
          <div className="w-full lg:w-[36%] lg:sticky lg:top-28">
            <ScrollReveal direction="up" delay={0}>
              <div className="flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#4F2DDA] via-[#8342FF] to-[#F03878] bg-clip-text text-transparent tracking-tight mb-6 md:mb-10 text-center">
                  FAQ's
                </h2>

                {/* 3D illustration - Explicit sizing and centered */}
                <div
                  className="relative w-full max-w-68 md:max-w-86.5 mx-auto"
                  style={{ perspective: "1000px" }}
                >
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-6 rounded-full bg-black/10 blur-xl" />

                  <img
                    src={FAQ}
                    alt="A confused 3D character leaning on a large red question mark"
                    loading="lazy"
                    decoding="async"
                    className="faq-float relative w-full h-auto select-none drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)] transition-transform duration-500 ease-out hover:scale-105 hover:-rotate-2"
                    draggable={false}
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Full-width continuous FAQ list */}
          <div className="w-full lg:w-[60%] flex flex-col">
            {allFaqData.map((item, index) => (
              <ScrollReveal key={item.id} direction="up" delay={index * 70}>
                <AccordionRow item={item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
