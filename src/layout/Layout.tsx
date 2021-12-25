import React from "react";

import { Layout } from "antd";

import Header from "./header/Header";
import Footer from "./footer/Footer";

const { Content } = Layout;
const WithLayout = (props: React.ReactNode) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Content>{props}</Content>
      <Footer />
    </Layout>
  );
};

export default WithLayout;
