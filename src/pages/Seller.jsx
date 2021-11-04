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

const Card = styled.div`
    background-color: #f4f1de;
    border-radius: 20px;
    padding: 15px 20px;
    width: 70%;
    margin: 10px 0;
`;

const Title = styled.h3`
    font-size: 24px;
    font-weight: 700;
`;
const ProductsTitle = styled.h3`
    font-size: 24px;
    font-weight: 700;
    padding: 20px 0;
`;
const Products = styled.div`
    width: 70%;
`;
const Product = styled.div`
    display: flex;
    height: 200px;
`;
const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ProductImage = styled.img`
    width: 70%;
    height: 100%;
    object-fit: cover;
    ${mobile({
        width: "100%",
        height: "100%",
    })}
`;
const ProductPrice = styled.div``;
const ProductSize = styled.div``;
const Status = styled.div``;
const InfoContainer = styled.div`
    flex: 2;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const Penghasilan = styled.div`
    font-size: 34px;
`;
const WhatsappLogo = styled.img`
    width: 40px;
`;
const WhatsappLink = styled.a`
    text-decoration: none;
    color: black;
    font-size: 24px;
`;
const WrapperSeller = styled.div``;
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`;
const EditButton = styled.button`
    background-color: #f4f1de;
    border: 1px solid black;
    font-weight: bold;
    padding: 10px;
    &:hover {
        background-color: #e4e2d7;
    }
`;

const Hr = styled.hr`
    background-color: black;
    border: none;
    height: 1px;
    margin: 10px;
`;

const Seller = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <SidebarProfile />
                <Main>
                    <WrapperSeller>
                        {/* <Title>Dashboard Jual</Title> */}
                        <Card>
                            <Title>Penghasilan Anda</Title>
                            <Penghasilan>Rp.100.000</Penghasilan>
                        </Card>
                        <Card>
                            <WhatsappLink>
                                <WhatsappLogo src={walogo} />
                                WhatsApp
                            </WhatsappLink>
                        </Card>
                        <ProductsTitle>Produk Saya</ProductsTitle>
                        <Products>
                            <Product>
                                <ImgContainer>
                                    <ProductImage src="https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png" />
                                </ImgContainer>
                                <InfoContainer>
                                    <Info>
                                        <Title>T-Shirt Uniqlo</Title>
                                        <ProductPrice>
                                            Harga : Rp50.000
                                        </ProductPrice>
                                        <ProductSize>Size : M</ProductSize>
                                        <Status>Status : Pending</Status>
                                    </Info>
                                    <ButtonContainer>
                                        <Link to={`/seller/12389`}>
                                            <EditButton>Edit Harga</EditButton>
                                        </Link>
                                    </ButtonContainer>
                                </InfoContainer>
                            </Product>
                            <Hr />
                        </Products>
                    </WrapperSeller>
                </Main>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Seller;
