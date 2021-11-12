import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SidebarProfile from "../components/SidebarProfile";
import { FaShippingFast } from "react-icons/fa";
import OrderCard from "../components/OrderCard";
import { userRequest } from "../requestMethods";
import { useSelector } from "react-redux";

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

const WrapperProfile = styled.div``;
const Title = styled.h1``;

const Riwayat = () => {
    const user = useSelector((state) => state.user.currentUser);
    const userId = user.others._id;
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get(
                    `http://localhost:5000/api/orders/find/${userId}`
                );
                setOrders(res.data);
            } catch (err) {}
        };
        getOrders();
    }, []);

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <SidebarProfile />
                <Main>
                    <Title>Riwayat Belanja</Title>
                    <WrapperProfile>
                        {orders.map((item) => (
                            <OrderCard item={item} key={item._id} />
                        ))}
                    </WrapperProfile>
                </Main>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Riwayat;
