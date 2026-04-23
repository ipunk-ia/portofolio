import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export interface PhotoCardProps {
  image: string;
  title: string;
  category: string;
  className?: string;
}

export function PhotoCard({ image, title, category, className = "" }: PhotoCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className={`w-full relative ${className}`}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative w-full aspect-[3/4] cursor-pointer"
      >
        <div
          className="absolute inset-0 rounded-2xl bg-white/5 border border-white/10 shadow-2xl p-3 hover:bg-white/10 transition-all overflow-hidden"
          style={{
            transform: "translateZ(50px)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="w-full h-full rounded-xl bg-[#111] border border-white/5 overflow-hidden flex flex-col relative">
            <div className="relative flex-grow">
              <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/20 to-transparent opacity-80" />
            </div>
            
            <div 
              className="px-4 py-4 bg-[#111] border-t border-white/5 flex-shrink-0 relative z-10 block"
              style={{ transform: "translateZ(30px)" }}
            >
              <p className="text-[10px] font-bold tracking-widest text-zinc-400 mb-1">{category}</p>
              <h3 className="text-[11px] font-semibold text-white tracking-widest uppercase truncate relative">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
