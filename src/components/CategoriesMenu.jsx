import React from "react";
import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    height: calc(100vh - 59px);
    margin: 10px;
`;

const Wrapper = styled.div`
    padding: 20px;
    background-color: #f4f1de;
    border-radius: 15px;
    height: 90%;
    margin: 15px;
`;
const CategoriesMenus = styled.div``;
const CategoriesTitle = styled.h3`
    font-size: 24px;
    font-weight: 600;
`;
const CategoriesList = styled.ul`
    list-style: none;
    padding-left: 15px;
`;
const CategoriesListItem = styled.li`
    padding: 5px;
    cursor: pointer;

    &:hover {
        background-color: #e4e2d7;
    }
`;

const CategoriesMenu = () => {
    return (
        <Container>
            <Wrapper>
                <CategoriesMenus>
                    <CategoriesTitle>Semua Kategori</CategoriesTitle>
                    <CategoriesList>
                        <CategoriesListItem>Lihat Semua</CategoriesListItem>
                        <CategoriesListItem>T-Shirt</CategoriesListItem>
                        <CategoriesListItem>Kemeja</CategoriesListItem>
                        <CategoriesListItem>Gaun & Blouse </CategoriesListItem>
                        <CategoriesListItem>Hoodie & Sweat</CategoriesListItem>
                        <CategoriesListItem>Celana Pendek</CategoriesListItem>
                        <CategoriesListItem>Celana Panjang</CategoriesListItem>
                    </CategoriesList>
                </CategoriesMenus>
            </Wrapper>
        </Container>
    );
};

export default CategoriesMenu;
