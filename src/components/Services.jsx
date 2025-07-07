import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(null);


const services = Object.entries(t('services.items', { returnObjects: true })).map(([key, value]) => ({
  key,
  title: value.title,
  description: value.description,
  subOptions: Object.entries(value.subOptions).map(([subKey, subValue]) => ({
    title: subValue.title,
    description: subValue.description,
    path: `/services/${key}/${subKey}`, 
  })),
}));

  const containerVariants = {
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

  const subOptionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-16 px-4 bg-[#F7FAFC]"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-[#1A202C] mb-12 text-center">{t('services.title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="bg-[#E2E8F0] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div
                className="cursor-pointer"
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                <h3 className="text-xl font-semibold text-[#1A202C] mb-2">{service.title}</h3>
                <p className="text-[#718096]">{service.description}</p>
              </div>
              <AnimatePresence>
                {expanded === index && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={subOptionVariants}
                    className="mt-4 space-y-2"
                  >
                    {service.subOptions.map((subOption) => (
                      <Link
                        key={subOption.title}
                        to={subOption.path}
                        className="block p-2 bg-sky-50 rounded-md hover:bg-sky-100 transition-colors text-[#1A202C]"
                      >
                        <span className="font-medium">{subOption.title}</span>
                        <p className="text-sm text-[#718096]">{subOption.description}</p>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;