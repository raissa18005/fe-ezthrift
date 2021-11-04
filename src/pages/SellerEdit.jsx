import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SidebarProfile from "../components/SidebarProfile";
import walogo from "../assets/images/logo-whatsapp.png";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

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

const Title = styled.h3`
    font-size: 24px;
    font-weight: 700;
    padding: 10px 0;
`;
const WrapperSeller = styled.div`
    width: 50%;
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
    width: 200px;
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

const SellerEdit = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <SidebarProfile />
                <Main>
                    <WrapperSeller>
                        <Title>Edit Produk</Title>
                        <Form>
                            <Label>Nama Produk</Label>
                            <Input placeholder="Nama Produk" type="text" />
                            <Label>Deskripsi Produk</Label>
                            <Input placeholder="Deskripsi Produk" type="text" />
                            <Label>Harga Produk</Label>
                            <Input placeholder="Harga Produk" type="number" />

                            <Button>JUAL</Button>
                        </Form>
                    </WrapperSeller>
                </Main>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default SellerEdit;
