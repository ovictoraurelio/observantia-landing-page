import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  showTagline?: boolean
  size?: "sm" | "md" | "lg"
  variant?: "image" | "text"
}

export function Logo({ className, showTagline = false, size = "md", variant = "text" }: LogoProps) {
  const imageSizes = {
    sm: { width: 200, height: 80 },
    md: { width: 300, height: 120 },
    lg: { width: 500, height: 200 }
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl md:text-4xl"
  }

  if (variant === "image") {
    return (
      <div className={cn("flex flex-col items-start gap-1", className)}>
        <Image
          src="/logo-observantia.png"
          alt="OBSERVANTIA - Transparência e Conformidade em Cada Contrato"
          width={imageSizes[size].width}
          height={imageSizes[size].height}
          className="h-auto w-auto"
          priority
        />
      </div>
    )
  }

  // Text variant fallback
  return (
    <div className={cn("flex flex-col items-start gap-1", className)}>
      <div 
        className={cn(textSizeClasses[size])}
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >
        <span style={{ fontWeight: 600, color: "#0E0A1A" }}>OBSERVANT</span>
        <span style={{ fontWeight: 800, color: "#E94E2E" }}>IA</span>
      </div>
      {showTagline && (
        <div 
          style={{ 
            color: "#0E0A1A", 
            fontSize: "12px", 
            letterSpacing: "2px",
            fontWeight: 300,
            textTransform: "uppercase"
          }}
        >
          TRANSPARÊNCIA E CONFORMIDADE EM CADA CONTRATO
        </div>
      )}
    </div>
  )
}
