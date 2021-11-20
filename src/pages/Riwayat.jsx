import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SidebarProfile from "../components/SidebarProfile";
import { FaShippingFast } from "react-icons/fa";
import OrderCard from "../components/OrderCard";
import { userRequest } from "../requestMethods";
import { useSelector } from "react-redux";
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
const Warn = styled.div`
    padding: 10px 0;
`;
const WrapperProfile = styled.div``;
const Title = styled.h2``;

const Riwayat = () => {
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
                <SidebarProfile />
                <Main>
                    <Title>Riwayat Belanja</Title>
                    {orders ? (
                        <WrapperProfile>
                            {orders.map((item) => (
                                <OrderCard item={item} key={item._id} />
                            ))}
                        </WrapperProfile>
                    ) : (
                        <Warn>Anda belum memiliki pesanan</Warn>
                    )}
                    <Title>Riwayat Donasi</Title>
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

export default Riwayat;
