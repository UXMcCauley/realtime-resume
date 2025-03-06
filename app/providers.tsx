'use client';
import { ThemeProvider } from 'next-themes';
import React from "react";

export function ClientThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  );
}
