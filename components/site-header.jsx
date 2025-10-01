"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

import { Menu } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between h-[var(--header-height)] px-4 border-b">
      {/* Tombol buka/tutup sidebar */}
      <SidebarTrigger className="lg:hidden" />

      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Sun className="h-5 w-5 dark:hidden" />
          <Moon className="hidden h-5 w-5 dark:block" />
        </Button>
      </div>
    </header>
  );
}
