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
import ovo from "../assets/images/logo-ovo-1.png";
import ovoname from "../assets/images/logo-ovo-2.png";
import gopay from "../assets/images/logo-gopay-1.png";
import gopayname from "../assets/images/logo-gopay-2.png";
import dana from "../assets/images/logo-dana-1.png";
import dananame from "../assets/images/logo-dana-2.png";

const Container = styled.div`
    margin-top: 59px;
    margin-bottom: 20px;
`;
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
    background-color: #F4F1DE;
`;
const Title = styled.h1`
    font-weight: 300;
    font-size: px;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
    flex: 1;
`;
const Right = styled.div`
    flex: 1;
`;

const Form = styled.form`
    margin: 20px;
    display: flex;
    flex-direction: column;
    width: 70%;
`;
const Label = styled.span`
    margin-left: 10px;
    font-weight: bold;
    font-size: 18px;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 8px 0;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid lightgray;
    background-color: white;
`;
const InputWrap = styled.div`
    padding: 20px 0;
    display: flex;
    align-items: center;
`;

const LabelWrap = styled.div`
    flex: 1;
`;

const Select = styled.select`
    flex: 3;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid lightgray;
`;
const Option = styled.option``;

const Hr = styled.hr`
    background-color: black;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    width: 100%;
    border: 0.5px solid lightgray;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    width: 90%;
`;
const SummaryTitle = styled.h1`
    font-weight: 200;
`;
const SummaryItem = styled.div`
    display: flex;
    margin: 10px 0;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "bold" && "500"};
    font-size: ${(props) => props.type === "bold" && "24px"};
`;
const SummaryItemText = styled.span`
    font-weight: ${(props) => props.type === "bold" && "bold"};
`;
const SummaryItemPrice = styled.span``;

const PaymentWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const PaymentTitle = styled.h1`
    text-align: center;
    font-size: 24px;
    font-style: bold;
    margin: 5px;
`;
const PaymentButton = styled.button`
    width: 50%;
    padding: 10px;
    margin: 5px;
    border: 1px solid #81b29a;
    border-radius: 50px;
    font-weight: bold;
    background-color: transparent;

    &:hover {
        background-color: #f8f4f4;
    }
`;

const PaymentLogo = styled.img`
    width: 30px;
    margin-right: 5px;
`;

const Checkout = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Top>
                    <Title>Penagihan dan Pengiriman</Title>
                </Top>
                <Bottom>
                    <Left>
                        <Form>
                            <Label>Nama Lengkap</Label>
                            <Input placeholder="Nama Lengkap" type="text" />
                            <Label>Nomor Telepon</Label>
                            <Input placeholder="Nomor Telepon" type="text" />
                            <Label>E-mail</Label>
                            <Input placeholder="E-mail" type="text" />
                            <Label>Alamat Detail/Jalan</Label>
                            <Input
                                placeholder="Alamat Detail/Jalan"
                                type="text"
                            />
                            <InputWrap>
                                <LabelWrap>
                                    <Label>Provinsi</Label>
                                </LabelWrap>
                                <Select>
                                    <Option disabled selected>
                                        Provinsi
                                    </Option>
                                    <Option>White</Option>
                                    <Option>Black</Option>
                                    <Option>Red</Option>
                                    <Option>Blue</Option>
                                    <Option>Yellow</Option>
                                    <Option>Green</Option>
                                </Select>
                            </InputWrap>
                            <InputWrap>
                                <LabelWrap>
                                    <Label>Kota</Label>
                                </LabelWrap>
                                <Select>
                                    <Option disabled selected>
                                        Kota
                                    </Option>
                                    <Option>White</Option>
                                    <Option>Black</Option>
                                    <Option>Red</Option>
                                    <Option>Blue</Option>
                                    <Option>Yellow</Option>
                                    <Option>Green</Option>
                                </Select>
                            </InputWrap>

                            <Label>Kecamatan/ Kelurahan</Label>
                            <Input
                                placeholder="Kecamatan/ Kelurahan"
                                type="text"
                            />
                            <Label>Kode Pos</Label>
                            <Input placeholder="Kode Pos" type="text" />
                        </Form>
                    </Left>
                    <Right>
                        <Summary>
                            <SummaryTitle>Pesanan Anda</SummaryTitle>
                            <Hr />
                            <SummaryItem>
                                <SummaryItemText>
                                    T-shirt Katun Uniqlo Crew Neck Pria
                                </SummaryItemText>
                                <SummaryItemPrice>Rp. 60.000</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Uniqlo Kemeja</SummaryItemText>
                                <SummaryItemPrice>Rp. 60.000</SummaryItemPrice>
                            </SummaryItem>
                            <Hr />
                            <SummaryItem>
                                <SummaryItemText type="bold">
                                    Subtotal
                                </SummaryItemText>
                                <SummaryItemPrice>
                                    <b>Rp. 60.000</b>
                                </SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItemText type="bold">
                                Pengiriman :
                            </SummaryItemText>
                            <SummaryItem>
                                <SummaryItemText>J&T Express</SummaryItemText>
                                <SummaryItemPrice>Rp. 15.000</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>
                                    Shipping Discount
                                </SummaryItemText>
                                <SummaryItemPrice>Rp. -30.000</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="bold">
                                <SummaryItemText>TOTAL</SummaryItemText>
                                <SummaryItemPrice>Rp. 60.000</SummaryItemPrice>
                            </SummaryItem>
                            <Hr />
                            <PaymentWrap>
                                <PaymentTitle>
                                    Pilih Metode Pembayaran
                                </PaymentTitle>
                                <PaymentButton>Transfer Bank</PaymentButton>
                                <PaymentButton>
                                    <PaymentLogo src={ovo} />
                                    <PaymentLogo src={ovoname} />
                                </PaymentButton>
                                <PaymentButton>
                                    <PaymentLogo src={gopay} />
                                    <PaymentLogo src={gopayname} />
                                </PaymentButton>
                                <PaymentButton>
                                    <PaymentLogo src={dana} />
                                    <PaymentLogo src={dananame} />
                                </PaymentButton>
                            </PaymentWrap>
                        </Summary>
                    </Right>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Checkout;
