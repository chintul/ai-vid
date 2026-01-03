import { notFound } from "next/navigation";
import { Container, Heading, Card, CardContent, Badge } from "@passive-income/ui";
import { generateMetadata as genMeta } from "@passive-income/seo";
import { getProblemBySlug, problemDatabase } from "@/lib/problem-database";
import type { Metadata } from "next";
import Link from "next/link";

interface ProblemPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return problemDatabase.map((problem) => ({
    slug: problem.slug,
  }));
}

export async function generateMetadata({ params }: ProblemPageProps): Promise<Metadata> {
  const problem = getProblemBySlug(params.slug);

  if (!problem) {
    return {};
  }

  return genMeta({
    title: `${problem.title} | Problem Helper`,
    description: problem.description,
    keywords: problem.keywords,
    url: `https://problemhelper.ai/problem/${problem.slug}`,
    type: "article",
  });
}

export default function ProblemPage({ params }: ProblemPageProps) {
  const problem = getProblemBySlug(params.slug);

  if (!problem) {
    notFound();
  }

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": problem.title,
    "description": problem.description,
    "step": problem.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": `Step ${index + 1}`,
      "text": step,
    })),
  };

  return (
    <main className="min-h-screen py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Container maxWidth="lg">
        <div className="mb-6">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>

        <article>
          <header className="mb-8">
            <Badge variant="secondary" className="mb-4">
              {problem.category}
            </Badge>
            <Heading level={1} className="mb-4">
              {problem.title}
            </Heading>
            <p className="text-xl text-slate-600">{problem.description}</p>
          </header>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Step-by-Step Solution</h2>
              <ol className="space-y-4">
                {problem.steps.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <span className="flex-1 pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          {problem.tips && problem.tips.length > 0 && (
            <Card className="mb-8 border-blue-200 bg-blue-500">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-blue-900">💡 Pro Tips</h2>
                <ul className="space-y-2">
                  {problem.tips.map((tip, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {problem.relatedProblems && problem.relatedProblems.length > 0 && (
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Related Problems</h2>
                <div className="flex flex-wrap gap-2">
                  {problem.relatedProblems.map((slug) => (
                    <Link key={slug} href={`/problem/${slug}`}>
                      <Badge variant="outline" className="hover:bg-slate-100 cursor-pointer">
                        {slug.replace(/-/g, " ")}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </article>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-semibold">Keywords:</span>
            {problem.keywords.map((keyword) => (
              <Badge key={keyword} variant="secondary" className="text-xs">
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
