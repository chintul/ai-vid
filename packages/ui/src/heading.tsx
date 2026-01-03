import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const headingVariants = cva("font-bold tracking-tight", {
  variants: {
    level: {
      1: "text-4xl sm:text-5xl md:text-6xl",
      2: "text-3xl sm:text-4xl md:text-5xl",
      3: "text-2xl sm:text-3xl md:text-4xl",
      4: "text-xl sm:text-2xl md:text-3xl",
      5: "text-lg sm:text-xl md:text-2xl",
      6: "text-base sm:text-lg md:text-xl",
    },
    color: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
    },
  },
  defaultVariants: {
    level: 1,
    color: "default",
  },
});

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color">,
  VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 1, color, as, ...props }, ref) => {
    const Component = as || (`h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6");

    return (
      <Component
        ref={ref as any}
        className={cn(headingVariants({ level, color }), className)}
        {...props}
      />
    );
  }
);
Heading.displayName = "Heading";

export { Heading, headingVariants };
