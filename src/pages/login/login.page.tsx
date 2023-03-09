import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
// Components
import CustomButton from '../../components/custom-button/custom-button.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

// Styles
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle
} from './login.styles'
import Logo from "../../assets/remember-me-icon.png"

interface LoginForm {
  email: string
  password: string
}

const LoginPage = () => {
  const {
    register,
    formState: { errors }
  } = useForm<LoginForm>()

  const handleLogin = (credentialResponse: any) => {
    var obj = jwt_decode(credentialResponse.credential);
    var data = JSON.stringify(obj);
    console.log(data);

    //   const data = {your data to send to server};

    //   const config = {
    //     method: 'POST',
    //     url: 'your backend server or endpoint',
    //     headers: {},
    //     data: data
    //   }

    // await axios(config)
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
              <LoginHeadline>Entre com a sua conta</LoginHeadline>
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
              // onClick={() => handleSubmit(handleSubmitPress)()}>
              >
                Entrar
              </CustomButton>

              <LoginSubtitle>ou entre com o sua conta Google</LoginSubtitle>

              <GoogleOAuthProvider clientId="65080618448-ej9l48kpfbqmifb6e6kloajm5dnl2qfa.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={handleLogin}
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
