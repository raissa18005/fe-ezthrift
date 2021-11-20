import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { publicRequest, userRequest } from "../requestMethods";
import NumberFormat from "react-number-format";

const StatusContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
const ProductPrice = styled.div`
    font-weight: 700;
`;

const DonasiCard = ({ item }) => {
    return (
        <Container>
            <StatusContainer></StatusContainer>
            <ProductContainer>
                <ProductTitle>Anda mendonasikan</ProductTitle>
                <ProductPrice>
                    <NumberFormat
                        value={item.amount}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"Rp"}
                    />
                </ProductPrice>
            </ProductContainer>
        </Container>
    );
};

export default DonasiCard;
