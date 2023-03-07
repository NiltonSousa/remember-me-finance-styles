// Components
import Header from "../../components/header/header.component";

// Styles
import {
    SuportContainer,
    SuportContent,
    SuportHeadline,
    SuportSubHeadline,
} from "./suport.styles";

const SuportPage = () => {
    return (
        <>
            <Header />

            <SuportContainer>
                <SuportContent>
                    <SuportHeadline>Suporte</SuportHeadline>

                    <SuportSubHeadline>Envie um e-mail para suporte_rememberme@gmail.com</SuportSubHeadline>
                    <SuportSubHeadline>Toda tratativa será acompanhada via e-mail. Agradecemos o seu contato!</SuportSubHeadline>
                </SuportContent>
            </SuportContainer>
        </>
    );
};

export default SuportPage;
