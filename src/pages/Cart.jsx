import {
    Add,
    CancelPresentation,
    Clear,
    Remove,
    RemoveShoppingCart,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div`
    margin-top: 59px;
    margin-bottom: 20px;
`;
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width: 200px;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ProductRemoveContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;
const ProductRemove = styled.div`
    margin: 5px;
    font-size: 18px;
    ${mobile({ margin: "5px 15px" })}
`;

const RemoveIcon = styled.div`
    background-color: red;
    border-radius: 3px;
    color: white;
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: calc(75vh - 59px);
`;
const SummaryTitle = styled.h1`
    font-weight: 200;
`;
const SummaryItem = styled.div`
    margin: 25px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: ${(props) =>
        props.type === "donasi" ? "white" : "#e07a5f"};
    color: ${(props) => (props.type === "donasi" ? "black" : "white")};
    border: ${(props) => props.type === "donasi" && "2px solid teal"};
    font-weight: 600;
    margin: 5px 0;

    &:hover {
        background-color: ${(props) =>
            props.type === "donasi" ? "#f8f4f4" : "#c96549"};
    }
`;

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Title>KERANJANG BELANJA</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Keranjang Belanja(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="data:image/jpeg;base64,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" />
                                <Details>
                                    <ProductName>
                                        <b>Product: </b>JESSIE THUNDER SHOES
                                    </ProductName>
                                    <ProductId>
                                        <b>ID: </b>934280596
                                    </ProductId>
                                    <ProductSize>
                                        <b>Size: </b>S
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductRemoveContainer>
                                    <ProductRemove>Hapus</ProductRemove>
                                    <RemoveIcon>
                                        <Clear />
                                    </RemoveIcon>
                                </ProductRemoveContainer>
                                <ProductPrice>Rp. 30.000</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="data:image/jpeg;base64,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" />
                                <Details>
                                    <ProductName>
                                        <b>Product: </b>JESSIE THUNDER SHOES
                                    </ProductName>
                                    <ProductId>
                                        <b>ID: </b>934280596
                                    </ProductId>
                                    <ProductSize>
                                        <b>Size: </b>S
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductRemoveContainer>
                                    <ProductRemove>Hapus</ProductRemove>
                                    <RemoveIcon>
                                        <Clear />
                                    </RemoveIcon>
                                </ProductRemoveContainer>
                                <ProductPrice>Rp. 30.000</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>Rp. 60.000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>
                                Estimated Shipping
                            </SummaryItemText>
                            <SummaryItemPrice>Rp. 15.000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>Rp. -30.000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>Rp. 60.000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>CHECKOUT</SummaryButton>
                        <SummaryButton type="donasi">DONASI</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Cart;
