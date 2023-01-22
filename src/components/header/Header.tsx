import { StyledHeader, StyledImage } from "./Header.styles";
import Logo from "../../images/Logo.png";

const Header = () => {
  return (
    <StyledHeader>
      <StyledImage src={Logo} />
    </StyledHeader>
  );
};

export default Header;
