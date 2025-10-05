import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
  };

  const currentFlag = i18n.language === 'en' ? '🇬🇧' : '🇧🇷';
  const currentLanguage = i18n.language === 'en' ? 'English' : 'Português';

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium transition-all hover:bg-white/10"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch language - Current: ${currentLanguage}`}
      title={`Switch to ${i18n.language === 'en' ? 'Português' : 'English'}`}
    >
      <span className="text-2xl leading-none">{currentFlag}</span>
    </motion.button>
  );
};

export default LanguageSwitcher;
