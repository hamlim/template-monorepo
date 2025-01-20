"use client";

import { cn } from "@local/utils/cn";
import { useFormStatus } from "react-dom";
import { Action } from "./action";
import type { ActionProps } from "./action";
type FormButtonProps = Omit<ActionProps, "type" | "is">;

export function FormButton(props: FormButtonProps): React.ReactNode {
  let status = useFormStatus();

  return (
    <Action
      {...props}
      type="submit"
      is="button"
      className={cn(props.className, status.pending && "loading")}
      disabled={status.pending}
    />
  );
}
