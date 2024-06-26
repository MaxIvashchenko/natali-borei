import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';

import createEmotionCache from 'theme/createEmotionCache';

const title = 'Natali Borei';
const description = '';
const image = process.env.STORAGE_URL + `/public/common/liknTemplate.png`;
const keywords = '';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <link rel='manifest' href='/manifest.json' />
          <meta name='keywords' content={keywords} />
          <meta name='theme-color' content='#ffffff' />

          {/*Google / Search Engine Tags*/}
          <meta itemProp='title' content={title} />
          <meta itemProp='name' content={title} />
          <meta itemProp='description' content={description} />
          <meta itemProp='image' content={image} />

          {/* Open Graph / Facebook */}
          <meta property='og:type' content='website' />
          <meta property='og:title' content={title} />
          <meta property='og:description' content={description} />
          <meta property='og:site_name' content={title} />
          <meta property='og:image' content={image} />
          <meta property='og:image:url' content={image} />
          <meta property='og:image:secure_url' content={image} />
          <meta property='og:image:type' content='image/png' />
          <meta property='og:image:height' content='628' />
          <meta property='og:image:width' content='1200' />

          {/* Twitter */}
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:creator' content='@business-emigrant' />
          <meta name='twitter:title' content={title} />
          <meta name='twitter:description' content={description} />
          <meta name='twitter:image' content={image} />

          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'
          />

          <link rel='icon' type='image/svg+xml' href='/favicon.ico' />
          {(this.props as any).emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        }
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags
  };
};
