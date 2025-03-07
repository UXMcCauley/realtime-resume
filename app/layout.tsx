import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClientThemeProvider } from './providers';
import "./globals.css"
import React from "react";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Career Dashboard',
  description: 'A real-time career progress dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientThemeProvider>
          <div id={`root`}>{children}</div>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
