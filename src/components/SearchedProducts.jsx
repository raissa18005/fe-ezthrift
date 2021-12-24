import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const NotFound = styled.div`
    width: 100%;
    padding: 50px 0;
    text-align: center;
`;

const SearchedProducts = ({ searchText, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    // console.log(searchText);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get(`/products`);
                setProducts(res.data.filter((p) => p.status === "selling"));
            } catch (err) {}
        };
        getProducts();
    }, []);

    useEffect(() => {
        setSearchResults(
            products.filter((p) =>
                p.title.toLowerCase().includes(searchText.toLowerCase())
            )
        );
    }, [products, searchText]);

    useEffect(() => {
        searchText &&
            setFilteredProducts(
                searchResults.filter((item) =>
                    Object.entries(filters).every(
                        ([key, value]) => item[key] === value
                        // ([key, value]) => item[key]includes(value)
                    )
                )
            );
    }, [products, searchText, filters, searchResults]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);

    // console.log(filteredProducts);

    return (
        <Container>
            {searchResults.length <= 0 && (
                <NotFound>
                    <h2>Hasil Tidak Ditemukan</h2>
                </NotFound>
            )}
            {filteredProducts.map((item) => (
                <Product item={item} key={item._id} />
            ))}
        </Container>
    );
};

export default SearchedProducts;
