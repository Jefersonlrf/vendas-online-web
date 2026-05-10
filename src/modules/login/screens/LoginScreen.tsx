import Button from "../../../shared/buttons/button";
import Input from "../../../shared/inputs/input";
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  GlobalStyle,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from "../styles/LoginScreen.styles";

const LoginScreen = () => {
  return (
    <div>
      <GlobalStyle />
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimitedContainer>
            <LogoImage src="./logo.png" />
            <TitleLogin level={2}>LOGIN</TitleLogin>
            <Input title="USUÁRIO" />
            <Input title="SENHA" />
            <Button type="primary" margin="64px 0px 16px 0px">ENTRAR</Button>
          </LimitedContainer>
        </ContainerLogin>
        <BackgroundImage src="./background.png" />
      </ContainerLoginScreen>
    </div>
  );
};

export default LoginScreen;
