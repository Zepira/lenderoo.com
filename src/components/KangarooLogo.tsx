import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  variant?: "icon" | "mascot" | "silhouette";
}

export default function KangarooLogo({ className = "", size = 48, variant = "icon" }: LogoProps) {
  if (variant === "silhouette") {
    // Elegant cream silhouette of kangaroo reading a book on a rounded teal base
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={`select-none ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="100" rx="22" fill="#00BFA6" />
        {/* Kangaroo silhouette reading book */}
        <path
          d="M32 75 C32 75, 45 80, 58 80 C68 80, 78 72, 74 62 C71 54, 62 48, 62 38 C62 34, 64 28, 68 24 C71 21, 67 12, 60 14 C56 15, 52 20, 50 24 C45 28, 40 33, 35 38 C32 41, 32 45, 34 49 L46 45 C46 45, 44 54, 48 58 C52 62, 58 64, 52 70 C48 74, 40 73, 32 75 Z"
          fill="#FFF9E6"
        />
        {/* Open book silhouette */}
        <path
          d="M26 53 L38 48 C38 48, 42 54, 48 52 C48 52, 42 58, 36 57 C30 56, 26 53, 26 53 Z"
          fill="#FFF9E6"
          stroke="#00BFA6"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Eye/nose details in silhouette */}
        <circle cx="58" cy="27" r="2.5" fill="#096e5e" />
      </svg>
    );
  }

  if (variant === "mascot") {
    // Highly-detailed, friendly cartoon kangaroo sitting and holding a book in its pouch
    return (
      <svg
        width={size}
        height={size * 2}
        viewBox="0 0 120 240"
        className={`select-none ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background glow */}
        <circle cx="60" cy="110" r="50" fill="#00BFA6" fillOpacity="0.1" />
        
        {/* Ears */}
        {/* Left Ear */}
        <path
          d="M48 55 C42 35, 43 15, 51 5 C56 12, 57 28, 55 42"
          fill="#EED3B1"
          stroke="#5D4037"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M49 45 C45 32, 46 20, 50 12 C52 17, 53 28, 52 38"
          fill="#FFB74D"
          fillOpacity="0.5"
        />

        {/* Right Ear */}
        <path
          d="M72 55 C78 35, 77 15, 69 5 C64 12, 63 28, 65 42"
          fill="#EED3B1"
          stroke="#5D4037"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M71 45 C75 32, 74 20, 70 12 C68 17, 67 28, 68 38"
          fill="#FFB74D"
          fillOpacity="0.5"
        />

        {/* Tail */}
        <path
          d="M45 135 C35 135, 20 128, 25 118 C30 110, 42 118, 48 122"
          fill="#EED3B1"
          stroke="#5D4037"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Back Feet */}
        <path
          d="M45 140 C45 140, 48 148, 58 148 C68 148, 70 140, 70 140"
          fill="#EED3B1"
          stroke="#5D4037"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Body (Sitting) */}
        <path
          d="M40 90 C40 75, 45 65, 60 65 C75 65, 80 75, 80 90 C80 110, 78 140, 60 140 C42 140, 40 110, 40 90 Z"
          fill="#EED3B1"
          stroke="#5D4037"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Pouch */}
        <path
          d="M48 100 C48 100, 48 125, 60 125 C72 125, 72 100, 72 100 Z"
          fill="#FFF3E0"
          stroke="#5D4037"
          strokeWidth="3"
        />

        {/* Little Book in Pouch */}
        <rect x="52" y="94" width="16" height="12" rx="2" fill="#8D6E63" stroke="#5D4037" strokeWidth="2" />
        <line x1="56" y1="94" x2="56" y2="106" stroke="#5D4037" strokeWidth="2" />
        <line x1="60" y1="98" x2="65" y2="98" stroke="#FFF" strokeWidth="1.5" />
        <line x1="60" y1="102" x2="65" y2="102" stroke="#FFF" strokeWidth="1.5" />

        {/* Head */}
        <path
          d="M45 60 C45 50, 52 42, 60 42 C68 42, 75 50, 75 60 C75 68, 68 72, 60 72 C52 72, 45 68, 45 60 Z"
          fill="#EED3B1"
          stroke="#5D4037"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Snout */}
        <path
          d="M54 62 C54 60, 56 58, 60 58 C64 58, 66 60, 66 62 C66 65, 64 68, 60 68 C56 68, 54 65, 54 62 Z"
          fill="#FFF3E0"
          stroke="#5D4037"
          strokeWidth="2.5"
        />
        <path d="M58 61 L62 61 L60 63 Z" fill="#5D4037" />
        <path d="M60 64 L60 67 C59 67, 59 68, 58 68" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M60 64 L60 67 C61 67, 61 68, 62 68" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round" />

        {/* Eyes */}
        <circle cx="52" cy="54" r="3" fill="#5D4037" />
        <circle cx="51.5" cy="53.5" r="1" fill="#FFF" />
        
        <circle cx="68" cy="54" r="3" fill="#5D4037" />
        <circle cx="67.5" cy="53.5" r="1" fill="#FFF" />

        {/* Rosy Cheeks */}
        <ellipse cx="49" cy="58" rx="3" ry="1.5" fill="#FF8A80" fillOpacity="0.6" />
        <ellipse cx="71" cy="58" rx="3" ry="1.5" fill="#FF8A80" fillOpacity="0.6" />

        {/* Arms holding pouch */}
        <path
          d="M41 85 C45 85, 48 94, 52 94"
          stroke="#5D4037"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M79 85 C75 85, 72 94, 68 94"
          stroke="#5D4037"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Default App Icon variant (Rounded turquoise rect with clean silhouette inside)
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-[#00BFA6] shadow-md transition-shadow hover:shadow-lg ${className}`}
      style={{ width: size, height: size, borderRadius: size * 0.22 }}
    >
      <svg
        width={size * 0.8}
        height={size * 0.8}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Silhouette of kangaroo sitting and reading an open book */}
        <path
          d="M32 75 C32 75, 45 80, 58 80 C68 80, 78 72, 74 62 C71 54, 62 48, 62 38 C62 34, 64 28, 68 24 C71 21, 67 12, 60 14 C56 15, 52 20, 50 24 C45 28, 40 33, 35 38 C32 41, 32 45, 34 49 L46 45 C46 45, 44 54, 48 58 C52 62, 58 64, 52 70 C48 74, 40 73, 32 75 Z"
          fill="#FFF9E6"
        />
        <path
          d="M26 53 L38 48 C38 48, 42 54, 48 52 C48 52, 42 58, 36 57 C30 56, 26 53, 26 53 Z"
          fill="#FFF9E6"
          stroke="#00BFA6"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="58" cy="27" r="2.5" fill="#096e5e" />
      </svg>
    </div>
  );
}
