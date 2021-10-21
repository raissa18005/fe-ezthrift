import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.svg";

const Container = styled.div`
    height: 60px;
    width: 100%;
    ${mobile({ height: "50px" })}
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    z-index: 9999;
    font-weight: 700;
`;

const Wrapper = styled.div`
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 20px;
    margin-right: 15px;
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`;

const Logo = styled.img`
    width: 90px;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.a`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    const [active, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!active);
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo src={logo}></Logo>
                    <MenuItem onClick={toggleClass}>WANITA</MenuItem>
                    <MenuItem>PRIA</MenuItem>
                    <MenuItem>ABOUT</MenuItem>
                </Left>
                <Right>
                    <SearchContainer>
                        <Search style={{ color: "gray", fontSize: 16 }} />
                        <Input placeholder="Search" />
                    </SearchContainer>
                    <MenuItem style={{ color: "#E07A5F" }}>REGISTER</MenuItem>
                    <MenuItem style={{ color: "#E07A5F" }}>SIGN IN</MenuItem>
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
