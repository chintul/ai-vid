import fs from "fs";
import path from "path";
import { Trend } from "./trends-database";

const DATA_DIR = path.join(process.cwd(), "data/trends");

export function getAllTrends(): Trend[] {
    try {
        const files = fs.readdirSync(DATA_DIR);
        const trends: Trend[] = [];

        files.forEach((file) => {
            if (!file.endsWith(".json")) return;

            const filePath = path.join(DATA_DIR, file);
            const fileContent = fs.readFileSync(filePath, "utf8");

            try {
                const trendData = JSON.parse(fileContent);

                // Map JSON structure to Trend interface
                const slug = file.replace(".json", "").replace(/^trend-\d+-/, "");

                // Convert numeric growthRate to categorical
                let growthRate: "rising" | "stable" | "emerging" = "stable";
                if (trendData.growthRate >= 70) growthRate = "emerging";
                else if (trendData.growthRate >= 40) growthRate = "rising";

                // Convert numeric searchVolume to categorical
                let searchVolume: "low" | "medium" | "high" = "low";
                if (trendData.searchVolume >= 10000) searchVolume = "high";
                else if (trendData.searchVolume >= 5000) searchVolume = "medium";

                trends.push({
                    id: trendData.id || slug,
                    title: trendData.name || "Untitled Trend",
                    slug: slug,
                    category: trendData.category || "Uncategorized",
                    description: trendData.description || "",
                    growthRate: growthRate,
                    searchVolume: searchVolume,
                    tags: trendData.keywords || [],
                    relatedTopics: [],
                    lastUpdated: trendData.dateIdentified || new Date().toISOString(),
                    metrics: trendData.metrics,
                    keywords: trendData.keywords,
                    sources: trendData.sources,
                    region: trendData.region,
                    trendScore: trendData.trendScore,
                    dateIdentified: trendData.dateIdentified,
                });
            } catch (e) {
                console.error(`Error parsing trend file ${file}:`, e);
            }
        });

        return trends;
    } catch (error) {
        console.error("Error reading trend files:", error);
        return [];
    }
}
