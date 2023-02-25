import { useForm } from "react-hook-form";

// Components
import CustomButton from "../../components/custom-button/custom-button.component";
import CustomInput from "../../components/custom-input/custom-input.component";
import Header from "../../components/header/header.component";

// Styles
import {
  RegisterContainer,
  RegisterContent,
  RegisterHeadline,
  RegisterInputContainer,
} from "./register.styles";

import { BillService } from "../../services/bill";

interface RegisterForm {
  name: string;
  value: string;
  expireDate: string;
}

const RegisterBillPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const handleSubmitPress = async (data: RegisterForm) => {
    try {

      const billService = new BillService();

      const billCreated = await billService.createBill({
        clientId: "VQX2UJ",
        name: data.name,
        value: data.value,
        expireDate: new Date(data.expireDate).toISOString(),
        daysBeforeExpireDateToRemember: "5"
      }
      )

      if (billCreated) console.log("Criou")
    } catch (error) {
      console.log("Deu Ruim", error)
    }
  }

  return (
    <>
      <Header />

      <RegisterContainer>
        <RegisterContent>
          <RegisterHeadline>Cadastre sua conta</RegisterHeadline>

          <RegisterInputContainer>
            <p>Nome</p>
            <CustomInput
              hasError={!!errors?.name}
              placeholder="Digite o nome da conta que deseja cadastrar"
              {...register("name", { required: true })}
            />
          </RegisterInputContainer>

          <RegisterInputContainer>
            <p>Valor</p>
            <CustomInput
              hasError={!!errors?.value}
              placeholder="Neste campo digite o valor que deverá ser pago na fatura"
              {...register("value", { required: true })}
            />
          </RegisterInputContainer>

          <RegisterInputContainer>
            <p>Vencimento</p>
            <CustomInput
              hasError={!!errors?.expireDate}
              placeholder="dd/MM/YYYY"
              {...register("expireDate", {
                required: true,
              })}
            />
          </RegisterInputContainer>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <div style={{ width: "100px" }}>
              <CustomButton onClick={() => handleSubmit(handleSubmitPress)()}>Cadastrar</CustomButton>
            </div>

            <div style={{ width: "100px" }}>
              <CustomButton>Voltar</CustomButton>
            </div>
          </div>
        </RegisterContent>
      </RegisterContainer>
    </>
  );
};

export default RegisterBillPage;
