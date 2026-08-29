import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Briefcase,
  BadgeCheck,
  FolderOpen,
  Sparkles,
  Palette,
  Users,
  PresentationIcon,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import student from "../assets/images/student.png";
import studentlab from "../assets/images/studentlab.mp4";
/*  Google Font: Poppins  */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
    .so-root, .so-root * { font-family: 'Poppins', sans-serif; box-sizing: border-box; }
  `}</style>
);

/*  Bidirectional Scroll Reveal  */
const Reveal = ({ children, direction = "up", delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-60px" });
  const controls = useAnimation();

  const hidden = {
    opacity: 0,
    y: direction === "up" ? 36 : direction === "down" ? -36 : 0,
    x: direction === "left" ? 36 : direction === "right" ? -36 : 0,
  };

  useEffect(() => {
    controls.start(isInView ? "visible" : "hidden");
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: hidden,
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: { duration: 0.68, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

/*  Dynamic Icon Renderer  */
const IconRenderer = ({
  icon: LucideIcon,
  customIcon: CustomIcon,
  className,
}) => {
  if (CustomIcon) return <CustomIcon className={className} />;
  if (LucideIcon) return <LucideIcon className={className} strokeWidth={1.8} />;
  return null;
};
const HoverVideo = ({ src, className }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.load();
    }
  }, []);

  return (
    <motion.video
      ref={videoRef}
      src={src}
      poster={student}
      muted
      loop
      autoPlay={false}
      playsInline
      preload="auto"
      className={className}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, margin: "-70px" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => {
        videoRef.current?.play();
      }}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0; // Optional: restart from beginning next hover
        }
      }}
    />
  );
};
/*  Outcome Cards Data  */
const OUTCOMES = [
  {
    icon: Briefcase,
    customIcon: null,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    label: "Professional Portfolio",
  },
  {
    icon: BadgeCheck,
    customIcon: null,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-500",
    label: "Adobe Credentials",
  },
  {
    icon: FolderOpen,
    customIcon: null,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-500",
    label: "Industry Projects",
  },
  {
    icon: Sparkles,
    customIcon: null,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-500",
    label: "AI Fluency",
  },
  {
    icon: Palette,
    customIcon: null,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    label: "Digital Creativity",
  },
  {
    icon: Users,
    customIcon: null,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
    label: "Communication Skills",
  },
  {
    icon: PresentationIcon,
    customIcon: null,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    label: "Presentation Skills",
  },
  {
    icon: Rocket,
    customIcon: null,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-500",
    label: "Job Readiness",
  },
  {
    icon: ShieldCheck,
    customIcon: null,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-500",
    label: "Creative Confidence",
  },
];

/*  Outcome Card  */
const OutcomeCard = ({ item, index }) => {
  // stagger row-by-row (3 per row) and column within row
  const row = Math.floor(index / 3);
  const col = index % 3;
  const delay = row * 0.08 + col * 0.05;

  return (
    <Reveal direction="up" delay={delay} className="h-full w-full">
      <motion.div
        whileHover={{
          y: -6,
          sclae: 1.02,
          boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
          borderColor: "rgba(167,139,250,0.45)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className=" h-28 sm:h-full flex flex-col items-start bg-white rounded-2xl p-3.5 
                   border border-gray-100 shadow-sm cursor-default"
      >
        {/* Icon box */}
        <div
          className={` mb-4 w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                      ${item.iconBg}`}
        >
          <IconRenderer
            icon={item.icon}
            customIcon={item.customIcon}
            className={`w-5 h-5 sm:w-4 sm:h-4 ${item.iconColor}`}
          />
        </div>
        {/* Label */}
        <p className="text-[11px] sm:text-[13px] lg:text-[14px] font-semibold  text-gray-800 leading-tight whitespace-nowrap truncate">
          {item.label}
        </p>
      </motion.div>
    </Reveal>
  );
};

/*  Main Component  */
const StudentOutcomes = () => {
  return (
    <section className="so-root w-full overflow-hidden bg-white">
      <FontLoader />

      <div
        className="max-w-300 mx-auto
                   grid grid-cols-1 lg:grid-cols-[44%_56%]
                   gap-0
                   px-4 sm:px-6 lg:px-8
                   py-10 sm:py-12 lg:py-16
                   items-center"
      >
        {/* LEFT: Student Image  */}
        <Reveal direction="right" className="w-full">
          <div
            className="relative w-full overflow-hidden rounded-3xl
                       min-h-70 sm:min-h-95 lg:min-h-125"
            style={{
              background:
                "linear-gradient(145deg,#EDE9FE 0%,#DDD6FE 45%,#C4B5FD 100%)",
            }}
          >
            {/* Lazy-loaded student image 
            <motion.img
              src={student}
              alt="Three students celebrating with an Adobe certificate"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top absolute inset-0 scale-105"
              initial={{ opacity: 0, scale: 1.06 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />*/}
            <HoverVideo
              src={studentlab}
              poster={student}
              className="w-full h-full object-cover object-top absolute inset-0 scale-105"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>
        </Reveal>

        {/*  RIGHT: Content  */}
        <div
          className="flex flex-col
                     pt-8 lg:pt-0
                     lg:pl-10 xl:pl-14"
        >
          {/* Eyebrow */}
          <Reveal direction="up">
            <p
              className="text-[9px] sm:text-[10px] font-semibold tracking-[0.25em]
                         text-[#5D3BEF] uppercase mb-3"
            >
              STUDENT OUTCOMES
            </p>
          </Reveal>

          {/* Heading */}
          <Reveal direction="up" delay={0.07}>
            <h2
              className="text-[1.75rem] sm:text-[2.1rem] lg:text-[2.4rem]
                         font-extrabold text-gray-900 leading-[1.18] mb-4"
            >
              Students Graduate With
              <br />
              More Than A <span className="text-indigo-600">Certificate</span>
            </h2>
          </Reveal>

          {/* Paragraph */}
          <Reveal direction="up" delay={0.13}>
            <p className="text-gray-500 text-[12px] sm:text-[13px] leading-relaxed mb-7 max-w-lg">
              Every Graduate Leaves With A Professional Portfolio, Adobe
              Credentials, And Demonstrable AI Fluency, The Evidence Employers
              Ask For.
            </p>
          </Reveal>

          {/* 3 × 3 Outcome Grid */}
          <div className="grid grid-cols-1 min-[430px]:grid-cols-2 lg:grid-cols-3 gap-3 items-stretch">
            {OUTCOMES.map((item, i) => (
              <OutcomeCard key={item.label} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentOutcomes;
