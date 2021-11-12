import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import ovo from "../assets/images/logo-ovo-1.png";
import ovoname from "../assets/images/logo-ovo-2.png";
import bca from "../assets/images/logo-bca.png";
import mandiri from "../assets/images/logo-mandiri.png";
import { useHistory, useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import NumberFormat from "react-number-format";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartProducts, updateStatusSold } from "../redux/apiCalls";

const Container = styled.div`
    margin-top: 59px;
`;
const Wrapper = styled.div`
    width: 100%;
    padding: 20px;
    ${mobile({ padding: "10px" })}
    background-color: #F4F1DE;
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 0 20px; */
`;

const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ flexDirection: "column" })}
`;

const Right = styled.div`
    width: 50%;
`;

const Label = styled.span`
    margin-left: 10px;
    font-weight: bold;
    font-size: 18px;
`;

const Hr = styled.hr`
    background-color: black;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    width: 100%;
    border: 0.5px solid lightgray;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    width: 90%;
`;
const SummaryTitle = styled.h1`
    font-weight: 200;
`;
const SummaryItem = styled.div`
    display: flex;
    margin: 10px 0;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "bold" && "500"};
    font-size: ${(props) => props.type === "bold" && "24px"};
`;
const SummaryItemText = styled.span`
    font-weight: ${(props) => props.type === "bold" && "bold"};
`;
const SummaryItemPrice = styled.span``;

const PaymentWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const PaymentTitle = styled.h1`
    text-align: center;
    font-size: 24px;
    font-style: bold;
    margin: 5px;
`;
const PaymentInfo = styled.div`
    width: 50%;
    padding: 10px;
    margin: 5px;
    font-weight: bold;
    background-color: transparent;
    display: flex;

    &:hover {
        background-color: #f8f4f4;
    }
`;
const PaymentDesc = styled.div`
    font-size: 14px;
    flex: 1;
`;

const PaymentLogo = styled.img`
    width: 30px;
    object-fit: scale-down;
    margin-right: 5px;
    flex: 1;
`;

const DonasiWrap = styled.div`
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

const InputFile = styled.input`
    margin: 10px;
`;
const Button = styled.button`
    margin: 10px;
    padding: 10px;
    width: 50%;
    background-color: #c96549;
    cursor: pointer;
    font-weight: 500;
    &:hover {
        background-color: #e07a5f;
    }
`;

const Donasi = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [products, setProducts] = useState([]);
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const [address, setAddress] = useState({});
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);
    const userId = user.others._id;
    const history = useHistory();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await userRequest.get("/carts/find/" + userId);
                setProducts(res.data);
                // setTotal(res.data);
            } catch (err) {}
        };
        getProducts();
    }, [userId]);

    const productId = products.map((p) => {
        return p._id;
    });

    const subtotal = products.reduce((acc, curr) => {
        return acc + curr.price;
    }, 0);

    const total = subtotal + 15000;

    const updateStatus = async (id, statusProd) => {
        try {
            // update
            const res = await userRequest.put(`/products/${id}`, statusProd);
        } catch (err) {}
    };

    const handleClick = (e) => {
        e.preventDefault();
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const donasi = {
                        userId: userId,
                        img: downloadURL,
                        amount: total,
                        products: productId,
                    };
                    const statusProd = {
                        status: "sold",
                    };

                    const addDonasi = async () => {
                        try {
                            const res = await userRequest.post(
                                `/donasi`,
                                donasi
                            );

                            productId.map((p) => {
                                updateStatusSold(p, dispatch);
                            });

                            deleteCartProducts(userId, dispatch);

                            history.push("/notifications");
                        } catch (err) {}
                    };
                    addDonasi();
                });
            }
        );
    };

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Top>
                    <Title>Donasi</Title>
                </Top>
                <Bottom>
                    <Right>
                        <Summary>
                            <SummaryTitle>Pesanan Anda</SummaryTitle>
                            <Hr />
                            {products.map((product) => (
                                <SummaryItem key={product._id}>
                                    <SummaryItemText>
                                        {product.title}
                                    </SummaryItemText>
                                    <SummaryItemPrice>
                                        <NumberFormat
                                            value={product.price}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"Rp"}
                                        />
                                    </SummaryItemPrice>
                                </SummaryItem>
                            ))}

                            <Hr />
                            <SummaryItem>
                                <SummaryItemText type="bold">
                                    Subtotal
                                </SummaryItemText>
                                <SummaryItemPrice>
                                    <b>
                                        <NumberFormat
                                            value={subtotal}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"Rp"}
                                        />
                                    </b>
                                </SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItemText type="bold">
                                Pengiriman :
                            </SummaryItemText>
                            <SummaryItem>
                                <SummaryItemText>J&T Express</SummaryItemText>
                                <SummaryItemPrice>Rp. 15.000</SummaryItemPrice>
                            </SummaryItem>
                            {/* <SummaryItem>
                                <SummaryItemText>
                                    Shipping Discount
                                </SummaryItemText>
                                <SummaryItemPrice>Rp. -30.000</SummaryItemPrice>
                            </SummaryItem> */}
                            <SummaryItem type="bold">
                                <SummaryItemText>TOTAL</SummaryItemText>
                                <SummaryItemPrice>
                                    <NumberFormat
                                        value={total}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"Rp"}
                                    />
                                </SummaryItemPrice>
                            </SummaryItem>
                            <Hr />
                            <PaymentWrap>
                                <PaymentTitle>
                                    Pilih Metode Pembayaran
                                </PaymentTitle>
                                {/* <PaymentInfo>Transfer Bank</PaymentInfo> */}
                                <PaymentInfo>
                                    <PaymentLogo src={ovo} />
                                    <PaymentLogo src={ovoname} />
                                    <PaymentDesc>
                                        <div className="">OVO</div>
                                        <div className="">082323555889</div>
                                        <div className="">EzThrift</div>
                                    </PaymentDesc>
                                </PaymentInfo>
                                <PaymentInfo>
                                    <PaymentLogo src={bca} />
                                    <PaymentDesc>
                                        <div className="">OVO</div>
                                        <div className="">082323555889</div>
                                        <div className="">EzThrift</div>
                                    </PaymentDesc>
                                </PaymentInfo>
                                <PaymentInfo>
                                    <PaymentLogo src={mandiri} />
                                    <PaymentDesc>
                                        <div className="">OVO</div>
                                        <div className="">082323555889</div>
                                        <div className="">EzThrift</div>
                                    </PaymentDesc>
                                </PaymentInfo>
                            </PaymentWrap>
                            <DonasiWrap>
                                <Label>
                                    Upload bukti pembayaran (.jpg, .png)
                                </Label>
                                <InputFile
                                    onChange={(e) => setFile(e.target.files[0])}
                                    type="file"
                                    id="file"
                                />
                                <Button onClick={handleClick}>Donasi</Button>
                            </DonasiWrap>
                        </Summary>
                    </Right>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Donasi;
