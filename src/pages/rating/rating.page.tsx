import { useState } from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import Header from "../../components/header/header.component";
import { RatingContainer, RatingContent, RatingHeadline, RatingSubHeadline, RatingSubText } from "./rating.styles";
import { IRating } from "../../services/interfaces";
import { LocalStorageService } from "../../store/local-storage";
import { RatingService } from "../../services/rating";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

import { Rating } from 'react-simple-star-rating'


const StarRatingPage = () => {
    const localStorage = new LocalStorageService();
    const ratingService = new RatingService();
    const navigate = useNavigate();

    const [rating, setRating] = useState(0);
    const [ratingMessage, setRatingMessage] = useState("");

    const handleSubmitPress = async () => {
        try {
            const clientId = localStorage.getItem("clientId");

            if (!clientId) {
                throw new Error("ClientId must be informed.")
            }

            const ratingToSave: IRating = {
                clientId,
                grade: rating.toString(),
                insertedAt: new Date().toLocaleDateString()
            }

            const ratingCreated = await ratingService.createRating(ratingToSave);

            if (ratingCreated) {
                swal("Sucesso", "Avaliação publicada com sucesso. Obrigado!", "success");
                navigate("/remember-me-finance-styles/home");
            }
        } catch (error) {
            swal("Erro", "Erro ao tentar publicar avaliação, tente novamente mais tarde.", "error");
        }
    }

    const handleRating = (rate: number) => {
        setRating(rate);

        console.log(rate);
        switch(rate) {
            case 1:
            setRatingMessage("Sentimos muito que não esteja gostando do sistema. Estamos trabalhando para sua satisfação!");
            break;
            case 2 || 3: 
            setRatingMessage("Parece que algo não está te fazendo ter uma boa experiência.");
            break;
            case 4: 
            setRatingMessage("Uau. Ficamos feliz que esteja gostando do sistema.");
            break;
            case 5: 
            setRatingMessage("Que demais!! Agradeçemos sua preferência :D");
            break;
        }
    }

    return (
        <>
            <Header />

            <RatingContainer>

                <RatingContent>
                    <RatingHeadline>Nos avalie</RatingHeadline>

                    <RatingSubHeadline>Em quantas estrelas você avalia nosso sistema?</RatingSubHeadline>


                    <Rating
                        onClick={handleRating}
                        size={70}
                    />
                                        {(rating !== 0 ) && 
                    <RatingSubText>{ratingMessage}</RatingSubText>
                    }
                    <div style={{ display: "flex", paddingTop: "30px" }}>
                        <CustomButton style={{ width: "100px", height: "50px" }} onClick={handleSubmitPress}>
                            Enviar
                        </CustomButton>
                    </div>
                </RatingContent>
            </RatingContainer>
        </>
    );
};



export default StarRatingPage;