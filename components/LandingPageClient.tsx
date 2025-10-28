"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { BarChart3, Package, Settings } from "lucide-react";

// Framer Motion variants for animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const featureVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function LandingPageClient() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-gray-950 bg-[radial-gradient(#purple_800/0.1,transparent_1px)] bg-size-[4rem_4rem]"></div>

      <main className="container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center">
        {/* Hero Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-400"
            variants={itemVariants}
          >
            Inventory Management
          </motion.h1>

          <motion.p
            className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Streamline your inventory tracking with our powerful, easy-to-use
            management system. Track products, monitor stock levels, and gain
            valuable insights.
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center"
            variants={itemVariants}
          >
            <Link
              href="/sign-in"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="#features"
              className="bg-transparent text-purple-400 px-8 py-3 rounded-lg font-semibold border-2 border-purple-600 hover:bg-purple-600/10 transition-all duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          id="features"
          className="max-w-5xl mx-auto mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-100">
            Everything you need, nothing you don&apos;t.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              className="bg-gray-900 p-6 rounded-lg border border-purple-800/30 shadow-lg shadow-purple-950/20"
              variants={featureVariants}
            >
              <div className="mb-4">
                <BarChart3 className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Insightful Dashboard
              </h3>
              <p className="text-gray-400">
                Visualize your stock levels, total value, and product trends at
                a glance.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="bg-gray-900 p-6 rounded-lg border border-purple-800/30 shadow-lg shadow-purple-950/20"
              variants={featureVariants}
            >
              <div className="mb-4">
                <Package className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Effortless Management
              </h3>
              <p className="text-gray-400">
                Add, edit, and delete products with a simple, clean interface.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="bg-gray-900 p-6 rounded-lg border border-purple-800/30 shadow-lg shadow-purple-950/20"
              variants={featureVariants}
            >
              <div className="mb-4">
                <Settings className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Secure Authentication
              </h3>
              <p className="text-gray-400">
                Your inventory is safe with secure, built-in user
                authentication.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
