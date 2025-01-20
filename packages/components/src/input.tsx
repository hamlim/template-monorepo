"use client";

// Changed slightly from shadcn/ui

import type * as React from "react";
import { useId } from "react";

import { cn } from "@local/utils/cn";

export interface BaseInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>;
}

export function BaseInput({
  className,
  type,
  ref,
  ...props
}: BaseInputProps): React.ReactNode {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
}

export interface InputProps extends BaseInputProps {
  label: string;
  required?: boolean;
  error?: string;
}

export function Input({
  label,
  required,
  error,
  ...props
}: InputProps): React.ReactNode {
  let id = useId();
  return (
    <div>
      <label className="mb-2 flex flex-col" htmlFor={id}>
        {label}
        {required ? "*" : ""}
      </label>
      <BaseInput id={id} required={required} {...props} />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
