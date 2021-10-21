import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Footer from "../components/Footer";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 60px;
`;

const Home = () => {
    return (
        <Container>
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Footer />
        </Container>
    );
};

export default Home;
