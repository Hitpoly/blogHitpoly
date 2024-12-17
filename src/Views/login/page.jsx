import React from 'react';
import { Container, ContentContainer, Item, PrincipalContainer, Wrapper } from '../../layout/layout';
import LoginForm from './components/Form'; // Asegúrate de que la ruta sea correcta
import styled from '@emotion/styled';
import { Card } from '@mui/material';

const ResponsiveImage = styled.img`
    object-fit: fill;
    width: 100%;
    height: 100%;
    display: none;

    @media (min-width: 600px) {
        display: block;
    }
`;

const Login = () => {
    return (
        <Card bg={'rgb(239,239,239)'}>
            <PrincipalContainer>
                <ContentContainer>
                    <Container alignItems="center" justifyContent="space-around" gap={2}>
                        <Item xs={12} sm={5}>
                            <LoginForm />
                        </Item>
                        <Item xs={12} sm={6}>
                            <ResponsiveImage 
                                src="/images/logo-hitpoly.png"
                                alt='Login Illustration' 
                            />
                        </Item>
                    </Container>
                </ContentContainer>
            </PrincipalContainer>
        </Card>
    );
}

export default Login;
