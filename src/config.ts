export const SITE = {
  website: "https://ai-mindsets.com/", // replace this with your deployed domain
  author: "Farid Mheir",
  profile: "https://www.linkedin.com/in/fmheir/",
  desc: "AI MINDSETS book landing page",
  title: "AI MINDSETS",
  amazonURL: "https://amzn.to/430tfbE",
  ogImage: "ai-mindset-og.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Suggest Changes",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/Montreal", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
