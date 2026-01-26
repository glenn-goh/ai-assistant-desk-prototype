import * as React from "react";

import { cn } from "./utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        data-slot="textarea"
        className={cn(
          "resize-none border-gray-900 dark:border-white placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 aria-invalid:ring-red-500/20 aria-invalid:border-red-500 flex field-sizing-content min-h-16 w-full rounded-lg border bg-white dark:bg-gray-900 px-3 py-2 text-base text-gray-900 dark:text-white transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };