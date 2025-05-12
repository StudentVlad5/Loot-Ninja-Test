import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="uk">
      <Head>
        <link rel="icon" type="image/x-icon" sizes="16x16" href="/8-2-n-letter-png-picture_16x16.ico" />
        <link rel="icon" type="image/x-icon" sizes="32x32" href="/8-2-n-letter-png-picture_32x32.ico" />
        <link rel="icon" type="image/x-icon" sizes="48x48" href="/8-2-n-letter-png-picture_48x48.ico" />
        <link rel="icon" type="image/x-icon" sizes="64x64" href="/8-2-n-letter-png-picture_64x64.ico" />
        <meta name="description" content="Популярні меми. Довідник мемасіків." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
