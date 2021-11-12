import {
    Notifications,
    Person,
    Search,
    ShoppingCartOutlined,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import {
    Navbar as NavbarBS,
    Nav,
    NavDropdown,
    DropdownButton as Drpdb,
    Container,
} from "react-bootstrap";
import styled from "styled-components";
import logo from "../assets/images/Logo.svg";
import { Badge } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../redux/userRedux";
import { userRequest } from "../requestMethods";

const DropdownButton = styled(Drpdb)`
    background-color: aliceblue;
    color: black;
`;
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
    const [products, setProducts] = useState([]);
    const [input, setInput] = useState({});
    // const quantity = useSelector((state) => state.cart.quantity);
    const user = useSelector((state) => state.user.currentUser);
    const isLogin = useSelector((state) => state.user.isLoggedIn);
    const dispatch = useDispatch();
    const history = useHistory();
    const [orders, setOrders] = useState([]);

    const userId = isLogin === true && user.others._id;

    useEffect(() => {
        if (isLogin === true) {
            const getProducts = async () => {
                try {
                    const res = await userRequest.get("/carts/find/" + userId);
                    setProducts(res.data);
                    // setTotal(res.data);
                } catch (err) {}
            };
            getProducts();
        }
    }, [userId, products.length]);

    useEffect(() => {
        if (isLogin === true) {
            const getOrders = async () => {
                try {
                    const res = await userRequest.get(
                        `http://localhost:5000/api/orders/find/${userId}`
                    );
                    setOrders(res.data);
                } catch (err) {}
            };
            getOrders();
        }
    }, []);

    let quantity = products.length;
    let notifs = orders.length;

    // const quantity = products.length;

    const handleLogout = () => {
        dispatch(logout());
    };

    const handleSearchInput = (e) => {
        // this.setState({
        //     searchText: e.target.value,
        // });
        setInput({
            searchText: e.target.value,
        });
    };
    const handleSearchSubmit = (e) => {
        if (e.key === "Enter") {
            history.push("/results", { searchText: input });
        }
    };

    // console.log(input);

    // const handleChange = (e) => {
    //     setInputs((prev) => {
    //         return { ...prev, [e.target.name]: e.target.value };
    //     });
    // };

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
                            <StyledNavLink href="/products/Wanita">
                                Wanita
                            </StyledNavLink>
                            <StyledNavLink href="/products/Pria">
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
                            <Input
                                onChange={handleSearchInput}
                                onKeyPress={handleSearchSubmit}
                            ></Input>
                        </SearchContainer>
                        <Nav>
                            {isLogin === false ? (
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

                                    <StyledNavLink>
                                        <Link
                                            to="/notifications"
                                            style={{ color: "gray" }}
                                        >
                                            <MenuItem>
                                                <Badge
                                                    badgeContent={notifs}
                                                    color="primary"
                                                >
                                                    <Notifications />
                                                </Badge>
                                            </MenuItem>
                                        </Link>
                                    </StyledNavLink>

                                    <MenuItem>
                                        <NavDropdown
                                            align="end"
                                            style={{}}
                                            title={
                                                <Person
                                                    style={{ color: "primary" }}
                                                />
                                            }
                                            id="navbarScrollingDropdown"
                                        >
                                            <NavDropdown.Item href="/profile">
                                                Lihat Profil
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/history">
                                                Riwayat Belanja
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/seller">
                                                Dashboard Jual
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
