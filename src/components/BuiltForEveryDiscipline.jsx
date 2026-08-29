import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Cog,
  Briefcase,
  Store,
  FlaskConical,
  BookOpen,
  Scale,
  Building2,
  Clapperboard,
  Film,
  PenTool,
  HeartPulse,
  GraduationCap,
} from "lucide-react";

/*  Google Font: Poppins  */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
    .bfd-root, .bfd-root * { font-family: 'Poppins', sans-serif; box-sizing: border-box; }
  `}</style>
);

/*  Bidirectional Scroll Reveal  */
const Reveal = ({ children, direction = "up", delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-55px" });
  const controls = useAnimation();

  const hidden = {
    opacity: 0,
    y: direction === "up" ? 32 : direction === "down" ? -32 : 0,
    x: direction === "left" ? 32 : direction === "right" ? -32 : 0,
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
          transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

/*  Discipline Data —  */
const DISCIPLINES = [
  { label: "Engineering", icon: Cog },
  { label: "Management", icon: Briefcase },
  { label: "Commerce", icon: Store },
  { label: "Science", icon: FlaskConical },
  { label: "Humanities", icon: BookOpen },
  { label: "Law", icon: Scale },
  { label: "Architecture", icon: Building2 },
  { label: "Media", icon: Clapperboard },
  { label: "Film", icon: Film },
  { label: "Design", icon: PenTool },
  { label: "Healthcare", icon: HeartPulse },
  { label: "Education", icon: GraduationCap },
];
const DEFAULT_ACTIVE = "null";

/*  Discipline Card  */
const DisciplineCard = ({ label, icon: Icon, isActive, onClick, delay }) => (
  <Reveal direction="up" delay={delay}>
    <motion.button
      onClick={() => onClick(label)}
      className={`
        group relative w-full h-full flex flex-col items-center justify-center
        gap-3 rounded-2xl px-3 py-6 sm:py-7 text-center
        border transition-all duration-300
        focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500
        ${
          isActive
            ? "bg-violet-50 border-violet-200 shadow-[0_4px_16px_rgba(93,59,239,0.12)]"
            : "bg-white border-transparent shadow-[0_1px_2px_rgba(15,23,42,0.05)] hover:border-violet-100 hover:shadow-[0_10px_24px_rgba(15,23,42,0.07)]"
        }
      `}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      <Icon
        className={`w-7 h-7 sm:w-8 sm:h-8 stroke-[1.5] transition-colors duration-300 ${
          isActive
            ? "text-violet-600"
            : "text-slate-700 group-hover:text-violet-600"
        }`}
      />
      <span
        className={`text-[11px] sm:text-[12.5px] font-semibold leading-snug transition-colors duration-300 ${
          isActive ? "text-violet-700" : "text-slate-800"
        }`}
      >
        {label}
      </span>
    </motion.button>
  </Reveal>
);

/*  Main Component  */
const BuiltForEveryDiscipline = () => {
  const [active, setActive] = useState(DEFAULT_ACTIVE);

  return (
    <section className="bfd-root w-full overflow-hidden bg-white">
      <FontLoader />

      <div className="max-w-5xl mx-auto px-4 sm:px-5 lg:px-6 py-10 sm:py-10 lg:py-8 text-center">
        {/*  Eyebrow  */}
        <Reveal direction="right" delay={0.23}>
          <p className="text-[9px] sm:text-[10px] font-semibold tracking-[0.25em] text-violet-600 uppercase mb-4">
            ACROSS EVERY FACULTY
          </p>
        </Reveal>

        {/*  Heading + purple underline ONLY under "On Campus"  */}
        <Reveal direction="up" delay={0.07}>
          <h2 className="text-[1.8rem] sm:text-[2.4rem] lg:text-[2.8rem] font-extrabold text-gray-900 leading-tight mb-5">
            Built For Every Discipline{" "}
            {/*
              "On Campus" is inline so the underline bar
              stays glued to the word at any font size / breakpoint.
            */}
            <span className="relative inline-block text-indigo-600 whitespace-nowrap">
              On Campus
            </span>
          </h2>
        </Reveal>

        {/*  Paragraph  */}
        <Reveal direction="up" delay={0.3}>
          <p className="text-gray-500 text-[12px] sm:text-sm leading-relaxed max-w-xl mx-auto mb-6">
            Creativity And AI Fluency Are Universal Skills, The Skills Centre
            Serves Students Across All Streams.
          </p>
        </Reveal>

        {/*  Centred decorative divider (below paragraph)  */}
        <Reveal direction="up" delay={0.18}>
          <div className="flex justify-center mb-10">
            <div className="w-14 h-0.75 rounded-full bg-[#5D3BEF]" />
          </div>
        </Reveal>

        {/*  Discipline Card Grid*/}
        <Reveal direction="up" delay={0.22}>
          <div className="rounded-[28px] bg-slate-50 border border-slate-100 p-3 sm:p-5 lg:p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {DISCIPLINES.map((d, i) => (
                <DisciplineCard
                  key={d.label}
                  label={d.label}
                  icon={d.icon}
                  isActive={active === d.label}
                  onClick={setActive}
                  delay={i * 0.035}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default BuiltForEveryDiscipline;
