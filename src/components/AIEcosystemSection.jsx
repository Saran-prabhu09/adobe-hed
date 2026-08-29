import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import frame1 from "../assets/images/frame1.png";
import frame2 from "../assets/images/frame2.png";
import frame3 from "../assets/images/frame3.png";
import frame4 from "../assets/images/frame4.png";
import frame5 from "../assets/images/frame5.png";
import frame6 from "../assets/images/frame6.png";
import frame7 from "../assets/images/frame7.png";
import frame8 from "../assets/images/frame8.png";

const features = [
  {
    id: "01",
    title: "Licensed Adobe Creative Cloud Pro",
    desc: "Professional software used by global industries, Photoshop, Illustrator, Premiere Pro, and more.",
    img: frame1,
    style: "horizontal",
  },
  {
    id: "02",
    title: "AI-Integrated Learning",
    desc: "Adobe Firefly, Adobe Express AI & Generative AI woven into every learning experience.",
    img: frame2,
    style: "horizontal",
  },
  {
    id: "03",
    title: "Industry Curriculum",
    desc: "Designed around real workplace skills, aligned with NSQF and industry expectations.",
    img: frame3,
    style: "vertical",
  },
  {
    id: "04",
    title: "Portfolio-Based Learning",
    desc: "Students graduate with industry-ready projects that demonstrate real capability.",
    img: frame4,
    style: "vertical",
  },
  {
    id: "05",
    title: "Digital Badges & Credentials",
    desc: "Recognised learning achievements students can showcase to employers.",
    img: frame5,
    style: "vertical",
  },
  {
    id: "06",
    title: "Professional Certifications",
    desc: "Industry-aligned certification pathways recognised via NASSCOM FutureSkills Prime.",
    img: frame6,
    style: "vertical",
  },
  {
    id: "07",
    title: "Faculty Enablement",
    desc: "Structured training, onboarding, and teaching resources for your faculty.",
    img: frame7,
    style: "horizontal",
  },
  {
    id: "08",
    title: "Campus-Wide Implementation",
    desc: "Easy institutional deployment with federated ID access and Admin Console support.",
    img: frame8,
    style: "horizontal",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 16,
    },
  },
};

const AIEcosystemSection = () => {
  return (
    <section
      className="w-full bg-[#fcfcfd] py-10 md:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[10px] md:text-xs font-bold tracking-[0.15em] text-[#6366f1] uppercase mb-4 block">
            What Makes This Different
          </span>
          <h2 className="text-3xl md:text-4xl  lg:text-[2.5rem] font-bold text-gray-900 leading-tight mb-4 text-shimmer">
            A Complete Creative{" "}
            <span className="text-[#5D3BEF]">AI Ecosystem</span>,
            <br className="hidden md:block" />
            Not Just Courses
          </h2>
          <div className="w-16 h-1 bg-[#5D3BEF] mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Dynamic Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.05 }}
          className="grid grid-cols-12 gap-6"
        >
          {features.map((feature) => {
            const isHorizontal = feature.style === "horizontal";
            const colSpanClasses = isHorizontal
              ? "col-span-12 lg:col-span-6"
              : "col-span-12 sm:col-span-6 lg:col-span-3";

            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className={`${colSpanClasses} bg-white rounded-4xl overflow-hidden relative group shadow-[0_4px_25px_rgb(0,0,0,0.02)] border border-gray-100/70 hover:shadow-[0_12px_35px_rgb(99,102,241,0.07)] transition-all duration-300 ease-out`}
              >
                {/* Horizontal Card Layout (Cards 1, 2, 7, 8) */}
                {isHorizontal ? (
                  <div className="flex flex-col sm:flex-row h-full">
                    <div className="w-full sm:w-[42%] shrink-0 self-stretch overflow-hidden">
                      <img
                        src={feature.img}
                        alt={feature.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-center px-8 py-8 pr-16">
                      <span className="w-8 h-8 rounded-full bg-[#eff0fe] text-[#6366f1] text-xs font-bold flex items-center justify-center mb-4">
                        {feature.id}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 leading-snug pr-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Vertical Card Layout (Cards 3, 4, 5, 6) */
                  <div className="flex flex-col h-full overflow-hidden rounded-[28px] bg-white">
                    {/* Image */}
                    <div className="h-48 overflow-hidden">
                      <img
                        src={feature.img}
                        alt={feature.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5 pb-18 flex-1">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EFF0FE] text-[#6366F1] text-xs font-bold mb-4">
                        {feature.id}
                      </span>

                      <div className="mt-4">
                        <h3 className="text-[16px] font-bold leading-tight text-[#111827] mb-3">
                          {feature.title}
                        </h3>

                        <p className="text-gray-500 text-[14px] leading-7">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Arrow Icon Link */}
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[#f8f9ff] group-hover:bg-[#eff0fe] text-[#9ca3af] group-hover:text-[#6366f1] flex items-center justify-center transition-colors duration-300">
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AIEcosystemSection;
