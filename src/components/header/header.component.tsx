// Styles
import { LocalStorageService } from "../../store/local-storage";
import { HeaderContainer, HeaderItems, HeaderItem } from "./header.styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const localStorageService = new LocalStorageService();

  const isAdmin = Boolean(localStorageService.getItem("isAdmin") === "true");

  const handleHomeClick = () => {
    navigate("/remember-me-finance-styles/home");
  };

  const handleLRegisterClick = () => {
    navigate("/remember-me-finance-styles/register");
  };

  const handleRatingClick = () => {
    navigate("/remember-me-finance-styles/rating");
  };

  const handleSuportClick = () => {
    navigate("/remember-me-finance-styles/suport");
  };

  const handleClientClick = () => {
    navigate("/remember-me-finance-styles/clients");
  };

  const handleSignOutClick = () => {
    navigate("/remember-me-finance-styles");
  };

  return (
    <HeaderContainer>
      <HeaderItems>
        <HeaderItem onClick={handleHomeClick}>Tela inicial</HeaderItem>
        <HeaderItem onClick={handleLRegisterClick}>Cadastrar</HeaderItem>
        {isAdmin ? <HeaderItem onClick={handleClientClick}>Listagem de usuários</HeaderItem> : ""}
        <HeaderItem onClick={handleSuportClick}>Suporte</HeaderItem>
        <HeaderItem onClick={handleRatingClick}>Avalie</HeaderItem>
        <HeaderItem onClick={handleSignOutClick}>Sair</HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  );
};

export default Header;
