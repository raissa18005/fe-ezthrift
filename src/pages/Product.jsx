import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router";
import { publicRequest, userRequest } from "../requestMethods";
import NumberFormat from "react-number-format";
import { addProduct } from "../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { addProductCart } from "../redux/apiCalls";

const Container = styled.div`
    margin-top: 59px;
`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: calc(90vh - 59px);
    object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;
const Title = styled.h1`
    font-weight: 400;
    margin-bottom: 30px;
`;
const Desc = styled.p`
    margin: 20px 0px;
    font-size: 18px;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
    background-color: #f4f1de;
    padding: 5px;
    font-weight: 300;
`;
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 0;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 300;
`;
const AddContainer = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    font-weight: 500;
    background-color: white;
    cursor: pointer;

    &:hover {
        background-color: #f8f4f4;
    }
`;
const CheckoutButton = styled.button`
    padding: 15px 40px;
    font-weight: 500;
    background-color: #e07a5f;
    cursor: pointer;

    &:hover {
        background-color: #c96549;
    }
`;

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);
    const cart = useSelector((state) => state.cart);
    const isLogin = useSelector((state) => state.user.isLoggedIn);
    const userId = isLogin === true && user.others._id;
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            } catch (err) {}
        };
        getProduct();
    }, [id]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await userRequest.get("/carts/find/" + userId);
                setProducts(res.data);
            } catch (err) {}
        };
        getProducts();
    }, [userId]);

    const carted = products.filter((p) => id.includes(p._id));
    // console.log(carted);
    const handleClick = () => {
        // Update cart
        // dispatch(addProduct({ ...product, quantity }));

        const productId = {
            productId: id,
        };

        addProductCart(userId, productId, dispatch);
        history.push("/cart");
    };

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title} </Title>
                    <Desc>{product.desc}</Desc>
                    <Price>
                        <NumberFormat
                            value={product.price}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"Rp"}
                        />
                    </Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>
                                Gender :{" "}
                                {product.categories && product.categories[1]}
                            </FilterTitle>
                        </Filter>
                        <Filter>
                            <FilterTitle>Ukuran : {product.size}</FilterTitle>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        {carted.length === 0 ? (
                            isLogin === true ? (
                                <Button onClick={handleClick}>
                                    TAMBAH KE KERANJANG
                                </Button>
                            ) : (
                                <Link to={"/login"}>
                                    <Button>TAMBAH KE KERANJANG</Button>
                                </Link>
                            )
                        ) : (
                            <Link to={"/cart"}>
                                <Button>DITAMBAHKAN KE KERANJANG</Button>
                            </Link>
                        )}

                        {isLogin === true ? (
                            <Link to={"/checkout/" + product._id}>
                                <CheckoutButton>CHECKOUT</CheckoutButton>
                            </Link>
                        ) : (
                            <Link to={"/login"}>
                                <CheckoutButton>CHECKOUT</CheckoutButton>
                            </Link>
                        )}
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Product;
