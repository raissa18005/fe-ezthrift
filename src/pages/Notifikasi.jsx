import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SidebarNotifikasi from "../components/SidebarNotifikasi";
import { userRequest } from "../requestMethods";
import { useSelector } from "react-redux";
import OrderCard from "../components/OrderCard";
import DonasiCard from "../components/DonasiCard";

const Container = styled.div`
    margin-top: 59px;
`;
const Wrapper = styled.div`
    display: flex;
`;
const Main = styled.div`
    flex: 4;
    padding: 20px;
`;
const Title = styled.h2``;

const WrapperProfile = styled.div``;
const Warn = styled.div`
    padding: 10px 0;
`;

const Notifikasi = () => {
    const user = useSelector((state) => state.user.currentUser);
    const userId = user.others._id;
    const [orders, setOrders] = useState([]);
    const [donasi, setDonasi] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get(`/orders/find/${userId}`);
                setOrders(res.data);
            } catch (err) {}
        };
        getOrders();
    }, []);
    useEffect(() => {
        const getDonasi = async () => {
            try {
                const res = await userRequest.get(`/donasi/find/${userId}`);
                setDonasi(res.data);
            } catch (err) {}
        };
        getDonasi();
    }, []);

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <SidebarNotifikasi />
                <Main>
                    <Title>Pesanan</Title>
                    {orders ? (
                        <WrapperProfile>
                            {orders.map((item) => (
                                <OrderCard item={item} key={item._id} />
                            ))}
                        </WrapperProfile>
                    ) : (
                        <Warn>Anda belum memiliki pesanan</Warn>
                    )}
                    <Title>Donasi</Title>
                    {donasi ? (
                        <WrapperProfile>
                            {donasi.map((item) => (
                                <DonasiCard item={item} key={item._id} />
                            ))}
                        </WrapperProfile>
                    ) : (
                        <Warn>Anda belum memiliki donasi</Warn>
                    )}
                </Main>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Notifikasi;
