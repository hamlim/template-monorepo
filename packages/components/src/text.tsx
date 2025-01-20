import { cn } from "@local/utils/cn";
import type { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export function Text({ className, ...rest }: Props): React.ReactNode {
  return (
    <p
      {...rest}
      className={cn("text-base text-gray-700 dark:text-gray-300", className)}
    />
  );
}
