import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Award,
  PenTool,
  Megaphone,
  MonitorPlay,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Graphicdesigner from "../assets/images/Graphicdesigner.mp4";
import ContentCreator from "../assets/images/ContentCreator.mp4";
import marketing from "../assets/images/marketing.mp4";

import certificate from "../assets/images/certificate.png";

// Reusable Dynamic Icon Component
const DynamicIcon = ({ icon: Icon, src, alt, className, containerClass }) => {
  return (
    <div className={`flex items-center justify-center ${containerClass}`}>
      {src ? (
        <img
          src={src}
          alt={alt || "icon"}
          loading="lazy"
          className={`object-contain ${className}`}
        />
      ) : Icon ? (
        <Icon className={className} />
      ) : null}
    </div>
  );
};

// Animation Variants for bidirectional reveal
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const premiumStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const premiumCardReveal = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.96,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const LearningPathways = () => {
  const [activeCard, setActiveCard] = useState(null);

  const graphicVideoRef = useRef(null);
  const marketingVideoRef = useRef(null);
  const contentVideoRef = useRef(null);

  const getVideo = (index) => {
    const videos = [
      graphicVideoRef.current,
      marketingVideoRef.current,
      contentVideoRef.current,
    ];

    return videos[index];
  };

  const handleMouseEnter = (index) => {
    const video = getVideo(index);

    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = (index) => {
    const video = getVideo(index);

    if (video && activeCard !== index) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const handleCardClick = (index) => {
    const videos = [
      graphicVideoRef.current,
      marketingVideoRef.current,
      contentVideoRef.current,
    ];

    const isActive = activeCard === index;

    videos.forEach((video, i) => {
      if (!video) return;

      if (i === index && !isActive) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });

    setActiveCard(isActive ? null : index);
  };

  return (
    <section
      id="pathways"
      // Enforcing Poppins font globally for this section
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="w-full bg-white text-slate-800 py-10 md:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-10 md:space-y-12">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // once: false enables bidirectional reveal
          variants={fadeInUp}
          className="text-center space-y-4"
        >
          <h3 className="text-sm font-semibold tracking-widest text-indigo-500 uppercase">
            Learning Pathways
          </h3>
          <h1 className="text-3xl md:text-[2.5rem] lg:te font-bold text-slate-900 leading-tight">
            One Foundation. Three Professional{" "}
            <br className="hidden md:block" />
            <span className="text-[#5D3BEF]">Certificates.</span>
          </h1>
          <div className="w-16 h-1 bg-[#5D3BEF] rounded-full mx-auto" />
        </motion.div>

        {/* Foundation Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          className="bg-indigo-50/30 rounded-3xl p-6 md:p-8 border border-indigo-100 shadow-sm flex flex-col lg:flex-row items-center gap-8 hover:shadow-md transition-shadow duration-300"
        >
          {/* Left: Custom Image */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <DynamicIcon
              src={certificate}
              alt="Adobe Digital Creativity & Generative AI"
              className="w-[110%] h-auto object-cover drop-shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-3/5 space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Adobe Digital Creativity & Generative AI{" "}
              <br className="hidden lg:block" />
              <span className="text-[#5D3BEF]">20 Hours</span>{" "}
              <span className="text-slate-600 text-xl md:text-2xl font-medium">
                (Foundation Journey)
              </span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Designed for every student across every discipline. Learners
              complete real projects, earn digital badges, and strengthen their
              portfolios. After finishing the full journey, they can take the
              final assessment to earn an SSC-recognised certificate.
            </p>
            <div className="inline-flex items-center gap-3 bg-indigo-100/80 px-4 py-3 rounded-full text-indigo-900 text-sm font-medium">
              <Award className="w-5 h-5 text-indigo-600" />
              <span>
                NSQF alignment: SSC/N8440, Technology and Business Fundamentals.
              </span>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="flex items-center justify-center gap-4 py-2 text-indigo-900"
        >
          <span
            className="hidden sm:block flex-1 h-px bg-slate-200"
            aria-hidden="true"
          />
          <div className="flex items-center gap-3 shrink-0">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <h3 className="text-xl md:text-2xl font-bold whitespace-nowrap">
              Professional Certificate Pathways
            </h3>
            <Sparkles className="w-5 h-5 text-indigo-400" />
          </div>
          <span
            className="hidden sm:block flex-1 h-px bg-slate-200"
            aria-hidden="true"
          />
        </motion.div>

        {/* Professional Certificates Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={premiumStagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
        >
          {/* Card 1: Graphic Designer */}
          <motion.div
            variants={premiumCardReveal}
            whileHover={{
              y: -6,
              transition: {
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            whileTap={{ scale: 0.985 }}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
            onClick={() => handleCardClick(0)}
            className="group relative bg-white rounded-3xl p-6 md:p-7 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer"
          >
            {/* Video Background */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
              <video
                ref={graphicVideoRef}
                src={Graphicdesigner}
                loop
                muted
                playsInline
                preload="metadata"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                  activeCard === 0
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-110 lg:group-hover:opacity-100 lg:group-hover:scale-100"
                }`}
              />

              {/* Dark overlay */}
              <div
                className={`absolute inset-0 bg-black/35 transition-opacity duration-500 ${
                  activeCard === 0
                    ? "opacity-100"
                    : "opacity-0 lg:group-hover:opacity-100"
                }`}
              />
            </div>

            {/* Card Content */}
            <div className="relative z-20 flex flex-col h-full">
              <div className="flex items-start gap-4 mb-5">
                <DynamicIcon
                  icon={PenTool}
                  containerClass="w-14 h-14 rounded-2xl bg-indigo-100 flex-shrink-0"
                  className="w-7 h-7 text-indigo-600"
                />

                <div>
                  <h4
                    className={`font-bold leading-tight transition-colors duration-300 ${
                      activeCard === 0
                        ? "text-white"
                        : "text-slate-900 lg:group-hover:text-white"
                    }`}
                  >
                    Adobe Graphic Designer
                  </h4>

                  <p
                    className={`text-sm font-semibold mt-1 transition-colors duration-300 ${
                      activeCard === 0
                        ? "text-indigo-200"
                        : "text-indigo-600 lg:group-hover:text-indigo-200"
                    }`}
                  >
                    Professional Certificate
                  </p>

                  <div className="w-12 h-0.5 bg-indigo-200 mt-2 rounded-full" />
                </div>
              </div>

              <p
                className={`text-sm grow mb-6 font-medium transition-colors duration-300 ${
                  activeCard === 0
                    ? "text-white"
                    : "text-slate-500 lg:group-hover:text-white"
                }`}
              >
                Design • Illustration • Image Editing • Portfolio
              </p>

              <div className="flex items-center justify-between mt-auto">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(0);
                  }}
                  className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition-all duration-300 group-hover:scale-110"
                  aria-label="Show graphic designer video"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Background Number */}
            <div
              className={`absolute -bottom-4 -right-2 text-8xl font-bold z-10 pointer-events-none transition-all duration-500 ${
                activeCard === 0
                  ? "text-white/10"
                  : "text-indigo-50/50 lg:group-hover:text-white/10"
              }`}
            >
              01
            </div>
          </motion.div>

          {/* Card 2: Marketing Specialist */}
          <motion.div
            variants={premiumCardReveal}
            whileHover={{
              y: -6,
              transition: {
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            whileTap={{ scale: 0.985 }}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
            onClick={() => handleCardClick(1)}
            className="group relative bg-white rounded-3xl p-6 md:p-7 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer"
          >
            {/* Video Background */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
              <video
                ref={marketingVideoRef}
                src={marketing}
                loop
                muted
                playsInline
                preload="metadata"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                  activeCard === 1
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-110 lg:group-hover:opacity-100 lg:group-hover:scale-100"
                }`}
              />

              <div
                className={`absolute inset-0 bg-black/35 transition-opacity duration-500 ${
                  activeCard === 1
                    ? "opacity-100"
                    : "opacity-0 lg:group-hover:opacity-100"
                }`}
              />
            </div>

            {/* Card Content */}
            <div className="relative z-20 flex flex-col h-full">
              <div className="flex items-start gap-4 mb-5">
                <DynamicIcon
                  icon={Megaphone}
                  containerClass="w-14 h-14 rounded-2xl bg-pink-100 flex-shrink-0"
                  className="w-7 h-7 text-pink-500"
                />

                <div>
                  <h4
                    className={`font-bold leading-tight transition-colors duration-300 ${
                      activeCard === 1
                        ? "text-white"
                        : "text-slate-900 lg:group-hover:text-white"
                    }`}
                  >
                    Adobe Marketing Specialist
                  </h4>

                  <p
                    className={`text-sm font-semibold mt-1 transition-colors duration-300 ${
                      activeCard === 1
                        ? "text-pink-200"
                        : "text-pink-500 lg:group-hover:text-pink-200"
                    }`}
                  >
                    Professional Certificate
                  </p>

                  <div className="w-12 h-0.5 bg-pink-200 mt-2 rounded-full" />
                </div>
              </div>

              <p
                className={`text-sm grow mb-6 font-medium leading-relaxed transition-colors duration-300 ${
                  activeCard === 1
                    ? "text-white"
                    : "text-slate-500 lg:group-hover:text-white"
                }`}
              >
                Marketing • Branding • Digital Campaigns • Content Strategy
              </p>

              <div className="flex items-center justify-between mt-auto">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(1);
                  }}
                  className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center hover:bg-pink-600 transition-all duration-300 group-hover:scale-110"
                  aria-label="Show marketing video"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Background Number */}
            <div
              className={`absolute -bottom-4 -right-2 text-8xl font-bold z-10 pointer-events-none transition-all duration-500 ${
                activeCard === 1
                  ? "text-white/10"
                  : "text-pink-50/50 lg:group-hover:text-white/10"
              }`}
            >
              02
            </div>
          </motion.div>

          {/* Card 3: Content Creator */}
          <motion.div
            variants={premiumCardReveal}
            whileHover={{
              y: -6,
              transition: {
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            whileTap={{ scale: 0.985 }}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
            onClick={() => handleCardClick(2)}
            className="group relative bg-white rounded-3xl p-6 md:p-7 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer"
          >
            {/* Video Background */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
              <video
                ref={contentVideoRef}
                src={ContentCreator}
                loop
                muted
                playsInline
                preload="metadata"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                  activeCard === 2
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-110 lg:group-hover:opacity-100 lg:group-hover:scale-100"
                }`}
              />

              <div
                className={`absolute inset-0 bg-black/35 transition-opacity duration-500 ${
                  activeCard === 2
                    ? "opacity-100"
                    : "opacity-0 lg:group-hover:opacity-100"
                }`}
              />
            </div>

            {/* Card Content */}
            <div className="relative z-20 flex flex-col h-full">
              <div className="flex items-start gap-4 mb-5">
                <DynamicIcon
                  icon={MonitorPlay}
                  containerClass="w-14 h-14 rounded-2xl bg-teal-100 flex-shrink-0"
                  className="w-7 h-7 text-teal-600"
                />

                <div>
                  <h4
                    className={`font-bold leading-tight transition-colors duration-300 ${
                      activeCard === 2
                        ? "text-white"
                        : "text-slate-900 lg:group-hover:text-white"
                    }`}
                  >
                    Adobe Content Creator
                  </h4>

                  <p
                    className={`text-sm font-semibold mt-1 transition-colors duration-300 ${
                      activeCard === 2
                        ? "text-teal-200"
                        : "text-teal-600 lg:group-hover:text-teal-200"
                    }`}
                  >
                    Professional Certificate
                  </p>

                  <div className="w-12 h-0.5 bg-teal-200 mt-2 rounded-full" />
                </div>
              </div>

              <p
                className={`text-sm grow mb-6 font-medium leading-relaxed transition-colors duration-300 ${
                  activeCard === 2
                    ? "text-white"
                    : "text-slate-500 lg:group-hover:text-white"
                }`}
              >
                Video • Podcast • Social Media • Creative Storytelling
              </p>

              <div className="flex items-center justify-between mt-auto">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(2);
                  }}
                  className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center hover:bg-teal-600 transition-all duration-300 group-hover:scale-110"
                  aria-label="Show content creator video"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Background Number */}
            <div
              className={`absolute -bottom-4 -right-2 text-8xl font-bold z-10 pointer-events-none transition-all duration-500 ${
                activeCard === 2
                  ? "text-white/10"
                  : "text-teal-50/50 lg:group-hover:text-white/10"
              }`}
            >
              03
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningPathways;
