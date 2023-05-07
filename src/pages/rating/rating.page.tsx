import { useState } from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import Header from "../../components/header/header.component";
import { RatingContainer, RatingContent, RatingHeadline, RatingSubHeadline } from "./rating.styles";
import "./styles.css";
import { Rating } from "../../services/interfaces";
import { LocalStorageService } from "../../store/local-storage";
import { RatingService } from "../../services/rating";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';


const StarRatingPage = () => {
    const [grade, setGrade] = useState(0);
    const localStorage = new LocalStorageService();
    const ratingService = new RatingService();
    const navigate = useNavigate();

    const handleSubmitPress = async () => {
        try {
            const clientId = localStorage.getItem("clientId");

            if (!clientId) {
                throw new Error("ClientId must be informed.")
            }

            const rating: Rating = {
                clientId,
                grade: grade.toString(),
                insertedAt: new Date().toLocaleDateString()
            }

            const ratingCreated = await ratingService.createRating(rating);

            if (ratingCreated) {
                swal("Sucesso", "Avaliação publicada com sucesso. Obrigado!", "success");
                navigate("/remember-me-finance-styles/home");
            }
        } catch (error) {
            swal("Erro", "Erro ao tentar publicar avaliação, tente novamente mais tarde.", "error");
        }
    }
    return (
        <>
            <Header />

            <RatingContainer>

                <RatingContent>
                    <RatingHeadline>Nos avalie</RatingHeadline>

                    <RatingSubHeadline>Em quantas estrelas você avalia nosso sistema?</RatingSubHeadline>


                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <form className="rating" method="POST" id="form1">

                        <input type="radio" id="rating1" name="rating" value="1" />
                        <label id="1" title="Poor" className="fa fa-star" form="rating1" onClick={() => setGrade(1)}></label>

                        <input type="radio" id="rating2" name="rating" value="2" />
                        <label id="2" title="Average" className="fa fa-star" form="rating2" onClick={() => setGrade(2)} ></label>


                        <input type="radio" id="rating3" name="rating" value="3" />
                        <label id="3" title="Average" className="fa fa-star" form="rating3" onClick={() => setGrade(3)}></label>


                        <input type="radio" id="rating4" name="rating" value="4" />
                        <label id="4" title="Good" className="fa fa-star" form="rating4" onClick={() => setGrade(4)}></label>


                        <input type="radio" id="rating5" name="rating" value="5" />
                        <label id="5" title="Awesome" className="fa fa-star" form="rating5" onClick={() => setGrade(5)}></label>
                    </form>
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