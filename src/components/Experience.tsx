"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap, Award, MapPin } from "lucide-react";
import GitHubTimeline from "./GitHubTimeline";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Web Developer",
      company: "Mentorchamp Edtech Pvt. Ltd.",
      duration: "Feb 2026 – Present",
      location: "Navi Mumbai, India",
      details: [
        "Developed scalable backend services using Node.js and Express.js, implementing authentication, authorization, and database integrations.",
        "Worked with AWS services including EC2, S3, and RDS for application deployment, file storage, and database management.",
        "Built and integrated RESTful APIs, enabling seamless communication between frontend applications and backend systems.",
        "Implemented logging, error handling, and performance optimizations to improve application reliability and maintainability."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "Rivant Media",
      duration: "Jan 2025 – Apr 2025",
      location: "Navi Mumbai, India",
      details: [
        "Gained hands-on experience with modern front-end and back-end web frameworks, specializing in Next.js, Prisma ORM, and Tailwind CSS.",
        "Built responsive, interactive, and highly maintainable components, ensuring cross-browser styling parity.",
        "Collaborated with project managers to integrate RESTful backend paths with client-side forms.",
      ],
    },
    {
      role: "IT Trainer",
      company: "Disha Computer Institute",
      duration: "Dec 2023 – May 2025",
      location: "Thane, India",
      details: [
        "Instructed and mentored 150+ candidates in computer science and software engineering paths.",
        "Delivered training across core languages: Java, Python, C, C++, and Data Structures.",
        "Conducted workshops covering web fundamentals (HTML5, CSS3, and JavaScript) and Object Oriented Programming concepts.",
      ],
    },
  ];

  const education = [
    {
      degree: "MCA in AI & ML",
      institution: "D Y Patil University, Navi Mumbai",
      duration: "June 2026 – April 2028",
      location: "Navi Mumbai, India",
      gpa: "CGPA: 9.8 / 10.0",
      description: "Core modules: Data Structures & Algorithms, Object Oriented Programming, DBMS, Operating Systems, Web Technologies.",
    },
    {
      degree: "B.Sc. in Computer Science",
      institution: "SIES (Nerul) College of Arts, Science and Commerce (Autonomous)",
      duration: "July 2022 – May 2025",
      location: "Navi Mumbai, India",
      gpa: "CGPA: 9.8 / 10.0",
      description: "Core modules: Data Structures & Algorithms, Object Oriented Programming, DBMS, Operating Systems, Web Technologies.",
    },
    {
      degree: "HSC (Higher Secondary Certificate)",
      institution: "Allen Swami Vivekanand Jr. College",
      duration: "Completed July 2020",
      location: "Navi Mumbai, India",
      gpa: "Score: 91.54%",
      description: "Focused on Science, Mathematics, and Computer Science fields.",
    },
  ];

  const certifications = [
    {
      title: "Java, Python, & Problem Solving Certification",
      provider: "HackerRank",
      date: "Nov 2023",
      description: "Validates proficiency in programming paradigms, algorithm structure, and complex data structures query design.",
    },
    {
      title: "MERN Stack Fundamentals",
      provider: "Great Learning",
      date: "Aug 2024",
      description: "Boot camp covering full stack MERN operations, MongoDB CRUD cycles, Express routing, React state, and Node APIs.",
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
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
            My Journey
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 tracking-tight"
          >
            Experience & Education
          </motion.h3>
        </div>

        {/* Timelines Parallel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Column: Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b border-card-border pb-4">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary shadow-sm">
                <Briefcase className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-foreground">Work Experience</h4>
            </div>

            <div className="relative border-l-2 border-card-border pl-6 ml-3 space-y-8">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative space-y-2.5"
                >
                  {/* Bullet Node */}
                  <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-background" />

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="text-lg font-bold text-foreground">{exp.role}</h5>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-muted">{exp.company}</p>

                  <div className="flex items-center gap-1.5 text-xs text-muted">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>

                  <ul className="list-disc list-outside text-sm text-muted pl-4 space-y-2 leading-relaxed">
                    {exp.details.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="text-justify">{bullet}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className="space-y-12">

            {/* Education Sub-Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-card-border pb-4">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent shadow-sm">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Education</h4>
              </div>

              <div className="relative border-l-2 border-card-border pl-6 ml-3 space-y-8">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative space-y-2"
                  >
                    {/* Bullet Node */}
                    <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent ring-4 ring-background" />

                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h5 className="text-lg font-bold text-foreground">{edu.degree}</h5>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.duration}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-muted">{edu.institution}</p>

                    <div className="flex flex-wrap gap-4 items-center text-xs text-muted">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-card-border font-bold text-foreground">
                        {edu.gpa}
                      </span>
                    </div>

                    <p className="text-sm text-muted leading-relaxed mt-2 text-justify">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications Sub-Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-card-border pb-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500 shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Certifications</h4>
              </div>

              <div className="relative border-l-2 border-card-border pl-6 ml-3 space-y-6">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative space-y-2"
                  >
                    {/* Bullet Node */}
                    <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500 ring-4 ring-background" />

                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h5 className="text-lg font-bold text-foreground">{cert.title}</h5>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                        <Calendar className="w-3.5 h-3.5" />
                        {cert.date}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-muted">{cert.provider}</p>
                    <p className="text-sm text-muted leading-relaxed text-justify">
                      {cert.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <GitHubTimeline />

          </div>

        </div>

      </div>
    </section>
  );
}
