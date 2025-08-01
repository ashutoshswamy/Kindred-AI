import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="p-4 flex justify-between items-center">
        <div className="font-headline text-2xl font-bold">Kindred AI</div>
        <Button asChild variant="ghost">
          <Link href="/chat">Get Started</Link>
        </Button>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center p-4">
        <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-left">
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
          <div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="AI therapist illustration"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
              data-ai-hint="wellness zen"
            />
          </div>
        </section>
      </main>
      <footer className="p-4 text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} Kindred AI. All rights reserved.
      </footer>
    </div>
  );
}
