import Input from "../../../shared/inputs/input";
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  GlobalStyle,
  LimitedContainer,
  LogoImage,
} from "../styles/LoginScreen.styles";

const LoginScreen = () => {
  return (
    <div>
      <GlobalStyle />
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimitedContainer>
            <LogoImage src="./logo.png" />
            <Input title="Usuário" />
            <Input title="Senha" />
          </LimitedContainer>
        </ContainerLogin>
        <BackgroundImage src="./background.png" />
      </ContainerLoginScreen>
    </div>
  );
};

export default LoginScreen;
