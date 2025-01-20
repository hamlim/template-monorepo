import { cn } from "@local/utils/cn";
import type { ReactNode } from "react";

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: ReactNode;
};

let headingStyles = {
  h1: "text-4xl font-bold text-gray-900 dark:text-gray-100",
  h2: "text-3xl font-semibold text-gray-800 dark:text-gray-200",
  h3: "text-2xl font-medium text-gray-700 dark:text-gray-300",
  h4: "text-xl font-medium text-gray-600 dark:text-gray-400",
  h5: "text-lg font-medium text-gray-500",
  h6: "text-base font-medium text-gray-400 dark:text-gray-600",
};

export function Heading({ level, className, ...rest }: Props): React.ReactNode {
  let Tag = `h${level}` as keyof typeof headingStyles;
  let headingClass = headingStyles[Tag] || headingStyles.h1;

  return <Tag {...rest} className={cn(headingClass, className)} />;
}
