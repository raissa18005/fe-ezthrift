import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SidebarProfile from "../components/SidebarProfile";
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

    const handleFilters = (e) => {
        setProvinsi(e.target.value);
    };

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
                            <Input placeholder="Nama Lengkap" type="text" />
                            <Label>Username</Label>
                            <Input placeholder="Username" type="text" />
                            <Label>Alamat Email</Label>
                            <Input placeholder="Alamat Email" type="text" />
                            <Label>Nomor Telepon</Label>
                            <Input placeholder="Nomor Telepon" type="text" />
                            <Label>Password</Label>
                            <Input placeholder="Password" type="password" />
                            <Label>Alamat Detail/Jalan</Label>
                            <Input placeholder="Alamat" type="text" />
                            <Label>Provinsi</Label>
                            <Select name="provinsi" onChange={handleFilters}>
                                {regions.map((item) => (
                                    <Option key={item.provinsi}>
                                        {item.provinsi}
                                    </Option>
                                ))}
                            </Select>
                            <Label>Kota</Label>
                            <Select name="kota">
                                {kota &&
                                    kota.map((item) => (
                                        <Option key={item}>{item}</Option>
                                    ))}
                            </Select>
                            <Button>SIMPAN</Button>
                        </Form>
                    </WrapperProfile>
                </Main>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Profile;