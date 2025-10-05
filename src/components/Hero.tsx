import { GLSLHills } from '@/components/ui/glsl-hills';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden ">
      <GLSLHills />
      <div className="space-y-6 pointer-events-none z-10 text-center absolute">
        <h1 className="font-semibold text-7xl whitespace-pre-wrap">
          <span className="italic text-6xl font-thin">
            {t('hero.title')} <br />{' '}
          </span>
          <span className="text-7xl font-bold">{t('hero.studio')}</span>
        </h1>
        <p className="text-sm text-primary/60">{t('hero.subtitle')}</p>
      </div>
    </div>
  );
}
