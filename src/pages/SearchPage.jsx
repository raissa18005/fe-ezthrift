import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import CategoriesMenu from "../components/CategoriesMenu";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { useLocation } from "react-router";
import SearchedProducts from "../components/SearchedProducts";

const Container = styled.div`
    margin-top: 59px;
`;

const Wrapper = styled.div`
    display: flex;
`;
const OtherPages = styled.div`
    flex: 4;
`;

const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-style: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;
const Option = styled.option``;

const SearchPage = () => {
    // const [isLoading, setIsLoading] = useState(true);
    const [searchResults, setSearchResults] = useState([]);
    // const [searchText, setSearchText] = useState("");
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
    const location = useLocation();
    let searchText = location.state.searchText.searchText;

    // console.log(location.state.searchText.searchText);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get(`/products`);
                setProducts(res.data.filter((p) => p.status === "selling"));
                // setSearchText(location.state.searchText.searchText);
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

    console.log(searchText);

    // useEffect(() => {
    //     let prevSearch = prevProps.location.state.searchText;
    // }, [searchText]);

    // const componentDidUpdate = (prevProps) => {
    //     let prevSearch = prevProps.location.state.searchText;
    //     let newSearch = this.props.location.state.searchText;
    //     if (prevSearch !== newSearch) {
    //         this.handleSearch();
    //     }
    // };

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    return (
        <Container>
            <Navbar />
            <Wrapper>
                {/* <CategoriesMenu /> */}
                <OtherPages>
                    <Title>{searchText}</Title>
                    <FilterContainer>
                        {/* <Filter>
                            <FilterText>Filter Products:</FilterText>
                            <Select name="color" onChange={handleFilters}>
                                <Option disabled>Color</Option>
                                <Option>white</Option>
                                <Option>black</Option>
                                <Option>red</Option>
                                <Option>blue</Option>
                                <Option>yellow</Option>
                                <Option>green</Option>
                            </Select>
                            <Select name="size" onChange={handleFilters}>
                                <Option disabled>Size</Option>
                                <Option>XS</Option>
                                <Option>S</Option>
                                <Option>M</Option>
                                <Option>L</Option>
                                <Option>XL</Option>
                            </Select>
                        </Filter> */}
                        <Filter>
                            <FilterText>Sort Products:</FilterText>
                            <Select onChange={(e) => setSort(e.target.value)}>
                                <Option value="newest">Newest</Option>
                                <Option value="asc">Price (asc)</Option>
                                <Option value="desc">Price (desc)</Option>
                            </Select>
                        </Filter>
                    </FilterContainer>
                    <SearchedProducts
                        searchText={searchText}
                        filters={filters}
                        sort={sort}
                    />
                </OtherPages>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default SearchPage;
