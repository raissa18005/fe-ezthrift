import {
    FavoriteBorder,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
    flex: 1;
    margin: 5px;
`;

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }
`;

const ProductInfo = styled.div`
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;
const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

const ProductInfoContainer = styled.div`
    width: 80%;
    margin: 5px 10px;
`;
const ProductInfoWrap = styled.div`
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #81b29a;
`;
const ProductGender = styled.span``;
const ProductSize = styled.div``;
const ProductName = styled.div`
    margin: 5px 0px;
    font-weight: 600;
`;
const ProductPrice = styled.div`
    font-weight: 600;
`;

const Product = ({ item }) => {
    return (
        <ProductContainer>
            <Container>
                <Circle />
                <Image src={item.img} />
                <Info>
                    <Icon>
                        <ShoppingCartOutlined />
                    </Icon>
                    <Icon>
                        <SearchOutlined />
                    </Icon>
                    <Icon>
                        <FavoriteBorder />
                    </Icon>
                </Info>
            </Container>
            <ProductInfo>
                <ProductInfoContainer>
                    <ProductInfoWrap>
                        <ProductGender>F/M</ProductGender>
                        <ProductSize>XL</ProductSize>
                    </ProductInfoWrap>
                    <ProductName>Uniqlo T-shirt</ProductName>
                    <ProductPrice>Rp. 50.000</ProductPrice>
                </ProductInfoContainer>
            </ProductInfo>
        </ProductContainer>
    );
};

export default Product;
