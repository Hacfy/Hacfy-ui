type Post = {
  slug: string;
  title: string;
  date?: string;
  category?: string;
  href?: string;
};

const RECENT: Post[] = [
  {
    slug: "ai-phishing-trends",
    title: "AI-Driven Phishing Trends to Watch",
    date: "Sep 2025",
    href: "#",
  },
  {
    slug: "zero-trust-email",
    title: "Zero Trust for Email: A Practical Guide",
    date: "Aug 2025",
    href: "#",
  },
  {
    slug: "mfa-fatigue",
    title: "Defending Against MFA Fatigue Attacks",
    date: "Jul 2025",
    href: "#",
  },
];

const MORE: Post[] = [
  {
    slug: "bec-case-study",
    title: "A Deep Dive into BEC Campaigns",
    category: "Case Study",
    href: "#",
  },
  {
    slug: "training-programs",
    title: "Designing Effective Security Training",
    category: "Awareness",
    href: "#",
  },
  {
    slug: "sandboxing-urls",
    title: "Sandboxing and URL Defense Tactics",
    category: "Technical",
    href: "#",
  },
];

export function getRecentPosts(): Post[] {
  return RECENT;
}

export function getReadMore(): Post[] {
  return MORE;
}
