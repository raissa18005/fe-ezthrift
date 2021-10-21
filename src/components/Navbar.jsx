import {
    Notifications,
    Person,
    Search,
    ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import {
    Navbar as NavbarBS,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Container,
} from "react-bootstrap";
import styled from "styled-components";
import logo from "../assets/images/Logo.svg";
import { Badge } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";

const StyledNavbar = styled(NavbarBS)`
    background-color: white;
    z-index: 999;
    font-size: 18px;
    font-weight: 600;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    img {
        margin: -10px 0;
    }
`;

const StyledNavLink = styled(Nav.Link)`
    margin-right: 15px;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding: 4px;
    border-radius: 20px;
    margin-right: 15px;
`;
const Input = styled.input`
    border: none;
    width: 85%;
`;

const LoginMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
`;

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    const user = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        // Update cart
        dispatch(logout());
    };

    return (
        <div>
            <StyledNavbar fixed="top" expand="lg">
                <Container fluid style={{ padding: " 0 20px" }}>
                    <StyledNavbar.Brand href="/">
                        <img
                            src={logo}
                            width="90"
                            height=""
                            className="d-inline-block align-top "
                            alt="React Bootstrap logo"
                        />
                    </StyledNavbar.Brand>
                    <StyledNavbar.Toggle aria-controls="navbarScroll" />
                    <StyledNavbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "200px" }}
                            navbarScroll
                        >
                            <StyledNavLink href="/products/wanita">
                                Wanita
                            </StyledNavLink>
                            <StyledNavLink href="/products/pria">
                                Pria
                            </StyledNavLink>
                            <StyledNavLink href="/about">About</StyledNavLink>
                            <StyledNavLink
                                className="d-lg-none d-sm-inline-block"
                                href="#action1"
                            >
                                Masuk
                            </StyledNavLink>
                            <StyledNavLink
                                className="d-lg-none d-sm-inline-block"
                                href="#action2"
                            >
                                Daftar
                            </StyledNavLink>
                        </Nav>

                        <SearchContainer>
                            <Search
                                style={{
                                    color: "gray",
                                    fontSize: 20,
                                    marginLeft: 5,
                                }}
                            />
                            <Input></Input>
                        </SearchContainer>
                        <Nav>
                            {!user ? (
                                <>
                                    <StyledNavLink
                                        style={{ color: "#E07A5F" }}
                                        className="d-none d-lg-inline-block"
                                        href="/login"
                                    >
                                        Masuk
                                    </StyledNavLink>
                                    <StyledNavLink
                                        style={{ color: "#E07A5F" }}
                                        className="d-none d-lg-inline-block"
                                        href="/register"
                                    >
                                        Daftar
                                    </StyledNavLink>
                                </>
                            ) : (
                                <>
                                    <StyledNavLink>
                                        <Link
                                            to="/cart"
                                            style={{ color: "gray" }}
                                        >
                                            <MenuItem>
                                                <Badge
                                                    badgeContent={quantity}
                                                    color="primary"
                                                >
                                                    <ShoppingCartOutlined />
                                                </Badge>
                                            </MenuItem>
                                        </Link>
                                    </StyledNavLink>
                                    <MenuItem>
                                        <NavDropdown
                                            style={{ width: "60px" }}
                                            title={
                                                <Person
                                                    style={{ color: "primary" }}
                                                />
                                            }
                                            id="navbarScrollingDropdown"
                                        >
                                            <NavDropdown.Item href="#action3">
                                                Action
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">
                                                Another action
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item
                                                href="/"
                                                onClick={handleLogout}
                                            >
                                                Logout
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </MenuItem>
                                    <StyledNavLink>
                                        <MenuItem>
                                            <Badge
                                                badgeContent={4}
                                                color="primary"
                                            >
                                                <Notifications />
                                            </Badge>
                                        </MenuItem>
                                    </StyledNavLink>
                                </>
                            )}
                        </Nav>
                    </StyledNavbar.Collapse>
                    <LoginMenu></LoginMenu>
                </Container>
            </StyledNavbar>
        </div>
    );
};

export default Navbar;
