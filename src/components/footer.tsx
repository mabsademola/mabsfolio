import Link from 'next/link';
import { Code2 } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Code2 className="w-7 h-7 text-primary" />
            <span className="font-bold text-lg font-headline">Mabsfolio</span>
          </div>
          <p className="text-sm text-center text-foreground/70">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {personalInfo.social.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
