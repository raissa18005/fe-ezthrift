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
import { publicRequest } from "../requestMethods";
import NumberFormat from "react-number-format";
import { regions } from "../regions";
import { addOrder, updateStatusSold } from "../redux/apiCalls";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

const Container = styled.div`
    margin-top: 59px;
`;
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
    background-color: #F4F1DE;
`;
const Title = styled.h1`
    font-weight: 300;
    font-size: px;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
    flex: 1;
`;
const Right = styled.div`
    flex: 1;
`;

const Form = styled.form`
    margin: 20px;
    display: flex;
    flex-direction: column;
    width: 70%;
`;
const Label = styled.span`
    margin-left: 10px;
    font-weight: bold;
    font-size: 18px;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 8px 0;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid lightgray;
    background-color: white;
`;
const InputWrap = styled.div`
    padding: 20px 0;
    display: flex;
    align-items: center;
`;

const LabelWrap = styled.div`
    flex: 1;
`;

const Select = styled.select`
    flex: 3;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid lightgray;
`;
const Option = styled.option``;

const Hr = styled.hr`
    background-color: black;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
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
const InputFile = styled.input`
    margin: 10px;
`;
const Button = styled.button`
    margin: 10px;
    padding: 10px;
    background-color: #c96549;
    cursor: pointer;
    font-weight: 500;
    &:hover {
        background-color: #e07a5f;
    }
`;
const Error = styled.span`
    margin-left: 10px;
    font-size: 14px;
    color: red;
`;

const Checkout = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState([]);
    const [productId, setProductId] = useState([]);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);
    const userId = user.others._id;
    const { error, isFetching } = useSelector((state) => state.order);
    const history = useHistory();

    const validate = Yup.object({
        nama: Yup.string().required("Nama harus diisi"),
        notelp: Yup.string().required("Nomor telepon harus diisi"),
        email: Yup.string()
            .email("Email tidak valid")
            .required("Email harus diisi"),
        alamat: Yup.string().required("Alamat harus diisi"),
        provinsi: Yup.string().required("Provinsi harus diisi"),
        kota: Yup.string().required("Kota harus diisi"),
        file: Yup.mixed().required("File harus diisi"),
    });

    const {
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
        handleBlur,
        setFieldValue,
    } = useFormik({
        initialValues: {
            nama: "",
            notelp: "",
            email: "",
            alamat: "",
            provinsi: "",
            kota: "",
            file: null,
        },
        validationSchema: validate,
        onSubmit: (values) => {
            const fileName = new Date().getTime() + values.file.name;
            const storage = getStorage(app);
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, values.file);
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
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadURL) => {
                            const address = {
                                alamat: values.alamat,
                                provinsi: values.provinsi,
                                kota: values.kota,
                            };

                            const order = {
                                nama: values.nama,
                                email: values.email,
                                notelp: values.notelp,
                                userId: userId,
                                img: downloadURL,
                                address: address,
                                amount: total,
                                products: productId,
                            };
                            addOrder(order, dispatch);
                            if (error === false) {
                                updateStatusSold(id, dispatch);
                                history.push("/notifications");
                            }
                        }
                    );
                }
            );
        },
    });

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
                setProductId(res.data._id);
            } catch (err) {}
        };
        getProduct();
    }, [id]);

    const kota = values.provinsi
        ? regions.filter((item) => item.provinsi === values.provinsi)[0].kota
        : "";

    const total = product.price + 15000;

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Top>
                    <Title>Penagihan dan Pengiriman</Title>
                </Top>
                <Bottom>
                    <Left>
                        <Form onSubmit={handleSubmit}>
                            <Label>Nama Lengkap</Label>
                            <Input
                                placeholder="Nama Lengkap"
                                name="nama"
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {touched.nama && errors.nama ? (
                                <Error className="error">{errors.nama}</Error>
                            ) : null}
                            <Label>Nomor Telepon</Label>
                            <Input
                                placeholder="Nomor Telepon"
                                name="notelp"
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {touched.notelp && errors.notelp ? (
                                <Error className="error">{errors.notelp}</Error>
                            ) : null}
                            <Label>E-mail</Label>
                            <Input
                                placeholder="E-mail"
                                name="email"
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.email && errors.email ? (
                                <Error className="error">{errors.email}</Error>
                            ) : null}
                            <Label>Alamat Detail/Jalan</Label>
                            <Input
                                name="alamat"
                                placeholder="Alamat Detail/Jalan"
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {touched.alamat && errors.alamat ? (
                                <Error className="error">{errors.alamat}</Error>
                            ) : null}
                            <InputWrap>
                                <LabelWrap>
                                    <Label>Provinsi</Label>
                                </LabelWrap>
                                <Select
                                    name="provinsi"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                >
                                    {regions.map((item) => (
                                        <Option key={item.provinsi}>
                                            {item.provinsi}
                                        </Option>
                                    ))}
                                </Select>
                            </InputWrap>
                            {touched.provinsi && errors.provinsi ? (
                                <Error className="error">
                                    {errors.provinsi}
                                </Error>
                            ) : null}
                            <InputWrap>
                                <LabelWrap>
                                    <Label>Kota</Label>
                                </LabelWrap>
                                <Select
                                    name="kota"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                >
                                    {kota &&
                                        kota.map((item) => (
                                            <Option key={item}>{item}</Option>
                                        ))}
                                </Select>
                            </InputWrap>
                            {touched.kota && errors.kota ? (
                                <Error className="error">{errors.kota}</Error>
                            ) : null}
                            {/* 
                            <Label>Kecamatan/ Kelurahan</Label>
                            <Input
                                placeholder="Kecamatan/ Kelurahan"
                                type="text"
                            />
                            <Label>Kode Pos</Label>
                            <Input placeholder="Kode Pos" type="text" /> */}
                            <Label>Upload bukti pembayaran (.jpg, .png)</Label>
                            <InputFile
                                onChange={(e) =>
                                    setFieldValue("file", e.target.files[0])
                                }
                                onBlur={handleBlur}
                                type="file"
                                id="file"
                            />
                            {touched.file && errors.file ? (
                                <Error className="error">{errors.file}</Error>
                            ) : null}
                            <Button type="submit" disabled={isFetching}>
                                Order
                            </Button>
                        </Form>
                    </Left>
                    <Right>
                        <Summary>
                            <SummaryTitle>Pesanan Anda</SummaryTitle>
                            <Hr />
                            <SummaryItem>
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

                            <Hr />
                            <SummaryItem>
                                <SummaryItemText type="bold">
                                    Subtotal
                                </SummaryItemText>
                                <SummaryItemPrice>
                                    <b>
                                        <NumberFormat
                                            value={product.price}
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
                                        <div className="">
                                            Bank Central Asia{" "}
                                        </div>
                                        <div className="">27550723</div>
                                        <div className="">EzThrift</div>
                                    </PaymentDesc>
                                </PaymentInfo>
                                <PaymentInfo>
                                    <PaymentLogo src={mandiri} />
                                    <PaymentDesc>
                                        <div className="">Bank Mandiri </div>
                                        <div className="">177-224-3325</div>
                                        <div className="">EzThrift</div>
                                    </PaymentDesc>
                                </PaymentInfo>
                            </PaymentWrap>
                        </Summary>
                    </Right>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Checkout;
