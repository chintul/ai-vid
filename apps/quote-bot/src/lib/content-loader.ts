import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Quote } from "./quote-database";

const CONTENT_DIR = path.join(process.cwd(), "content/collections");

export async function getAllQuotes(): Promise<Quote[]> {
    try {
        const files = fs.readdirSync(CONTENT_DIR);
        const quotes: Quote[] = [];

        files.forEach((file) => {
            if (!file.endsWith(".mdx")) return;

            const filePath = path.join(CONTENT_DIR, file);
            const fileContent = fs.readFileSync(filePath, "utf8");
            const { data, content } = matter(fileContent);

            // Parse the content to extract quotes
            // Expected format: ### n. "Quote text"\n**— Author**
            const quoteRegex = /### \d+\. "([^"]+)"\s+\*\*— ([^*]+)\*\*/g;
            let match;

            while ((match = quoteRegex.exec(content)) !== null) {
                const [_, text, author] = match;
                quotes.push({
                    id: `${file}-${quotes.length + 1}`,
                    text: text.trim(),
                    author: author.trim(),
                    category: data.category || "General",
                    tags: data.tags || [],
                });
            }
        });

        return quotes;
    } catch (error) {
        console.error("Error reading quote files:", error);
        return [];
    }
}
