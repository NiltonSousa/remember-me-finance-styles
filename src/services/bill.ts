import Axios from "axios";
import { Bill } from "./interfaces";

export class BillService {
  async createBill(bill: Bill) {
    return await Axios.post(`${process.env.REACT_APP_API_URL}/bill`, bill);
  }

  async listBill(clientId: string): Promise<Array<Bill>> {
    const bills = await Axios.get(
      `${process.env.REACT_APP_API_URL}/bill?clientId=${clientId.toString()}`
    );

    return bills.data;
  }
}
