import React from "react";
import styled from "styled-components";
import register from "../assets/images/register-img.svg";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

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
    width: 60%;
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
    min-width: 75%;
    height: 85%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    border-radius: 50px;
    border: 2px solid #81b29a;
    padding: 30px 30px;
    background-color: white;
`;
const Title = styled.h1`
    font-size: 24px;
    text-align: center;
    font-weight: 500;
    margin-bottom: 20px;
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
    margin: 5px 0;
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
    margin: 10px 0;
    border-radius: 50px;
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

const Register = () => {
    return (
        <Container>
            <Navbar />
            <LoginWrapper>
                <Left>
                    <Image src={register} />
                </Left>
                <Right>
                    <Wrapper>
                        <Title>REGISTER</Title>
                        <Form>
                            <Label>Nama Lengkap</Label>
                            <Input placeholder="Nama Lengkap" type="text" />
                            <Label>Nomor Telepon</Label>
                            <Input placeholder="Nomor Telepon" type="text" />
                            <Label>E-mail</Label>
                            <Input placeholder="E-mail" type="text" />
                            <Label>Password</Label>
                            <Input placeholder="Password" type="password" />
                            <Button>REGISTER</Button>
                            <FormText>SUDAH MEMPUNYAI AKUN?</FormText>
                            <Link>LOGIN</Link>
                        </Form>
                    </Wrapper>
                </Right>
            </LoginWrapper>
        </Container>
    );
};

export default Register;
