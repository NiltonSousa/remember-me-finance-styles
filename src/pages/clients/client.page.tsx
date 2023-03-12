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
} from "./client.styles";

import { useEffect, useState } from "react";
import Loading from "../../components/load-spinner/load-spinner.component";
import { ClientService } from "../../services/client";
import { sleep } from "../../utils/utils";
import { Client } from "../../services/interfaces";

const ClientListPage = () => {
  const [clients, setClients] = useState<Client[]>([{ id: "", billsCount: "", birthdate: "", email: "", name: "", phoneNumber: "", cpf: "", isAdmin: false, password: "" }]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCalling, setIsCalling] = useState(true);

  const clientService = new ClientService();

  const listClients = async (clientService: ClientService) => {
    const clientsResponse = await clientService.listClient();

    setClients(clientsResponse);

    setIsLoading(false);


    if (isCalling) {
      await sleep(2_000);
      setIsCalling(false);
    }
  }

  useEffect(() => {
    if (isLoading) {
      listClients(clientService);
    }
  });

  return (
    <>
      <Header />

      <RegisterContainer>
        <RegisterContent>
          <RegisterHeadline>
            {isCalling && "Carregando lista de usuários"}
            {(!isCalling && clients.length === 0) && "Nenhum usuário cadastrado"}
            {(!isCalling && clients.length > 0) && "Aqui está sua lista de usuários"}
          </RegisterHeadline>

          {isCalling && <Loading />}
          {(!isCalling && clients.length > 0) &&
            <Table>
              <tr>
                <Th>Nome</Th>
                <Th>Email</Th>
              </tr>
              {clients.map((val, key) => {
                return (
                  <tr key={key}>
                    <Td>{val.name}</Td>
                    <Td>{val.email}</Td>
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

export default ClientListPage;
