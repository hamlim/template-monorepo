import type { ReactNode } from "react";

export function ErrorMessage({
  children,
}: { children: ReactNode }): React.ReactNode {
  return (
    <p className="p-4 rounded border-solid border-2 border-red-500 text-red-500 bg-red-50">
      {children}
    </p>
  );
}
