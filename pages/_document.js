import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Natali Borei</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="assets/images/shortLogo.png" />
          <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond|Fira+Sans|Herr+Von+Muellerhoff"
            rel="stylesheet" />

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
