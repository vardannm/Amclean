import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaSquarePhone } from "react-icons/fa6";

const Hero = () => {
  const { t } = useTranslation();
  const heroVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const childVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={heroVariants}
      className="relative  min-h-[80vh] flex items-center justify-center text-center px-4 overflow-hidden"
    >
    
      <div className="relative max-w-4xl flex flex-col items-center z-10">
        <motion.h1 variants={childVariants} className="text-xl md:text-5xl font-bold text-[#1A202C] mb-6">
          {t('hero.title')}
        </motion.h1>
        <motion.p variants={childVariants} className="text-[#718096] text-lg md:text-xl mb-8">
          {t('hero.subtitle')}
        </motion.p>
        <motion.div variants={childVariants} className="mb-6">
          <Link
            to="/services"
            className="inline-block bg-[#F6AD55] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#E69B44] transition-colors"
          >
            {t('hero.serviceButton', { defaultValue: 'View Our Services' })}
          </Link>
        </motion.div>
        <motion.a
          variants={childVariants}
          href="tel:+37444666699"
          className="inline-flex items-center bg-[#38A169] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#2F855A] transition-colors"
        >
          <FaSquarePhone className="w-5 h-5 mr-2" />
          +374 44 66 66 99
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Hero;