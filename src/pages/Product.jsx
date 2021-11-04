import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router";
import { publicRequest, userRequest } from "../requestMethods";
import NumberFormat from "react-number-format";
import { addProduct } from "../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0 5px;
    cursor: pointer;
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
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
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);

    const [product, setProduct] = useState({});

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            } catch (err) {}
        };
        getProduct();
    }, [id]);

    // console.log(user.others._id);

    // const getCart = async () => {
    //     try {
    //         const res = await userRequest.get("/carts/find/" + user.others._id);
    //         console.log(res.data);
    //     } catch (err) {}
    // };
    // getCart();

    const handleClick = () => {
        // Update cart
        dispatch(addProduct({ ...product, quantity }));
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
                        <Button onClick={handleClick}>
                            TAMBAH KE KERANJANG
                        </Button>
                        <Link to={"/checkout/" + product._id}>
                            <CheckoutButton>CHECKOUT</CheckoutButton>
                        </Link>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Product;
