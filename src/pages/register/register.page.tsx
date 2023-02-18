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

interface SignUpForm {
  name: string;
  value: string;
  expireDate: string;
}

const RegisterBillPage = () => {
  const {
    register,
    formState: { errors },
  } = useForm<SignUpForm>();

  //   try {
  //     setIsLoading(true);

  //     const userCredentials = await createUserWithEmailAndPassword(
  //       auth,
  //       data.email,
  //       data.password
  //     );

  //     await addDoc(collection(db, "users"), {
  //       id: userCredentials.user.uid,
  //       email: userCredentials.user.email,
  //       firstName: data.firstName,
  //       lastName: data.lastName,
  //       provider: "firebase",
  //     });
  //   } catch (error) {
  //     const _error = error as AuthError;

  //     if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
  //       return setError("email", { type: "alreadyInUse" });
  //     }
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

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
              <CustomButton>Cadastrar</CustomButton>
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
