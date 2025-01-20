import { cn } from "@local/utils/cn";
import { cva } from "class-variance-authority";
import NextLink from "next/link";
import type { ElementType, ReactNode } from "react";

export type ActionProps = {
  children: ReactNode;
  is: "button" | "a" | typeof NextLink;
  href?: string;
  disabled?: boolean;
  className?: string;
  variant?:
    | "primary"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "text";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  // [key: string]: unknown;
};

let variants = cva(
  `inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&.state-disabled]:text-gray-400 [&.state-disabled]:cursor-not-allowed`,
  {
    variants: {
      variant: {
        primary:
          "rounded-md bg-primary text-primary-foreground hover:bg-primary/90 focus:bg-primary/90",
        secondary:
          "rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:bg-secondary/80",
        destructive:
          "rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:bg-destructive/90",
        outline:
          "rounded-md border border-input bg-background hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        ghost:
          "rounded-md hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        text: "text-primary underline-offset-4 hover:underline focus:underline",
      },
      size: {
        md: "text-md",
        sm: "text-sm",
        lg: "text-lg",
      },
      disabled: {
        true: "state-disabled",
        false: "state-enabled",
      },
    },
    compoundVariants: [
      // Only add padding for the sizes for buttons that are "chunky"
      // Text actions should act like inline elements without padding
      {
        variant: ["primary", "secondary", "destructive", "outline", "ghost"],
        size: "sm",
        className: "h-8 px-4",
      },
      {
        variant: ["primary", "secondary", "destructive", "outline", "ghost"],
        size: "md",
        className: "h-12 px-6",
      },
      {
        variant: ["primary", "secondary", "destructive", "outline", "ghost"],
        size: "lg",
        className: "h-14 px-8",
      },

      {
        variant: ["primary", "secondary", "destructive"],
        disabled: true,
        className: "bg-gray-200 hover:bg-gray-200",
      },
      {
        variant: ["outline", "ghost"],
        disabled: true,
        className: "hover:bg-transparent",
      },
      {
        variant: ["text"],
        disabled: true,
        className: "hover:no-underline",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  },
);

export function Action({
  is,
  disabled,
  href,
  className,
  variant,
  size,
  ...props
}: ActionProps): React.ReactNode {
  let Element: ElementType = is;
  if (disabled && (is === "a" || is === NextLink)) {
    Element = "span";
  }

  // Don't pass `disabled` to the element if it's not a button
  let forwardedProps: Record<string, unknown> = {};
  if (is === "button" && disabled) {
    forwardedProps.disabled = disabled;
  }

  return (
    <Element
      {...forwardedProps}
      href={href}
      className={cn(variants({ variant, size, disabled }), className)}
      {...props}
    />
  );
}
