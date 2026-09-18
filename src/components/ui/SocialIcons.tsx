import type { SVGProps } from "react";

/**
 * Minimal, licence-safe outline glyphs for social platforms.
 * (lucide-react no longer ships brand/trademark icons.)
 */

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M14 8.5h2.2V5.3h-2.4c-2.4 0-3.8 1.5-3.8 3.9v2.1H7.6v3.2H10V21h3.2v-6.5h2.5l.5-3.2h-3V9.6c0-.7.3-1.1 1.1-1.1Z" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7.5" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11 16.5v-3.6c0-1.3.9-2.4 2.4-2.4 1.3 0 2.1.9 2.1 2.4v3.6" />
      <line x1="11" y1="10.5" x2="11" y2="16.5" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3" y="6.5" width="18" height="11" rx="3" />
      <path d="M10.5 9.7 14.5 12l-4 2.3Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
