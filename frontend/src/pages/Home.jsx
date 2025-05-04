import React, { memo } from "react";
import { motion } from "framer-motion";
import Header from "../components/HomeModule/Header";
import Cards from "../components/HomeModule/Cards";
import { FaShieldAlt, FaHandshake, FaUserTag } from "react-icons/fa";
import Footer from "../components/HomeModule/Footer";
import LogoCloud from "../components/HomeModule/LogoCloud";
import CommitmentStepsSection from "../components/HomeModule/CommitmentStepsSection";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // easeOutExpo feel
    },
  },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const FeatureCard = memo(({ title, description, icon }) => (
  <motion.div variants={cardItemVariants}>
    <Cards title={title} description={description} icon={icon} />
  </motion.div>
));

const features = [
  {
    title: "Secure Transfers",
    description:
      "Encrypted transfers with multi-signature protection and real-time tracking.",
    icon: (
      <div className="p-3 rounded-md border-b-4 border-green-500">
        <FaShieldAlt className="text-green-500" size={30} />
      </div>
    ),
  },
  {
    title: "Smart Work Commitment",
    description:
      "Escrow-based payments released only when commitments are met.",
    icon: (
      <div className="p-3 rounded-md border-b-4 border-yellow-500">
        <FaHandshake className="text-yellow-500" size={30} />
      </div>
    ),
  },
  {
    title: "Username-Based Payments",
    description: "Send crypto easily using usernames with optional remarks.",
    icon: (
      <div className="p-3 rounded-md border-b-4 border-blue-500">
        <FaUserTag className="text-blue-500" size={30} />
      </div>
    ),
  },
];

function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-customDarkpurple min-h-screen"
    >
      <Header />
      <section className="w-full px-4 py-10 text-white">
        <div className="flex flex-col items-center text-center mx-4">
          <motion.h1
            className="text-customPurple text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            Revolutionary Features
          </motion.h1>
          <p className="text-customGray text-lg max-w-xl mb-10 font-semibold">
            Explore how Blockpay transforms the future of smart work
            commitments.
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardContainerVariants}
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </motion.div>
        </div>
      </section>
      <CommitmentStepsSection />
      <section className="w-full px-4 py-16 text-white bg-gray-900">
        <div className="flex flex-col items-center text-center mx-4">
          <motion.h2
            className="text-customPurple text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            Our Vision
          </motion.h2>
          <p className="text-customGray text-lg max-w-xl mb-6 font-semibold">
            A message from our founder on why Blockpay is redefining trust in crypto transactions.
          </p>
          <motion.div
            className="max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-white text-lg italic mb-4">
              "At Blockpay, we believe trust and simplicity are the future of crypto. Our mission is to empower everyone—freelancers, entrepreneurs, and businesses—with secure, seamless transactions and smart work commitments that deliver results. We’re building a platform where your work and payments are protected, every step of the way."
            </p>

          </motion.div>
          <motion.a
            href="/docs"
            className="mt-8 inline-block bg-customPurple text-white px-6 py-3 rounded-md font-semibold hover:bg-purple-700 transition-colors"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Join Our Journey
          </motion.a>
        </div>
      </section>
      <LogoCloud />
      <Footer />
    </motion.div>
  );
}

export default Home;