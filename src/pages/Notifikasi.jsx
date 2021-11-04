import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaShippingFast } from "react-icons/fa";
import SidebarNotifikasi from "../components/SidebarNotifikasi";

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

const StatusContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const Status = styled.div`
    margin-left: 5px;
`;
const ProductsHistory = styled.div`
    background-color: #f4f1de;
    border-radius: 20px;
    padding: 15px 20px;
    width: 70%;
    margin: 10px 0;
`;
const ProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 3px 0;
`;
const ProductTitle = styled.div``;
const ProductPrice = styled.div``;
const SubtotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    margin: 3px 0;
`;
const SubtotalTitle = styled.div``;
const Subtotal = styled.div``;

const WrapperProfile = styled.div``;
const Title = styled.h1``;
const Notifikasi = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <SidebarNotifikasi />
                <Main>
                    <WrapperProfile>
                        <ProductsHistory>
                            <StatusContainer>
                                <FaShippingFast color="#E07A5F" />
                                <Status>Paket Telah Dikirim</Status>
                            </StatusContainer>
                            <ProductContainer>
                                <ProductTitle>
                                    T-shirt Katun Uniqlo Crew Neck Pria
                                </ProductTitle>
                                <ProductPrice>Rp. 50.000</ProductPrice>
                            </ProductContainer>
                            <ProductContainer>
                                <ProductTitle>Kemeja Uniqlo</ProductTitle>
                                <ProductPrice>Rp. 90.000</ProductPrice>
                            </ProductContainer>
                            <SubtotalContainer>
                                <SubtotalTitle></SubtotalTitle>
                                <SubtotalTitle>Subtotal</SubtotalTitle>
                                <Subtotal>Rp. 140.000</Subtotal>
                            </SubtotalContainer>
                        </ProductsHistory>
                        <ProductsHistory>
                            <StatusContainer>
                                <FaShippingFast color="#E07A5F" />
                                <Status>Paket Telah Dikirim</Status>
                            </StatusContainer>
                            <ProductContainer>
                                <ProductTitle>
                                    T-shirt Katun Uniqlo Crew Neck Pria
                                </ProductTitle>
                                <ProductPrice>Rp. 50.000</ProductPrice>
                            </ProductContainer>
                            <ProductContainer>
                                <ProductTitle>Kemeja Uniqlo</ProductTitle>
                                <ProductPrice>Rp. 90.000</ProductPrice>
                            </ProductContainer>
                            <SubtotalContainer>
                                <SubtotalTitle></SubtotalTitle>
                                <SubtotalTitle>Subtotal</SubtotalTitle>
                                <Subtotal>Rp. 140.000</Subtotal>
                            </SubtotalContainer>
                        </ProductsHistory>
                    </WrapperProfile>
                </Main>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Notifikasi;
