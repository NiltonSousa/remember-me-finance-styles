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

const HomePage = () => {
  const data = [
    { name: "Luz", value: "80", expireDate: "31" },
    { name: "Banco", value: "1000", expireDate: "02" },
    { name: "Internet", value: "120", expireDate: "25" },
  ];

  return (
    <>
      <Header />

      <RegisterContainer>
        <RegisterContent>
          <RegisterHeadline>
            Bem vindo, aqui esta sua lista de contas
          </RegisterHeadline>

          <Table>
            <tr>
              <Th>Nome</Th>
              <Th>Valor</Th>
              <Th>Dia de Vencimento</Th>
              <Th></Th>
            </tr>
            {data.map((val, key) => {
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
                      alt="editar"
                      style={{
                        height: "20px",
                        width: "20px",
                        marginLeft: "5px",
                      }}
                    />
                  </Td>
                </tr>
              );
            })}
          </Table>
        </RegisterContent>
      </RegisterContainer>
    </>
  );
};

export default HomePage;
