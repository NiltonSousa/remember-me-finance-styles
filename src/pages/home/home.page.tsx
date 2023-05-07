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
import { refreshPage, sleep } from "../../utils/utils";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const localStorageService = new LocalStorageService();
  const billService = new BillService();

  const [bills, setBills] = useState<Bill[]>([{ clientId: "", name: "", value: "", expireDate: "" }]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCalling, setIsCalling] = useState(true);

  const navigate = useNavigate();

  const listBillsByClientId = async (billService: BillService) => {
    const clientId = localStorageService.getItem("clientId");

    if (!clientId) {
      throw new Error("ClientId must have informed.")
    }

    const billsResponse = await billService.listBill(clientId);

    setBills(billsResponse);

    setIsLoading(false);


    if (isCalling) {
      await sleep(2_000);
      setIsCalling(false);
    }
  }


  const handleDeleteBill = async (billId: string | undefined) => {
    if (!billId) {
      throw new Error("BillId must have informed.")
    }
    const billService = new BillService();

    swal({
      title: "Você tem certeza disso?",
      text: "Uma vez deletado a conta não pode ser recuperada!",
      icon: "warning",
      buttons: ["Cancelar", "Ok"],
      dangerMode: true,
    })
      .then(async (willDelete) => {
        if (willDelete) {
          const billResponse = await billService.deleteBill(billId);

          if (billResponse.status === 200) {
            swal("Conta deletada com sucesso!", {
              icon: "success",
            }).then((ok) => {
              if (ok) {
                refreshPage();
              }
            });
          } else {
            swal("Erro ao tentar excluir conta", { icon: "error" });
          }
        } else {
          swal("Exclusão cancelada");
        }

      });
  };

  const handleUpdateBill = (bill: Bill) => {
    const { id, name, value, clientId, expireDate } = bill;

    navigate("/remember-me-finance-styles/register", { state: { id, name, value, clientId, expireDate } })
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
            {isCalling && "Carregando lista de contas"}
            {(!isCalling && bills.length === 0) && "Nenhuma conta cadastrada"}
            {(!isCalling && bills.length > 0) && "Bem vindo, aqui esta sua lista de contas"}
          </RegisterHeadline>

          {isCalling && <Loading />}
          {(!isCalling && bills.length > 0) &&
            <Table>
              <tr>
                <Th>Nome</Th>
                <Th>Valor</Th>
                <Th>Dia de Vencimento</Th>
                <Th>Ações</Th>
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
                        onClick={() => handleUpdateBill(bills[key])}
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
