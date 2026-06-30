import { motion } from "motion/react";
import Image1 from "../assets/images/Home/image_6.webp";
import Image2 from "../assets/images/Home/Banner-Desktop.webp";

export default function FooterBanner() {
  return (
    <section className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <picture>
          {/* Mobile version */}
          <source media="(max-width: 768px)" srcSet={Image1} />
          {/* Desktop version */}
          <img
            src={Image2}
            alt="Pavna School Banner"
            className="w-full h-auto block"
          />
        </picture>
      </motion.div>
    </section>
  );
}
