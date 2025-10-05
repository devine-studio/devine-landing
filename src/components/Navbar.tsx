import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import devinelogo from '../assets/devine-white.png';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? 'py-2 glass border-b border-white/10' : 'py-5'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`container mx-auto px-4 md:px-6 relative flex items-center justify-between transition-all duration-500 ${
          isScrolled ? 'max-w-3xl' : 'max-w-7xl'
        }`}
      >
        <motion.a
          href="#"
          className="flex items-center gap-2 z-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={devinelogo}
            alt="Devine Logo"
            className={`transition-all duration-500 object-contain ${
              isScrolled ? 'w-20' : 'w-20'
            }`}
          />
        </motion.a>

        <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          <a href="#home" className="nav-item">
            {t('navbar.home')}
          </a>
          <a href="#about" className="nav-item">
            {t('navbar.about')}
          </a>
          <a href="#team" className="nav-item">
            {t('navbar.team')}
          </a>
          <a href="#projects" className="nav-item">
            {t('navbar.projects')}
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3 z-10">
          <LanguageSwitcher />
          <motion.a
            href="https://github.com/devine-studio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 rounded-full glass text-sm font-medium transition-all hover:bg-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            {t('navbar.github')}
          </motion.a>
        </div>

        <button
          className="md:hidden p-2 text-white z-10"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 glass"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="flex flex-col p-4 space-y-3">
            <a
              href="#home"
              className="nav-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('navbar.home')}
            </a>
            <a
              href="#about"
              className="nav-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('navbar.about')}
            </a>
            <a
              href="#team"
              className="nav-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('navbar.team')}
            </a>
            <a
              href="#projects"
              className="nav-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('navbar.projects')}
            </a>
            <LanguageSwitcher />
            <a
              href="https://github.com/devine-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 rounded-full glass text-sm font-medium transition-all hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              {t('navbar.github')}
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
