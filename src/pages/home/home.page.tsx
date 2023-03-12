// Components
import Header from "../../components/header/header.component";

// Styles
import {
  RegisterContainer,
  RegisterContent,
  RegisterHeadline,
  Table,
  Td,
  Th,
} from "./home.styles";

// assets

import EditIcon from "../../assets/edit.icon.png";
import DeleteIcon from "../../assets/delete.icon.png";
import { BillService } from "../../services/bill";
import { useEffect, useState } from "react";
import { LocalStorageService } from "../../store/local-storage";
import { Bill } from "../../services/interfaces";
import Loading from "../../components/load-spinner/load-spinner.component";
import { sleep } from "../../utils/utils";

const HomePage = () => {
  const localStorageService = new LocalStorageService();
  const billService = new BillService();

  const [bills, setBills] = useState<Bill[]>([{ clientId: "", name: "", value: "", expireDate: "" }]);
  const [isLoading, setIsLoading] = useState(true);

  const listBillsByClientId = async (billService: BillService) => {
    const clientId = localStorageService.getItem("clientId");

    if (!clientId) {
      throw new Error("ClientId must have informed.")
    }

    const billsResponse = await billService.listBill(clientId);

    setBills(billsResponse);

    await sleep(2_000);

    setIsLoading(false);
  }

  const handleDeleteBill = async (billId: string | undefined) => {
    if (!billId) {
      throw new Error("BillId must have informed.")
    }

    const billResponse = await billService.deleteBill(billId);

    if (billResponse.status === 200) console.log("Deletou")
  }

  useEffect(() => {
    if (isLoading) {
      listBillsByClientId(billService);
    }
  });

  return (
    <>
      <Header />

      <RegisterContainer>
        <RegisterContent>
          <RegisterHeadline>
            {isLoading ? "Carregando lista de contas" : "Bem vindo, aqui esta sua lista de contas"}
          </RegisterHeadline>

          {isLoading ? <Loading /> :
            <Table>
              <tr>
                <Th>Nome</Th>
                <Th>Valor</Th>
                <Th>Dia de Vencimento</Th>
                <Th></Th>
              </tr>
              {bills.map((val, key) => {
                return (
                  <tr key={key}>
                    <Td>{val.name}</Td>
                    <Td>{val.value}</Td>
                    <Td>{val.expireDate}</Td>
                    <Td>
                      <img
                        src={EditIcon}
                        alt="editar"
                        style={{
                          height: "20px",
                          width: "20px",
                        }}
                      />
                      <img
                        src={DeleteIcon}
                        alt="deletar"
                        style={{
                          height: "20px",
                          width: "20px",
                          marginLeft: "5px",
                        }}
                        onClick={() => handleDeleteBill(val.id)}
                      />
                    </Td>
                  </tr>
                );
              })}
            </Table>
          }
        </RegisterContent>
      </RegisterContainer>
    </>
  );
};

export default HomePage;
