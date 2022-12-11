import React from 'react';

import {Button} from '../Button';
import logo from '../../assets/logo-dio.png';

import {
	BuscarInputContainer,
	Column,
	Container,
	Input,
	Menu,
	MenuRight,
	Row,
	UserPicture,
	Wrapper
} from './styles'

export const Header = () => {
	return (
		<Wrapper>
			<Container>
				<Row>
					<img src={logo} alt="Logo da DIO" />
					<BuscarInputContainer>
						<Input placeholder="Buscar..." />
					</BuscarInputContainer>
					<Menu href="#">Live Code</Menu>
					<Menu href="#">Global</Menu>
				</Row>
				<Row>
					<MenuRight href="#">Home</MenuRight>
					<Button title="Entrar" />
					<Button title="Cadastrar" />
				</Row>
			</Container>
		</Wrapper>
	)
}