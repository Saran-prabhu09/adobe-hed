import { motion } from "framer-motion";

export default function PartnerSection() {
  // Bidirectional animation configurations for scroll reveal
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Ultra-smooth cubic-bezier curve
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      loading="lazy" // Native browser lazy-loading hint for layout visibility
      className="w-full relative overflow-hidden flex items-center justify-center font-sans"
      style={{
        background:
          "linear-gradient(92.62deg, #5D3BEF -17.05%, #A357DC 45.14%, #E873C8 107.34%)",
        boxShadow: "inset 54px 80px 216.3px 0px rgba(255, 255, 255, 0.25)",
      }}
    >
      <div className="w-full max-w-360 min-h-70.75 md:h-70.75 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-12 md:py-0 text-center text-white select-none">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }} // Enables seamless bidirectional scroll reveal
          variants={containerVariants}
          className="flex flex-col items-center justify-center max-w-275 mx-auto gap-3 md:gap-4"
        >
          {/* Subtitle Section */}
          <motion.span
            variants={itemVariants}
            className="text-[12px] md:text-[14px] font-medium tracking-widest uppercase text-white/90"
          >
            Why Partner With Us?
          </motion.span>

          {/* Main Heading Section */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-[48px] font-bold tracking-tight leading-tight md:leading-14"
          >
            We Don't Just Deliver Courses
          </motion.h2>

          {/* Paragraph Section */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm md:text-[16px] leading-relaxed md:leading-6.5 max-w-240 font-normal text-white/90 balance-text"
          >
            We Help Universities Establish A Sustainable Creative AI Ecosystem
            That Equips Students With Globally Relevant Digital Skills,
            Professional Credentials, And Practical Experience Aligned With The
            Future Of Work.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
