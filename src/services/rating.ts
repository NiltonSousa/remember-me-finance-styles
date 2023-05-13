import Axios from "axios";
import { IRating } from "./interfaces";

export class RatingService {
  async createRating(rating: IRating) {
    return await Axios.post(`${process.env.REACT_APP_API_URL}/rating`, rating);
  }
}
