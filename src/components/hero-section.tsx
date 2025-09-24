import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/lib/data';
import { ArrowDown, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[calc(100dvh-4rem)] bg-background py-20 md:py-32"
    >
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 [mask-image:linear-gradient(to_bottom,white_10%,transparent_70%)]"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {personalInfo.name}
        </h1>
        <p className="mt-6 text-lg tracking-wide text-foreground/80 sm:text-xl md:max-w-3xl mx-auto">
          {personalInfo.title}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="font-bold">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-bold">
            <Link href="#projects">
              View My Work <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" variant="outline" className="font-bold">
            <Link href="/placeholder-resume.pdf" target="_blank" download="Mabs-Ademola-Resume.pdf">
              <Download className="mr-2 h-5 w-5" /> Frontend Engineer Resume (Flutter)
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-bold">
            <Link href="/placeholder-cv.pdf" target="_blank" download="Mabs-Ademola-CV.pdf">
              <Download className="mr-2 h-5 w-5" /> Backend Engineer Resume (Django / Full-Stack)
            </Link>
          </Button>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          {personalInfo.social.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <social.icon className="h-6 w-6" />
              <span className="sr-only">{social.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
