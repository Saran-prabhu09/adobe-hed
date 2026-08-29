import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Cpu,
  Wand2,
  Megaphone,
  MessageSquare,
  Network,
  Image as ImageIcon,
  PenTool,
  FileText,
  Play,
  Clock,
  CheckCircle2,
} from "lucide-react";
import Design from "../assets/images/Design.jpeg";
import Genai from "../assets/images/Genai.jpeg";
import marketing from "../assets/images/marketing.jpeg";
import socialmedia from "../assets/images/socialmedia.jpeg";
import contentmarketing from "../assets/images/contentmarketing.jpeg";
import Fundementals from "../assets/images/Fundementals.jpeg";
import Graphic from "../assets/images/Graphic.jpeg";
import Document from "../assets/images/Document.jpeg";
import Multimedia from "../assets/images/Multimedia.jpeg";
//  Custom Dynamic Icon Logic
//  renderes seamlessly supports both standard Lucide icons and custom path strings
const IconRenderer = ({ icon, className, color }) => {
  if (!icon) return null;

  // If the icon is passed as a string path, render it as a lazy-loaded image
  if (typeof icon === "string") {
    return (
      <img
        src={icon}
        alt="Course Icon"
        className={`${className} object-contain`}
        loading="lazy"
        decoding="async"
      />
    );
  }

  // If it's a React Component (Lucide Pack)
  const IconComponent = icon;
  return <IconComponent className={className} size={22} style={{ color }} />;
};

// Bidirectional Scroll Reveal
function Reveal({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: false, // Set to false to support clean bidirectional scroll resets
    amount: 0.1,
    margin: "0px 0px -8% 0px",
  });

  const directions = {
    up: { opacity: 0, y: 30 },
    down: { opacity: 0, y: -30 },
    left: { opacity: 0, x: -30 },
    right: { opacity: 0, x: 30 },
  };

  return (
    <motion.div
      ref={ref}
      initial={directions[direction]}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : directions[direction]}
      transition={{
        duration: 0.65,
        delay: delay / 1000,
        ease: [0.215, 0.61, 0.355, 1.0], // Smooth cubic-bezier transition
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

//  Dataset
const coursesData = [
  {
    courseNum: "COURSE 01",
    duration: "30 Hrs",
    title: "Design Fundamentals with AI using Adobe",
    alignment: "NSQF 4.5 Aligned",
    isPipeline: false,
    icon: Cpu,
    iconBg: "bg-[#EEECFD]",
    iconColor: "#7450EE",
    image: Design,
  },
  {
    courseNum: "COURSE 02",
    duration: "15 Hrs",
    title: "Essentials of Generative AI Content Creation using Adobe",
    alignment: "NSQF 4.5 Aligned",
    isPipeline: false,
    icon: Wand2,
    iconBg: "bg-[#FDF0FA]",
    iconColor: "#E04FCD",
    image: Genai,
  },
  {
    courseNum: "COURSE 03",
    duration: "30 Hrs",
    title: "Concepts of Digital Marketing using Adobe",
    alignment: "NCVET Alignment in Pipeline",
    isPipeline: true,
    icon: Megaphone,
    iconBg: "bg-[#EDFBF7]",
    iconColor: "#14B8A6",
    image: marketing,
  },
  {
    courseNum: "COURSE 04",
    duration: "30 Hrs",
    title: "Art of Social Media Content Creation using Adobe",
    alignment: "NSQF 4.5 Aligned",
    isPipeline: false,
    icon: MessageSquare,
    iconBg: "bg-[#FFF0F3]",
    iconColor: "#F43F5E",
    image: socialmedia,
  },
  {
    courseNum: "COURSE 05",
    duration: "15 Hrs",
    title: "Fundamentals of Multichannel Content Marketing using Adobe",
    alignment: "NSQF 4.5 Aligned",
    isPipeline: false,
    icon: Network,
    iconBg: "bg-[#FFF7ED]",
    iconColor: "#F97316",
    image: contentmarketing,
  },
  {
    courseNum: "COURSE 06",
    duration: "15 Hrs",
    title: "Principles of Image Editing\n using Adobe",
    alignment: "NCVET Alignment in Pipeline",
    isPipeline: true,
    icon: ImageIcon,
    iconBg: "bg-[#EFF6FF]",
    iconColor: "#3B82F6",
    image: Fundementals,
  },
  {
    courseNum: "COURSE 07",
    duration: "30 Hrs",
    title: "Graphic Design with Adobe Illustrator",
    alignment: "NSQF 4.5 Aligned",
    isPipeline: false,
    icon: PenTool,
    iconBg: "bg-[#E0FDF4]",
    iconColor: "#0D9488",
    image: Graphic,
  },
  {
    courseNum: "COURSE 08",
    duration: "15 Hrs",
    title: "Fundamentals of Document Design using Adobe",
    alignment: "NSQF 4.5 Aligned",
    isPipeline: false,
    icon: FileText,
    iconBg: "bg-[#FAF5FF]",
    iconColor: "#A855F7",
    image: Document,
  },
  {
    courseNum: "COURSE 09",
    duration: "15 Hrs",
    title: "Fundamentals of Multimedia Content Creation using Adobe",
    alignment: "NSQF 4.5 Aligned",
    isPipeline: false,
    icon: Play,
    iconBg: "bg-[#FFF1F2]",
    iconColor: "#E11D48",
    image: Multimedia,
  },
];

export default function CoursesSection() {
  const [activeCard, setActiveCard] = useState(null);
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 font-['Poppins'] text-[#1A1A1E] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16 flex flex-col items-center">
          <Reveal direction="up" delay={0}>
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.12em] uppercase text-[#7450EE]">
              Industry-Aligned Courses
            </span>
          </Reveal>

          <Reveal direction="up" delay={100} className="relative mt-3">
            <h2 className="text-[28px] font-bold leading-tight sm:text-[36px] lg:text-[42px] text-[#111115]">
              Ten Courses. Real{" "}
              <span className="text-[#7450EE]">Workplace</span> Skills.
            </h2>
            {/* Custom centered decorative accent line matching image design */}
            <div className="mx-auto mt-3 h-0.75 w-12 rounded-full bg-[#7450EE]" />
          </Reveal>
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {coursesData.map((course, idx) => (
            <Reveal
              key={idx}
              direction="up"
              delay={120 + (idx % 3) * 60} // Optimized cascading stagger delay formula
              className="h-full"
            >
              <div
                onClick={() => setActiveCard(activeCard === idx ? null : idx)}
                className="card group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#EDF0F5] bg-white p-6 shadow-[0_4px_25px_rgba(0,0,0,0.02)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:bg-linear-to-br hover:from-[#f8f7fb] hover:via-[#f9f7ff] hover:to-[#ebf7f3] hover:shadow-[0_20px_35px_rgba(116,80,238,0.07)]"
              >
                {/* Hover Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
                  <div
                    className={`absolute inset-0 transition-all duration-700 ease-out
                      ${
                        activeCard === idx
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-110 lg:group-hover:opacity-100 lg:group-hover:scale-100"
                      }
                        `}
                    style={{
                      backgroundImage: `url(${course.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      filter: "brightness(1.15) contrast(1.1)",
                    }}
                  />

                  {/*Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                </div>

                {/* Glimmer */}
                <div className="glimmer"></div>

                <div className="relative z-30">
                  {/* Card Top Row */}
                  <div className="mb-5 flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${course.iconBg} transition-transform duration-300 group-hover:scale-105`}
                    >
                      <IconRenderer
                        icon={course.icon}
                        color={course.iconColor}
                        className="h-5 w-5"
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-[#F4F3FF] px-3 py-1 text-[10px] font-bold tracking-wider text-[#7450EE]">
                        {course.courseNum}
                      </span>

                      <div className="flex items-center gap-1 text-[11px] font-medium text-gray-400">
                        <Clock size={12} className="text-gray-400" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`"mb-6 text-[16px] whitespace-pre-line line-clamp-2 font-semibold leading-normal text-[#1A1A1E] transition-colors duration-200 group-hover:text-[#7450EE]">
                     ${
                       activeCard === idx
                         ? "text-[#7450EE]"
                         : "text-[#1A1A1E] lg:group-hover:text-[#7450EE]"
                     }
                       `}
                  >
                    {course.title}
                  </h3>
                </div>

                {/* Footer */}
                <div className="relative z-30 flex items-center gap-2 border-t border-gray-50 pt-4">
                  <CheckCircle2
                    size={15}
                    className={
                      course.isPipeline
                        ? "shrink-0 text-amber-500"
                        : "shrink-0 text-[#7450EE]"
                    }
                    fill="currentColor"
                    fillOpacity={0.15}
                  />

                  <span
                    className={`text-[12px] font-medium ${
                      course.isPipeline ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {course.alignment}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
