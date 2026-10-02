import React from 'react';
import { motion } from 'framer-motion';
import ArchitectureCard from './ArchitectureCard';
import CoreDevelopmentCard from './CoreDevelopmentCard';
import StressTestCard from './StressTestCard';
import DeployCard from './DeployCard';

export default function SystemOverview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 mt-6 sm:mt-7">
      {/* 2x2 Unified Engineering Dashboard Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-30px' }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-4 items-stretch"
      >
        {/* PHASE I: ARCHITECTURE */}
        <motion.div variants={cardVariants} className="h-full flex flex-col">
          <ArchitectureCard />
        </motion.div>

        {/* PHASE II: CORE DEVELOPMENT */}
        <motion.div variants={cardVariants} className="h-full flex flex-col">
          <CoreDevelopmentCard />
        </motion.div>

        {/* PHASE III: STRESS TEST */}
        <motion.div variants={cardVariants} className="h-full flex flex-col">
          <StressTestCard />
        </motion.div>

        {/* PHASE IV: DEPLOY */}
        <motion.div variants={cardVariants} className="h-full flex flex-col">
          <DeployCard />
        </motion.div>
      </motion.div>
    </div>
  );
}
