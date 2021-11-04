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
    border-radius: 15px;
    height: 90%;
    margin: 15px;
`;
const SidebarMenus = styled.div``;
const SidebarTitle = styled.h1``;
const SidebarList = styled.ul`
    list-style: none;
    padding-left: 15px;
`;
const SidebarListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: #e4e2d7;
    }
`;

const SidebarNotifikasi = () => {
    return (
        <Container>
            <Wrapper>
                <SidebarMenus>
                    <SidebarTitle>Notifikasi</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem>Status Pemesanan</SidebarListItem>
                    </SidebarList>
                </SidebarMenus>
            </Wrapper>
        </Container>
    );
};

export default SidebarNotifikasi;
