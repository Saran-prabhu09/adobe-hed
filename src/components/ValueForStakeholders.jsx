import { motion } from "framer-motion";
import {
  Award,
  Folder,
  Briefcase,
  Sparkles,
  FileText,
  GraduationCap,
  BookOpen,
  ClipboardCheck,
  TrendingUp,
  Lightbulb,
  Monitor,
  Handshake,
} from "lucide-react";

import schoolbag from "../assets/images/schoolbag.png";
import officebag from "../assets/images/officebag.png";
import whitehouse from "../assets/images/whitehouse.png";

const AdobeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M15.5 2.5H24V21.5H15.5L12 12.5L8.5 21.5H0V2.5H8.5L12 11.5L15.5 2.5Z" />
  </svg>
);

// Reusable Dynamic Icon Component
const DynamicIcon = ({ icon: Icon, src, alt, className, containerClass }) => {
  return (
    <div
      className={`flex items-center justify-center shrink-0 ${containerClass}`}
    >
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardsData = [
  {
    title: "For Students",
    image: schoolbag,
    theme: {
      lightBg: "bg-[#f5f3ff]", // Custom light indigo/purple
      iconBg: "bg-indigo-100",
      textColor: "text-indigo-700",
    },
    items: [
      { text: "Industry certifications", icon: Award },
      { text: "Portfolio development", icon: Folder },
      { text: "Career readiness", icon: Briefcase },
      { text: "AI skills", icon: Sparkles },
    ],
  },
  {
    title: "For Faculty",
    image: officebag,
    theme: {
      lightBg: "bg-[#fff1f2]", // Custom light rose/pink
      iconBg: "bg-rose-100",
      textColor: "text-rose-500",
    },
    items: [
      { text: "Ready curriculum", icon: FileText },
      { text: "Faculty training", icon: GraduationCap },
      { text: "Teaching resources", icon: BookOpen },
      { text: "Adobe tools", icon: AdobeIcon },
    ],
  },
  {
    title: "For Universities",
    image: whitehouse,
    theme: {
      lightBg: "bg-[#eff6ff]", // Custom light blue
      iconBg: "bg-blue-100",
      textColor: "text-blue-500",
    },
    items: [
      { text: "NEP alignment", icon: ClipboardCheck },
      { text: "Higher employability", icon: TrendingUp },
      { text: "Innovation culture", icon: Lightbulb },
      { text: "Digital transformation", icon: Monitor },
      { text: "Industry collaboration", icon: Handshake },
    ],
  },
];

const ValueForStakeholders = () => {
  return (
    <section
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="min-h-screen bg-white  py-10 md:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center space-y-4"
        >
          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase">
            University Benefits
          </h3>
          <h2 className="text-3xl md:text-5x1 font-bold text-slate-900 flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3">
            <span>Value For Every</span>
            <div className="relative inline-block">
              <span className="text-indigo-600">Stakeholder</span>
              {/* Center aligned precise underline */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-0.75 bg-indigo-600 rounded-full"></div>
            </div>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-4"
        >
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Top Image Section */}
              <div
                className={`${card.theme.lightBg} w-full h-60 md:h-56 p-3 md:p-6 flex items-center justify-center`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-full object-contain drop-shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col grow bg-white">
                {/* Title */}
                <div className="mb-8">
                  <h3
                    className={`text-xl font-bold text-center ${card.theme.textColor}`}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* List Items */}
                <div className="space-y-4 grow">
                  {card.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-6 group">
                      <div
                        className={`w-10 h-10 rounded-xl ${card.theme.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <DynamicIcon
                          icon={item.icon}
                          className={`w-5 h-5 ${card.theme.textColor}`}
                        />
                      </div>
                      <span className="text-sm md:text-base font-medium text-slate-700">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueForStakeholders;
