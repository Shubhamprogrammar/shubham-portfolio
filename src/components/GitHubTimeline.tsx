"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  username?: string;
};

export default function GitHubTimeline({ username }: Props) {
  return (
    <section id="github" className="pb-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold text-primary tracking-wider uppercase"
          >
            Open Source
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 tracking-tight"
          >
            GitHub Contributions
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-muted mt-4"
          >
            My coding activity over the last year.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <ContributionsCalendar username={username} />
        </motion.div>
      </div>
    </section>
  );
}

function ContributionsCalendar({ username }: { username?: string }) {
  const envUser = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const user = username || envUser;
  const chartUrl = `https://ghchart.rshah.org/22c55e/${user}`;
  const fallbackUrl = `https://github.com/users/${user}/contributions`;
  const [src, setSrc] = useState(chartUrl);
  const [triedFallback, setTriedFallback] = useState(false);

  useEffect(() => {
    setSrc(chartUrl);
    setTriedFallback(false);
  }, [chartUrl]);

  if (!user) {
    return (
      <div className="rounded-lg border border-card-border bg-card/50 p-4 text-sm text-muted">
        Please provide your GitHub username via the component prop `username` or set
        `NEXT_PUBLIC_GITHUB_USERNAME` in your environment to embed the contributions
        calendar.
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-card-border bg-card-bg glass shadow-md p-4 sm:p-6">
      <div className="overflow-x-auto">
        <img
          src={src}
          alt={`${user} GitHub contributions`}
          className="block h-auto w-full min-w-[680px]"
          loading="lazy"
          onError={() => {
            if (!triedFallback) {
              setSrc(fallbackUrl);
              setTriedFallback(true);
            }
          }}
        />
      </div>
    </div>
  );
}
