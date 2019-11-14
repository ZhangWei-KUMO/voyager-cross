import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="zh-Hans">
        <Head>
          <meta charSet="UTF-8" />
          <meta content="index, follow" name="robots"></meta>
          <meta content="website" property="og:type"></meta>
          <meta content="https://cloud-wave.cn/" property="og:url"></meta>
          <meta content="Your Title" property="og:title"></meta>
          <meta content="Your description" property="og:description"></meta>
          <meta content="Your site name" property="og:site_name"></meta>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=3.0" />
          <meta name="keywords" content="keyword_1,keyword_2" />
          <link rel="shortcut icon" href="/static/favicon.png" />
          <link href="https://cloud-wave.cn/" rel="canonical"></link>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
export default MyDocument;
