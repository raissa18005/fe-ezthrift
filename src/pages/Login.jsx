import React, { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import loginImage from "../assets/images/login-img.svg";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;
const LoginWrapper = styled.div`
    height: 100vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Left = styled.div`
    ${mobile({ display: "none" })}
    flex: 3;
    height: 100vh;
    display: flex;
    align-items: end;
    justify-content: center;
`;
const Image = styled.img`
    width: 80%;
`;
const Right = styled.div`
    flex: 2;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    margin-top: 60px;
    width: 75%;
    height: 85%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    border-radius: 50px;
    border: 2px solid #81b29a;
    padding: 50px 30px;
    background-color: white;
`;
const Title = styled.h1`
    font-size: 24px;
    text-align: center;
    font-weight: 500;
    margin-bottom: 45px;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.span`
    margin-left: 10px;
    font-weight: 400;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 50px;
    border: 2px solid #81b29a;
    background-color: #f4f1de;
`;
const Button = styled.button`
    min-width: 40%;
    border: none;
    padding: 10px;
    background-color: #81b29a;
    color: white;
    cursor: pointer;
    margin: 30px 0;
    border-radius: 50px;

    &:hover {
        background-color: #6f9985;
    }

    &:disabled {
        color: green;
        cursor: not-allowed;
    }
`;

const FormText = styled.p`
    text-align: center;
    margin: 5px 0;
    font-weight: 600;
`;
const Link = styled.a`
    text-align: center;
    margin: 5px 0;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
`;

const Error = styled.span`
    text-align: center;
    color: red;
`;

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    };

    return (
        <Container>
            <Navbar />
            <LoginWrapper>
                <Left>
                    <Image src={loginImage} />
                </Left>
                <Right>
                    <Wrapper>
                        <Title>LOGIN</Title>
                        <Form>
                            <Label>Username</Label>
                            <Input
                                placeholder="Username"
                                type="text"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <Label>Password</Label>
                            <Input
                                placeholder="Password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button onClick={handleClick} disabled={isFetching}>
                                LOGIN
                            </Button>
                            {error && <Error>Password/e-mail salah</Error>}
                            <FormText>BELUM MEMPUNYAI AKUN?</FormText>
                            <Link href="/register">DAFTAR</Link>
                        </Form>
                    </Wrapper>
                </Right>
            </LoginWrapper>
        </Container>
    );
};

export default Login;
