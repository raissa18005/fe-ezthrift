import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get(
                    cat
                        ? cat === "All"
                            ? `/products`
                            : `/products?category=${cat}`
                        : "/products"
                );
                setProducts(res.data);
            } catch (err) {}
        };
        getProducts();
    }, [cat]);
    const selling = products.filter((p) => p.status === "selling");

    useEffect(() => {
        cat &&
            setFilteredProducts(
                selling.filter((item) =>
                    Object.entries(filters).every(
                        ([key, value]) => item[key] === value
                        // ([key, value]) => item[key]includes(value)
                    )
                )
            );
    }, [products, cat, filters]);

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

    return (
        <Container>
            {cat
                ? filteredProducts.map((item) => (
                      <Product item={item} key={item._id} />
                  ))
                : selling
                      .slice(0, 8)
                      .map((item) => <Product item={item} key={item._id} />)}
        </Container>
    );
};

export default Products;
