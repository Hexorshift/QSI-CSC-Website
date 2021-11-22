import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <meta name="theme-color" content="#D12147" />
          <meta name="author" content="QSI Computer Science Club" />
          <meta
            name="keywords"
            content="QSI, Queens School of Inquiry, High School Computer Science Club, QSI Computer Science Club"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://i.ibb.co/LJWLGtt/QSI-CSC-BANNER.png"
          />
          <meta
            name="twitter:image"
            content="https://i.ibb.co/LJWLGtt/QSI-CSC-BANNER.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
