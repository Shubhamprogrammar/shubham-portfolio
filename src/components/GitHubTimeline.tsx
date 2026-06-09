"use client";

import { useEffect, useState } from "react";

type Props = {
  username?: string;
};

export default function GitHubTimeline({ username }: Props) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-card-border pb-4">
        <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500 shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="M12 0a12 12 0 00-3.797 23.401c.6.111.82-.261.82-.579 0-.286-.01-1.043-.015-2.047-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.758-1.333-1.758-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.304-5.467-1.333-5.467-5.93 0-1.31.468-2.381 1.235-3.222-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016 0c2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.242 2.873.12 3.176.77.841 1.234 1.912 1.234 3.222 0 4.61-2.807 5.624-5.479 5.921.431.371.815 1.102.815 2.222 0 1.605-.015 2.898-.015 3.293 0 .321.216.694.825.576A12 12 0 0012 0z" />
          </svg>
        </div>
        <h4 className="text-xl font-bold text-foreground">GitHub Contributions</h4>
      </div>

      <div>
        <ContributionsCalendar username={username} />
      </div>
    </div>
  );
}

function ContributionsCalendar({ username }: { username?: string }) {
  const envUser = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const user = username || envUser;
  const githubUrl = `https://github.com/users/${user}/contributions`;
  const fallbackUrl = `https://ghchart.rshah.org/${user}`;
  const [src, setSrc] = useState(githubUrl);
  const [triedFallback, setTriedFallback] = useState(false);

  useEffect(() => {
    setSrc(githubUrl);
    setTriedFallback(false);
  }, [githubUrl]);

  if (!user) {
    return (
      <div className="rounded-md border border-card-border bg-card/50 p-4 text-sm text-muted">
        Please provide your GitHub username via the component prop `username` or set
        `NEXT_PUBLIC_GITHUB_USERNAME` in your environment to embed the contributions
        calendar.
      </div>
    );
  }

  return (
    <div className="overflow-auto rounded-md border border-card-border bg-card/40 p-4">
      <img
        src={src}
        alt={`${user} GitHub contributions`}
        className="block max-w-full"
        onError={() => {
          if (!triedFallback) {
            setSrc(fallbackUrl);
            setTriedFallback(true);
          }
        }}
      />
    </div>
  );
}
