import { FC } from "react";
import { motion } from "motion/react";
// import Image1 from "../assets/images/Home/image_24.webp";
import Image1 from "../assets/images/Home/image_53.webp";
import Image2 from "../assets/images/Home/image_67.webp";
import Image3 from "../assets/images/Home/image_46.webp";
import Image4 from "../assets/images/Home/image_68.webp";
import Image5 from "../assets/images/Home/image_69.webp";
import Image6 from "../assets/images/Home/image_70.webp";
import Image7 from "../assets/images/Home/image_71.webp";
import Image8 from "../assets/images/Home/image_72.webp";
import Image9 from "../assets/images/Home/image_73.webp";
import Image10 from "../assets/images/Home/image_74.webp";
import Image11 from "../assets/images/Home/image_75.webp";
import Image12 from "../assets/images/Home/image_76.webp";

interface TeamMember {
  name: string;
  designation: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "AARTI NIGAM",
    designation: "PRINCIPAL",
    image: Image1,
  },
  {
    name: "Mr. Ashank Bhandari",
    designation: "(Management Professional) Executive Director",
    image: Image2,
  },
  {
    name: "Prof. KVSM Krishna",
    designation: "Director Emeritus",
    image: Image3,
  },
  {
    name: "Ms. Aarti Nigam",
    designation: "Principal",
    image: Image4,
  },
  {
    name: "Ms. Jeanie Aibara",
    designation: "(Educationist) Head Academic Board",
    image: Image5,
  },
  {
    name: "CA Rakesh Bajaj",
    designation: "(Educationist) Head Operations",
    image: Image6,
  },
  {
    name: "Mr. JC Pant",
    designation: "(Educationist) Member",
    image: Image7,
  },
  {
    name: "Mr. Agam Jain",
    designation: "(IPS) Member",
    image: Image8,
  },
  {
    name: "Mr. Gaurav Dayal",
    designation: "(IAS) Member",
    image: Image9,
  },
  {
    name: "Mr. Piyush Mordia",
    designation: "(IPS) Member",
    image: Image10,
  },
  {
    name: "Mr. Paras Parekh",
    designation: "(Business) Member",
    image: Image11,
  },
  {
    name: "Mr. Pramod Kumar",
    designation: "(Legal) Member",
    image: Image12,
  },
];

const AcademicTeam: FC = () => {
  return (
    <div className="bg-[#FDFCFB] min-h-screen text-brand-black font-gill selection:bg-brand-orange/20 selection:text-brand-navy">
      {/* 1. Header Hero Panel with Breadcrumbs (consistent with Early Years) */}
      <section className="relative bg-brand-navy text-white overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img
            src="/images/school_robotics_lab_1780940199532.webp"
            alt="School Lab Background"
            className="w-full h-full object-cover scale-105 filter blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent" />
        </div>

        {/* Decorative Grid Patterns */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-brand-gray mb-6">
            <span
              className="hover:text-brand-orange transition-colors cursor-pointer"
              onClick={() => (window.location.hash = "")}
            >
              Home
            </span>
            <span className="text-white/30">/</span>
            <span className="text-white/50">About</span>
            <span className="text-white/30">/</span>
            <span className="text-brand-orange font-bold">Academic Team</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-[52px] lg:text-[52px] font-sans font-bold leading-tight md:leading-[58px] lg:leading-[58px] tracking-tight text-white mb-4">
              Academic Team
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light font-gill max-w-2xl">
              Visionary educators and leaders shaping standard academic
              pathways.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Academic Team Section with Faculty Cards Grid */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] border-t border-b border-gray-100/85">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] leading-none tracking-[2.5px] uppercase font-bold text-brand-orange bg-brand-orange/5 px-3 py-1.5 rounded-full border border-brand-orange/10 mb-3 inline-block">
              Advisors & Leaders
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-4">
              Meet Our Academic Board & Council
            </h2>
            <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill">
              Our esteemed leadership, board members, and educationists working
              in unison to steer Pavna toward excellence.
            </p>
          </div>

          {/* Premium Faculty Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => {
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl border border-neutral-100/90 shadow-sm overflow-hidden flex flex-col h-[400px] hover:border-brand-orange hover:shadow-[0_12px_24px_-10px_rgba(244,129,32,0.18)] transition-all duration-500 group"
                >
                  {/* Image section occupying 70-75% of card height (290px out of 400px = 72.5%) */}
                  <div className="h-[290px] w-full overflow-hidden relative bg-[#FAF9F6]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Info section occupying remaining ~27.5% of card height (110px out of 400px) */}
                  <div className="p-5 flex flex-col justify-center h-[110px] bg-white border-t border-neutral-50">
                    <h3 className="text-[17px] sm:text-lg font-serif font-bold text-brand-navy mb-1 group-hover:text-brand-orange transition-colors duration-300 leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-brand-orange font-bold uppercase tracking-wider leading-tight sm:leading-normal">
                      {member.designation}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicTeam;
