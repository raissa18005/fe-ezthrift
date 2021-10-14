import React from "react";
import CategoriesMenu from "../components/CategoriesMenu";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Products from "../components/Products";

const Container = styled.div`
    margin-top: 59px;
`;

const Wrapper = styled.div`
    display: flex;
`;
const OtherPages = styled.div`
    flex: 4;
`;

const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-style: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <CategoriesMenu />
                <OtherPages>
                    <Title>Wanita</Title>
                    <FilterContainer>
                        <Filter>
                            <FilterText>Filter Products:</FilterText>
                            <Select>
                                <Option disabled selected>
                                    Color
                                </Option>
                                <Option>White</Option>
                                <Option>Black</Option>
                                <Option>Red</Option>
                                <Option>Blue</Option>
                                <Option>Yellow</Option>
                                <Option>Green</Option>
                            </Select>
                            <Select>
                                <Option disabled selected>
                                    Size
                                </Option>
                                <Option>XS</Option>
                                <Option>S</Option>
                                <Option>M</Option>
                                <Option>L</Option>
                                <Option>XL</Option>
                            </Select>
                        </Filter>
                        <Filter>
                            <FilterText>Sort Products:</FilterText>
                            <Select>
                                <Option selected>Newest</Option>
                                <Option>Price (asc)</Option>
                                <Option>Price (desc)</Option>
                            </Select>
                        </Filter>
                    </FilterContainer>
                    <Products />
                </OtherPages>
            </Wrapper>
        </Container>
    );
};

export default ProductList;
