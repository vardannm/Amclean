import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ServiceDetail = () => {
  const { t } = useTranslation();
  const { service, subOption } = useParams();

  const normalizedService = service ? service.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()) : '';
  const normalizedSubOption = subOption ? subOption.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()) : '';


  const titleKey = `services.items.${normalizedService}.subOptions.${normalizedSubOption}.title`;
  const descKey = `services.items.${normalizedService}.subOptions.${normalizedSubOption}.description`;

  const title = t(titleKey, { defaultValue: 'Service Not Found' });
  const description = t(descKey, { defaultValue: 'Sorry, this service detail is not available.' });



  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.5 } },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="py-16 px-4 bg-gradient-to-b from-[#F7FAFC] to-[#E2E8F0] min-h-[80vh] flex items-center justify-center"
    >
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div variants={contentVariants} className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A202C] mb-6">{title}</h2>
          <p className="text-[#718096] text-lg md:text-xl mb-8 leading-relaxed">{description}</p>
          <div className="space-y-6">
            <p className="text-[#718096] text-base">
              {t('serviceDetail.extraInfo', {
                defaultValue: 'Contact us today to schedule this service for your office!',
              })}
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-[#38A169] text-white rounded-full text-lg font-semibold hover:bg-[#F6AD55] transition-colors shadow-md"
              >
                {t('serviceDetail.bookNow', { defaultValue: 'Book Now' })}
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 bg-transparent border-2 border-[#38A169] text-[#38A169] rounded-full text-lg font-semibold hover:bg-[#38A169] hover:text-white transition-colors"
              >
                {t('services.backToServices', { defaultValue: 'Back to Services' })}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServiceDetail;