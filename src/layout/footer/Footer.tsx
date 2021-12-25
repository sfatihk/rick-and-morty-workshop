import { Layout } from "antd";

//style
import "./Footer.scss";

const Footer = () => (
  <Layout.Footer className="footer">
    <a
      className="footer__link"
      href="https://github.com/sfatihk"
      target="_blank"
      rel="noreferrer"
    >
      © 2021 sfatihk
    </a>
  </Layout.Footer>
);

export default Footer;
