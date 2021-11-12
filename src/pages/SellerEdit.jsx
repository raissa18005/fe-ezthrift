import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SidebarProfile from "../components/SidebarProfile";
import walogo from "../assets/images/logo-whatsapp.png";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { publicRequest, userRequest } from "../requestMethods";
import NumberFormat from "react-number-format";

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

const Title = styled.h3`
    font-weight: 700;
    padding: 10px 0;
`;
const WrapperSeller = styled.div`
    width: 50%;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.span`
    font-weight: 600;
    margin-bottom: 10px;
`;

const Input = styled.input`
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid gray;
    margin-bottom: 10px;
`;
const Button = styled.button`
    width: 200px;
    border: none;
    padding: 10px;
    background-color: #81b29a;
    color: white;
    font-weight: 600;
    cursor: pointer;
    margin: 30px 0;
    border-radius: 50px;

    &:hover {
        background-color: #6f9985;
    }

    &:disabled {
        color: green;
        cursor: not-allowed;
    }
`;

const Product = styled.div`
    display: flex;
    height: 250px;
`;
const ProductTitle = styled.h3`
    font-size: 24px;
    font-weight: 600;
`;
const ImgContainer = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({
        width: "100%",
        height: "100%",
    })}
`;

const ProductDetail = styled.div``;
const InfoContainer = styled.div`
    flex: 2;
    padding: 20px 0;
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const SellerEdit = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const user = useSelector((state) => state.user.currentUser);
    // const userId = user.others._id;
    const username = user.others.username;
    const [inputs, setInputs] = useState({});
    const [product, setProduct] = useState({});
    const history = useHistory();
    const productid = product._id;

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            } catch (err) {}
        };
        getProduct();
    }, [id]);

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleClick = (e) => {
        e.preventDefault();
        console.log(productid);
        const product = {
            ...inputs,
        };
        const updateProduct = async () => {
            try {
                const res = await userRequest.put(
                    `/products/${username}/${productid}`,
                    product
                );
                history.push(`/seller`);
            } catch (err) {}
        };
        updateProduct();
    };

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <SidebarProfile />
                <Main>
                    <WrapperSeller>
                        <Title>Edit Produk</Title>
                        <Product>
                            <ImgContainer>
                                <ProductImage src={product.img} />
                            </ImgContainer>
                            <InfoContainer>
                                <Info>
                                    <ProductTitle>{product.title}</ProductTitle>
                                    <ProductDetail>
                                        Harga :{" "}
                                        <NumberFormat
                                            value={product.price}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"Rp"}
                                        />
                                    </ProductDetail>
                                    <ProductDetail>
                                        Size : {product.size}
                                    </ProductDetail>
                                    <ProductDetail>
                                        Status : {product.status}
                                    </ProductDetail>
                                    <ProductDetail>
                                        Deskripsi : {product.desc}
                                    </ProductDetail>
                                </Info>
                                {/* <ButtonContainer>
                                    <Link to={`/edit/${product._id}`}>
                                        <EditButton>Edit Harga</EditButton>
                                    </Link>
                                </ButtonContainer> */}
                            </InfoContainer>
                        </Product>
                        <Form>
                            <Label>Nama Produk</Label>
                            <Input
                                placeholder="Nama Produk"
                                type="text"
                                name="title"
                                onChange={handleChange}
                            />
                            <Label>Deskripsi Produk</Label>
                            <Input
                                placeholder="Deskripsi Produk"
                                type="text"
                                name="desc"
                                onChange={handleChange}
                            />
                            <Label>Harga Produk</Label>
                            <Input
                                placeholder="Harga Produk"
                                type="number"
                                name="price"
                                onChange={handleChange}
                            />
                            <Button onClick={handleClick}>JUAL</Button>
                        </Form>
                    </WrapperSeller>
                </Main>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default SellerEdit;
