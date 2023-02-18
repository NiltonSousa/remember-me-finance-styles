// Styles
import { HeaderContainer, HeaderItems, HeaderItem } from "./header.styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLRegisterClick = () => {
    navigate("/register");
  };

  return (
    <HeaderContainer>
      <HeaderItems>
        <HeaderItem onClick={handleLRegisterClick}>Cadastrar</HeaderItem>
        <HeaderItem>Relatórios</HeaderItem>
        <HeaderItem>Suporte</HeaderItem>
        <HeaderItem>Avalie</HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  );
};

export default Header;
