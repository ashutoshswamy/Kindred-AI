import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BrainCircuit, Github, Linkedin, Twitter } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Copyright } from '@/components/copyright';

const Logo = () => (
  <div className="flex items-center gap-2 font-headline text-2xl font-bold">
    <BrainCircuit className="h-8 w-8 text-primary" />
    <span className="text-foreground">Kindred AI</span>
  </div>
);


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background/80 text-foreground">
      <header className="p-4 flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost">
            <Link href="/chat">Get Started</Link>
          </Button>
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center p-4">
        <section className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
              A safe space to talk, powered by AI.
            </h1>
            <p className="text-md md:text-lg text-muted-foreground">
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
      <footer className="bg-background/80 border-t">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Logo />
              <p className="text-muted-foreground mt-2 text-sm max-w-sm">
                Your compassionate AI companion for mental wellness.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Legal</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link href="/disclaimer" className="text-muted-foreground hover:text-foreground">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Connect with Us</h3>
              <div className="flex mt-2 space-x-4">
                <Link href="https://github.com/ashutoshswamy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="https://linkedin.com/in/ashutoshswamy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://twitter.com/ashutoshswamy_" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
               <div className="mt-4">
                <h3 className="font-semibold mb-2">Theme</h3>
                <ThemeToggle />
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-4 text-center text-muted-foreground text-sm">
            <Copyright />
          </div>
        </div>
      </footer>
    </div>
  );
}
