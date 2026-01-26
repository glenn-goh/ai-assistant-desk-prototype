import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-lg border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 aria-invalid:ring-red-500/20 aria-invalid:border-red-500 transition-colors overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-gray-900 bg-gray-900 text-white dark:border-white dark:bg-white dark:text-gray-900 [a&]:hover:bg-gray-700",
        secondary:
          "border-gray-300 bg-gray-100 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white [a&]:hover:bg-gray-200",
        destructive:
          "border-red-500 bg-red-500 text-white [a&]:hover:bg-red-600 focus-visible:ring-red-500/20",
        outline:
          "border-gray-900 bg-transparent text-gray-900 dark:border-white dark:text-white [a&]:hover:bg-gray-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
