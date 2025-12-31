'use client';

import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { Switch } from './ui/switch';
import { useState } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useParams } from 'next/navigation';

export default function AppHeader() {
  const params = useParams();
  const { setTheme, theme } = useTheme();
  const router = useRouter();
  const [isRTL, setIsRTL] = useState(params.locale === 'fa' ? true : false);
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    router.replace({ pathname }, { locale: newLocale });
  };

  return (
    <nav className="absolute top-0 w-full p-6 flex justify-end items-center z-10">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="w-8 h-8 rounded-full flex items-center justify-center text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--border-color) transition"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <Moon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Sun className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <div className="flex items-center gap-2 scale-90">
          <span className="text-xs text-(--text-secondary) font-bold">EN</span>
          <Switch
            id="airplane-mode"
            checked={isRTL}
            onCheckedChange={(checked: boolean) => {
              setIsRTL(checked);
              if (checked) {
                switchLocale('fa');
              } else {
                switchLocale('en');
              }
            }}
          />
          <span className="text-xs text-(--text-secondary) font-bold">FA</span>
        </div>
      </div>
    </nav>
  );
}
