import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        // Primary: filled black with white text
        default: "bg-gray-900 text-white border-2 border-gray-900 hover:bg-gray-700 hover:border-gray-700 dark:bg-white dark:text-gray-900 dark:border-white dark:hover:bg-gray-100",
        // Secondary/Outline: white with black border
        outline: "bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:border-white dark:hover:bg-gray-800",
        // Destructive: for errors
        destructive: "bg-red-500 text-white border-2 border-red-500 hover:bg-red-600 hover:border-red-600",
        // Secondary filled
        secondary: "bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700",
        // Ghost: minimal, just hover effect
        ghost: "hover:bg-gray-100 text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800",
        // Link style
        link: "text-gray-900 underline-offset-4 hover:underline dark:text-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-lg gap-1.5 px-3 text-xs",
        lg: "h-12 rounded-lg px-6",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
    }
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
