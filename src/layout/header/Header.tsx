import { Layout } from "antd";
import { useHistory } from "react-router-dom";

//style
import "./Header.scss";

//assets
import Logo from "../../assets/images/Logo.png";
import Logo2x from "../../assets/images/Logo@2x.png";

const Header = () => {
  const history = useHistory();
  return (
    <Layout.Header className="header">
      <img
        src={Logo}
        srcSet={`${Logo} 1x, ${Logo2x} 2x`}
        alt="logo"
        className="header__logo"
        onClick={() => history.push(`/`)}
      />
    </Layout.Header>
  );
};

export default Header;
