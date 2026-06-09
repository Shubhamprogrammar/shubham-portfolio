"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Home, Heart, Activity, ImageIcon } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  visual: React.ReactNode;
}

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

function MLPlayground() {
  const [radius, setRadius] = useState(12.0);
  const [concavity, setConcavity] = useState(0.35);
  const [isClassifying, setIsClassifying] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleClassify = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsClassifying(true);
    setResult(null);
    setTimeout(() => {
      setIsClassifying(false);
      // Simple logic simulator
      if (radius > 16.0 || concavity > 0.55 || (radius > 13.5 && concavity > 0.4)) {
        setResult("Malignant");
      } else {
        setResult("Benign");
      }
    }, 850);
  };

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-teal-950 via-slate-950 to-teal-900 flex flex-col justify-between p-5 text-white select-none text-left">
      <div className="flex justify-between items-center border-b border-white/10 pb-2">
        <div className="flex items-center gap-1.5">
          <Activity className="w-4 h-4 text-teal-400 animate-pulse" />
          <span className="text-[10px] font-extrabold tracking-wider uppercase">Live Model inference</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-[8px] font-bold border border-teal-500/20">
          Classifier
        </span>
      </div>

      {/* Sliders panel */}
      <div className="flex-1 py-3 space-y-2.5 flex flex-col justify-center">
        {/* Radius Slider */}
        <div className="space-y-1">
          <div className="flex justify-between text-[9px] text-white/60 font-semibold">
            <span>Cell Radius</span>
            <span className="font-bold text-teal-300">{radius.toFixed(1)} µm</span>
          </div>
          <input
            type="range"
            min="5"
            max="25"
            step="0.5"
            value={radius}
            onChange={(e) => setRadius(parseFloat(e.target.value))}
            onClick={(e) => e.stopPropagation()}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-teal-400"
          />
        </div>

        {/* Concavity Slider */}
        <div className="space-y-1">
          <div className="flex justify-between text-[9px] text-white/60 font-semibold">
            <span>Concavity</span>
            <span className="font-bold text-teal-300">{concavity.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={concavity}
            onChange={(e) => setConcavity(parseFloat(e.target.value))}
            onClick={(e) => e.stopPropagation()}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-teal-400"
          />
        </div>
      </div>

      {/* Trigger & Result */}
      <div className="border-t border-white/10 pt-2 flex items-center justify-between gap-3">
        <button
          onClick={handleClassify}
          disabled={isClassifying}
          className="px-3 py-1.5 rounded-lg bg-teal-400 hover:bg-teal-500 disabled:opacity-50 text-[9px] font-bold text-slate-950 transition cursor-pointer flex items-center gap-1 select-none"
        >
          {isClassifying ? "Running..." : "Predict"}
        </button>

        <div className="flex-1 text-right min-h-6 flex items-center justify-end">
          {isClassifying ? (
            <span className="text-[9px] text-teal-300 animate-pulse">Running inference...</span>
          ) : result === "Malignant" ? (
            <span className="text-[10px] font-extrabold text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.5)] animate-pulse">
              Malignant (Tumor)
            </span>
          ) : result === "Benign" ? (
            <span className="text-[10px] font-extrabold text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)] animate-pulse">
              Benign (Healthy)
            </span>
          ) : (
            <span className="text-[8px] text-white/40">Adjust sliders & test</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Sarvavyapi - The Real Estate",
      description:
        "A MERN stack portal designed for property listings, buying, and renting. Integrates JWT session authentication, image hosting via Cloudinary, and EmailJS modules to facilitate direct communication between client inquiries and listing agents.",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Bootstrap CSS", "Cloudinary", "JWT Auth", "EmailJS"],
      githubUrl: "https://github.com/Shubhamprogrammar/sarvavyapi",
      liveUrl: "https://sarvavyapi.vercel.app/",
      visual: (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 flex flex-col justify-between p-6 text-white select-none">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-accent animate-pulse" />
              <span className="text-xs font-bold tracking-wider">SARVAVYAPI REALTY</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-[9px] border border-green-500/20 font-semibold">
              Live App
            </span>
          </div>

          <div className="space-y-3 mt-4">
            <div className="h-24 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-3.5 space-y-2">
              <div className="flex justify-between items-start">
                <div className="w-20 h-3 bg-white/30 rounded" />
                <div className="w-12 h-3.5 bg-accent/30 rounded text-[8px] flex items-center justify-center font-bold">Email Agent</div>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded" />
              <div className="w-3/4 h-1.5 bg-white/10 rounded" />
              <div className="flex gap-2 pt-1">
                <div className="w-4 h-4 rounded bg-white/10 flex items-center justify-center"><ImageIcon className="w-2.5 h-2.5 text-white/50" /></div>
                <div className="w-20 h-3 bg-white/10 rounded" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Open Your Hearts",
      description:
        "A collaborative MERN stack web platform designed to allow users to express thoughts and ideas freely. Leverages JWT authorization filters and a responsive UI layout to drive candidate engagement and interactive discussions.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap CSS", "JWT Auth"],
      githubUrl: "https://github.com/Shubhamprogrammar/openyourhearts",
      liveUrl: "https://openyourhearts.vercel.app/",
      visual: (
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950 via-slate-900 to-rose-900 flex flex-col justify-between p-6 text-white select-none">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-400 animate-pulse" />
              <span className="text-xs font-bold tracking-wider">OPEN HEARTS</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[9px] border border-rose-500/20 font-semibold">
              Community
            </span>
          </div>

          <div className="space-y-3 mt-4">
            <div className="h-24 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-3.5 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="w-24 h-3.5 bg-white/20 rounded-md" />
                <span className="text-[8px] text-rose-300 font-bold">♥ 14 Likes</span>
              </div>
              <div className="w-full h-2 bg-white/15 rounded" />
              <div className="w-2/3 h-2 bg-white/15 rounded" />
              <div className="h-4 bg-rose-500/20 rounded flex items-center justify-center text-[8px] font-bold text-rose-300">
                Share Thoughts
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Breast Cancer Detection",
      description:
        "A machine learning classifier built in Python to identify breast tumors as benign or malignant. Leverages pandas, numpy, and scikit-learn for dataset preprocessing, feature engineering, and metrics evaluations (accuracy, recall, precision).",
      tags: ["Python", "Machine Learning", "ML Algorithms", "Data Preprocessing", "Feature Selection"],
      githubUrl: "https://github.com/Shubhamprogrammar/breast-cancer-detection",
      liveUrl: "#",
      visual: <MLPlayground />,
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background/50 grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold text-primary tracking-wider uppercase"
          >
            My Works
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 tracking-tight"
          >
            Featured Projects
          </motion.h3>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group rounded-3xl border border-card-border bg-card-bg glass shadow-md overflow-hidden flex flex-col h-full"
            >
              {/* Cover visual with simulation */}
              <div className="relative h-56 border-b border-card-border overflow-hidden">
                {project.visual}
                {/* Floating dynamic hover mask for non-interactive widgets */}
                {project.title !== "Breast Cancer Detection" && (
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] flex items-center justify-center gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-full bg-background/90 text-foreground hover:text-primary transition shadow-md hover:scale-110 cursor-pointer"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-full bg-background/90 text-foreground hover:text-primary transition shadow-md hover:scale-110 cursor-pointer"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                )}
              </div>

              {/* Text Detail Contents */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed text-justify">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Technology tag badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-card-border text-[9px] font-semibold text-foreground/80 hover:border-primary/25 border border-transparent transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Access Button CTAs for Recruiter */}
                  <div className="flex gap-3 pt-2">
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 flex-1 px-3 py-2 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md shadow-primary/10 transition-colors"
                      >
                        <ExternalLink className="w-4.5 h-4.5" />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 flex-1 px-3 py-2 rounded-xl border border-card-border hover:bg-card-border text-foreground text-xs font-semibold transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      GitHub Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
