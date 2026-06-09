"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold text-primary tracking-wider uppercase flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            About Me
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 tracking-tight"
          >
            Software Developer
          </motion.h3>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Grid Left: Visual Cards / Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
            
            {/* Glowing gold Academic Honors badge */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 glass flex gap-4 items-center shadow-lg animate-float overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-yellow-500/10 blur-xl opacity-30" />
              <div className="relative p-4 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 text-white font-extrabold text-base flex items-center justify-center w-12 h-12 shadow-lg border border-yellow-300 select-none shrink-0">
                1st
              </div>
              <div className="relative min-w-0">
                <h4 className="text-xs font-extrabold text-amber-500 dark:text-amber-400 tracking-wider uppercase">Consistently Ranked 1st</h4>
                <p className="text-[11px] text-muted mt-1 leading-relaxed">
                  Ranked 1st consistently in computer science across all semesters at SIES (Nerul) College.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 rounded-2xl border border-card-border bg-card-bg glass flex gap-4 items-start shadow-sm"
            >
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground">B.Sc. Computer Science</h4>
                <p className="text-sm text-muted mt-1 leading-relaxed">
                  Graduated with a CGPA of 9.8. Earned comprehensive computer science principles credits.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-2xl border border-card-border bg-card-bg glass flex gap-4 items-start shadow-sm"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground">Developer & Educator</h4>
                <p className="text-sm text-muted mt-1 leading-relaxed">
                  Web development intern at Rivant Media and IT trainer at Disha Computer Institute, mentoring 100+ candidates.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Grid Right: Narrative & Competencies */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-justify"
            >
              <h3 className="text-2xl font-bold text-foreground">My Developer Philosophy</h3>
              <p className="text-base text-muted leading-relaxed">
                I believe that solid software development is built on two pillars: deep algorithmic computer science fundamentals
                and the ability to share that knowledge clearly. Whether optimizing database queries or training 100+ student developers,
                efficiency and communication are key.
              </p>
              <p className="text-base text-muted leading-relaxed">
                My professional experience blends modern UI frameworks like Next.js and Prisma (Rivant Media) with full-stack MERN listing portals
                and Python machine learning systems. I look forward to engineering highly optimized systems that bring tangible business value.
              </p>
            </motion.div>

            {/* Quick Strengths Badges */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase">Key Strengths</h4>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "🧩 OOPs & Core DSA",
                  "⚙️ Full-stack Web Systems",
                  "🧠 ML Classification Models",
                  "📖 Data Structure and Algorithms",
                  "⚡ SQL Query Optimization",
                ].map((strength, index) => (
                  <motion.span
                    key={strength}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="px-4 py-2 rounded-xl border border-card-border bg-card-bg glass text-xs font-semibold text-foreground/80 hover:border-primary/45 transition-colors"
                  >
                    {strength}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Recruiter Metrics */}
            <div className="grid grid-cols-3 gap-4 border-t border-card-border pt-6 mt-4">
              {/* <div>
                <p className="text-2xl font-extrabold text-primary">9.8</p>
                <p className="text-xs text-muted font-medium mt-1">SIES Nerul CGPA</p>
              </div> */}
              <div>
                <p className="text-2xl font-extrabold text-accent">200+</p>
                <p className="text-xs text-muted font-medium mt-1">DSA HackerRank Solved</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-indigo-500">100+</p>
                <p className="text-xs text-muted font-medium mt-1">Candidates Mentored</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
