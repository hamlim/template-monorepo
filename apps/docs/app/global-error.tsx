"use client";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "TODO",
  description: "TODO",
};

function themeCheck() {
  let prefersDarkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  let preferred = prefersDarkModeQuery.matches ? "dark" : "light";
  document.documentElement.classList.add(preferred);
  prefersDarkModeQuery.addEventListener("change", (e) => {
    let newPreferred = e.matches ? "dark" : "light";
    document.documentElement.classList.remove(preferred);
    document.documentElement.classList.add(newPreferred);
    preferred = newPreferred;
  });
}

export default function GlobalError() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          suppressHydrationWarning
          // biome-ignore lint/security/noDangerouslySetInnerHtml: need to inject the script contents
          dangerouslySetInnerHTML={{
            __html: `(${themeCheck.toString()})()`,
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <main className="min-h-[100vh] min-w-[100vw] flex flex-col">
          <section className="flex-grow flex items-center justify-center">
            <div className="space-y-2 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Oops, something went wrong!
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                We apologize for the inconvenience. Please try again later or
                navigate back to the homepage.
              </p>
              <Link href="/">Go back home</Link>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
