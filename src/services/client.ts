import axios from "axios";
import { Client } from "./interfaces";

export class ClientService {
  async createClient(client: Client) {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/client`,
      client
    );

    return response.data;
  }

  async listClient(cliendId?: string, email?: string) {
    console.log(`${process.env.REACT_APP_API_URL}`);
    if (cliendId) {
      const client = await axios.get(
        `${process.env.REACT_APP_API_URL}/client?clientId=${cliendId}`
      );

      return client.data;
    }

    if (email) {
      const client = await axios.get(
        `${process.env.REACT_APP_API_URL}/client?email=${email}`
      );
      return client.data;
    }

    const client = await axios.get(`${process.env.REACT_APP_API_URL}/client`);
    return client.data;
  }
}
