import React from "react";
import {
  UserGroupIcon,
  ShieldCheckIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const whyChooseUsData = [
  {
    icon: UserGroupIcon,
    title: "Experienced Team of Security Analysts",
    description:
      "Our team consists of highly skilled and certified security professionals with extensive expertise in safeguarding cloud environments. Their qualifications and experience ensure your Azure infrastructure is evaluated and protected by leading professionals.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Comprehensive Testing Methodologies Tailored for Azure",
    description:
      "We employ thorough and customized testing methodologies specifically designed for Azure environments. Our approach covers a wide range of security aspects, ensuring a robust assessment of your cloud infrastructure's resilience against potential threats.",
  },
  {
    icon: LightBulbIcon,
    title: "Commitment to Delivering Actionable Insights",
    description:
      "We are dedicated to providing clear, actionable recommendations from our security assessments. Our detailed reports and recommendations are crafted to address vulnerabilities effectively, enabling your organization to enhance security and make informed decisions to protect your Azure environment.",
  },
];

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const WhyChooseUsCard = ({ icon: Icon, title, description, index }) => {
  const titleBaseClasses =
    "font-semibold text-gray-900 mb-3 text-center text-xl";
  const titleConditionalClasses =
    index === 1 || index === 2 ? "md:text-lg md:leading-snug" : "";

  return (
    <motion.div
      variants={itemVariants}
      className="bg-slate-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-out h-full md:h-80 flex flex-col cursor-pointer"
      whileHover={{
        scale: 1.03,
        y: -8,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      whileTap={{
        scale: 1.07,
        transition: { duration: 0.15, ease: "easeOut" },
      }}
    >
      <div className="flex justify-center mb-4">
        <Icon className="h-12 w-12 text-teal-500" />
      </div>
      <h3 className={`${titleBaseClasses} ${titleConditionalClasses}`}>
        {title}
      </h3>
      <p
        className="
        text-gray-700 text-sm leading-relaxed flex-grow
        overflow-y-auto /* Default for < md: allow scroll if needed */
        md:overflow-hidden /* For md+: Hide overflow, no scrollbar, text will be clipped */
        md:break-words /* For md+: Allow long words to break */
      "
      >
        {description}
      </p>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Why Choose Our Azure Penetration Testing?
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {whyChooseUsData.map((item, index) => (
            <WhyChooseUsCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
