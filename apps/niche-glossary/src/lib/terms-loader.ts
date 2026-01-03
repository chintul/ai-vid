import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GlossaryTerm } from "./glossary-database";

const CONTENT_DIR = path.join(process.cwd(), "content/terms");

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
        // Match bullets (- or *) or numbered lists
        if (capturing && (line.trim().startsWith("- ") || line.trim().startsWith("* ") || line.trim().match(/^\d+\./))) {
            items.push(line.replace(/^[-*]\s+|\d+\.\s+/, "").trim());
        }
    }
    return items;
}

export function getAllTerms(): GlossaryTerm[] {
    try {
        if (!fs.existsSync(CONTENT_DIR)) return [];

        const files = fs.readdirSync(CONTENT_DIR);
        const terms: GlossaryTerm[] = [];

        files.forEach((file) => {
            if (!file.endsWith(".mdx")) return;

            const filePath = path.join(CONTENT_DIR, file);
            const fileContent = fs.readFileSync(filePath, "utf8");
            const { data, content } = matter(fileContent);
            const slug = file.replace(".mdx", "");

            // Extract sections from content if not in frontmatter
            const useCases = parseList(content, "Use Cases");
            const examples = parseList(content, "Examples");

            terms.push({
                id: slug,
                slug,
                term: data.title || slug,
                definition: data.description || "",
                category: data.category || "Uncategorized",
                relatedTerms: data.relatedTerms || [],
                useCases: data.useCases || useCases,
                examples: data.examples || examples,
            });
        });

        return terms;
    } catch (error) {
        console.error("Error reading glossary terms:", error);
        return [];
    }
}
