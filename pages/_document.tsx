import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Oswald&family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-default text-lg text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
