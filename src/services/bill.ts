import Axios from "axios"
import { Bill } from "./interfaces";

export class BillService {
    async createBill(bill: Bill) {
        return await Axios.post(`http://localhost:8000/bill`, bill);
    }
}
