import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
    FaBox,
    FaCheckCircle,
    FaReceipt,
    FaShippingFast,
} from "react-icons/fa";
import { publicRequest, userRequest } from "../requestMethods";
import { useSelector } from "react-redux";
import NumberFormat from "react-number-format";

const StatusContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const Status = styled.div`
    margin-left: 5px;
`;
const Container = styled.div`
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

const OrderCard = ({ item }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const productsId = item.products;

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get(
                    "http://localhost:5000/api/products"
                );
                setProducts(res.data);
            } catch (err) {}
        };
        getProducts();
    }, []);

    // useEffect(() => {
    //     setFilteredProducts(products.filter((p) => item.includes(p._id)));
    // }, [products, item]);

    const product = products.filter((p) => productsId.includes(p._id));

    return (
        <Container>
            <StatusContainer>
                {item.status === "pending" && (
                    <>
                        <FaReceipt color="#E07A5F" />
                        <Status>Dalam pemeriksaan</Status>
                    </>
                )}
                {item.status === "Terverifikasi" && (
                    <>
                        <FaBox color="#E07A5F" />
                        <Status>Paket sedang dikemas</Status>
                    </>
                )}
                {item.status === "sending" && (
                    <>
                        <FaShippingFast color="#E07A5F" />
                        <Status>Paket telah dikirim</Status>
                    </>
                )}
                {item.status === "received" && (
                    <>
                        <FaCheckCircle color="#E07A5F" />
                        <Status>Paket telah diterima</Status>
                    </>
                )}
            </StatusContainer>
            {product.map((product) => (
                <ProductContainer key={product._id}>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>
                        <NumberFormat
                            value={product.price}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"Rp"}
                        />
                    </ProductPrice>
                </ProductContainer>
            ))}

            <SubtotalContainer>
                <SubtotalTitle></SubtotalTitle>
                <SubtotalTitle>Total</SubtotalTitle>
                <Subtotal>
                    <NumberFormat
                        value={item.amount}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"Rp"}
                    />
                </Subtotal>
            </SubtotalContainer>
        </Container>
    );
};

export default OrderCard;
