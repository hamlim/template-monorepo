"use client";
import NextImage from "next/image";
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
          <footer className="flex items-center justify-between py-5 px-8">
            <div>
              <h3 className="flex items-center mb-2">
                <NextImage
                  className="inline-flex mr-2"
                  width={25}
                  height={25}
                  src="/feijoa-logo.png"
                  alt=""
                />
                Feijoa Kit
              </h3>
              <p>Built by Forge Labs</p>
            </div>
            <p>
              <a
                is="a"
                href="mailto:matthewjameshamlin@gmail.com"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&.state-disabled]:text-gray-400 [&.state-disabled]:cursor-not-allowed text-primary underline-offset-4 hover:underline focus:underline"
              >
                Contact Us
              </a>
            </p>
          </footer>
        </main>
      </body>
    </html>
  );
}
