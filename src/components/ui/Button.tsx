import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-95",
          {
            "bg-primary text-black hover:bg-primary-dark shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]": variant === "primary",
            "bg-surface text-text-main hover:bg-surface-hover": variant === "secondary",
            "border border-border bg-transparent hover:bg-surface text-text-main": variant === "outline",
            "hover:bg-surface hover:text-text-main text-text-muted": variant === "ghost",
            "h-9 px-4 py-2": size === "sm",
            "h-11 px-8 py-2": size === "md",
            "h-14 px-10 py-3 text-base": size === "lg",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
