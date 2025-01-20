"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Action } from "./action";
import type { ActionProps } from "./action";

export type LinkProps = Omit<ActionProps, "is"> & {
  href: string;
};

export function Link({
  variant: providedVariant = "text",
  size: providedSize = "md",
  ...props
}: LinkProps): React.ReactNode {
  // maybe a bug in oxc-transformer?
  // it strips out the default params for the Link function
  let variant = providedVariant || "text";
  let size = providedSize || "md";
  return <Action {...props} is={NextLink} variant={variant} size={size} />;
}

export function ActiveLink({ href, ...props }: LinkProps): React.ReactNode {
  let pathname = usePathname();
  let isActive = pathname === href;

  if (isActive) {
    return <span {...props} />;
  }

  return <Link href={href} {...props} />;
}
