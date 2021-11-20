import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import registerImage from "../assets/images/register-img.svg";
import Navbar from "../components/Navbar";
import { register } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useHistory } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;
const LoginWrapper = styled.div`
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
    margin: 20px 0;
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

    &:hover {
        background-color: #6f9985;
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
    margin-left: 10px;
    font-size: 14px;
    color: red;
`;

const Register = () => {
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const { isFetching, error } = useSelector((state) => state.user);

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     register(dispatch, { username, email, password }, history);
    // };

    const validate = Yup.object({
        username: Yup.string()
            .max(15, "Username maksimal 15 karakter ")
            .required("Username harus diisi"),
        email: Yup.string()
            .email("Email tidak valid")
            .required("Email harus diisi"),
        password: Yup.string()
            // .min(6, "Password harus lebih dari 6 karakter")
            .matches(
                /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
                "Password Minimal 8 karakter, Satu huruf besar, Satu huruf kecil, Satu angka dan satu simbol"
            )
            .required("Password harus diisi"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Password harus sama")
            .required("Konfirmasi password harus diisi"),
    });

    const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
        useFormik({
            initialValues: {
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
            },
            validationSchema: validate,
            onSubmit: (values) => {
                console.log(values);
                register(dispatch, values, history);
            },
        });

    return (
        <Container>
            <Navbar />
            <LoginWrapper>
                <Left>
                    <Image src={registerImage} />
                </Left>
                <Right>
                    <Wrapper>
                        <Title>REGISTER</Title>
                        <Form onSubmit={handleSubmit}>
                            {/* <Label>Nama Lengkap</Label>
                            <Input placeholder="Nama Lengkap" type="text" onChange={(e) => setName(e.target.value)}/> */}
                            <Label>Username</Label>
                            <Input
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="username"
                                type="text"
                                name="username"
                                className={`${
                                    touched.username &&
                                    errors.username &&
                                    `invalid`
                                }`}
                            />
                            {touched.username && errors.username ? (
                                <Error className="error">
                                    {errors.username}
                                </Error>
                            ) : null}
                            <Label>Email</Label>
                            <Input
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="email"
                                type="email"
                                name="email"
                                className={`${
                                    touched.email && errors.email && `invalid`
                                }`}
                            />
                            {touched.email && errors.email ? (
                                <Error className="error">{errors.email}</Error>
                            ) : null}
                            <Label>Password</Label>
                            <Input
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="password"
                                id="password"
                                type="password"
                                className={`${
                                    touched.password &&
                                    errors.password &&
                                    `invalid`
                                }`}
                            />
                            {touched.password && errors.password ? (
                                <Error className="error">
                                    {errors.password}
                                </Error>
                            ) : null}
                            <Label>Konfirmasi Password</Label>
                            <Input
                                value={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="confirmPassword"
                                id="confirmPassword"
                                type="password"
                                className={`${
                                    touched.confirmPassword &&
                                    errors.confirmPassword &&
                                    `invalid`
                                }`}
                            />
                            {touched.confirmPassword &&
                            errors.confirmPassword ? (
                                <Error>{errors.confirmPassword}</Error>
                            ) : null}
                            <Button type="submit" disabled={isFetching}>
                                REGISTER
                            </Button>
                            {error && (
                                <Error>Username/e-mail sudah terdaftar</Error>
                            )}
                            <FormText>SUDAH MEMPUNYAI AKUN?</FormText>
                            <Link href="/register">LOGIN</Link>
                        </Form>
                    </Wrapper>
                </Right>
            </LoginWrapper>
        </Container>
    );
};

export default Register;
