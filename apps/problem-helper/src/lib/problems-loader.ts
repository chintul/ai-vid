import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Problem } from "./problem-database";

const CONTENT_DIR = path.join(process.cwd(), "content/problems");

// Helper to parse list items from markdown text
function parseList(text: string, header: string): string[] {
    const lines = text.split("\n");
    const items: string[] = [];
    let capturing = false;

    for (const line of lines) {
        if (line.trim().toLowerCase().includes(header.toLowerCase())) {
            capturing = true;
            continue;
        }
        if (capturing && line.trim().startsWith("#")) {
            break;
        }
        if (capturing && (line.trim().startsWith("- ") || line.trim().match(/^\d+\./))) {
            items.push(line.replace(/^[-*]\s+|\d+\.\s+/, "").trim());
        }
    }
    return items;
}

export function getAllProblems(): Problem[] {
    try {
        if (!fs.existsSync(CONTENT_DIR)) return [];

        const files = fs.readdirSync(CONTENT_DIR);
        const problems: Problem[] = [];

        files.forEach((file) => {
            if (!file.endsWith(".mdx")) return;

            const filePath = path.join(CONTENT_DIR, file);
            const fileContent = fs.readFileSync(filePath, "utf8");
            const { data, content } = matter(fileContent);

            // Extract steps and tips from content if not in frontmatter
            // We assume a specific structure if logic extraction is needed
            // But for now, let's rely on Frontmatter having these or basic content parsing
            // Looking at the file content example, Steps and Tips are sections in Markdown

            const steps = parseList(content, "Solution") || [];
            const tips = parseList(content, "Tips") || [];

            // Fallback: If steps are empty, try to get anything that looks like a numbered list
            // The example file had "### Cause 1: Dirty Air Filter" etc. which makes this complex
            // Let's rely on standard Frontmatter if possible, BUT the example file file:///c:/Users/x86/Documents/neg/cs2/ai-vid/apps/problem-helper/content/problems/air-conditioner-not-cooling-properly.mdx
            // DOES NOT have steps/tips in Frontmatter. It has them in markdown text.
            // And the structure is "Cause 1", "Cause 2" etc.
            // However, the interface expects `steps: string[]`. 
            // This maps poorly to the "10 Common Fixes" article style.

            // Adaptation:
            // If it's a "How-to" article with clear steps, we parse steps
            // If it's a "Troubleshooting" article like the AC one, we might need to be smarter
            // OR we just map the headings to steps?

            // Let's refine the extraction:
            // If `steps` is in frontmatter, use it.
            // Else, look for "Solution" or "Steps" header and list items.

            const slug = file.replace(".mdx", "");

            problems.push({
                slug,
                title: data.title || slug,
                description: data.description || "",
                category: data.category || "Uncategorized",
                keywords: data.keywords || [],
                steps: data.steps || steps, // Prefer frontmatter, fallback to parsed
                tips: data.tips || tips,
                relatedProblems: [], // Hard to auto-link without graph
            });
        });

        return problems;
    } catch (error) {
        console.error("Error reading problem files:", error);
        return [];
    }
}
