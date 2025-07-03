import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Partners = () => {
  const { t } = useTranslation();

  const partners = t('partners.items', { returnObjects: true });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      transition: { delay: index * 0.2 },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="py-16 px-4 bg-[#F7FAFC]"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-[#1A202C] mb-12 text-center">{t('partners.title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="bg-[#E2E8F0] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-[#1A202C] mb-2">{partner.name}</h3>
              <p className="text-[#718096]">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Partners;