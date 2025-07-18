import React, { useState } from "react";
import { motion } from "framer-motion";
import { HomeSection } from "../components/WebDesign/HomeSection";
import { ServicesSection } from "../components/WebDesign/ServicesSection";
import { ImportanceSection } from "../components/WebDesign/ImportanceSection";
import { DeliverSection } from "../components/WebDesign/DeliverSection";
import FaqSection from "../components/WebDesign/FaqSection";
import { initialFaqs } from "../components/WebDesign/WebDesignData";
import HeroSection from "../components/cloud-security/HeroSection";
import { Layers } from "lucide-react";
import hero from '../assets/WebDesignPage/hero.jpg';
import GetInTouch_Section from "../components/Marketing/GetInTouch_Section";

export const WebDesignPage = () => {
  const [faqs, setFaqs] = useState(
    initialFaqs.map((faq) => ({ ...faq, isOpen: false }))
  );

  const [, setIsPopUpOpen] = useState(false);

  const handleSetFaqs = (e, key) => {
    e.preventDefault();
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, index) =>
        index === key ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col">
      {/* HeroSection */}
      <HeroSection
        subtitle="Crafting visually stunning and user-friendly digital experiences."
        title="Web Design"
        backgroundImage={hero}
        Icon={Layers}
      />

      <motion.div className="space-y-8">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <HomeSection />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ServicesSection />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ImportanceSection />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <DeliverSection setIsPopUpOpen={setIsPopUpOpen} />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <GetInTouch_Section />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <FaqSection faqs={faqs} handleSetFaqs={handleSetFaqs} />
        </motion.div>
      </motion.div>
    </div>
  );
};
