import React from 'react';

// import { Link } from 'react-router-dom';

// import bannerImage from '../../assets/banner.png';
// import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Container } from './styles';

const Feed = () => {
    return (
        <>
            <Header />
            <Container>
                <Card />
                <UserInfo percentual={35} nome="Italo Hortiz" image="https://avatars.githubusercontent.com/u/26884429?s=400&u=a8870741f28af625c9dfa403960874ba26f83d15&v=4" />
            </Container>
        </>
    )
}

export { Feed }