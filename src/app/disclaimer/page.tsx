import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Copyright } from '@/components/copyright';

const Logo = () => (
  <div className="flex items-center gap-2 font-headline text-2xl font-bold">
    <Heart className="h-8 w-8 text-primary" />
    <span>Kindred AI</span>
  </div>
);

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background/80 text-foreground">
      <header className="p-4 flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost">
            <Link href="/chat">Get Started</Link>
          </Button>
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1 flex flex-col items-start justify-start p-8 md:p-12">
        <section className="max-w-4xl mx-auto w-full">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-center">
              Disclaimer
            </h1>
            <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground">
              <p>
                Kindred AI is an AI-powered conversational agent designed for
                supportive and informational purposes only. It is not a
                substitute for professional medical advice, diagnosis, or
                treatment.
              </p>
              <h2 className="text-2xl font-bold">Not a Medical Device</h2>
              <p>
                This application is not a licensed medical or health care
                provider and does not provide medical advice. The information
                provided by Kindred AI is intended for general informational
                purposes and should not be considered a substitute for
                professional medical advice from a qualified healthcare
                provider. Always seek the advice of your physician or other
                qualified health provider with any questions you may have
                regarding a medical condition.
              </p>
              <h2 className="text-2xl font-bold">No Doctor-Patient Relationship</h2>
              <p>
                Use of this application does not establish a doctor-patient
                relationship. Kindred AI is designed to offer emotional support
                and coping strategies based on principles of cognitive
                behavioral therapy (CBT) and mindfulness, but it cannot and
                should not replace a therapeutic relationship with a human
                professional.
              </p>
              <h2 className="text-2xl font-bold">Emergency Situations</h2>
              <p>
                If you are experiencing a medical emergency, suicidal thoughts,
                or any other crisis, please call your local emergency services
                or a crisis hotline immediately. Do not rely on this
                application for emergency assistance.
              </p>
              <h2 className="text-2xl font-bold">Limitation of Liability</h2>
              <p>
                The developers and creators of Kindred AI are not responsible or
                liable for any advice, course of treatment, diagnosis, or any
                other information, services, or products that you obtain
                through the use of this application. You are solely responsible
                for your own health decisions.
              </p>
            </div>
             <div className="text-center">
                <Button asChild>
                    <Link href="/">Return to Home</Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
