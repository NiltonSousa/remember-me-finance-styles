// Styles
import { HeaderContainer, HeaderItems, HeaderItem } from "./header.styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLRegisterClick = () => {
    navigate("/register");
  };

  const handleRatingClick = () => {
    navigate("/rating");
  };

  const handleSuportClick = () => {
    navigate("/suport");
  };

  return (
    <HeaderContainer>
      <HeaderItems>
        <HeaderItem onClick={handleLRegisterClick}>Cadastrar</HeaderItem>
        <HeaderItem>Relatórios</HeaderItem>
        <HeaderItem onClick={handleSuportClick}>Suporte</HeaderItem>
        <HeaderItem onClick={handleRatingClick}>Avalie</HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  );
};

export default Header;
