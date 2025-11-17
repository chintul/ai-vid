export interface Problem {
  slug: string;
  title: string;
  description: string;
  category: string;
  keywords: string[];
  steps: string[];
  tips?: string[];
  relatedProblems?: string[];
}

export const problemDatabase: Problem[] = [
  {
    slug: "calculate-heating-cost-6x6-house",
    title: "How to Calculate Heating Cost for a 6x6 House",
    description: "Learn to estimate monthly heating costs for a small 36 square meter house.",
    category: "Home & Energy",
    keywords: ["heating cost", "small house", "energy calculation", "6x6 house"],
    steps: [
      "Measure the total square footage: 6m x 6m = 36 square meters (387 sq ft)",
      "Determine your heating method (gas, electric, oil, etc.)",
      "Find your local energy rate per kWh or therm",
      "Calculate heating needs: Typically 30-50 watts per square meter",
      "For 36sqm: 1,080-1,800 watts = 1.08-1.8 kW",
      "If running 8 hours/day: 8.64-14.4 kWh per day",
      "Monthly (30 days): 259-432 kWh",
      "Multiply by your local rate to get cost estimate",
    ],
    tips: [
      "Add 20% for very cold climates",
      "Insulation quality significantly affects costs",
      "Smart thermostats can reduce costs by 10-15%",
    ],
    relatedProblems: ["reduce-heating-bills", "insulate-small-home", "best-heater-for-small-space"],
  },
  {
    slug: "clean-leather-boots-properly",
    title: "How to Clean Leather Boots Properly",
    description: "Step-by-step guide to safely clean and maintain leather boots.",
    category: "Fashion & Care",
    keywords: ["leather boots", "boot cleaning", "leather care", "shoe maintenance"],
    steps: [
      "Remove laces and loose dirt with a soft brush",
      "Mix mild soap with warm water (1:10 ratio)",
      "Dampen a soft cloth (not soaking wet)",
      "Gently wipe the leather surface in circular motions",
      "Use a second clean, damp cloth to remove soap residue",
      "Stuff boots with newspaper to maintain shape while drying",
      "Let air dry away from direct heat for 24 hours",
      "Apply leather conditioner once completely dry",
    ],
    tips: [
      "Never submerge leather boots in water",
      "Avoid hair dryers or radiators for drying",
      "Test cleaning solution on inconspicuous area first",
      "Condition every 3-6 months for best results",
    ],
    relatedProblems: ["remove-salt-stains-boots", "waterproof-leather-shoes", "restore-old-leather"],
  },
  {
    slug: "why-router-blinking-red",
    title: "Why Is My Router Blinking Red?",
    description: "Troubleshoot and fix a router with a red blinking light.",
    category: "Tech & Internet",
    keywords: ["router problems", "red light", "internet issues", "connectivity"],
    steps: [
      "Identify what the red light means (check router manual)",
      "Unplug the router power cable for 30 seconds",
      "Check all cable connections are secure",
      "Plug router back in and wait 2-3 minutes for full startup",
      "If still red, check if internet service is down in your area",
      "Log into router admin panel (usually 192.168.1.1)",
      "Look for error messages or connection status",
      "Contact ISP if problem persists after restart",
    ],
    tips: [
      "Red light usually indicates no internet connection",
      "Modem might also need restarting",
      "Check if your bill is paid and service is active",
      "Try connecting directly to modem to isolate issue",
    ],
    relatedProblems: ["slow-wifi-speed", "router-keeps-disconnecting", "improve-wifi-signal"],
  },
  {
    slug: "remove-red-wine-stain-carpet",
    title: "How to Remove Red Wine Stain from Carpet",
    description: "Emergency guide to treating fresh wine spills on carpet.",
    category: "Home & Cleaning",
    keywords: ["wine stain", "carpet cleaning", "stain removal", "emergency cleaning"],
    steps: [
      "Blot (don't rub!) immediately with paper towels or clean cloth",
      "Pour cold water on stain to dilute",
      "Blot again to absorb water and wine",
      "Mix 1 tbsp dish soap, 1 tbsp white vinegar, 2 cups warm water",
      "Apply solution with clean cloth, blotting from outside in",
      "Continue blotting with fresh cloth until stain lifts",
      "Rinse with cold water and blot dry",
      "If stain persists, apply baking soda paste and vacuum after drying",
    ],
    tips: [
      "Act fast - fresh stains are much easier to remove",
      "Club soda can work in a pinch",
      "Never use hot water on wine stains",
      "Salt can help absorb fresh spills",
    ],
    relatedProblems: ["clean-carpet-without-machine", "remove-coffee-stain", "pet-stain-removal"],
  },
  {
    slug: "fix-squeaky-door-hinge",
    title: "How to Fix a Squeaky Door Hinge",
    description: "Simple solutions to silence annoying door squeaks.",
    category: "Home & Maintenance",
    keywords: ["squeaky door", "door hinge", "home repair", "noise reduction"],
    steps: [
      "Open door and locate which hinge is squeaking",
      "Remove the hinge pin by tapping upward with hammer and nail",
      "Clean the pin with steel wool or sandpaper",
      "Apply lubricant (WD-40, oil, or petroleum jelly)",
      "Reinsert the pin and work door back and forth",
      "Wipe excess lubricant with cloth",
      "Repeat for other hinges if needed",
      "Test door movement to ensure squeak is gone",
    ],
    tips: [
      "Cooking oil works in emergency situations",
      "Silicone spray is longer-lasting than WD-40",
      "Clean hinges before lubricating for best results",
      "May need to tighten hinge screws if loose",
    ],
    relatedProblems: ["fix-stuck-door", "adjust-door-alignment", "replace-door-hinge"],
  },
  {
    slug: "calculate-tip-mentally",
    title: "How to Calculate Tip Mentally Without Calculator",
    description: "Quick mental math tricks for calculating restaurant tips.",
    category: "Life Skills",
    keywords: ["tip calculation", "mental math", "restaurant tips", "quick calculation"],
    steps: [
      "Round your bill to nearest dollar for easier math",
      "For 15% tip: Calculate 10% (move decimal left) then add half",
      "Example: $42.50 bill → 10% = $4.25, half = $2.13, total tip = $6.38",
      "For 20% tip: Calculate 10% then double it",
      "Example: $42.50 bill → 10% = $4.25, doubled = $8.50",
      "For 18% tip: Calculate 20% then subtract 2%",
      "Round up to nearest dollar for convenience",
    ],
    tips: [
      "10% is always moving the decimal point left once",
      "Doubling is easier than multiplying by 0.2",
      "Round to make math simpler",
      "Calculate on pre-tax amount for accuracy",
    ],
    relatedProblems: ["split-bill-evenly", "calculate-discount-percentage", "convert-fraction-to-percentage"],
  },
  {
    slug: "stop-hiccups-quickly",
    title: "How to Stop Hiccups Quickly",
    description: "Proven methods to stop hiccups fast.",
    category: "Health & Wellness",
    keywords: ["hiccups", "stop hiccups", "home remedies", "quick fix"],
    steps: [
      "Method 1 - Breath Hold: Take deep breath and hold for 10-20 seconds",
      "Method 2 - Cold Water: Drink glass of cold water quickly",
      "Method 3 - Sugar: Let teaspoon of sugar dissolve on tongue",
      "Method 4 - Paper Bag: Breathe into paper bag 10 times slowly",
      "Method 5 - Pull Knees: Bring knees to chest and hold for 2 minutes",
      "Method 6 - Compress Chest: Lean forward and compress chest gently",
      "If persistent after 48 hours, consult a doctor",
    ],
    tips: [
      "Most hiccups resolve within minutes",
      "Try different methods if first doesn't work",
      "Avoid carbonated drinks during episode",
      "Chronic hiccups may need medical attention",
    ],
    relatedProblems: ["calm-upset-stomach", "reduce-acid-reflux", "breathe-better"],
  },
  {
    slug: "organize-small-closet-space",
    title: "How to Organize a Small Closet Space",
    description: "Maximize storage in compact closet areas.",
    category: "Home & Organization",
    keywords: ["closet organization", "small space", "storage solutions", "declutter"],
    steps: [
      "Remove everything from closet",
      "Sort items into Keep, Donate, and Trash piles",
      "Use vertical space with shelf dividers or stackable bins",
      "Install a second hanging rod if space allows",
      "Use slim velvet hangers to save space",
      "Add over-door organizers for shoes or accessories",
      "Store off-season items in under-bed containers",
      "Group similar items together for easy access",
      "Use clear bins for visibility",
    ],
    tips: [
      "One-in-one-out rule prevents re-cluttering",
      "Vertical dividers double shelf capacity",
      "Hooks maximize door space",
      "Vacuum bags compress bulky items",
    ],
    relatedProblems: ["fold-clothes-efficiently", "organize-shoes", "maximize-bedroom-storage"],
  },
];

export function getProblemBySlug(slug: string): Problem | undefined {
  return problemDatabase.find((p) => p.slug === slug);
}

export function searchProblems(query: string): Problem[] {
  const lowercaseQuery = query.toLowerCase();
  return problemDatabase.filter(
    (p) =>
      p.title.toLowerCase().includes(lowercaseQuery) ||
      p.description.toLowerCase().includes(lowercaseQuery) ||
      p.keywords.some((k) => k.toLowerCase().includes(lowercaseQuery))
  );
}

export function getProblemsByCategory(category: string): Problem[] {
  return problemDatabase.filter((p) => p.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(problemDatabase.map((p) => p.category)));
}
