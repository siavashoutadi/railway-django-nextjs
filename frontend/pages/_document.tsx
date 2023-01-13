import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <Script
          id="theme"
          onLoad={() => {
            if (
              localStorage.theme === 'dark' ||
              (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
            ) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          }}
        />
      </Head>
      <body className="h-screen bg-zinc-50 text-slate-800 dark:bg-slate-900 dark:text-zinc-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
