import type * as React from "react";
import { useId } from "react";

import { cn } from "@local/utils/cn";

export interface BaseTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  ref?: React.Ref<HTMLTextAreaElement>;
}

export function BaseTextarea({
  className,
  ref,
  ...props
}: BaseTextareaProps): React.ReactNode {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
}

export interface TextareaProps extends BaseTextareaProps {
  label: string;
  required?: boolean;
  error?: string;
}

export function Textarea({
  label,
  required,
  error,
  ...props
}: TextareaProps): React.ReactNode {
  let id = useId();
  return (
    <div>
      <label className="mb-2 flex flex-col" htmlFor={id}>
        {label}
        {required ? "*" : ""}
      </label>
      <BaseTextarea id={id} required={required} {...props} />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
