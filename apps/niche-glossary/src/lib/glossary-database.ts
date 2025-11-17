export interface GlossaryTerm {
  id: string;
  term: string;
  slug: string;
  category: string;
  definition: string;
  useCases: string[];
  relatedTerms: string[];
  examples?: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  // Goat Farming Terms
  {
    id: "1",
    term: "Kidding Season",
    slug: "kidding-season",
    category: "Goat Farming",
    definition:
      "The period during which goats give birth, typically occurring in late winter to early spring. This is a critical time requiring close monitoring and specialized care for both does and newborn kids.",
    useCases: [
      "Planning barn space for pregnant does",
      "Scheduling veterinary support for births",
      "Preparing kidding kits with essential supplies",
      "Organizing feeding schedules for nursing mothers",
    ],
    relatedTerms: ["doe", "kid", "colostrum", "dystocia"],
    examples: [
      "Our farm's kidding season runs from February to April",
      "Prepare extra bedding before kidding season begins",
    ],
  },
  {
    id: "2",
    term: "Ruminant Bloat",
    slug: "ruminant-bloat",
    category: "Goat Farming",
    definition:
      "A dangerous condition where excessive gas accumulates in a goat's rumen, causing painful swelling and potentially life-threatening complications if not treated promptly.",
    useCases: [
      "Emergency treatment protocols",
      "Dietary management to prevent occurrence",
      "Training farm staff on early warning signs",
      "Adjusting feed transitions to minimize risk",
    ],
    relatedTerms: ["rumen", "forage", "grain-overload", "probiotics"],
    examples: [
      "The goat showed signs of bloat after eating wet alfalfa",
      "Administer bloat medication immediately if symptoms appear",
    ],
  },
  {
    id: "3",
    term: "Disbudding",
    slug: "disbudding",
    category: "Goat Farming",
    definition:
      "The process of removing horn buds from young kids (typically 3-10 days old) using a hot iron to prevent horns from developing. This practice improves safety for handlers and other animals.",
    useCases: [
      "Herd management for safety",
      "Preventing injuries in crowded pens",
      "Preparing show goats",
      "Reducing aggressive behavior in mature animals",
    ],
    relatedTerms: ["dehorning", "kids", "herd-management", "animal-welfare"],
    examples: [
      "Disbudding should be performed by experienced handlers",
      "Local anesthetic is recommended before disbudding",
    ],
  },

  // Metal Forging Terms
  {
    id: "4",
    term: "Flux Core",
    slug: "flux-core",
    category: "Metal Forging",
    definition:
      "A welding method that uses a tubular wire filled with flux compound. The flux creates a protective gas shield around the weld, eliminating the need for external shielding gas.",
    useCases: [
      "Outdoor welding in windy conditions",
      "Portable welding applications",
      "Welding thicker materials",
      "Farm and construction site repairs",
    ],
    relatedTerms: ["mig-welding", "shielding-gas", "slag", "spatter"],
    examples: [
      "Flux core welding is ideal for outdoor farm equipment repairs",
      "Clean slag immediately after flux core welding",
    ],
  },
  {
    id: "5",
    term: "Quench Hardening",
    slug: "quench-hardening",
    category: "Metal Forging",
    definition:
      "A heat treatment process where heated metal is rapidly cooled (quenched) in water, oil, or air to increase hardness and strength by locking in a specific crystalline structure.",
    useCases: [
      "Creating durable knife blades",
      "Hardening tool steel components",
      "Manufacturing industrial parts",
      "Custom metalwork for specialized applications",
    ],
    relatedTerms: ["tempering", "annealing", "heat-treatment", "martensitic-transformation"],
    examples: [
      "Oil quenching produces less thermal shock than water",
      "Always temper steel after quench hardening to reduce brittleness",
    ],
  },
  {
    id: "6",
    term: "Scale Formation",
    slug: "scale-formation",
    category: "Metal Forging",
    definition:
      "The oxidized layer that forms on metal surfaces during high-temperature forging. This flaky coating must be removed before finishing to ensure proper surface quality.",
    useCases: [
      "Identifying when to clean metal surfaces",
      "Determining forge temperature effects",
      "Planning post-forging finishing steps",
      "Quality control in metalworking",
    ],
    relatedTerms: ["oxidation", "wire-brush", "pickling", "forge-temperature"],
    examples: [
      "Heavy scale formation indicates excessive forge temperature",
      "Use a wire brush to remove scale before grinding",
    ],
  },

  // Balloon Decorating Terms
  {
    id: "7",
    term: "Balloon Garland",
    slug: "balloon-garland",
    category: "Balloon Decorating",
    definition:
      "A decorative arrangement where balloons of various sizes and colors are attached to a strip or line to create a flowing, organic design. Popular for photo backdrops and event entrances.",
    useCases: [
      "Wedding ceremony backdrops",
      "Birthday party photo walls",
      "Corporate event branding",
      "Store opening celebrations",
    ],
    relatedTerms: ["balloon-arch", "balloon-strip", "organic-design", "helium-free"],
    examples: [
      "Create depth by using 5-inch to 36-inch balloons in the garland",
      "Attach balloon garland to walls using command hooks",
    ],
  },
  {
    id: "8",
    term: "Qualatex",
    slug: "qualatex",
    category: "Balloon Decorating",
    definition:
      "A premium balloon brand known for high-quality latex balloons with consistent sizing, vibrant colors, and superior float time. Widely considered the industry standard for professional decorators.",
    useCases: [
      "Professional event decorating",
      "High-end weddings and galas",
      "Long-duration installations",
      "Color-matching for corporate branding",
    ],
    relatedTerms: ["latex-balloons", "float-time", "balloon-quality", "professional-grade"],
    examples: [
      "Qualatex balloons offer 24+ hour float time",
      "Use Qualatex for events requiring precise color matching",
    ],
  },
  {
    id: "9",
    term: "Hi-Float",
    slug: "hi-float",
    category: "Balloon Decorating",
    definition:
      "A liquid coating applied inside latex balloons before inflation that dramatically extends helium retention, allowing balloons to float significantly longer than untreated ones.",
    useCases: [
      "Multi-day event decorations",
      "Outdoor installations",
      "Early setup for next-day events",
      "Reducing balloon replacement costs",
    ],
    relatedTerms: ["helium-retention", "float-time", "balloon-treatment", "ultra-hi-float"],
    examples: [
      "Hi-Float can extend balloon float time from 12 hours to 25+ days",
      "Apply Hi-Float before inflating for best results",
    ],
  },

  // Industrial Cleaning Terms
  {
    id: "10",
    term: "pH-Neutral Cleaner",
    slug: "ph-neutral-cleaner",
    category: "Industrial Cleaning",
    definition:
      "A cleaning solution with a pH level around 7, neither acidic nor alkaline. These cleaners are safe for most surfaces and won't damage or discolor materials during regular maintenance.",
    useCases: [
      "Daily floor cleaning in commercial spaces",
      "Cleaning sensitive stone surfaces",
      "General-purpose facility maintenance",
      "Food service area sanitation",
    ],
    relatedTerms: ["alkaline-cleaner", "acidic-cleaner", "ph-scale", "surface-safety"],
    examples: [
      "Use pH-neutral cleaners on marble floors to prevent etching",
      "pH-neutral products are safe for frequent use",
    ],
  },
  {
    id: "11",
    term: "Microfiber Mop System",
    slug: "microfiber-mop-system",
    category: "Industrial Cleaning",
    definition:
      "A cleaning method using microfiber mop heads that trap dirt and bacteria more effectively than traditional cotton mops, while requiring less water and chemicals.",
    useCases: [
      "Hospital and healthcare facility cleaning",
      "Green cleaning initiatives",
      "High-traffic commercial floors",
      "Reducing chemical usage and costs",
    ],
    relatedTerms: ["flat-mop", "cotton-mop", "cleaning-efficiency", "microfiber-technology"],
    examples: [
      "Microfiber mops remove 99% of bacteria with just water",
      "Replace microfiber mop heads every 500 launderings",
    ],
  },
  {
    id: "12",
    term: "Dwell Time",
    slug: "dwell-time",
    category: "Industrial Cleaning",
    definition:
      "The required contact time between a cleaning or disinfecting chemical and a surface for the product to work effectively. Cutting dwell time short reduces cleaning efficacy.",
    useCases: [
      "Following manufacturer disinfection protocols",
      "Healthcare infection control",
      "Food safety compliance",
      "Training cleaning staff on proper procedures",
    ],
    relatedTerms: ["contact-time", "disinfection", "kill-time", "surface-sanitization"],
    examples: [
      "Most disinfectants require 10-minute dwell time for virucidal efficacy",
      "Allow proper dwell time before wiping surfaces dry",
    ],
  },

  // Aquaponics Terms
  {
    id: "13",
    term: "Biofilter",
    slug: "biofilter",
    category: "Aquaponics",
    definition:
      "A filtration system containing beneficial bacteria that convert toxic ammonia from fish waste into nitrites, then nitrates, which plants can absorb as nutrients. Essential for system health.",
    useCases: [
      "Establishing nitrogen cycle in new systems",
      "Maintaining water quality in mature systems",
      "Preventing ammonia toxicity in fish tanks",
      "Supporting plant growth with natural nutrients",
    ],
    relatedTerms: ["nitrogen-cycle", "nitrifying-bacteria", "ammonia", "nitrates"],
    examples: [
      "Cycling a biofilter typically takes 4-6 weeks",
      "Test water parameters weekly to monitor biofilter health",
    ],
  },
  {
    id: "14",
    term: "Grow Bed Media",
    slug: "grow-bed-media",
    category: "Aquaponics",
    definition:
      "The substrate material in aquaponic grow beds where plants root and beneficial bacteria colonize. Common types include expanded clay pellets, lava rock, and gravel.",
    useCases: [
      "Selecting substrate for new systems",
      "Replacing degraded media",
      "Optimizing bacterial surface area",
      "Supporting plant root development",
    ],
    relatedTerms: ["hydroton", "lava-rock", "grow-media", "bacterial-colonization"],
    examples: [
      "Expanded clay (Hydroton) is lightweight and pH-neutral",
      "Rinse grow bed media thoroughly before use",
    ],
  },
  {
    id: "15",
    term: "Bell Siphon",
    slug: "bell-siphon",
    category: "Aquaponics",
    definition:
      "An automatic drainage mechanism using siphon principles to periodically flood and drain grow beds. This provides roots with alternating water/air cycles for optimal growth.",
    useCases: [
      "Flood-and-drain system design",
      "Automated water cycling without pumps",
      "Improving root oxygenation",
      "Reducing equipment costs",
    ],
    relatedTerms: ["flood-and-drain", "siphon-break", "standpipe", "media-bed"],
    examples: [
      "Adjust bell siphon for 15-minute flood/drain cycles",
      "Clean bell siphon monthly to prevent clogging",
    ],
  },

  // Beekeeping Terms
  {
    id: "16",
    term: "Propolis",
    slug: "propolis",
    category: "Beekeeping",
    definition:
      "A resinous mixture collected by bees from tree buds and sap, used to seal gaps in the hive and provide antimicrobial protection. Also harvested for human health products.",
    useCases: [
      "Understanding hive health indicators",
      "Harvesting for value-added products",
      "Identifying signs of strong colonies",
      "Managing hive inspections",
    ],
    relatedTerms: ["bee-glue", "antimicrobial", "hive-sealing", "resin"],
    examples: [
      "Bees use propolis to mummify hive invaders",
      "Propolis makes frame removal difficult during inspections",
    ],
  },
  {
    id: "17",
    term: "Brood Pattern",
    slug: "brood-pattern",
    category: "Beekeeping",
    definition:
      "The arrangement of eggs, larvae, and capped brood cells on a frame. A solid, compact pattern indicates a healthy, productive queen, while spotty patterns suggest problems.",
    useCases: [
      "Assessing queen quality during inspections",
      "Deciding when to requeen",
      "Evaluating colony health",
      "Planning colony splits",
    ],
    relatedTerms: ["queen-quality", "brood-cells", "laying-pattern", "supersedure"],
    examples: [
      "A solid brood pattern shows few empty cells",
      "Spotty brood patterns may indicate queen failure or disease",
    ],
  },
  {
    id: "18",
    term: "Varroa Mite",
    slug: "varroa-mite",
    category: "Beekeeping",
    definition:
      "A parasitic mite (Varroa destructor) that feeds on bee larvae and adults, transmitting viruses and weakening colonies. The most significant threat to managed bee colonies worldwide.",
    useCases: [
      "Implementing integrated pest management",
      "Monitoring mite levels with sugar rolls",
      "Timing treatment applications",
      "Preventing colony collapse",
    ],
    relatedTerms: ["mite-treatment", "sugar-roll", "colony-health", "integrated-pest-management"],
    examples: [
      "Treat for varroa mites when counts exceed 3%",
      "Varroa mites reproduce in capped brood cells",
    ],
  },

  // Mushroom Cultivation Terms
  {
    id: "19",
    term: "Spawn Run",
    slug: "spawn-run",
    category: "Mushroom Cultivation",
    definition:
      "The growth phase where mushroom mycelium colonizes the substrate after inoculation, before fruiting conditions are introduced. Duration varies by species, typically 2-4 weeks.",
    useCases: [
      "Timing fruiting chamber transitions",
      "Monitoring colonization progress",
      "Preventing contamination during vulnerable phase",
      "Planning production schedules",
    ],
    relatedTerms: ["mycelium", "colonization", "substrate", "inoculation"],
    examples: [
      "Keep spawn run temperatures at 75°F for oyster mushrooms",
      "Spawn run is complete when substrate is fully white",
    ],
  },
  {
    id: "20",
    term: "Fruiting Chamber",
    slug: "fruiting-chamber",
    category: "Mushroom Cultivation",
    definition:
      "A controlled environment designed to trigger and support mushroom fruit body development, with specific temperature, humidity, light, and fresh air exchange parameters.",
    useCases: [
      "Converting colonized blocks to mushroom production",
      "Maintaining optimal growing conditions",
      "Maximizing yield and quality",
      "Preventing contamination during fruiting",
    ],
    relatedTerms: ["humidity-control", "fresh-air-exchange", "pinning", "fruit-body"],
    examples: [
      "Maintain 85-95% humidity in fruiting chambers",
      "Provide 4-6 air exchanges per hour for healthy fruiting",
    ],
  },
];

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

export function getTermsByCategory(category: string): GlossaryTerm[] {
  return glossaryTerms.filter((t) => t.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(glossaryTerms.map((t) => t.category)));
}

export function searchTerms(query: string): GlossaryTerm[] {
  const lowercaseQuery = query.toLowerCase();
  return glossaryTerms.filter(
    (t) =>
      t.term.toLowerCase().includes(lowercaseQuery) ||
      t.definition.toLowerCase().includes(lowercaseQuery) ||
      t.category.toLowerCase().includes(lowercaseQuery)
  );
}

export function getRandomTerm(): GlossaryTerm {
  return glossaryTerms[Math.floor(Math.random() * glossaryTerms.length)];
}
