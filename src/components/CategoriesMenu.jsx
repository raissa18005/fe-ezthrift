import React from "react";
import { Link } from "react-router-dom";
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
                        <Link
                            to="/products/All"
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            <CategoriesListItem>Lihat Semua</CategoriesListItem>
                        </Link>
                        <Link
                            to="/products/T-Shirt"
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            <CategoriesListItem>T-Shirt</CategoriesListItem>
                        </Link>
                        <Link
                            to="/products/Kemeja"
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            <CategoriesListItem>Kemeja</CategoriesListItem>
                        </Link>
                        <Link
                            to="/products/Gaun"
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            <CategoriesListItem>Gaun </CategoriesListItem>
                        </Link>
                        <Link
                            to="/products/Blouse"
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            <CategoriesListItem>Blouse </CategoriesListItem>
                        </Link>
                        <Link
                            to="/products/Hoodie"
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            <CategoriesListItem>Hoodie </CategoriesListItem>
                        </Link>
                        <Link
                            to="/products/Sweat"
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            <CategoriesListItem>Sweat </CategoriesListItem>
                        </Link>
                        <Link
                            to="/products/Celana"
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            <CategoriesListItem>Celana </CategoriesListItem>
                        </Link>
                    </CategoriesList>
                </CategoriesMenus>
            </Wrapper>
        </Container>
    );
};

export default CategoriesMenu;
