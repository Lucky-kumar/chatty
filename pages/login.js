import Head from 'next/head';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { auth, provider } from '../firebase';

const Login = () => {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    };

    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>

            <LoginContainer>
                <Logo
                    src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/344/external-chat-seo-4.-1-sbts2018-outline-color-sbts2018-3.png"
                />
                <Button variant="outlined" onClick={signIn} >Sign in with Google</Button>
            </LoginContainer>
        </Container>

    )
}

export default Login;

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 4px 14px -3px rgba(0,0,0,0.7);
`;

const Logo = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 50px;
`;

