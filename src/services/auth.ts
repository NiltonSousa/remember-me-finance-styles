import axios from "axios";

export class AuthService {
  async verifyPassword(encryptedPassword: string, passwordToCompare: string) {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/auth?encryptedPassword=${encryptedPassword}&passwordToCompare=${passwordToCompare}`
    );

    return response.data;
  }
}
