import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const links = Object.entries(t('footer.links', { returnObjects: true })).map(([key, name]) => ({
    name,
    path: `#${key}`, 
  }));

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-[#2A4365] to-[#38A169] text-white text-center p-6 mt-auto"
    >
      <div className="container mx-auto">
        <p className="mb-2">
          © {new Date().getFullYear()} {t('navbar.brand')}. {t('footer.rights', { defaultValue: 'All rights reserved.' })}
        </p>
        <div className="flex justify-center space-x-4">
          {links.map((link) => (
            <a key={link.name} href={link.path} className="hover:text-[#F6AD55] transition-colors">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;