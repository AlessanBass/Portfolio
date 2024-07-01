import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="icon" href="/icon_title.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet" />
      {/* Script FontAwesome carregado de forma assíncrona */}
      <script async src="https://kit.fontawesome.com/29712bfbae.js" crossOrigin="anonymous"></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
