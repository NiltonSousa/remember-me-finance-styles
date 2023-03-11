import axios from "axios";
import { Client } from "./interfaces";

export class ClientService {
  async createClient(client: Client): Promise<Client> {
    return await axios.post("http://localhost:8000/client", client);
  }

  async listClient(cliendId: string): Promise<Array<Client> | []> {
    return await axios.get(
      `${process.env.REACT_APP_API_URL}/client?clientId=${cliendId}`
    );
  }
}
