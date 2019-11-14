import React from 'react';
import App, { Container } from 'next/app';
import withNProgress from "next-nprogress";
const msDelay = 1000; // default is 300
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default withNProgress(msDelay)(MyApp);