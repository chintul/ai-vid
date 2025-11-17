export interface Trend {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  growthRate: "rising" | "stable" | "emerging";
  searchVolume: "low" | "medium" | "high";
  tags: string[];
  relatedTopics: string[];
  lastUpdated: string;
}

export const trends: Trend[] = [
  // Rare Hobbies
  {
    id: "1",
    title: "Urban Foraging",
    slug: "urban-foraging",
    category: "Rare Hobbies",
    description:
      "Finding and harvesting edible wild plants in urban environments. Growing community of city dwellers learning about local flora.",
    growthRate: "rising",
    searchVolume: "low",
    tags: ["hobby", "food", "sustainable", "nature"],
    relatedTopics: ["wildcrafting", "edible-plants", "sustainability"],
    lastUpdated: "2024-01-15",
  },
  {
    id: "2",
    title: "Lock Sport",
    slug: "lock-sport",
    category: "Rare Hobbies",
    description:
      "Recreational lock picking as a puzzle-solving hobby. Community-driven with competitions and skill-sharing forums.",
    growthRate: "stable",
    searchVolume: "low",
    tags: ["hobby", "puzzle", "skill", "community"],
    relatedTopics: ["security", "puzzles", "mechanical-skills"],
    lastUpdated: "2024-01-10",
  },
  {
    id: "3",
    title: "Magnet Fishing",
    slug: "magnet-fishing",
    category: "Rare Hobbies",
    description:
      "Using strong magnets to retrieve metal objects from bodies of water. Surprising finds include historical artifacts and lost valuables.",
    growthRate: "rising",
    searchVolume: "medium",
    tags: ["hobby", "outdoors", "treasure-hunting", "adventure"],
    relatedTopics: ["metal-detecting", "urban-exploration", "environmental-cleanup"],
    lastUpdated: "2024-01-18",
  },

  // Niche Sports
  {
    id: "4",
    title: "Disc Golf",
    slug: "disc-golf",
    category: "Niche Sports",
    description:
      "Growing alternative to traditional golf using flying discs. More accessible and environmentally friendly than ball golf.",
    growthRate: "rising",
    searchVolume: "high",
    tags: ["sport", "outdoor", "accessible", "growing"],
    relatedTopics: ["frisbee", "golf", "outdoor-recreation"],
    lastUpdated: "2024-01-20",
  },
  {
    id: "5",
    title: "Spikeball",
    slug: "spikeball",
    category: "Niche Sports",
    description:
      "Fast-paced 2v2 game played with a small trampoline-like net. Portable and popular at beaches and parks.",
    growthRate: "rising",
    searchVolume: "medium",
    tags: ["sport", "outdoor", "social", "portable"],
    relatedTopics: ["beach-games", "team-sports", "recreational-sports"],
    lastUpdated: "2024-01-16",
  },
  {
    id: "6",
    title: "Bossaball",
    slug: "bossaball",
    category: "Niche Sports",
    description:
      "Volleyball on inflatable court with trampolines. Combines soccer, volleyball, and gymnastics in a unique sport.",
    growthRate: "emerging",
    searchVolume: "low",
    tags: ["sport", "unique", "acrobatic", "volleyball"],
    relatedTopics: ["volleyball", "trampolining", "beach-sports"],
    lastUpdated: "2024-01-12",
  },

  // Small Tools
  {
    id: "7",
    title: "Japanese Pull Saws",
    slug: "japanese-pull-saws",
    category: "Small Tools",
    description:
      "Precision saws that cut on the pull stroke. Growing popularity among woodworkers for clean, accurate cuts.",
    growthRate: "stable",
    searchVolume: "medium",
    tags: ["tool", "woodworking", "precision", "japanese"],
    relatedTopics: ["woodworking", "hand-tools", "carpentry"],
    lastUpdated: "2024-01-14",
  },
  {
    id: "8",
    title: "Pocket Microscopes",
    slug: "pocket-microscopes",
    category: "Small Tools",
    description:
      "Portable 100x-200x magnification devices. Popular for education, hobbyist inspection, and field biology.",
    growthRate: "rising",
    searchVolume: "low",
    tags: ["tool", "education", "science", "portable"],
    relatedTopics: ["microscopy", "education", "stem"],
    lastUpdated: "2024-01-19",
  },
  {
    id: "9",
    title: "Digital Angle Finders",
    slug: "digital-angle-finders",
    category: "Small Tools",
    description:
      "Precise digital tools for measuring and transferring angles. Essential for carpentry, metalwork, and DIY projects.",
    growthRate: "stable",
    searchVolume: "medium",
    tags: ["tool", "measurement", "precision", "diy"],
    relatedTopics: ["carpentry", "metalwork", "measurement-tools"],
    lastUpdated: "2024-01-11",
  },

  // Weird Questions
  {
    id: "10",
    title: "Why Do Pigeons Bob Their Heads",
    slug: "why-pigeons-bob-heads",
    category: "Weird Questions",
    description:
      "Surprisingly popular search query. Head bobbing helps pigeons stabilize their vision while walking.",
    growthRate: "stable",
    searchVolume: "medium",
    tags: ["question", "animals", "science", "curiosity"],
    relatedTopics: ["bird-behavior", "vision", "animal-science"],
    lastUpdated: "2024-01-13",
  },
  {
    id: "11",
    title: "Can You Eat Orange Peels",
    slug: "can-eat-orange-peels",
    category: "Weird Questions",
    description:
      "Common curiosity about food waste. Orange peels are edible and contain beneficial nutrients and oils.",
    growthRate: "rising",
    searchVolume: "medium",
    tags: ["question", "food", "health", "sustainability"],
    relatedTopics: ["nutrition", "food-waste", "citrus"],
    lastUpdated: "2024-01-17",
  },
  {
    id: "12",
    title: "Why Does Rain Smell Good",
    slug: "why-rain-smells-good",
    category: "Weird Questions",
    description:
      "The petrichor phenomenon. Bacteria, plant oils, and ozone create the distinctive rain smell people love.",
    growthRate: "stable",
    searchVolume: "high",
    tags: ["question", "science", "nature", "smell"],
    relatedTopics: ["petrichor", "weather", "chemistry"],
    lastUpdated: "2024-01-15",
  },

  // Minor Subcultures
  {
    id: "13",
    title: "Cottagecore Lifestyle",
    slug: "cottagecore-lifestyle",
    category: "Minor Subcultures",
    description:
      "Romanticized rural living aesthetic. Focuses on simplicity, nature, and traditional crafts.",
    growthRate: "rising",
    searchVolume: "high",
    tags: ["subculture", "aesthetic", "lifestyle", "rural"],
    relatedTopics: ["aesthetic", "homesteading", "traditional-crafts"],
    lastUpdated: "2024-01-20",
  },
  {
    id: "14",
    title: "Van Life Community",
    slug: "van-life-community",
    category: "Minor Subcultures",
    description:
      "Living full-time in converted vans. Growing movement focused on minimalism, freedom, and travel.",
    growthRate: "rising",
    searchVolume: "high",
    tags: ["subculture", "lifestyle", "travel", "minimalism"],
    relatedTopics: ["tiny-living", "nomadic-lifestyle", "van-conversion"],
    lastUpdated: "2024-01-18",
  },
  {
    id: "15",
    title: "Dark Academia",
    slug: "dark-academia",
    category: "Minor Subcultures",
    description:
      "Aesthetic celebrating classical education, literature, and Gothic ambiance. Popular among students and book lovers.",
    growthRate: "stable",
    searchVolume: "high",
    tags: ["subculture", "aesthetic", "education", "gothic"],
    relatedTopics: ["literature", "classical-education", "aesthetics"],
    lastUpdated: "2024-01-16",
  },

  // Emerging Tech
  {
    id: "16",
    title: "Mushroom Leather",
    slug: "mushroom-leather",
    category: "Emerging Materials",
    description:
      "Sustainable leather alternative made from mycelium. Growing interest from fashion and automotive industries.",
    growthRate: "emerging",
    searchVolume: "low",
    tags: ["material", "sustainable", "innovation", "fashion"],
    relatedTopics: ["mycelium", "sustainable-fashion", "biomaterials"],
    lastUpdated: "2024-01-19",
  },
  {
    id: "17",
    title: "Rooftop Beekeeping",
    slug: "rooftop-beekeeping",
    category: "Urban Agriculture",
    description:
      "Urban beekeeping on building rooftops. Cities encouraging practice for pollination and local honey production.",
    growthRate: "rising",
    searchVolume: "medium",
    tags: ["urban", "agriculture", "sustainability", "bees"],
    relatedTopics: ["beekeeping", "urban-farming", "pollination"],
    lastUpdated: "2024-01-14",
  },
  {
    id: "18",
    title: "Slow TV",
    slug: "slow-tv",
    category: "Media Trends",
    description:
      "Long-form, unedited footage of mundane activities. Surprisingly popular for relaxation and focus.",
    growthRate: "stable",
    searchVolume: "medium",
    tags: ["media", "relaxation", "mindfulness", "entertainment"],
    relatedTopics: ["mindfulness", "relaxation", "ambient-content"],
    lastUpdated: "2024-01-12",
  },
];

export function getTrendBySlug(slug: string): Trend | undefined {
  return trends.find((t) => t.slug === slug);
}

export function getTrendsByCategory(category: string): Trend[] {
  return trends.filter((t) => t.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(trends.map((t) => t.category)));
}

export function getTrendsByGrowthRate(growthRate: Trend["growthRate"]): Trend[] {
  return trends.filter((t) => t.growthRate === growthRate);
}

export function searchTrends(query: string): Trend[] {
  const lowercaseQuery = query.toLowerCase();
  return trends.filter(
    (t) =>
      t.title.toLowerCase().includes(lowercaseQuery) ||
      t.description.toLowerCase().includes(lowercaseQuery) ||
      t.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}
