import { APP_TITLE, NAV_LINKS } from '@/constants';
import { Button } from '@/components/ui/button';

export const Nav = () => {
  return (
    <nav className=" max-w-7xl mx-auto flex items-center justify-between px-6 py-3 border-b">
      <div className="text-xl font-bold">{APP_TITLE}</div>
      <div className="flex items-center gap-4">
        {NAV_LINKS.map((link) => (
          <Button
            key={link.name}
            variant="ghost"
            className="text-sm font-medium transition-colors hover:text-primary"
            asChild
          >
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </Button>
        ))}
      </div>
    </nav>
  );
};