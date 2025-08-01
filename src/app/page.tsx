import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Logo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary"
  >
    <path
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
      fill="currentColor"
    />
    <path
      d="M12 7c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 4c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z"
      fill="currentColor"
    />
    <path
      d="M15.5 14.5a.997.997 0 0 1-.707-.293l-2.793-2.793-2.793 2.793a.999.999 0 1 1-1.414-1.414l3.5-3.5a.999.999 0 0 1 1.414 0l3.5 3.5a.999.999 0 0 1-.707 1.707z"
      fill="currentColor"
      transform="rotate(45 12 12.5)"
    />
  </svg>
);


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-2 font-headline text-2xl font-bold">
          <Logo />
          <span>Kindred AI</span>
        </div>
        <Button asChild variant="ghost">
          <Link href="/chat">Get Started</Link>
        </Button>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center p-4">
        <section className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold tracking-tighter">
              A safe space to talk, powered by AI.
            </h1>
            <p className="text-lg text-muted-foreground">
              Kindred AI is your compassionate companion for mental wellness.
              Talk through your feelings, get guidance, and explore mindfulness
              exercises in a secure, non-judgmental environment.
            </p>
            <Button size="lg" asChild className="group">
              <Link href="/chat">
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <footer className="p-4 text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} Kindred AI. All rights reserved.
      </footer>
    </div>
  );
}
