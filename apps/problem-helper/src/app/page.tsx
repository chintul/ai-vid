import { Container, Heading, Button, Card, CardContent } from "@passive-income/ui";
import Link from "next/link";
import { problemDatabase } from "@/lib/problem-database";

export default function HomePage() {
  const recentProblems = problemDatabase.slice(0, 6);

  return (
    <main className="min-h-screen py-12">
      <Container maxWidth="xl">
        <div className="text-center mb-12">
          <Heading level={1} className="mb-4">
            Problem Helper
          </Heading>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Get instant, step-by-step solutions to everyday micro-problems.
            Simple answers to life&apos;s small questions.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <form action="/search" method="get" className="flex gap-2">
            <input
              type="text"
              name="q"
              placeholder="e.g., how to calculate heating cost for a 6x6 house"
              className="flex-1 h-12 px-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
            <Button type="submit" size="lg">
              Search
            </Button>
          </form>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Popular Problems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentProblems.map((problem) => (
              <Link key={problem.slug} href={`/problem/${problem.slug}`}>
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-3">
                      {problem.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/problems">
            <Button variant="outline" size="lg">
              Browse All Problems
            </Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
