// import { MdEmail } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { Container, Title, Wrapper, Column, Row, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Form } from './styles';

const Login = () => {
    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar main rápido nas empresas mais desejadas.
                    </Title>  
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change</SubtitleLogin>

                        <form>
                            <Input placeholder="E-mail" leftIcon="" />
                            <Input placeholder="Senha" type="password" leftIcon="" />
                            <Button title="Entrar" variant="secondary" />
                        </form>

                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Login }