import { Clear } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import NumberFormat from "react-number-format";
import { publicRequest, userRequest } from "../requestMethods";
import { Link } from "react-router-dom";
import { addQuantity } from "../redux/cartRedux";

const Container = styled.div`
    margin-top: 59px;
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
    background-color: #aaa9a9;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 70%;
`;
const SummaryTitle = styled.h2`
    font-weight: 200;
    text-align: center;
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
    const quantity = useSelector((state) => state.quantity);
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const user = useSelector((state) => state.user.currentUser);
    const userId = user.others._id;

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await userRequest.get("/carts/find/" + userId);
                setProducts(res.data);
                // setTotal(res.data);
            } catch (err) {}
        };
        getProducts();
    }, [userId]);

    const handleDelete = (id) => {
        const del = {
            productId: id,
        };

        const deleteProduct = async () => {
            try {
                const res = await userRequest.put(
                    `/carts/delete/${userId}`,
                    del
                );
                const getProducts = async () => {
                    try {
                        const res = await userRequest.get(
                            "/carts/find/" + userId
                        );
                        setProducts(res.data);
                        // setTotal(res.data);
                    } catch (err) {}
                };
                getProducts();
            } catch (err) {}
        };
        deleteProduct();

        // setProducts(
        //     products.splice(
        //     products.findIndex((item) => item._id === id),
        //      1
        //     )
        // );

        console.log(
            products.splice(
                products.findIndex((item) => item._id === id),
                1
            )
        );
    };

    const subtotal = products.reduce((acc, curr) => {
        return acc + curr.price;
    }, 0);

    const total = subtotal + 15000;

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
                        {products.map((product) => (
                            <div className="" key={product._id}>
                                <Product>
                                    <ProductDetail>
                                        <Image src={product.img} />
                                        <Details>
                                            <ProductName>
                                                <b>Product: </b>
                                                {product.title}
                                            </ProductName>
                                            <ProductId>
                                                <b>ID: </b>
                                                {product._id}
                                            </ProductId>
                                            <ProductSize>
                                                <b>Size: </b>
                                                {product.size}
                                            </ProductSize>
                                        </Details>
                                    </ProductDetail>
                                    <PriceDetail>
                                        <ProductRemoveContainer>
                                            <ProductRemove
                                                onClick={() =>
                                                    handleDelete(product._id)
                                                }
                                            >
                                                Hapus
                                            </ProductRemove>
                                            <RemoveIcon>
                                                <Clear />
                                            </RemoveIcon>
                                        </ProductRemoveContainer>
                                        <ProductPrice>
                                            <NumberFormat
                                                value={product.price}
                                                displayType={"text"}
                                                thousandSeparator={true}
                                                prefix={"Rp"}
                                            />
                                        </ProductPrice>
                                    </PriceDetail>
                                </Product>
                                <Hr />
                            </div>
                        ))}
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>
                                <NumberFormat
                                    value={subtotal}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"Rp"}
                                />
                            </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>
                                Estimated Shipping
                            </SummaryItemText>
                            <SummaryItemPrice>Rp. 15.000</SummaryItemPrice>
                        </SummaryItem>
                        {/* <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>Rp. -30.000</SummaryItemPrice>
                        </SummaryItem> */}
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>
                                <NumberFormat
                                    value={total}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"Rp"}
                                />
                            </SummaryItemPrice>
                        </SummaryItem>
                        <Link to="/checkouts">
                            <SummaryButton>CHECKOUT</SummaryButton>
                        </Link>

                        <Link to="/donasi">
                            <SummaryButton type="donasi">DONASI</SummaryButton>
                        </Link>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Cart;
