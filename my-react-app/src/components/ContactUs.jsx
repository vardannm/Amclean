import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4 bg-[#F7FAFC]"
    >
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold text-[#1A202C] mb-8 text-center">
          {t('contact.title')}
        </h2>
        <motion.form
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <input
              type="text"
              placeholder={t('contact.form.name')}
              className="w-full p-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#38A169]"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder={t('contact.form.email')}
              className="w-full p-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#38A169]"
            />
          </div>
          <div>
            <textarea
              placeholder={t('contact.form.message')}
              rows="5"
              className="w-full p-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#38A169]"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full p-3 bg-[#38A169] text-white rounded-lg font-semibold hover:bg-[#F6AD55] transition-colors"
          >
            {t('contact.buttonText')}
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactUs;