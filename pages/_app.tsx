import ApolloClient from "apollo-boost";

import { ApolloProvider } from "react-apollo";
import App, { Container } from "next/app";
import { AppProvider } from "@shopify/polaris";
import { Provider } from "@shopify/app-bridge-react";
import Cookies from "js-cookie";
import "@shopify/polaris/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import dotEnv from 'dotenv';
import {process} from "ts-invariant";
import "typeface-roboto";

dotEnv.config();
const {SHOPIFY_API_KEY} = process.env;

const client = new ApolloClient({
  fetch : "fetch"
  , fetchOptions: {
    credentials: "include"
  }
});
class MyApp extends App {
  
  // This code causes the server to remove all default MUI styles
  // componentDidMount() {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector('#jss-server-side');
  //   if (jssStyles && "parentElement" in jssStyles) {
  //     (jssStyles.parentElement as HTMLElement).removeChild(jssStyles);
  //   }
  // }
  
  render() {
    const { Component, pageProps } = this.props;
    
    // todo remove this dev hack that populates shopOrigin always
    const shopOrigin: string = Cookies.get("shopOrigin");
    return (
      <Container>
        <AppProvider i18n={translations}>
          <Provider
            config={{
              apiKey: SHOPIFY_API_KEY!,
              shopOrigin: shopOrigin,
              forceRedirect: true
            }}
          >
            <ApolloProvider client={client}>
              <Component {...pageProps} />
            </ApolloProvider>
          </Provider>
        </AppProvider>
      </Container>
    );
  }
}

export default MyApp;
