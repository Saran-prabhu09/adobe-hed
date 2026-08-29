import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import lab from "../assets/images/lab.png";
import adobeLab from "../assets/images/adobelab.mp4";
/*  Google Fonts: Poppins  */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
    .trusted-ecosystem-root, .trusted-ecosystem-root * { 
      font-family: 'Poppins', sans-serif; 
      box-sizing: border-box;
    }
  `}</style>
);

/*  Bidirectional Scroll-Reveal Wrapper  */
const Reveal = ({ children, direction = "up", delay = 0, className = "" }) => {
  const ref = useRef(null);
  //  false and margin: "-70px" for continuous bidirectional reveal
  const isInView = useInView(ref, { once: false, margin: "-70px" });
  const controls = useAnimation();

  //48px offset
  const hiddenState = {
    opacity: 0,
    y: direction === "up" ? 48 : direction === "down" ? -48 : 0,
    x: direction === "left" ? 48 : direction === "right" ? -48 : 0,
  };

  useEffect(() => {
    //bidirectional toggle
    controls.start(isInView ? "visible" : "hidden");
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: hiddenState,
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: { duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

/*  Lazy Image  
const LazyImg = ({ src, alt, className }) => (
  <motion.img
    src={src}
    alt={alt}
    loading="lazy"
    decoding="async"
    className={className}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: false, margin: "-70px" }}
    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
  />
);*/

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
      poster={lab}
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

/*  Data  */
const STATS = [
  {
    value: "#1",
    label: "AI & Big Data – fastest growing skill",
    sub: "(WEF Future of Jobs Report)",
  },
  {
    value: "#4",
    label: "Creative Thinking – future workforce skill",
    sub: "(WEF Future of Jobs Report)",
  },
  {
    value: "20+",
    label: "professional tools included per user",
    sub: "",
  },

  {
    value: "10+",
    label: "Industry-aligned courses, NSQF aligned",
    sub: "",
  },
  {
    value: "3+",
    label: "Professional certificate pathways",
    sub: "",
  },
];

/*  Main Component  */
const TrustedEcosystem = () => {
  return (
    <section className="trusted-ecosystem-root w-full bg-white pb-20">
      <FontLoader />

      {/*  Hero: Image Left | Content Right  */}
      <div className="max-w-300 mx-auto px-6 py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="w-full rounded-3xl overflow-hidden shadow-xl aspect-4/3 lg:aspect-16/11">
              {/*<LazyImg
                  src={lab}
                  alt="Students working in Adobe Creative Lab"
                  className="w-full h-full object-cover block scale-105"
                />*/}
              <HoverVideo
                src={adobeLab}
                className="w-full h-full object-cover block scale-105"
                preload="metadata"
              />
            </div>
          </motion.div>
          {/* Right — Text Content */}

          <div className="flex flex-col lg:-mt-12 ">
            <Reveal direction="up" delay={0.25}>
              <h2 className="text-4xl lg:text-[2.5rem] font-bold text-gray-900 leading-[1.15] mb-6 tracking-tight">
                Universities Need More Than{" "}
                <span className="text-[#6D28D9]">Degrees</span>.
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.8}>
              <p className="text-gray-500 text-[13px] sm:text-[14px] leading-relaxed mb-5">
                Today's Graduates Are Expected To Think Creatively, Communicate
                Effectively, Leverage AI Responsibly, And Build Professional
                Portfolios That Demonstrate Real-World Capabilities.
              </p>
              <p className="text-gray-500 text-[13px] sm:text-[14px] leading-relaxed">
                The Digital Creativity & AI Skills Centre Enables Universities
                To Bridge The Gap Between Academic Learning And Industry
                Expectations Through An Integrated Ecosystem Of Creativity,
                Artificial Intelligence, And Experiential Learning.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
      {/*  The Numbers Behind The Shift  */}
      <div className="max-w-300 mx-auto px-6 pt-10 text-center">
        <Reveal direction="up">
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#6D28D9] uppercase mb-4">
            WHY THIS MATTERS
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-gray-900 leading-tight mb-5">
            The <span className="text-[#6D28D9]">Numbers</span> Behind The Shift
          </h2>

          <p className="text-gray-500 text-[12px] sm:text-[14px] max-w-3xl mx-auto leading-relaxed mb-6">
            Artificial intelligence, digital skills, and creative thinking rank
            the highest among the fastest-growing skills by 2030, as per the
            world economic forum's future of jobs report.
          </p>

          {/* Small Purple Divider Bar */}
          <div className="w-16 h-1 bg-[#6D28D9] rounded-full mx-auto mb-10" />
        </Reveal>

        {/*  Stats Card (Purple to Pink Gradient)  */}
        <Reveal direction="up" delay={0.2}>
          <div className="w-full rounded-4xl overflow-hidden bg-linear-to-r from-[#7B3FE4] via-[#9B4BEA] to-[#D571D2] shadow-xl">
            <div className="grid grid-cols-2 asm:grid-cols-2 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-white/20 py-8 lg:py-10">
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center justify-start text-center px-4 py-4 lg:py-0 text-white"
                  whileHover={{ scale: 1.035, y: -4 }}
                  transition={{ type: "spring", stiffness: 320, damping: 18 }}
                >
                  <p className="text-4xl lg:text-5xl font-medium mb-3">
                    {stat.value}
                  </p>
                  <p className="text-[12px] lg:text-[13px] font-medium leading-snug max-w-40">
                    {stat.label}
                  </p>
                  {stat.sub && (
                    <p className="text-[10px] text-white/70 mt-1.5 leading-tight">
                      {stat.sub}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TrustedEcosystem;
