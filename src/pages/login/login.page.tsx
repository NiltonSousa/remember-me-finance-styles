import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
// Components
import CustomButton from '../../components/custom-button/custom-button.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import swal from 'sweetalert';

// Styles
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle
} from './login.styles'
import Logo from "../../assets/remember-me-icon.png"
import { ClientService } from '../../services/client';
import { useNavigate } from 'react-router-dom';
import { Client } from '../../services/interfaces';
import { LocalStorageService } from '../../store/local-storage';
import { refreshPage } from '../../utils/utils';
import { AuthService } from '../../services/auth';

interface LoginForm {
  email: string
  password: string
}

interface GoogleResponse {
  sub: string;
  email: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginForm>();

  const navigate = useNavigate();


  const handleHome = () => {
    navigate("/home");
  }

  const listClientIfExists = async (clientService: ClientService, clientId: string | undefined): Promise<Array<Client> | []> => {
    if (!clientId) {
      throw new Error("ClientId must be informed.")
    }

    return await clientService.listClient(clientId);
  }

  const insertClient = async (clientService: ClientService, client: Client): Promise<Client> => {
    return await clientService.createClient(client);
  }

  const handleLoginWithGoogle = async (credentialResponse: any) => {
    const clientService = new ClientService();
    const localStorageService = new LocalStorageService();

    var googleResponse = jwt_decode(credentialResponse.credential) as GoogleResponse;

    const clientModel: Client = {
      id: googleResponse.sub,
      name: googleResponse.email.substring(0, googleResponse.email.indexOf("@")),
      email: googleResponse.email,
      billsCount: "0",
      birthdate: new Date().toLocaleDateString(),
      phoneNumber: "0",
    }

    const existingClient = await listClientIfExists(clientService, clientModel.id);

    if (!existingClient || existingClient.length === 0) {
      const clientCreated = await insertClient(clientService, clientModel);

      if (clientCreated) handleHome();
    } else {
      handleHome();
    }

    localStorageService.setItem("clientId", clientModel.id);
    localStorageService.setItem("isAdmin", String(existingClient[0].isAdmin));
  }

  const handleLogin = async (data: LoginForm) => {
    try {
      const clientService = new ClientService();
      const authService = new AuthService();
      const localStorageService = new LocalStorageService();

      const client = await clientService.listClient(undefined, data.email);

      if (client.length === 0) {
        swal("Error", "Email não existe. Por favor tente novamente", "error").then((ok) => {
          if (ok) {
            refreshPage();
          }
        });
      }

      await authService.verifyPassword(client[0].password, data.password);

      localStorageService.setItem("clientId", client[0].id);
      localStorageService.setItem("isAdmin", client[0].isAdmin);

      handleHome();
    } catch (error) {
      swal("Error", "Senha inválida. Por favor tente novamente", "error").then((ok) => {
        if (ok) {
          refreshPage();
        }
      });
    }
  }

  return (
    <>
      <div style={{
        display: "flex",
        backgroundColor: "#2f303a",
        minHeight: "100vh"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          minWidth: "50%",
          flexDirection: "row",
          justifyContent: "center"
        }}>
          <img
            src={Logo}
            alt="Remember Me Finance"
            style={{
              height: "200px",
              width: "400px",
              marginLeft: "5px",
            }}
          />
        </div>
        <div style={{
          display: "flex",
          minWidth: "50%",
          justifyContent: "center",
        }}>

          <LoginContainer>
            <LoginContent>
              <LoginHeadline>Entre com uma conta Admin</LoginHeadline>
              <LoginInputContainer>
                <p style={{ color: 'white' }}>E-mail</p>
                <CustomInput
                  hasError={!!errors?.email}
                  placeholder="Digite seu e-mail"
                  {...register('email', {
                    required: true,
                  })}
                />
              </LoginInputContainer>

              <LoginInputContainer>
                <p style={{ color: 'white' }}>Senha</p>
                <CustomInput
                  hasError={!!errors?.password}
                  placeholder="Digite sua senha"
                  type="password"
                  {...register('password', { required: true })}
                />
              </LoginInputContainer>

              <CustomButton
                startIcon={<FiLogIn size={18} />}
                onClick={() => handleSubmit(handleLogin)()}
              >
                Entrar
              </CustomButton>

              <LoginSubtitle>ou entre com um usuário do Google</LoginSubtitle>

              <GoogleOAuthProvider clientId="65080618448-437j432fevik2qa604dab4j3vmh2no8l.apps.googleusercontent.com">
                <GoogleLogin
                  text="signin_with"
                  onSuccess={handleLoginWithGoogle}
                />
              </GoogleOAuthProvider>

            </LoginContent>
          </LoginContainer>
        </div>
      </div>
    </>
  )
}

export default LoginPage
