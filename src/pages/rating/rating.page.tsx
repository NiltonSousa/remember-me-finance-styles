import CustomButton from "../../components/custom-button/custom-button.component";
import Header from "../../components/header/header.component";
import { RatingContainer, RatingContent, RatingHeadline, RatingSubHeadline } from "./rating.styles";
import "./styles.css";

const StarRatingPage = () => {
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
                        <label id="1" title="Poor" className="fa fa-star" form="rating1"></label>

                        <input type="radio" id="rating2" name="rating" value="2" />
                        <label id="2" title="Average" className="fa fa-star" form="rating2"></label>


                        <input type="radio" id="rating3" name="rating" value="3" />
                        <label id="3" title="Average" className="fa fa-star" form="rating3"></label>


                        <input type="radio" id="rating4" name="rating" value="4" />
                        <label id="4" title="Good" className="fa fa-star" form="rating4"></label>


                        <input type="radio" id="rating5" name="rating" value="5" />
                        <label id="5" title="Awesome" className="fa fa-star" form="rating5"></label>
                    </form>
                    <div style={{ display: "flex", paddingTop: "30px" }}>
                        <CustomButton style={{ width: "100px", height: "50px" }}>
                            Enviar
                        </CustomButton>
                    </div>
                </RatingContent>
            </RatingContainer>
        </>
    );
};



export default StarRatingPage;