"use client";

const gifs: Record<string, string> = {
  white: "sparkling/sparkle_white.gif",
  red: "sparkling/sparkle_red.webp",
  blue: "sparkling/sparkle_blue.webp",
  pink: "sparkling/sparkle_pink.webp",
  green: "sparkling/sparkle_green.webp",
  yellow: "sparkling/sparkle_yellow.webp",
  black: "sparkling/sparkle_black.webp",
};

export function SparkleText({
  children,
  color = "white",
  className = "",
  glowColor,
}: {
  children: React.ReactNode;
  color?: keyof typeof gifs;
  className?: string;
  glowColor?: string;
}) {
  return (
    <p
      className={`relative inline-block ${className}`}
      style={{
        textShadow: glowColor
          ? `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}`
          : undefined,
      }}
    >
      <span
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `url(${gifs[color]})`,
          backgroundSize: "70%",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          imageRendering: "crisp-edges",
        }}
      />
      {children}
    </p>
  );
}
