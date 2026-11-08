import React from "react";

interface PhoneScreenProps {
  /** Screenshot name in public/screens: `<name>-360.webp` and `<name>-720.webp`. */
  name: string;
  alt: string;
  /** Load straight away (the hero) instead of lazily. */
  priority?: boolean;
  className?: string;
}

/**
 * A store screenshot in a simple phone outline. The images are the App Store
 * set from the app repo (store/screenshots/ios, 1320 x 2868), resized to 360
 * and 720 px wide webp.
 */
export default function PhoneScreen({ name, alt, priority = false, className = "" }: PhoneScreenProps) {
  return (
    <div
      className={`rounded-[2.25rem] bg-slate-900 p-1.5 shadow-2xl ring-1 ring-slate-900/10 dark:bg-slate-800 dark:ring-white/10 ${className}`}
    >
      <img
        src={`/screens/${name}-360.webp`}
        srcSet={`/screens/${name}-360.webp 360w, /screens/${name}-720.webp 720w`}
        sizes="(min-width: 1024px) 280px, 45vw"
        width={360}
        height={782}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="block h-auto w-full rounded-[1.9rem]"
      />
    </div>
  );
}
