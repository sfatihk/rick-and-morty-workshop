import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App/App";
import * as serviceWorker from "./serviceWorker";
import * as dotenv from "dotenv";
import "antd/dist/antd.css";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./graphql/lib/apolloClient";

dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
