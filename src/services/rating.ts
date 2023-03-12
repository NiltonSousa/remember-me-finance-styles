import Axios from "axios";
import { Rating } from "./interfaces";

export class RatingService {
  async createRating(rating: Rating) {
    return await Axios.post(`${process.env.REACT_APP_API_URL}/rating`, rating);
  }
}
