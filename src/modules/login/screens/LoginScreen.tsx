import { BackgroundImage, ContainerLogin, ContainerLoginScreen, GlobalStyle, LimitedContainer, LogoImage } from "../styles/LoginScreen.styles";

const LoginScreen = () => {
    return (

        <div>
            <GlobalStyle />
            <ContainerLoginScreen>
                <ContainerLogin>
                    <LimitedContainer>
                        <LogoImage src="./logo.png" />
                    </LimitedContainer>
                </ContainerLogin>
                <BackgroundImage src="./background.png" />
            </ContainerLoginScreen>
        </div>
    );
};

export default LoginScreen;