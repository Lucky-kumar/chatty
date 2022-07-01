import Head from 'next/head';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { auth, provider } from '../firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";



const Login = () => {

    const signIn = () => {signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }

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

