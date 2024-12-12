"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure the component is fully mounted before accessing the theme
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleTheme = () => {
    if (theme === "system") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };

  const getCurrentIcon = () => {
    if (theme === "light") {
      return <Sun className="w-4 h-4" />;
    } else if (theme === "dark") {
      return <Moon className="w-4 h-4" />;
    }
    return <Monitor className="w-4 h-4" />;
  };

  // Prevent rendering until the component is mounted to avoid hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <Button
      onClick={handleToggleTheme}
      className="rounded-full bg-background/30 text-foreground hover:bg-background/20 p-2"
      aria-label="Toggle Theme"
      size={'icon'}
    >
      {getCurrentIcon()}
    </Button>
  );
}
