import { useForm } from "react-hook-form";

// Components
import CustomButton from "../../components/custom-button/custom-button.component";
import CustomInput from "../../components/custom-input/custom-input.component";
import Header from "../../components/header/header.component";
import swal from 'sweetalert';


// Styles
import {
  RegisterContainer,
  RegisterContent,
  RegisterHeadline,
  RegisterInputContainer,
} from "./register.styles";

import { BillService } from "../../services/bill";
import { LocalStorageService } from "../../store/local-storage";
import { useLocation, useNavigate } from "react-router-dom";
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

  const localStorageService = new LocalStorageService();

  const navigate = useNavigate();
  const location = useLocation();

  const insertBill = async (data: RegisterForm) => {
    try {
      const clientId = localStorageService.getItem("clientId");

      if (!clientId) {
        throw new Error("ClientId must have informed.")
      }

      const billService = new BillService();

      const billCreated = await billService.createBill({
        clientId,
        name: data.name,
        value: data.value,
        expireDate: data.expireDate,
        daysBeforeExpireDateToRemember: "5"
      });

      if (billCreated) {
        swal("Sucesso", "Conta criada com sucesso!", "success");
        navigate("/remember-me-finance-styles/home");

      }
    } catch (error) {
      swal("Erro", "Erro ao tentar criar conta, tente novamente mais tarde.", "error");
    }
  }

  const updateBill = async (data: RegisterForm) => {
    try {
      const clientId = localStorageService.getItem("clientId");

      if (!clientId) {
        throw new Error("ClientId must have informed.")
      }

      const billService = new BillService();

      const billUpdated = await billService.updateBill({
        id: location.state.id,
        clientId,
        name: data.name,
        value: data.value,
        expireDate: data.expireDate,
        daysBeforeExpireDateToRemember: "5"
      });

      if (billUpdated) {
        swal("Sucesso", "Conta atualizada com sucesso!", "success");
        navigate("/remember-me-finance-styles/home");
      }
    } catch (error) {
      swal("Erro", "Erro ao tentar atualizar a conta, tente novamente mais tarde.", "error");
    }
  }
  const handleSubmitPress = async (data: RegisterForm) => {
    if (!location.state) {
      await insertBill(data);
    } else {
      await updateBill(data);
    }
  }

  return (
    <>
      <Header />

      <RegisterContainer>
        <RegisterContent>
          <RegisterHeadline> {!location.state ? "Cadastre sua conta" : "Atualize sua conta"}</RegisterHeadline>

          <RegisterInputContainer>
            <p>Nome</p>
            <CustomInput
              hasError={!!errors?.name}
              placeholder="Digite o nome da conta que deseja cadastrar"
              {...register("name", { required: true, value: location.state ? location.state.name : "" })}
            />
          </RegisterInputContainer>

          <RegisterInputContainer>
            <p>Valor</p>
            <CustomInput
              hasError={!!errors?.value}
              placeholder="Neste campo digite o valor que deverá ser pago na fatura"
              {...register("value", { required: true, value: location.state ? location.state.value : "" })}
            />
          </RegisterInputContainer>

          <RegisterInputContainer>
            <p>Dia de vencimento</p>
            <CustomInput
              hasError={!!errors?.expireDate}
              placeholder="Digite o dia em que sua conta irá vencer"
              {...register("expireDate", {
                required: true,
                value: location.state ? location.state.expireDate : ""
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
              <CustomButton onClick={() => handleSubmit(handleSubmitPress)()}>{!location.state ? "Cadastrar" : "Atualizar"}</CustomButton>
            </div>
          </div>
        </RegisterContent>
      </RegisterContainer>
    </>
  );
};

export default RegisterBillPage;
