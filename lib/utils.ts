import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { track } from '@vercel/analytics/server';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToSection(id: string, source: string) {
  const element = document.getElementById(id);
  track(`navigation: ${source} `);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};