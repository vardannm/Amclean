import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-full px-4 p-16 "
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-[#1A202C] mb-8 text-center">
          {t('about.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-900 mb-4">
              {t('about.description1')}
            </p>
            <p className="text-gray-900">
              {t('about.description2')}
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-blue-950 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              {t('about.valuesTitle')}
            </h3>
            <ul className="space-y-2 text-white">
              {t('about.values', { returnObjects: true }).map((value, index) => (
                <li key={index}><span className='text-green-500'>✓</span> {value}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;