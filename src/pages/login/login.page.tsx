import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
// Components
import CustomButton from '../../components/custom-button/custom-button.component'
import CustomInput from '../../components/custom-input/custom-input.component'

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


              <CustomButton
                startIcon={<BsGoogle size={18} />}
              // onClick={handleSignInWithGooglePress}>
              >
                Entrar com o Google
              </CustomButton>

            </LoginContent>
          </LoginContainer>
        </div>
      </div>
    </>
  )
}

export default LoginPage
