"use client";

import { motion } from "framer-motion";
import { Code2, Database, LayoutGrid, Terminal } from "lucide-react";

interface SkillItem {
  name: string;
  level: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: "Languages & Core CS",
      icon: <Code2 className="w-5 h-5 text-primary" />,
      skills: [
        {
          name: "Python",
          level: "Advanced",
          icon: (
            <div className="w-6 h-6 font-bold text-xs bg-blue-500/10 rounded flex items-center justify-center text-blue-400 select-none">
              PY
            </div>
          ),
        },
        {
          name: "DSA",
          level: "Advanced",
          icon: (
            <div className="w-6 h-6 font-bold text-[9px] bg-purple-500/10 rounded flex items-center justify-center text-purple-400 select-none">
              DSA
            </div>
          ),
        },
        {
          name: "OOPs & OS",
          level: "Advanced",
          icon: (
            <div className="w-6 h-6 font-bold text-[9px] bg-green-500/10 rounded flex items-center justify-center text-green-400 select-none">
              OOP
            </div>
          ),
        },
      ],
    },
    {
      title: "Web Development",
      icon: <Terminal className="w-5 h-5 text-accent" />,
      skills: [
        {
          name: "React.js",
          level: "Advanced",
          icon: (
            <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-6 h-6 fill-none stroke-[#61DAFB] stroke-[1.2px]">
              <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
              <g stroke="#61DAFB" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
          ),
        },
        {
          name: "Next.js",
          level: "Advanced",
          icon: (
            <svg viewBox="0 0 180 180" className="w-6 h-6 fill-none stroke-foreground stroke-[4px]">
              <circle cx="90" cy="90" r="88" stroke="currentColor" strokeWidth="4" />
              <mask id="nextMask">
                <circle cx="90" cy="90" r="90" fill="white" />
              </mask>
              <g mask="url(#nextMask)">
                <path d="M149.508 157.52L69.142 54H54v72h14.4V72.164l71.164 91.536c3.486-1.94 6.811-4.086 9.944-6.18z" fill="currentColor" stroke="none" />
                <path d="M115 54h15v72h-15z" fill="currentColor" stroke="none" />
              </g>
            </svg>
          ),
        },
        {
          name: "Node & Express",
          level: "Advanced",
          icon: (
            <div className="w-6 h-6 font-bold text-[8px] bg-green-500/10 rounded flex items-center justify-center text-green-500 select-none">
              N/EX
            </div>
          ),
        },
        {
          name: "Prisma & SQL",
          level: "Intermediate",
          icon: (
            <div className="w-6 h-6 font-bold text-[8px] bg-indigo-500/10 rounded flex items-center justify-center text-indigo-400 select-none">
              PRM
            </div>
          ),
        },
        {
          name: "Tailwind CSS",
          level: "Advanced",
          icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#06B6D4]">
              <path d="M12 6.036c-2.667 0-4.333 1.333-5 4 1-.667 2.167-.833 3.5-.5 1.141.285 1.956 1.113 2.859 2.03C14.83 13.064 16.355 14.036 19 14.036c2.667 0 4.333-1.333 5-4-1 .667-2.167.833-3.5.5-1.141-.285-1.956-1.113-2.859-2.03-1.471-1.502-2.996-2.47-5.641-2.47zm-6 6c-2.667 0-4.333 1.333-5 4 1-.667 2.167-.833 3.5-.5 1.141.285 1.956 1.113 2.859 2.03C8.83 19.064 10.355 20.036 13 20.036c2.667 0 4.333-1.333 5-4-1 .667-2.167.833-3.5.5-1.141-.285-1.956-1.113-2.859-2.03-1.471-1.502-2.996-2.47-5.641-2.47z" />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Database Systems",
      icon: <Database className="w-5 h-5 text-indigo-500" />,
      skills: [
        {
          name: "MongoDB",
          level: "Advanced",
          icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#47A248]">
              <path d="M12.015.011C11.666-.01 8.273.722 6.837 5.753c-1.393 4.88.225 9.07 1.83 11.233L12 24l3.315-7.009c1.614-2.176 3.23-6.368 1.84-11.246C15.72.716 12.35-.008 12.015.011zm.009 2.502c.408.01 2.344.927 3.033 4.896.721 4.148-1.127 7.747-2.617 9.47L12 17.842l-.417-.957c-1.498-1.734-3.351-5.343-2.624-9.502.697-3.978 2.64-4.887 3.048-4.897v.027z" />
            </svg>
          ),
        },
        {
          name: "MySQL",
          level: "Advanced",
          icon: (
            <div className="w-6 h-6 font-bold text-xs bg-[#00758F]/10 rounded flex items-center justify-center text-[#00758F] select-none">
              SQL
            </div>
          ),
        },
        {
          name: "Query Optimization",
          level: "Advanced",
          icon: (
            <div className="w-6 h-6 font-bold text-[8px] bg-yellow-500/10 rounded flex items-center justify-center text-yellow-500 select-none">
              OPT
            </div>
          ),
        },
      ],
    },
    {
      title: "Platforms",
      icon: <LayoutGrid className="w-5 h-5 text-pink-500" />,
      skills: [
        {
          name: "Git & GitHub",
          level: "Advanced",
          icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-foreground">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          ),
        },
        {
          name: "Postman & APIs",
          level: "Advanced",
          icon: (
            <svg viewBox="0 0 32 32" className="w-6 h-6 fill-[#FF6C37]">
              <path d="M19.168 18.064c-1.12-1.12-2.928-1.12-4.048 0L9.088 24.1c-.56.56-.864 1.312-.864 2.112s.304 1.552.864 2.112c1.12 1.12 2.928 1.12 4.048 0l6.032-6.032c1.12-1.12 1.12-2.928 0-4.048l-.000.000z" />
              <path d="M22.912 5.088c-1.12-1.12-2.928-1.12-4.048 0L6.032 17.919c-1.12 1.12-1.12 2.928 0 4.048l6.032 6.032c.56.56 1.312.864 2.112.864s1.552-.304 2.112-.864L29.12 15.168c1.12-1.12 1.12-2.928 0-4.048L22.912 5.088z" />
            </svg>
          ),
        },
        {
          name: "Vercel & Render",
          level: "Advanced",
          icon: (
            <div className="w-6 h-6 font-bold text-[9px] bg-white rounded flex items-center justify-center text-black border border-gray-400 select-none">
              ▲/R
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background/50 grid-bg">
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
            My Toolbox
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 tracking-tight"
          >
            Technical Skillset
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-muted mt-4 max-w-2xl mx-auto"
          >
            An organized view of programming languages, CS core domains, databases, and hosting stacks I use to engineer modern solutions.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="p-6 rounded-3xl border border-card-border bg-card-bg glass shadow-md flex flex-col gap-6"
            >
              <div className="flex items-center gap-3 border-b border-card-border pb-4">
                <div className="p-2.5 rounded-xl bg-card-bg border border-card-border shadow-sm">
                  {category.icon}
                </div>
                <h4 className="text-lg font-bold text-foreground">{category.title}</h4>
              </div>

              {/* Skills cards grid inside category */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, translateY: -2 }}
                    className="p-3.5 rounded-2xl border border-card-border bg-background/50 hover:bg-card-bg flex flex-col items-center justify-center text-center gap-2.5 transition-all duration-200 group cursor-pointer shadow-sm hover:shadow-md hover:border-primary/30"
                  >
                    <div className="w-10 h-10 rounded-xl bg-card-bg border border-card-border flex items-center justify-center transition-all duration-200 group-hover:scale-110 shadow-sm">
                      {skill.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground">{skill.name}</p>
                      <p className="text-[9px] font-medium text-muted mt-0.5">{skill.level}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
