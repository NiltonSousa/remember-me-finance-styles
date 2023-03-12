import axios from "axios";
import { Client } from "./interfaces";

export class ClientService {
  async createClient(client: Client) {
    const response = await axios.post("http://localhost:8000/client", client);

    return response.data;
  }

  async listClient(cliendId: string) {
    const client = await axios.get(
      `${process.env.REACT_APP_API_URL}/client?clientId=${cliendId}`
    );

    return client.data;
  }
}
