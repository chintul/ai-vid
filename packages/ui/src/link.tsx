import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const linkVariants = cva("transition-colors focus-visible:outline-none focus-visible:ring-2", {
  variants: {
    variant: {
      default: "text-blue-600 hover:text-blue-700 underline underline-offset-4",
      muted: "text-slate-600 hover:text-slate-900",
      button: "inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(linkVariants({ variant }), className)}
        {...props}
      />
    );
  }
);
Link.displayName = "Link";

export { Link, linkVariants };
