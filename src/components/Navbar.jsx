import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import CleanClean from "../assets/cleanclean.svg";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navVariants = { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } };
  const menuVariants = { closed: { opacity: 0, x: '100%' }, open: { opacity: 1, x: 0 } };
  const langVariants = {
    closed: { opacity: 0, scale: 0.8 },
    open: { opacity: 1, scale: 1 }
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'hy', name: 'Հայերեն', flag: '🇦🇲' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-[#01040b] to-[#173473] text-white p-4 sticky top-0 z-50 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold tracking-tight hover:text-[#F6AD55] transition-colors">
          <img src={CleanClean} alt="Clean Armenia Logo" className="w-48 h-16" />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {Object.keys(t('navbar.links', { returnObjects: true })).map((key) => (
              <motion.li key={key} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={key === 'home' ? '/' : `/${key}`}
                  className="hover:text-[#F6AD55] transition-colors duration-300"
                >
                  {t(`navbar.links.${key}`)}
                </Link>
              </motion.li>
            ))}
          </ul>

          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center space-x-2 text-lg"
            >
              <FaGlobe />
              <span>{languages.find(lang => lang.code === i18n.language)?.name}</span>
            </motion.button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={langVariants}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-40 bg-[#2A4365] rounded-lg shadow-lg p-2 z-10"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="w-full text-left px-4 py-2 hover:bg-[#F6AD55]/20 rounded-md transition-colors flex items-center space-x-2"
                    >
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-40 md:hidden">
              <motion.div
                ref={menuRef}
                className="absolute right-0 top-0 h-full w-64 bg-[#2A4365] p-6 shadow-lg"
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                transition={{ duration: 0.3 }}
              >
                <ul className="space-y-6 mt-12">
                  {Object.keys(t('navbar.links', { returnObjects: true })).map((key) => (
                    <motion.li key={key} whileHover={{ x: 10 }} onClick={() => setIsOpen(false)}>
                      <Link to={key === 'home' ? '/' : `/${key}`} className="text-lg hover:text-[#F6AD55] transition-colors">
                        {t(`navbar.links.${key}`)}
                      </Link>
                    </motion.li>
                  ))}
                  <li className="pt-4">
                    <div className="flex items-center space-x-2">
                      <FaGlobe />
                      <span className="text-lg">Language</span>
                    </div>
                    <ul className="mt-2 space-y-2">
                      {languages.map((lang) => (
                        <li key={lang.code}>
                          <button
                            onClick={() => {
                              changeLanguage(lang.code);
                              setIsOpen(false);
                            }}
                            className="w-full text-left text-lg hover:text-[#F6AD55] transition-colors flex items-center space-x-2"
                          >
                            <span>{lang.flag}</span>
                            <span>{lang.name}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
