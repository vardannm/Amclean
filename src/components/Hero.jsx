import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const heroVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const childVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={heroVariants}
      className="bg-gradient-to-b from-[#F7FAFC] to-[#E2E8F0] min-h-[80vh] flex items-center justify-center text-center px-4"
    >
      <div className="max-w-4xl">
        <motion.h1 variants={childVariants} className="text-xl md:text-5xl font-bold text-[#1A202C] mb-6"
>
          {t('hero.title')}
        </motion.h1>
        <motion.p variants={childVariants} className="text-[#718096] text-lg md:text-xl mb-8">
          {t('hero.subtitle')}
        </motion.p>
  
      </div>
    </motion.section>
  );
};

export default Hero;