export interface EventItem {
  title: string;
  dateLabel: string;
  timeLabel?: string;
  description: string;
  icon: string;
}

export const events: EventItem[] = [
  {
    title: "Lorem Ipsum Dolor",
    dateLabel: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    icon: "groups",
  },
  {
    title: "Consectetur Adipiscing",
    dateLabel: "Lorem ipsum, dolor sit",
    timeLabel: "9:00 AM – 11:00 AM",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    icon: "volunteer_activism",
  },
  {
    title: "Sed Do Eiusmod",
    dateLabel: "Lorem ipsum – dolor",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
    icon: "hiking",
  },
];
