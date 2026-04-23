import React from 'react';
import Hero from '@/src/components/ui/animated-shader-hero';
import { PhotoCard } from '@/src/components/PhotoCard';
import { Palette, PenTool, Layout, Layers, Terminal, AtSign, MapPin } from 'lucide-react';

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Damnation T-Shirt",
    category: "01",
    image: "https://lh3.googleusercontent.com/d/1GzMsibHSIoDuKmx-hMNha8y-FXWXRhYS",
  },
  {
    id: 2,
    title: "Castigo T-Shirt",
    category: "02",
    image: "https://lh3.googleusercontent.com/d/1YS2TP600YoU5qeTo0lnSLOwMTnhSt3HS",
  },
  {
    id: 3,
    title: "Pasugama 18 Poster",
    category: "03",
    image: "https://lh3.googleusercontent.com/d/1apjoByejx5JmISx-tBX47OrmG_XI9XvN",
  },
  {
    id: 4,
    title: "Children's Book Art 1",
    category: "04",
    image: "https://lh3.googleusercontent.com/d/1YoIjJdt97BXpaB4BajAYuTMpD6no2b5H",
  },
  {
    id: 5,
    title: "Children's Book Art 2",
    category: "05",
    image: "https://lh3.googleusercontent.com/d/1TdnPlG8Wj46G_JeusotzMxtXzH8PxX5R",
  },
  {
    id: 6,
    title: "Children's Book Art 3",
    category: "06",
    image: "https://lh3.googleusercontent.com/d/1BNg6QuRxz73YPFKb2XcPueyYRPg2hLt8",
  },
  {
    id: 7,
    title: "Children's Book Art 4",
    category: "07",
    image: "https://lh3.googleusercontent.com/d/1lzDrADaOpY8fPwr0cwjETUt5p7cxLzvQ",
  },
];

export default function App() {
  const handleContact = () => {
    window.location.href = "mailto:manunggaltehnik48@gmail.com";
  };

  const handleWorks = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-white/30 selection:text-white relative overflow-hidden">
      {/* Background Effect Overlay (fixed behind everything except shader canvas which might be absolute) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 50% 30%, #333 0%, transparent 60%), radial-gradient(circle at 10% 80%, #555 0%, transparent 50%), radial-gradient(circle at 90% 10%, #222 0%, transparent 40%)', filter: 'blur(80px)' }}></div>
        <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')", opacity: 0.05, mixBlendMode: 'overlay' }}></div>
      </div>

      <nav className="relative z-20 flex justify-between items-center px-6 md:px-12 py-8 max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tighter">IVAN GHAZALI</div>
        <div className="hidden md:flex gap-8 text-xs font-medium tracking-[0.2em] text-white/60 uppercase">
          <button onClick={handleWorks} className="hover:text-white transition-colors">PORTFOLIO</button>
          <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
          <button onClick={handleContact} className="hover:text-white transition-colors">HIRE ME</button>
        </div>
      </nav>

      {/* 1. Hero Section using Animated Shader */}
      <div className="relative z-10 w-full h-[80vh]">
        <Hero
          trustBadge={{
            text: "BASED IN SEMARANG • AVAILABLE FOR WORK",
          }}
          headline={{
            line1: "CRAFTING DIGITAL",
            line2: "DIMENSIONS."
          }}
          subtitle="A creative graphic designer & illustrator specialized in digital coloring, children's book illustrations, and striking visual experiences."
          buttons={{
            primary: {
              text: "VIEW PORTFOLIO",
              onClick: handleWorks
            },
          }}
          className="bg-transparent"
        />
      </div>
      
      {/* 2. Expertise / About Section */}
      <section id="about" className="relative z-10 py-24 px-6 md:px-12 max-w-7xl mx-auto mt-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">About & Expertise / Volume 01</h2>
          <div className="flex gap-2 items-center">
            <div className="w-8 h-[1px] bg-white/20"></div>
            <span className="text-[10px] font-mono text-white/40">INFO</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 uppercase leading-[1.1]">
              DESIGNING WITH <span className="text-zinc-400">PURPOSE</span><br/>
              AND PRECISION.
            </h3>
            <p className="text-white/50 text-sm leading-relaxed tracking-wide font-light max-w-lg mb-8 uppercase">
              As a creative graphic designer and illustrator, I specialize in digital coloring and children's book illustrations. With hands-on experience finishing over 100 pages across 10 titles at Namanya Studio, I create visuals that tell compelling stories natively and effectively.
            </p>
            
            <div className="flex gap-4">
              <button onClick={handleContact} className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:text-white text-white/60 transition-colors">
                <AtSign size={14} /> CONTACT ME
              </button>
              <span className="text-white/20">|</span>
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-white/40">
                <MapPin size={14} /> SEMARANG, INDONESIA
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all">
              <PenTool className="w-6 h-6 text-zinc-400 mb-4" />
              <h3 className="text-xs font-bold tracking-wider mb-2 text-white uppercase">Illustration</h3>
              <p className="text-white/40 leading-relaxed text-[11px] uppercase tracking-wide">
                Digital illustration, coloring, and finishing for children's books using Procreate & Adobe CC.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all">
              <Palette className="w-6 h-6 text-zinc-400 mb-4" />
              <h3 className="text-xs font-bold tracking-wider mb-2 text-white uppercase">Graphic Design</h3>
              <p className="text-white/40 leading-relaxed text-[11px] uppercase tracking-wide">
                Crafting memorable visual identities, posters, and apparel designs with precision.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all">
              <Layout className="w-6 h-6 text-zinc-400 mb-4" />
              <h3 className="text-xs font-bold tracking-wider mb-2 text-white uppercase">UI/UX Design</h3>
              <p className="text-white/40 leading-relaxed text-[11px] uppercase tracking-wide">
                Designing intuitive and modern digital interfaces utilizing Figma and Canva.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all">
              <Layers className="w-6 h-6 text-zinc-400 mb-4" />
              <h3 className="text-xs font-bold tracking-wider mb-2 text-white uppercase">Creative Workflow</h3>
              <p className="text-white/40 leading-relaxed text-[11px] uppercase tracking-wide">
                Collaborative team workflows maintaining visual consistency across large-scale projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Portfolio / 3D Card Section */}
      <section id="portfolio" className="relative z-10 py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">Selected Works / Volume 02</h2>
          <div className="flex gap-2 items-center">
            <div className="w-8 h-[1px] bg-white/20"></div>
            <span className="text-[10px] font-mono text-white/40">01—07</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <PhotoCard 
              key={item.id}
              image={item.image}
              title={item.title}
              category={item.category}
              className={`transform ${index % 2 === 0 ? 'rotate-1 lg:-rotate-1' : '-rotate-1 lg:rotate-2'} hover:rotate-0 transition-transform duration-500`}
            />
          ))}
        </div>
      </section>

      {/* 4. Footer */}
      <footer className="relative z-20 px-6 md:px-12 py-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 mt-20">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <p className="text-[9px] text-white/20 tracking-[0.2em] font-bold uppercase">Customized by I. Ghazali</p>
          <p className="text-[11px] font-mono text-white/50">EST. {new Date().getFullYear()} © ALL RIGHTS RESERVED</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all font-bold tracking-widest text-[10px] text-white/60">TW</a>
          <a href="https://instagram.com/ghazali.yyy" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all font-bold tracking-widest text-[10px] text-white/60">IG</a>
          <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all font-bold tracking-widest text-[10px] text-white/60">BE</a>
        </div>
      </footer>
    </div>
  );
}

