import { Briefcase } from 'lucide-react';
import { experience } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center mb-12">
          Work Experience
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border"></div>
          {experience.map((item, index) => (
            <div key={index} className="relative mb-12">
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-4 w-4 h-4 bg-primary rounded-full border-4 border-secondary"></div>
              <div className={`flex justify-center ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                <div className="w-full lg:w-[calc(50%-2rem)]">
                  <Card className="shadow-lg">
                    <CardHeader>
                      <div className="flex justify-between items-start gap-2">
                        <CardTitle className="font-headline text-xl">{item.role}</CardTitle>
                        <span className="text-sm font-medium text-primary whitespace-nowrap bg-primary/10 px-2 py-1 rounded-md">{item.duration}</span>
                      </div>
                      <CardDescription className="font-semibold text-base">{item.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
