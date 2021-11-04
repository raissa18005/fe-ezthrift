import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@material-ui/core";
import Footer from "../components/Footer";

const Container = styled.div`
    margin-top: 59px;
`;
const FaqContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 20px 0;
    width: 70%;
`;

const Title = styled.h1`
    margin: 30px;
`;
const Extra = styled.div`
    font-weight: bold;
    margin: 20px;
`;

const Help = () => {
    return (
        <Container>
            <Navbar />
            <FaqContainer>
                <Wrapper>
                    <Title>Frequently Asked Questions (FAQ)</Title>
                    <Accordion
                        style={{
                            backgroundColor: "#F4F1DE",
                            margin: "10px 0",
                            width: "100%",
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>
                                Kenapa saya harus registrasi di EzThrift?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Registrasi di website kami memberikan anda
                                kemudahan dalam berbelanja. Dengan anda
                                terdaftar sebagai pelanggan, anda lebih memudah
                                dalam memantau pesanan anda dan kostumisasi
                                alamat sehingga meminimalkan waktu anda pada
                                saat Checkout pesanan anda.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        style={{
                            backgroundColor: "#F4F1DE",
                            margin: "10px 0",
                            width: "100%",
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>
                                Pengiriman barang setelah pembayaran ?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Setelah anda melakukan pembayaran pesanan,
                                barang akan kami kirimkan paling lambat 2 hari
                                setelah pembayaran diterima. Pesanan akan sampai
                                paling lambat 6 hari setelah pembayaran, jika
                                setelah 6 hari pesanan belum sampai, silahkan
                                hubungi customer service kami untuk menanyakan
                                pesanan anda.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        style={{
                            backgroundColor: "#F4F1DE",
                            margin: "10px 0",
                            width: "100%",
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>
                                Metode pengiriman apa yang tersedia pada
                                EzThrift?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Metode pengiriman Untuk saat ini, kami hanya
                                menyediakan metode pengiriman dari Kurir J&T
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        style={{
                            backgroundColor: "#F4F1DE",
                            margin: "10px 0",
                            width: "100%",
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>
                                Bagaimana jika saya ingin menjual barang saya?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Cara penjualan barang yang iingin dijual, anda
                                masuk terlebih dahulu ke profil kemudian masuk
                                ke halaman dashboard penjual, setelah itu anda
                                mengisi form penjualan terlebih dahulu. Jika
                                sudah anda bisa menghubungi bagian EzThrift pada
                                kontak Whatsapp yang sudah tersedia untuk
                                pengecekan barangnya. Setelah selesai dan sudah
                                terverifkasi barangnya nanti akan ada card baju
                                yang sudah anda ajukan.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        style={{
                            backgroundColor: "#F4F1DE",
                            margin: "10px 0",
                            width: "100%",
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>
                                Bagaimana jika saya ingin berdonasi pakaian?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                cara nya anda dapat menghubungi kami terlebih
                                dahulu melalui form penjualan dan jika anda
                                ingin berdonasi pakaian yang sudah ada pada
                                card, anda bisa langsung memilih nya dan
                                kemudian klik donasi dan lanjutkan ke
                                pembayaran.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Extra>
                        Apakah pertanyaan anda sudah terjawab? Jika tidak
                        hubungi Contact yang sudah tertera
                    </Extra>
                </Wrapper>
            </FaqContainer>
            <Footer />
        </Container>
    );
};

export default Help;
