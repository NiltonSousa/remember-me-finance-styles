// Styles
import { HeaderContainer, HeaderItems, HeaderItem } from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderItems>
        <HeaderItem>Cadastrar</HeaderItem>
        <HeaderItem>Relatórios</HeaderItem>
        <HeaderItem>Suporte</HeaderItem>
        <HeaderItem>Avalie</HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  );
};

export default Header;
