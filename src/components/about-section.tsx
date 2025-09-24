import { personalInfo } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import PersonalizedIntroForm from './personalized-intro-form';
import { User } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
              About Me
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                <User className="text-primary"/>
                For Your Eyes Only
              </CardTitle>
              <CardDescription>
                Generate a personalized introduction about me, tailored to your needs. Perfect for sharing with colleagues or on LinkedIn.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PersonalizedIntroForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
