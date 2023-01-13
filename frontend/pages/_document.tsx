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
      <body className="theme-base h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
