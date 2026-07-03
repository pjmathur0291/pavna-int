import { FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Compass,
  ShieldCheck,
  Utensils,
  Home,
  Leaf,
  Snowflake,
  Activity,
  Palette,
  Smile,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Heart,
} from "lucide-react";
import Image1 from "../assets/images/Home/OverlayShadow-16.webp";
import Image2 from "../assets/images/Home/OverlayShadow-17.webp";
import Image3 from "../assets/images/Home/OverlayShadow-21.webp";
import Image4 from "../assets/images/Home/OverlayShadow-18.webp";
import Image5 from "../assets/images/Home/OverlayShadow-19.webp";
import Image6 from "../assets/images/Home/OverlayShadow-20.webp";
import Image7 from "../assets/images/Home/OverlayShadow-22.webp";
import Image8 from "../assets/images/Home/image_60.webp";
import Image9 from "../assets/images/Home/DSC06023.JPG.webp";
import Image10 from "../assets/images/Home/DSC06058.JPG.webp";
import Image11 from "../assets/images/Home/image_83.webp";
import Image12 from "../assets/images/Home/image_60.webp";
import Image13 from "../assets/images/Home/Boarding-facility-2-1.webp";
import Image14 from "../assets/images/Home/2O0A1123.webp";
import Image15 from "../assets/images/Home/sports-1.webp";
import Image16 from "../assets/images/Home/entertainmet-1.webp";
import Image17 from "../assets/images/Home/DSC06058.JPG.webp";
import Image18 from "../assets/images/Home/DSC06065.JPG.webp";
import Image19 from "../assets/images/Home/DSC06023.JPG.webp";
import Image20 from "../assets/images/Home/image_83.webp";
import Image21 from "../assets/images/Home/DSC06238.JPG.webp";

interface FacilityTab {
  id: string;
  tabTitle: string;
  heading: string;
  description: string;
  image: any;
  icon: any;
}

const PurpleEducationIcon: FC = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="50" fill="#EFEBFF" />
    <circle cx="50" cy="33" r="8" fill="#7C3AED" />
    <path
      d="M26 53 C26 51 28 50 31 50 C38 50 45 53 50 56 C55 53 62 50 69 50 C72 50 74 51 74 53 V67 C74 69 72 70 69 70 C62 70 55 67 50 64 C45 67 38 70 31 70 C28 70 26 69 26 67 V53 Z"
      fill="#7C3AED"
    />
    <path
      d="M50 56 V64"
      stroke="#EFEBFF"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const BlueShieldIcon: FC = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="50" fill="#E0F2FE" />
    <path
      d="M50 22 C62 22 72 25 72 25 C72 25 72 47 72 53 C72 65 62 73 50 78 C38 73 28 65 28 53 C28 47 28 25 28 25 C28 25 38 22 50 22 Z"
      fill="#2563EB"
    />
    <path
      d="M50 40.5 C52.5 37 57.5 37 59.5 40.5 C61.5 45 50 53 50 53 C50 53 38.5 45 40.5 40.5 C42.5 37 47.5 37 50 40.5 Z"
      fill="#E0F2FE"
    />
  </svg>
);

const GreenMealIcon: FC = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="50" fill="#D1FAE5" />
    <rect
      x="28"
      y="28"
      width="44"
      height="44"
      rx="10"
      stroke="#059669"
      strokeWidth="8"
      fill="none"
    />
    <circle cx="50" cy="50" r="9" fill="#059669" />
  </svg>
);

const PinkBedIcon: FC = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="50" fill="#FFE4E6" />
    <rect x="26" y="32" width="7" height="36" rx="3.5" fill="#E11D48" />
    <rect x="67" y="50" width="7" height="18" rx="3.5" fill="#E11D48" />
    <rect x="33" y="53" width="34" height="7" rx="3.5" fill="#E11D48" />
    <circle cx="41" cy="45" r="6" fill="#E11D48" />
    <rect x="49" y="42" width="18" height="11" rx="3" fill="#E11D48" />
  </svg>
);

const BoardingPage: FC = () => {
  const [activeTab, setActiveTab] = useState<string>("nestled-nature");
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const FACILITIES: FacilityTab[] = [
    {
      id: "nestled-nature",
      tabTitle: "Nestled IN Nature",
      heading: "Premium Boarding Facilities Nestled in Nature",
      description:
        "Set in a serene, green campus away from city noise, our boarding facilities provide children with the calm and space they need to focus, reflect, and recharge a true home away from home.",
      image: [Image1],
      icon: Leaf,
    },
    {
      id: "ac-rooms",
      tabTitle: "Ac room with attached Bath",
      heading: "AC Rooms with Attached Bathrooms",
      description:
        "Our triple-sharing air-conditioned rooms are designed for comfort, cleanliness, and camaraderie. Each room has an attached bathroom and is maintained to the highest hygiene standards year-round.",
      image: [Image2, Image14],
      icon: Snowflake,
    },
    // {
    //   id: "apple-school",
    //   tabTitle: "Apple Distinguished School",
    //   heading: "Apple-Enabled Technology in Classrooms",
    //   description:
    //     "As an Apple Distinguished School, we fuel a premier learning environment through continuous innovation. By integrating Apple technology, we create transformative, interactive experiences that empower every student to lead and succeed in tomorrow’s world.",
    //   image: Image3,
    //   icon: Apple,
    // },
    {
      id: "sports-facilities",
      tabTitle: "State-of-the-Art Sports",
      heading: "State-of-the-Art Sports Facilities",
      description:
        "From horse riding, lawn tennis, and handball to a wide array of indoor and outdoor sports, our world-class infrastructure is designed to help every child discover and nurture their true athletic potential.",
      image: [Image4, Image15],
      icon: Activity,
    },
    {
      id: "co-curricular",
      tabTitle: "Holistic Co-Curricular",
      heading: "Holistic Co-Curricular Exposure",
      description:
        "Pottery, sculpture, textile design, and industrial design are just the beginning. Our diverse range of co-curricular activities empowers students to explore their passions, staying creatively vibrant and emotionally grounded.",
      image: [Image5, Image21],
      icon: Palette,
    },
    {
      id: "entertainment-zone",
      tabTitle: "Entertainment Zone",
      heading: "Entertainment Zone for Recreation",
      description:
        "A dedicated recreation and entertainment zone gives students healthy downtime — table tennis, board games, lounge areas, and more. Balance between study and play is fundamental to wellbeing.",
      image: [Image6, Image16],
      icon: Smile,
    },
    {
      id: "veg-dining",
      tabTitle: "Pure Vegetarian Dining",
      heading: "Pure Vegetarian Dining",
      description:
        "Our in-house kitchen serves freshly prepared, pure vegetarian meals three times a day — nutritionally balanced menus curated to support growing minds and bodies with wholesome, hygienic food.",
      image: [Image17, Image19],
      icon: Utensils,
    },
    {
      id: "medical-facilities",
      tabTitle: "Medical Facilities",
      heading: "Medical Facilities",
      description:
        "We ensure every student's well-being with 24/7 medical care, routine health check-ups, and immediate first-aid support.",
      image: [Image8, Image20],
      icon: Heart,
    },
  ];

  const currentItem =
    FACILITIES.find((item) => item.id === activeTab) || FACILITIES[0];
  const activeIndex = FACILITIES.findIndex((item) => item.id === activeTab);
  useEffect(() => {
    if (!currentItem.image || currentItem.image.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % currentItem.image.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [currentItem]);
  return (
    <div className="bg-[#FDFCFB] min-h-screen text-brand-black font-gill selection:bg-brand-orange/20 selection:text-brand-navy">
      {/* 1. Header Hero Panel with Breadcrumbs */}
      <section className="relative bg-brand-navy text-white overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img
            src={Image13}
            alt="Boarding Campus Hero"
            className="w-full h-full object-cover scale-105 filter blur-[1px]"
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
            <span className="text-brand-orange font-bold">Boarding Life</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-[11px] leading-none tracking-[2.5px] uppercase font-bold text-brand-orange mb-4 block">
              Pavna School Boarding Campus
            </span>
            <h1 className="text-4xl md:text-[52px] lg:text-[52px] font-sans font-bold leading-tight md:leading-[58px] lg:leading-[58px] tracking-tight text-white mb-4">
              Where Character Is Built Alongside Academics
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light font-gill max-w-2xl">
              Pavna School Boarding Campus offers a nurturing, structured, and
              inspiring environment, giving every child the freedom to grow,
              learn, and thrive far beyond the ordinary classroom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. The Truth About Boarding Schools Today (Grid Layout with Side-by-Side Quote Card) */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Content Area */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex flex-col items-start w-fit max-w-full">
                <div className="flex items-center gap-3 mb-6 w-full">
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                  <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                    Setting The Record Straight
                  </span>
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy leading-tight tracking-tight mb-8">
                  The Truth About Boarding Schools Today
                </h2>
              </div>

              <div className="space-y-6 text-[#4B5563] text-[16px] leading-[26px] font-medium font-gill">
                <p>
                  There are many myths about boarding schools, often surrounded
                  by half-truths, such as the idea that they are cold,
                  disconnected, or only suitable for children whose parents are
                  unavailable. The truth about boarding schools, especially
                  modern ones like Pavna, is far more rewarding.
                </p>
                <p>
                  Today's boarding school environment is very different from
                  traditional models. It is warm, well-structured, and deeply
                  intentional, where children develop independence, time
                  management, resilience, and meaningful social connections,
                  qualities that extend well beyond the classroom.
                </p>
                <p>
                  Research reflects that boarding students often demonstrate
                  stronger academic discipline, emotional intelligence, and
                  long-term career readiness. At Pavna School Boarding Campus,
                  we have created a place where children don't simply study,
                  they discover who they are, what they love, and how to pursue
                  it with integrity.
                </p>
              </div>
            </div>

            {/* Right Quote Card Side */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-brand-navy text-white p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between h-full shadow-xl border border-white/5"
              >
                {/* Large Decorative Quote Icon */}
                <div className="text-brand-orange opacity-40 font-serif text-[120px] leading-none absolute -top-4 -left-1 select-none pointer-events-none">
                  “
                </div>

                <div className="relative z-10 pt-10">
                  <p className="text-xl md:text-2xl leading-relaxed font-serif italic text-white/95 mb-10">
                    "A great boarding school doesn't take your child away from
                    home. It gives them a second home, one that prepares them
                    for the world."
                  </p>
                </div>

                <div className="mt-auto relative z-10">
                  <div className="w-full h-[1px] bg-white/10 my-6"></div>

                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white shrink-0">
                      <Compass size={18} className="stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-widest text-brand-orange">
                        Pavna School Philosophy
                      </h4>
                      <p className="text-sm font-semibold text-white/80">
                        CORE BELIEF
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Lasting Impact & Key Benefits (Cards Grid Layout matching the pattern) */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] border-t border-b border-gray-100/85 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex flex-col items-center mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6 w-full max-w-md mx-auto">
                <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                  Lasting Impact
                </span>
                <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-6">
                The Real Benefits of Boarding That Last a Lifetime
              </h2>
            </div>

            <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill">
              Understanding the true benefits of the Pavna School Boarding
              Campus goes beyond infrastructure. The real transformation happens
              when a child learns, grows, and lives in a purposefully designed
              environment.
            </p>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "World - class Cambridge  Curriculum",
                desc: "",
                icon: PurpleEducationIcon,
              },
              {
                title: "Supervised, safe & caring residential life",
                desc: "",
                icon: BlueShieldIcon,
              },
              {
                title: "Pure vegetarian, nutritious meals",
                desc: "",
                icon: GreenMealIcon,
              },
              {
                title:
                  "Air Conditioned Triple-sharing rooms with attached bathrooms",
                desc: "",
                icon: PinkBedIcon,
              },
            ].map((item, i) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="bg-white p-6 rounded-2xl border border-neutral-100/80 shadow-sm hover:border-brand-orange hover:shadow-[0_12px_24px_-10px_rgba(244,129,32,0.18)] transition-all duration-500 group flex flex-col justify-between h-full relative overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div>
                    <div className="w-12 h-12 mb-5">
                      <IconComp />
                    </div>
                    <h3 className="font-serif font-bold text-brand-navy text-[18px] mb-3 group-hover:text-brand-orange transition-colors duration-300">
                      {item.title}
                    </h3>
                    {item.desc && (
                      <p className="text-[#4B5563] text-[14px] leading-relaxed font-medium font-gill">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. World-Class Facilities, Rooted in Purpose (Interactive Swappable Tabs Row + Custom Layout) */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Decorative ambient background accents */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none -mr-48 z-0"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none -ml-48 z-0"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 font-gill">
          {/* Header block on top */}
          <div className="max-w-2xl mb-10">
            <div className="flex items-center gap-3 mb-4 w-full max-w-xs">
              <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
              <span className="shrink-0 text-[11px] leading-tight tracking-[0.2em] uppercase font-bold text-brand-orange">
                WHAT WE OFFER
              </span>
              <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] leading-[48px] font-bold text-brand-navy tracking-tight font-serif">
              World-Class Facilities, Rooted in Purpose
            </h2>
            <p className="text-gray-600 text-base sm:text-lg font-medium leading-relaxed mt-4">
              Every feature of our boarding campus is designed with one aim: to
              give your child the best possible foundation for life.
            </p>
          </div>

          {/* Desktop Version (Desktop Only) */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Simple Vertical Tabs */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {FACILITIES.map((facility) => {
                const isActive = facility.id === activeTab;
                const TabIcon = facility.icon;
                return (
                  <button
                    key={facility.id}
                    type="button"
                    onClick={() => setActiveTab(facility.id)}
                    className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl border text-left transition-all duration-300 group cursor-pointer focus:outline-none relative overflow-hidden ${
                      isActive
                        ? "bg-brand-orange/5 border-brand-orange/40 text-brand-navy shadow-sm"
                        : "bg-white border-neutral-100 hover:border-brand-orange/30 text-brand-navy/80 hover:text-brand-navy shadow-xs"
                    }`}
                  >
                    {/* Active highlight line */}
                    {isActive && (
                      <div className="absolute top-0 left-0 w-[4px] h-full bg-brand-orange" />
                    )}

                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isActive
                            ? "bg-brand-orange text-white"
                            : "bg-neutral-50 text-brand-orange group-hover:bg-brand-orange group-hover:text-white"
                        }`}
                      >
                        <TabIcon size={18} />
                      </div>

                      <span className="text-[14px] font-bold tracking-wide uppercase">
                        {facility.tabTitle}
                      </span>
                    </div>

                    <div
                      className={`transition-transform duration-300 ${isActive ? "text-brand-orange translate-x-1" : "text-neutral-400 group-hover:text-brand-orange group-hover:translate-x-1"}`}
                    >
                      <ChevronRight size={18} className="stroke-[2.5]" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Content Panel with active tab text on left and active tab image on right */}
            <div className="lg:col-span-7 flex flex-col justify-center min-h-[460px] lg:self-center w-full">
              <div className="bg-white rounded-3xl border border-neutral-200/50 shadow-[0_20px_50px_rgba(32,26,91,0.05)] overflow-hidden flex items-center justify-center relative group min-h-[460px]">
                {/* Vertical side colored accent bar */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-orange pointer-events-none" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="grid grid-cols-1 md:grid-cols-12 w-full items-center"
                  >
                    {/* Info Column */}
                    <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-center">
                      <h3 className="text-2xl font-serif font-bold text-brand-navy leading-tight mb-4">
                        {currentItem.heading}
                      </h3>
                      <p className="text-[#4B5563] text-[15px] leading-relaxed font-medium">
                        {currentItem.description}
                      </p>
                    </div>
                    <div className="md:col-span-5 p-6 md:p-8 flex items-center justify-center relative group">
                      <div className="aspect-[4/5] w-full relative overflow-hidden rounded-[2.5rem] shadow-md bg-neutral-100">
                        <AnimatePresence mode="popLayout">
                          <motion.img
                            key={currentImageIndex} // Make sure your parent component tracks an index state (e.g., currentImageIndex)
                            initial={{ opacity: 0, scale: 1.03 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            src={
                              currentItem.image
                                ? currentItem.image[currentImageIndex]
                                : currentItem.image
                            }
                            alt={`${currentItem.heading} - Slide ${currentImageIndex + 1}`}
                            className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                            referrerPolicy="no-referrer"
                          />
                        </AnimatePresence>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Exact match Pagination Dots Layout */}
                        {currentItem.image && currentItem.image.length > 1 && (
                          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
                            {currentItem?.image?.map((_: any, idx: any) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  idx === currentImageIndex
                                    ? "bg-brand-orange w-4"
                                    : "bg-white/50 hover:bg-white"
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Mobile Accordion System (Mobile Only) */}
          <div className="block lg:hidden space-y-4 w-full">
            {FACILITIES.map((facility) => {
              const isExpanded = activeTab === facility.id;
              const TabIcon = facility.icon;
              return (
                <div
                  key={facility.id}
                  className="bg-white rounded-2xl border border-neutral-150 shadow-xs overflow-hidden transition-all duration-300"
                >
                  {/* Accordion Trigger Header */}
                  <button
                    type="button"
                    onClick={() => setActiveTab(isExpanded ? "" : facility.id)}
                    className={`w-full flex items-center justify-between p-4.5 text-left cursor-pointer transition-colors duration-200 focus:outline-none ${
                      isExpanded
                        ? "bg-brand-orange/5"
                        : "hover:bg-neutral-50/50"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isExpanded
                            ? "bg-brand-orange text-white"
                            : "bg-neutral-50 text-brand-orange"
                        }`}
                      >
                        <TabIcon size={18} />
                      </div>
                      <span className="text-[13px] sm:text-[14px] font-bold tracking-wide uppercase text-brand-navy">
                        {facility.tabTitle}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-brand-navy/60 shrink-0 ml-2"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  {/* Accordion Expandable Content Panel */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-2.5 border-t border-neutral-100/70 space-y-4.5">
                          {/* Heading */}
                          <h3 className="text-lg font-serif font-bold text-brand-navy leading-tight">
                            {facility.heading}
                          </h3>

                          {/* Image */}
                          <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-neutral-100 shadow-sm relative">
                            <AnimatePresence mode="popLayout">
                              <motion.img
                                key={currentImageIndex} // Make sure your parent component tracks an index state (e.g., currentImageIndex)
                                initial={{ opacity: 0, scale: 1.03 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                  duration: 0.8,
                                  ease: "easeInOut",
                                }}
                                src={
                                  currentItem.image
                                    ? currentItem.image[currentImageIndex]
                                    : currentItem.image
                                }
                                alt={`${currentItem.heading} - Slide ${currentImageIndex + 1}`}
                                className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                                referrerPolicy="no-referrer"
                              />
                            </AnimatePresence>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Exact match Pagination Dots Layout */}
                            {currentItem.image &&
                              currentItem.image.length > 1 && (
                                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
                                  {currentItem?.image?.map(
                                    (_: any, idx: any) => (
                                      <button
                                        key={idx}
                                        onClick={() =>
                                          setCurrentImageIndex(idx)
                                        }
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                          idx === currentImageIndex
                                            ? "bg-brand-orange w-4"
                                            : "bg-white/50 hover:bg-white"
                                        }`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                      />
                                    ),
                                  )}
                                </div>
                              )}
                          </div>

                          {/* Description */}
                          <p className="text-[#4B5563] text-sm leading-relaxed font-medium">
                            {facility.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. A Home Away From Home (Overlapping Overviews Side-by-Side with visuals) */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] border-t border-b border-gray-100/85 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex flex-col items-start w-fit max-w-full">
                <div className="flex items-center gap-3 mb-6 w-full">
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                  <span className="shrink-0 text-[11px] leading-[28px] tracking-[1.65px] uppercase font-bold text-brand-orange">
                    BOARDING LIFE
                  </span>
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy leading-tight tracking-tight mb-8">
                  A Home Away From Home
                </h2>
              </div>

              {/* Dynamic Feature Rows */}
              <div className="space-y-8 mt-4">
                {[
                  {
                    num: "Feature 01",
                    title: "Pastoral Care",
                    desc: "Dedicated house parents ensuring emotional well-being and academic support around the clock.",
                    icon: ShieldCheck,
                  },
                  {
                    num: "Feature 02",
                    title: "Nutritional Advantage",
                    desc: "Organic, balanced meals with specialized nutritional options available.",
                    icon: Utensils,
                  },
                  {
                    num: "Feature 03",
                    title: "Smart Living",
                    desc: "Modern dormitories with air purification and biometric access control.",
                    icon: Home,
                  },
                ].map((feat) => {
                  const FeatIcon = feat.icon;
                  return (
                    <motion.div
                      key={feat.num}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="flex gap-5 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-brand-orange/5 border border-brand-orange/10 flex items-center justify-center shrink-0 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                        <FeatIcon size={20} className="stroke-[2]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-navy mb-1.5 transition-colors duration-300 group-hover:text-[#f48120]">
                          {feat.title}
                        </h4>
                        <p className="text-[#4B5563] text-sm leading-relaxed font-medium font-gill">
                          {feat.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Two-Card Horizontal Slider */}
            <div className="lg:col-span-6 flex flex-col justify-center relative overflow-hidden">
              <div className="w-full overflow-hidden py-4 px-1">
                <motion.div
                  className="flex gap-4 items-center w-full"
                  animate={{
                    x: `calc(-${slideIndex * 50}% - ${slideIndex * 8}px)`,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                >
                  {/* Card 1 */}
                  <div className="aspect-[4/5] w-[calc(50%-8px)] rounded-3xl overflow-hidden shadow-md shrink-0 relative group bg-neutral-50 border border-neutral-100">
                    <img
                      src={Image9}
                      alt="Comfortable Boarding Dorm"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Card 2 */}
                  <div className="aspect-[4/5] w-[calc(50%-8px)] rounded-3xl overflow-hidden shadow-md shrink-0 relative group bg-neutral-50 border border-neutral-100">
                    <img
                      src={Image10}
                      alt="Boarding Life Student Room"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Card 3 */}
                  <div className="aspect-[4/5] w-[calc(50%-8px)] rounded-3xl overflow-hidden shadow-md shrink-0 relative group bg-neutral-50 border border-neutral-100">
                    <img
                      src={Image11}
                      alt="Structured Study Area"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Card 4 */}
                  <div className="aspect-[4/5] w-[calc(50%-8px)] rounded-3xl overflow-hidden shadow-md shrink-0 relative group bg-neutral-50 border border-neutral-100">
                    <img
                      src={Image12}
                      alt="Professional On-Campus Medical and Healthcare Care"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer Return & Academic Navigation */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-neutral-100 pt-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Previous button */}
              <div className="w-full sm:w-auto text-left order-2 sm:order-1">
                <a
                  href="#advance-as-a-level"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
                >
                  &larr; Advance - AS & A Level
                </a>
              </div>

              {/* Center Home button */}
              <button
                onClick={() => (window.location.hash = "")}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-orange hover:bg-brand-dark-orange text-white text-[13px] font-bold tracking-wider transition-all shadow-md active:scale-95 cursor-pointer w-full sm:w-auto order-1 sm:order-2"
              >
                Return to Homepage
                <ArrowRight size={15} />
              </button>

              {/* Next button */}
              <div className="w-full sm:w-auto text-right order-3">
                <a
                  href="#admissions"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
                >
                  Admissions Journey &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BoardingPage;
