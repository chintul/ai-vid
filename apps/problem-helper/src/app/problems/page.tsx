import { Container, Heading, Card, CardContent, Badge } from "@passive-income/ui";
import { problemDatabase, getAllCategories } from "@/lib/problem-database";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse All Problems | Problem Helper",
  description: "Browse our complete collection of step-by-step solutions to everyday problems.",
};

export default function ProblemsPage() {
  const categories = getAllCategories();

  return (
    <main className="min-h-screen py-12">
      <Container maxWidth="xl">
        <div className="mb-6">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>

        <div className="mb-12">
          <Heading level={1} className="mb-4">
            All Problems
          </Heading>
          <p className="text-xl text-slate-600">
            Browse {problemDatabase.length} step-by-step solutions organized by category.
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((category) => {
            const categoryProblems = problemDatabase.filter((p) => p.category === category);

            return (
              <div key={category}>
                <h2 className="text-2xl font-bold mb-4">{category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryProblems.map((problem) => (
                    <Link key={problem.slug} href={`/problem/${problem.slug}`}>
                      <Card className="hover:shadow-md transition-shadow h-full">
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-2 line-clamp-2">
                            {problem.title}
                          </h3>
                          <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                            {problem.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {problem.keywords.slice(0, 2).map((keyword) => (
                              <Badge key={keyword} variant="secondary" className="text-xs">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </main>
  );
}
