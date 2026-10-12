import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiTailwindcss, SiBootstrap, SiFramer, SiGreensock,
  SiNodedotjs, SiExpress, SiJsonwebtokens, SiSocketdotio,
  SiRazorpay, SiMongodb, SiMongoose, SiPostgresql, SiSupabase,
  SiPrisma, SiPython, SiC, SiCplusplus,
  SiGooglegemini, SiLangchain,
  SiGit, SiGithub, SiPostman, SiVercel,
  SiRender, SiNetlify, SiDocker, SiFigma,
  SiWebrtc, SiCloudinary, SiGnubash, SiVscodium
} from 'react-icons/si';
import { FaDatabase, FaBrain, FaTools, FaServer, FaJava } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { MdDataArray } from 'react-icons/md';

/* ── skill data ── */
const SKILLS = [
  // Frontend
  { name: 'React', Icon: SiReact,           color: '#61DAFB', category: 'Frontend' },
  { name: 'Next.js', Icon: SiNextdotjs,     color: '#ffffff', category: 'Frontend' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', category: 'Frontend' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6', category: 'Frontend' },
  { name: 'HTML5', Icon: SiHtml5,            color: '#E34F26', category: 'Frontend' },
  { name: 'CSS3', Icon: SiCss,              color: '#1572B6', category: 'Frontend' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend' },
  { name: 'Bootstrap', Icon: SiBootstrap,   color: '#7952B3', category: 'Frontend' },
  { name: 'Framer Motion', Icon: SiFramer,  color: '#BB4BF8', category: 'Frontend' },
  { name: 'GSAP', Icon: SiGreensock,        color: '#88CE02', category: 'Frontend' },
  { name: 'Zustand', Icon: FaBrain,         color: '#F26B00', category: 'Frontend' },

  // Backend
  { name: 'Node.js', Icon: SiNodedotjs,    color: '#339933', category: 'Backend' },
  { name: 'Express.js', Icon: SiExpress,   color: '#c0c0c0', category: 'Backend' },
  { name: 'REST APIs', Icon: TbApi,         color: '#6EE7B7', category: 'Backend' },
  { name: 'JWT Auth', Icon: SiJsonwebtokens, color: '#D63AFF', category: 'Backend' },
  { name: 'Socket.IO', Icon: SiSocketdotio, color: '#c0c0c0', category: 'Backend' },
  { name: 'Razorpay', Icon: SiRazorpay,    color: '#528FF0', category: 'Backend' },
  { name: 'WebRTC', Icon: SiWebrtc,         color: '#6fcfed', category: 'Backend' },
  { name: 'Cloudinary', Icon: SiCloudinary, color: '#3448C5', category: 'Backend' },

  // Database
  { name: 'MongoDB', Icon: SiMongodb,      color: '#47A248', category: 'Database' },
  { name: 'Mongoose', Icon: SiMongoose,    color: '#aa2222', category: 'Database' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1', category: 'Database' },
  { name: 'Supabase', Icon: SiSupabase,    color: '#3ECF8E', category: 'Database' },
  { name: 'Prisma', Icon: SiPrisma,        color: '#5A67D8', category: 'Database' },
  { name: 'SQL', Icon: FaDatabase,         color: '#F29111', category: 'Database' },

  // Languages & DSA
  { name: 'Java', Icon: FaJava,             color: '#ED8B00', category: 'Languages' },
  { name: 'Python', Icon: SiPython,         color: '#3776AB', category: 'Languages' },
  { name: 'C', Icon: SiC,                   color: '#A8B9CC', category: 'Languages' },
  { name: 'C++', Icon: SiCplusplus,         color: '#00599C', category: 'Languages' },
  { name: 'DSA', Icon: MdDataArray,         color: '#FF6B6B', category: 'Languages' },

  // AI / LLM
  { name: 'Gemini API', Icon: SiGooglegemini, color: '#4285F4', category: 'AI' },
  { name: 'OpenAI API', Icon: FaBrain,      color: '#10a37f', category: 'AI' },
  { name: 'LangChain', Icon: SiLangchain,   color: '#1C8A6A', category: 'AI' },
  { name: 'Groq API', Icon: FaServer,       color: '#F55036', category: 'AI' },
  { name: 'RAG', Icon: FaBrain,             color: '#8B5CF6', category: 'AI' },
  { name: 'Prompt Eng.', Icon: FaTools,     color: '#34D399', category: 'AI' },

  // Tools & Deployment
  { name: 'Git', Icon: SiGit,              color: '#F05032', category: 'Tools' },
  { name: 'GitHub', Icon: SiGithub,        color: '#c9d1d9', category: 'Tools' },
  { name: 'VS Code', Icon: SiVscodium,     color: '#007ACC', category: 'Tools' },
  { name: 'Postman', Icon: SiPostman,      color: '#FF6C37', category: 'Tools' },
  { name: 'Vercel', Icon: SiVercel,        color: '#c9d1d9', category: 'Tools' },
  { name: 'Render', Icon: SiRender,        color: '#46E3B7', category: 'Tools' },
  { name: 'Netlify', Icon: SiNetlify,      color: '#00C7B7', category: 'Tools' },
  { name: 'Docker', Icon: SiDocker,        color: '#2496ED', category: 'Tools' },
  { name: 'Figma', Icon: SiFigma,          color: '#F24E1E', category: 'Tools' },
  { name: 'Bash/CLI', Icon: SiGnubash,     color: '#4EAA25', category: 'Tools' },
];

const CATEGORIES = [
  { id: 'All',       label: 'All' },
  { id: 'Frontend',  label: 'Frontend' },
  { id: 'Backend',   label: 'Backend' },
  { id: 'Database',  label: 'Database' },
  { id: 'Languages', label: 'Languages & DSA' },
  { id: 'AI',        label: 'AI / LLM' },
  { id: 'Tools',     label: 'Tools & Deploy' },
];

/* animated floating icon — no card, no border */
function SkillIcon({ skill, index }) {
  const floatDuration = 3 + (index % 5) * 0.65;
  const floatDelay    = (index % 9) * 0.18;
  const { Icon, name, color } = skill;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.4, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.4, y: 24 }}
      transition={{ duration: 0.3, delay: (index % 22) * 0.025, ease: 'easeOut' }}
      className="flex flex-col items-center gap-2 group cursor-default select-none"
    >
      {/* floating motion wrapper */}
      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: floatDuration, delay: floatDelay, repeat: Infinity, ease: 'easeInOut' }}
        className="relative flex items-center justify-center"
        style={{ width: 64, height: 64 }}
      >
        {/* glow behind icon */}
        <motion.div
          className="absolute inset-0 rounded-full blur-xl"
          style={{ background: color }}
          initial={{ opacity: 0.12 }}
          whileHover={{ opacity: 0.5 }}
          transition={{ duration: 0.25 }}
        />

        {/* icon */}
        <motion.div
          whileHover={{ scale: 1.28, rotate: [-4, 4, -4, 0] }}
          transition={{ duration: 0.4 }}
          style={{ color }}
          className="relative z-10 drop-shadow-lg"
        >
          <Icon size={38} />
        </motion.div>
      </motion.div>

      {/* label */}
      <span
        className="text-[10px] sm:text-[11px] font-medium tracking-wide text-center leading-tight whitespace-nowrap"
        style={{ color: `${color}b0` }}
      >
        {name}
      </span>
    </motion.div>
  );
}

/* ── main section ── */
export default function ToolboxSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === activeCategory);

  return (
    <section
      id="toolbox"
      className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-transparent border-t border-slate-800/80 overflow-hidden"
    >
      {/* background radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, rgba(139,92,246,0.05) 40%, transparent 70%)' }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* heading */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
            My <span className="text-shiny">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Technologies I work with — from frontend interfaces to AI-powered backends.
          </p>
        </div>

        {/* filter tabs */}
        <div className="flex flex-wrap gap-2 mb-14">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 border cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-transparent border-slate-700/60 text-slate-400 hover:border-blue-500/50 hover:text-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* floating logos grid — NO card containers, NO borders */}
        <motion.div
          layout
          className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-x-5 gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, idx) => (
              <SkillIcon key={skill.name} skill={skill} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
