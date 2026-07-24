export interface HeroContent {
  variant: "home" | "about";
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  description: string;
  scheduleTime: string;
  locationValue: string;
  cta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

export const heroContent: Record<"home" | "about" | "newHere", HeroContent> = {
  home: {
    variant: "home",
    imageSrc: `${import.meta.env.BASE_URL}home/cq5dam.web.1280.1280.jpeg`,
    imageAlt:
      "A wide, sweeping photograph of a welcoming church community gathering in a bright, modern sanctuary filled with natural light. The aesthetic is clean, warm, and corporate-chic, featuring soft lighting and a modern, minimalist interior that feels inviting and fresh. Groups of diverse people are interacting joyfully, reflecting a trustworthy and radiant community atmosphere. The overall mood is open, engaging, and professional.",
    title: "Welcome to Watertower",
    description:
      "A community-focused, trustworthy space where you can come as you are. Join us this Sunday.",
    scheduleTime: "at 9:00 AM",
    locationValue: "19 Marsden Rd, Kallangur",
    cta: { label: "Plan Your Visit", href: "#" },
    secondaryCta: { label: "Send Us A Message", href: "/contact-us" },
  },
  about: {
    variant: "about",
    imageSrc:
      "https://lh3.googleusercontent.com/aida/AP1WRLuRhuGqafOK7Q6rZK3eTAY0n-KVWKKRH-cg-XLqYHCdLRSeyEqB0lfCe9nTBSbwuO9uOy5VHv0mq30IW9ozKzdTUCPjVuOBZA36fADlLMMni0UhJIhLFOOaW4c_TbkaY7pHd9KGJSWyZQbSL8cSbUWUGIXOtA0Dy0IZDs5OJNcZRHRGULOzGGpJcSYyD4ACceQy2AM98qGPzXf_bdy4yjqyazH0kwu8RSDhXoCyVlrv3TXPX2wq2d6ADaJc",
    imageAlt: "Watertower Bible Church community",
    title: "We are a community learning to follow Jesus together.",
    description:
      "Rooted in Scripture, growing in grace, and committed to loving our city.",
    scheduleTime: "at 9:00 AM",
    locationValue: "19 Marsden Rd, Kallangur",
  },
  newHere: {
    variant: "about",
    title: "We're glad you found us.\nCome as you are.",
    description:
      "Gatherings start on Sundays at 9:00 AM. Here's a glimpse of what our time together looks like.",
    scheduleTime: "at 9:00 AM",
    locationValue: "19 Marsden Rd, Kallangur",
  },
};
