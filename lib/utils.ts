import { clsx, type ClassValue } from "clsx"
import { exportTraceState } from "next/dist/trace"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
    return new Date(date).toLocaleString('en-US', {
        month: 'long',
        day: "numeric",
        year: 'numeric',
    });
}