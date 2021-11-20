import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SidebarProfile from "../components/SidebarProfile";
import { updateUser } from "../redux/apiCalls";
import { regions } from "../regions";

const Container = styled.div`
    margin-top: 59px;
`;
const Wrapper = styled.div`
    display: flex;
`;
const Main = styled.div`
    flex: 4;
    padding: 20px;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.span`
    font-weight: 600;
    margin-bottom: 10px;
`;

const Input = styled.input`
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid gray;
    margin-bottom: 10px;
`;
const Button = styled.button`
    width: 30%;
    border: none;
    padding: 10px;
    background-color: #81b29a;
    color: white;
    font-weight: 600;
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

const Select = styled.select`
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid gray;
    margin-bottom: 10px;
`;
const Option = styled.option``;

const WrapperProfile = styled.div``;
const Title = styled.h1``;
const Profile = () => {
    const [provinsi, setProvinsi] = useState("");
    const [inputs, setInputs] = useState({});
    const user = useSelector((state) =>
        state.user.currentUser.others
            ? state.user.currentUser.others
            : state.user.currentUser
    );

    // console.log(user);

    const dispatch = useDispatch();
    const id = user._id;

    const handleProvinsi = (e) => {
        setProvinsi(e.target.value);
    };

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleClick = (e) => {
        e.preventDefault();
        const userinfo = {
            provinsi,
            ...inputs,
        };
        updateUser(id, userinfo, dispatch);
    };

    console.log(inputs);

    const kota = provinsi
        ? regions.filter((item) => item.provinsi === provinsi)[0].kota
        : "";

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <SidebarProfile />
                <Main>
                    <WrapperProfile>
                        <Title>Profil Saya</Title>
                        <Form>
                            <Label>Nama Lengkap</Label>
                            <Input
                                placeholder={user.namalengkap}
                                type="text"
                                name="namalengkap"
                                onChange={handleChange}
                            />
                            <Label>Username</Label>
                            <Input
                                placeholder={
                                    user.username === " "
                                        ? "Username"
                                        : user.username
                                }
                                type="text"
                                name="username"
                                onChange={handleChange}
                            />
                            <Label>Alamat Email</Label>
                            <Input
                                placeholder={
                                    user.email === " "
                                        ? "Alamat Email"
                                        : user.email
                                }
                                type="text"
                                name="email"
                                onChange={handleChange}
                            />
                            <Label>Nomor Telepon</Label>
                            <Input
                                placeholder={
                                    user.notelp === " "
                                        ? "Nomor Telepon"
                                        : user.notelp
                                }
                                type="text"
                                name="notelp"
                                onChange={handleChange}
                            />
                            {/* <Label>Password</Label>
                            <Input
                                placeholder={user.password}
                                type="password"
                                name="password"
                                onChange={handleChange}
                            /> */}
                            <Label>Alamat Detail/Jalan</Label>
                            <Input
                                placeholder={
                                    user.alamat === " " ? "Alamat" : user.alamat
                                }
                                type="text"
                                name="alamat"
                                onChange={handleChange}
                            />
                            <Label>Provinsi</Label>
                            {user.provinsi !== " " && (
                                <>
                                    <Select disabled>
                                        <Option>{user.provinsi}</Option>
                                    </Select>
                                    <Label>Ubah Provinsi</Label>
                                </>
                            )}
                            <Select
                                placeholder={
                                    user.provinsi === " "
                                        ? "Provinsi"
                                        : user.provinsi
                                }
                                name="provinsi"
                                onChange={handleProvinsi}
                            >
                                {regions.map((item) => (
                                    <Option key={item.provinsi}>
                                        {item.provinsi}
                                    </Option>
                                ))}
                            </Select>
                            <Label>Kota</Label>
                            {user.kota !== " " && (
                                <>
                                    <Select disabled>
                                        <Option>{user.kota}</Option>
                                    </Select>
                                    <Label>Ubah Kota</Label>
                                </>
                            )}
                            <Select
                                placeholder={
                                    user.kota === " " ? "Kota" : user.kota
                                }
                                name="kota"
                                onChange={handleChange}
                            >
                                {kota &&
                                    kota.map((item) => (
                                        <Option key={item}>{item}</Option>
                                    ))}
                            </Select>
                            <Button onClick={handleClick}>SIMPAN</Button>
                        </Form>
                    </WrapperProfile>
                </Main>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Profile;
