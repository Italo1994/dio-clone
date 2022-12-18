import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


// import { MdEmail } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { IFormData } from './types';

import { api } from '../../services/api'; 
// import { formData } from 'form-data'
import { Container, Title, Wrapper, Column, Row, TitleLogin, SubtitleLogin, EsqueciText, CriarText } from './styles';


const schema = yup.object( {
    email: yup.string().email('e-mail não é válido').required(),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required(),
}).required();


const Login = () => {

    const navigate = useNavigate();


    const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFormData>( {
        resolver: yupResolver(schema),
        mode: 'onChange',
    });


    const onSubmit = async (formData: IFormData) => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1) {
                navigate('/feed');
            } else {
                alert("Email ou senha inválido");
            }
        } catch {
            alert("Houve um erro, tente novamente.")
        }
    };


    // const handleClickSubmit = () => {
    //     navigate('/feed');
    // }


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
                        {/*Erro ao passar o errorMessage por parâmetro - pendente de resolver */}
                        <form /*onSubmit={onSubmit}*/>
                            <Input name="email" control={control} placeholder="E-mail" leftIcon="" />
                            <Input name="password" control={control} placeholder="Senha" type="password" leftIcon="" />
                            <Button title="Entrar" variant="secondary" type="submit" /> {/* onClicl={onSubmit} */}
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