// Styles
import { LocalStorageService } from "../../store/local-storage";
import { HeaderContainer, HeaderItems, HeaderItem } from "./header.styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const localStorageService = new LocalStorageService();

  const isAdmin = Boolean(localStorageService.getItem("isAdmin") === "true");

  const handleHomeClick = () => {
    navigate("/home");
  };

  const handleLRegisterClick = () => {
    navigate("/register");
  };

  const handleRatingClick = () => {
    navigate("/rating");
  };

  const handleSuportClick = () => {
    navigate("/suport");
  };

  const handleClientClick = () => {
    navigate("/clients");
  };


  return (
    <HeaderContainer>
      <HeaderItems>
        <HeaderItem onClick={handleHomeClick}>Tela inicial</HeaderItem>
        <HeaderItem onClick={handleLRegisterClick}>Cadastrar</HeaderItem>
        {isAdmin ? <HeaderItem onClick={handleClientClick}>Listagem de usuários</HeaderItem> : ""}
        <HeaderItem onClick={handleSuportClick}>Suporte</HeaderItem>
        <HeaderItem onClick={handleRatingClick}>Avalie</HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  );
};

export default Header;
