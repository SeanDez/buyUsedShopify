import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets as MuiServerStyleSheets } from '@material-ui/core/styles';


export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const muiServerStyleSheet = new ServerStyleSheet();
    
    // Retrieve styles from components in the page
    const pageStyles = renderPage(App => props =>
      muiServerStyleSheet.collectStyles(<App {...props} />),
    );
    
    // Extract the styles as <style> tags
    const styleTags = muiServerStyleSheet.getStyleElement();
    
    // Pass styleTags as a prop
    return { ...pageStyles, styleTags };
  }
  
  render() {
    return (
      <html>
        <Head>
          <title>My page</title>
          {/* Step 5: Output the styles in the head  */ }
          { this.props.styleTags }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}


MyDocument.getInitialProps = async ctx => {
  const sheets = new MuiServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });
  
  const initialProps = await Document.getInitialProps(ctx);
  
  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
