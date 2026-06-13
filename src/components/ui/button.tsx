import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "outline" | "ghost" | "link" | "glow"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_-3px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_25px_-3px_hsl(var(--primary)/0.6)]",
      outline: "border-2 border-primary text-primary hover:bg-primary/10",
      ghost: "hover:bg-accent/10 hover:text-accent",
      link: "text-primary underline-offset-4 hover:underline",
      glow: "bg-transparent border border-accent text-accent hover:bg-accent hover:text-white shadow-[0_0_15px_-3px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_25px_-3px_hsl(var(--accent)/0.6)]",
    }

    const sizes = {
      default: "h-11 px-6 py-2",
      sm: "h-9 rounded-md px-3 text-xs",
      lg: "h-14 rounded-xl px-8 text-lg",
      icon: "h-11 w-11",
    }

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-xl font-display font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
