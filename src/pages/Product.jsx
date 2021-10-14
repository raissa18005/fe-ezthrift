import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div`
    margin-top: 59px;
`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: calc(90vh - 59px);
    object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;
const Title = styled.h1`
    font-weight: 400;
    margin-bottom: 30px;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
    background-color: #f4f1de;
    padding: 5px;
    font-weight: 300;
`;
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 0;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 300;
`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0 5px;
    cursor: pointer;
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    font-weight: 500;
    background-color: white;
    cursor: pointer;

    &:hover {
        background-color: #f8f4f4;
    }
`;
const CheckoutButton = styled.button`
    padding: 15px 40px;
    border: 2px solid teal;
    font-weight: 500;
    background-color: white;
    cursor: pointer;

    &:hover {
        background-color: #f8f4f4;
    }
`;

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>T-shirt Katun Uniqlo Crew Neck </Title>
                    <Desc>
                        T-shirt pria dari bahan 100% Supima® cotton yang halus
                        dan berkilau.
                    </Desc>
                    <Price>Rp. 20.000</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Gender : Pria/Wanita</FilterTitle>
                        </Filter>
                        <Filter>
                            <FilterTitle>Ukuran : M</FilterTitle>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <Button>TAMBAH KE KERANJANG</Button>
                        <CheckoutButton>CHECKOUT</CheckoutButton>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default Product;
