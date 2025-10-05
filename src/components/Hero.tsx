import { GLSLHills } from '@/components/ui/glsl-hills';

export default function Hero() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden ">
      <GLSLHills />
      <div className="space-y-6 pointer-events-none z-10 text-center absolute">
        <h1 className="font-semibold text-7xl whitespace-pre-wrap">
          <span className="italic text-6xl font-thin">
            Design-first development <br />{' '}
          </span>
          <span className="text-7xl font-bold">studio</span>
        </h1>
        <p className="text-sm text-primary/60">
          We craft stunning visuals and user-friendly experiences that <br />{' '}
          help your brand stand out and connect with your audience.
        </p>
      </div>
    </div>
  );
}
