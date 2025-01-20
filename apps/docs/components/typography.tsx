import { cn } from "@local/utils/cn";

export function H1(
  props: React.HTMLAttributes<HTMLHeadingElement> & {
    children?: React.ReactNode;
  },
) {
  return (
    <h1
      {...props}
      className={cn(
        props.className,
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      )}
    />
  );
}

export function H2(
  props: React.HTMLAttributes<HTMLHeadingElement> & {
    children?: React.ReactNode;
  },
) {
  return (
    <h2
      {...props}
      className={cn(
        props.className,
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      )}
    />
  );
}

export function H3(
  props: React.HTMLAttributes<HTMLHeadingElement> & {
    children?: React.ReactNode;
  },
) {
  return (
    <h3
      {...props}
      className={cn(
        props.className,
        "scroll-m-20 text-2xl font-semibold tracking-tight",
      )}
    />
  );
}

export function H4(
  props: React.HTMLAttributes<HTMLHeadingElement> & {
    children?: React.ReactNode;
  },
) {
  return (
    <h4
      {...props}
      className={cn(
        props.className,
        "scroll-m-20 text-xl font-semibold tracking-tight",
      )}
    />
  );
}

export function P(
  props: React.HTMLAttributes<HTMLParagraphElement> & {
    children?: React.ReactNode;
  },
) {
  return (
    <p
      {...props}
      className={cn(props.className, "leading-7 [&:not(:first-child)]:mt-6")}
    />
  );
}

export function Blockquote(
  props: React.HTMLAttributes<HTMLQuoteElement> & {
    children?: React.ReactNode;
  },
) {
  return (
    <blockquote
      {...props}
      className={cn(props.className, "mt-6 border-l-2 pl-6 italic")}
    />
  );
}

export function UnorderedList(
  props: React.HTMLAttributes<HTMLUListElement> & {
    children?: React.ReactNode;
  },
) {
  return (
    <ul
      {...props}
      className={cn(props.className, "my-6 ml-6 list-disc [&>li]:mt-2")}
    />
  );
}

export function InlineCode(
  props: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode },
) {
  return (
    <code
      {...props}
      className={cn(
        props.className,
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      )}
    />
  );
}

export function Link(
  props: React.HTMLAttributes<HTMLAnchorElement> & {
    children?: React.ReactNode;
    href: string;
  },
) {
  return (
    <a
      {...props}
      className={cn(
        props.className,
        "font-medium text-primary underline underline-offset-4",
      )}
    />
  );
}
