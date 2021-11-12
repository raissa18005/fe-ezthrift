import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SidebarProfile from "../components/SidebarProfile";
import walogo from "../assets/images/logo-whatsapp.png";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { userRequest } from "../requestMethods";
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

const Card = styled.div`
    background-color: #f4f1de;
    border-radius: 20px;
    padding: 15px 20px;
    width: 70%;
    margin: 10px 0;
`;

const Title = styled.h3`
    font-size: 24px;
    font-weight: 700;
`;
const ProductsTitle = styled.h3`
    font-size: 24px;
    font-weight: 700;
    padding: 20px 0;
`;
const Products = styled.div`
    width: 70%;
`;
const Product = styled.div`
    display: flex;
    height: 200px;
`;
const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ProductImage = styled.img`
    width: 70%;
    height: 100%;
    object-fit: cover;
    ${mobile({
        width: "100%",
        height: "100%",
    })}
`;

const ProductDetail = styled.div``;
const Span = styled.span`
    font-weight: bold;
    color: ${(props) => {
        if (props.status === "pending") {
            return "red";
        } else if (props.status === "selling") {
            return "blue";
        } else {
            return "green";
        }
    }};
`;
const InfoContainer = styled.div`
    flex: 2;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const Penghasilan = styled.div`
    font-size: 34px;
`;
const WhatsappLogo = styled.img`
    width: 40px;
`;
const WhatsappLink = styled.a`
    text-decoration: none;
    color: black;
    font-size: 24px;
`;
const WrapperSeller = styled.div``;
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`;
const EditButton = styled.button`
    background-color: #f4f1de;
    width: 105px;
    border: 1px solid black;
    font-weight: bold;
    padding: 10px;
    &:hover {
        background-color: #e4e2d7;
    }
`;

const Hr = styled.hr`
    background-color: black;
    border: none;
    height: 1px;
    margin: 10px;
`;
const ProfileLink = styled.a``;
const NotSeller = styled.div`
    width: 100%;
    margin: 50px auto;
`;

const Seller = () => {
    const [products, setProducts] = useState([]);

    let isPenjual = "";
    const user = useSelector((state) =>
        state.user.currentUser.others
            ? state.user.currentUser.others
            : state.user.currentUser
    );
    const username = user.username;

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await userRequest.get(
                    "/products/seller/" + username
                );
                setProducts(res.data);
            } catch (err) {}
        };
        getProducts();
    }, []);

    console.log(products.length === 0);

    if (
        user.alamat !== " " &&
        user.namalengkap !== " " &&
        user.provinsi !== " " &&
        user.kota !== " " &&
        user.notelp !== " "
    ) {
        isPenjual = "ada";
    } else {
        isPenjual = "";
    }

    const soldProducts = products.filter((p) => p.status === "sold");
    const penghasilan = soldProducts.reduce((acc, curr) => {
        return acc + curr.price;
    }, 0);

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <SidebarProfile />
                <Main>
                    {isPenjual ? (
                        <WrapperSeller>
                            <Title>Dashboard Jual</Title>
                            <Card>
                                <Title>Penghasilan Saya</Title>
                                <Penghasilan>
                                    <NumberFormat
                                        value={penghasilan}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"Rp"}
                                    />
                                </Penghasilan>
                            </Card>
                            <Card>
                                <WhatsappLink
                                    href="https://wa.wizard.id/b3dbce"
                                    target="_blank"
                                >
                                    <WhatsappLogo src={walogo} />
                                    WhatsApp
                                </WhatsappLink>
                            </Card>
                            <ProductsTitle>Produk Saya</ProductsTitle>
                            <Products>
                                {products.map((product) => (
                                    <div className="" key={product._id}>
                                        <Product>
                                            <ImgContainer>
                                                <ProductImage
                                                    src={product.img}
                                                />
                                            </ImgContainer>
                                            <InfoContainer>
                                                <Info>
                                                    <Title>
                                                        {product.title}
                                                    </Title>
                                                    <ProductDetail>
                                                        Harga :{" "}
                                                        <NumberFormat
                                                            value={
                                                                product.price
                                                            }
                                                            displayType={"text"}
                                                            thousandSeparator={
                                                                true
                                                            }
                                                            prefix={"Rp"}
                                                        />
                                                    </ProductDetail>
                                                    <ProductDetail>
                                                        Size : {product.size}
                                                    </ProductDetail>
                                                    <ProductDetail>
                                                        Status :{" "}
                                                        <Span
                                                            status={
                                                                product.status
                                                            }
                                                        >
                                                            {product.status}
                                                        </Span>
                                                    </ProductDetail>
                                                    <ProductDetail>
                                                        Deskripsi :{" "}
                                                        {product.desc}
                                                    </ProductDetail>
                                                </Info>
                                                {product.status ===
                                                    "pending" && (
                                                    <ButtonContainer>
                                                        <Link
                                                            to={`/edit/${product._id}`}
                                                        >
                                                            <EditButton>
                                                                Edit Harga
                                                            </EditButton>
                                                        </Link>
                                                    </ButtonContainer>
                                                )}
                                            </InfoContainer>
                                        </Product>
                                        <Hr />
                                    </div>
                                ))}
                            </Products>
                            {products.length === 0 && (
                                <Products>
                                    Anda belum memiliki produk, silahkan
                                    menghubungi whatsapp kami melalui link di
                                    atas untuk mulai menjual
                                </Products>
                            )}
                        </WrapperSeller>
                    ) : (
                        <NotSeller>
                            <Title>
                                Lengkapi profil anda untuk mulai menjual
                            </Title>
                            <ProfileLink href="/profile">
                                Kembali ke profile
                            </ProfileLink>
                        </NotSeller>
                    )}
                </Main>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Seller;
