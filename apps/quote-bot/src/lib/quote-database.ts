export interface Quote {
  id: string;
  text: string;
  author: string;
  category: string;
  tags: string[];
}

export const quotes: Quote[] = [
  // Love & Relationships
  {
    id: "1",
    text: "Love is not about possession. Love is about appreciation.",
    author: "Osho",
    category: "Love",
    tags: ["love", "relationships", "appreciation"],
  },
  {
    id: "2",
    text: "The greatest happiness of life is the conviction that we are loved.",
    author: "Victor Hugo",
    category: "Love",
    tags: ["love", "happiness", "conviction"],
  },
  {
    id: "3",
    text: "Where there is love there is life.",
    author: "Mahatma Gandhi",
    category: "Love",
    tags: ["love", "life", "wisdom"],
  },

  // Discipline & Work
  {
    id: "4",
    text: "Discipline is choosing between what you want now and what you want most.",
    author: "Abraham Lincoln",
    category: "Discipline",
    tags: ["discipline", "choice", "goals"],
  },
  {
    id: "5",
    text: "Success is nothing more than a few simple disciplines, practiced every day.",
    author: "Jim Rohn",
    category: "Discipline",
    tags: ["success", "discipline", "habits"],
  },
  {
    id: "6",
    text: "The pain of discipline is far less than the pain of regret.",
    author: "Sarah Bombell",
    category: "Discipline",
    tags: ["discipline", "regret", "motivation"],
  },

  // Productivity
  {
    id: "7",
    text: "The key is not to prioritize what's on your schedule, but to schedule your priorities.",
    author: "Stephen Covey",
    category: "Productivity",
    tags: ["productivity", "priorities", "time-management"],
  },
  {
    id: "8",
    text: "Focus on being productive instead of busy.",
    author: "Tim Ferriss",
    category: "Productivity",
    tags: ["productivity", "focus", "efficiency"],
  },
  {
    id: "9",
    text: "Until we can manage time, we can manage nothing else.",
    author: "Peter Drucker",
    category: "Productivity",
    tags: ["time-management", "productivity", "leadership"],
  },

  // Spiritual & Mindfulness
  {
    id: "10",
    text: "The present moment is the only time over which we have dominion.",
    author: "Thích Nhất Hạnh",
    category: "Spiritual",
    tags: ["mindfulness", "present", "spiritual"],
  },
  {
    id: "11",
    text: "Peace comes from within. Do not seek it without.",
    author: "Buddha",
    category: "Spiritual",
    tags: ["peace", "inner-peace", "spiritual"],
  },
  {
    id: "12",
    text: "The soul always knows what to do to heal itself. The challenge is to silence the mind.",
    author: "Caroline Myss",
    category: "Spiritual",
    tags: ["soul", "healing", "mind"],
  },

  // Friendship
  {
    id: "13",
    text: "A real friend is one who walks in when the rest of the world walks out.",
    author: "Walter Winchell",
    category: "Friendship",
    tags: ["friendship", "loyalty", "support"],
  },
  {
    id: "14",
    text: "Friendship is born at that moment when one person says to another: 'What! You too? I thought I was the only one.'",
    author: "C.S. Lewis",
    category: "Friendship",
    tags: ["friendship", "connection", "understanding"],
  },
  {
    id: "15",
    text: "True friendship comes when the silence between two people is comfortable.",
    author: "David Tyson",
    category: "Friendship",
    tags: ["friendship", "silence", "comfort"],
  },

  // Mongolian Wisdom
  {
    id: "16",
    text: "A man without culture is like a zebra without stripes.",
    author: "Mongolian Proverb",
    category: "Mongolian",
    tags: ["culture", "identity", "wisdom"],
  },
  {
    id: "17",
    text: "Tell me who your friends are, and I'll tell you who you are.",
    author: "Mongolian Proverb",
    category: "Mongolian",
    tags: ["friendship", "character", "influence"],
  },
  {
    id: "18",
    text: "A horse is worth more than riches.",
    author: "Mongolian Proverb",
    category: "Mongolian",
    tags: ["value", "tradition", "priorities"],
  },

  // Courage & Strength
  {
    id: "19",
    text: "Courage is not the absence of fear, but the triumph over it.",
    author: "Nelson Mandela",
    category: "Courage",
    tags: ["courage", "fear", "strength"],
  },
  {
    id: "20",
    text: "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.",
    author: "Eleanor Roosevelt",
    category: "Courage",
    tags: ["strength", "courage", "growth"],
  },

  // More quotes to reach 30+
  {
    id: "21",
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Work",
    tags: ["passion", "work", "excellence"],
  },
  {
    id: "22",
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    category: "Motivation",
    tags: ["opportunity", "difficulty", "perseverance"],
  },
  {
    id: "23",
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    category: "Self",
    tags: ["authenticity", "individuality", "self"],
  },
  {
    id: "24",
    text: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll",
    category: "Life",
    tags: ["attitude", "reaction", "life"],
  },
  {
    id: "25",
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
    category: "Action",
    tags: ["action", "timing", "start"],
  },
];

export function getQuoteById(id: string): Quote | undefined {
  return quotes.find((q) => q.id === id);
}

export function getQuotesByCategory(category: string): Quote[] {
  return quotes.filter((q) => q.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(quotes.map((q) => q.category)));
}

export function getRandomQuote(): Quote {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export function getRandomQuoteByCategory(category: string): Quote | undefined {
  const categoryQuotes = getQuotesByCategory(category);
  if (categoryQuotes.length === 0) return undefined;
  return categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];
}

export function getDailyQuote(): Quote {
  // Use date as seed for consistent daily quote
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  const index = dayOfYear % quotes.length;
  return quotes[index];
}
