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
      className="relative py-20 px-4"
    >
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-extrabold text-center text-[#1A202C] mb-14 tracking-tight">
          {t('partners.title')}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="bg-white bg-opacity-80 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-1 text-center">
                {partner.name}
              </h3>
              {partner.description && (
                <p className="text-gray-600 text-sm mt-2 text-center">{partner.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Partners;
