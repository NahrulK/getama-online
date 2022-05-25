import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { categories } from "../data";
import ButtonItemscat from "../components/ButtonItemscat";
const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("sesuai");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  console.log(cat, filters, sort);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Menampilkan : {cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Produk: </FilterText>

          {categories.map((item) => (
            <ButtonItemscat item={item} key={item.id} />
          ))}

          <Select name="size" onChange={handleFilters}>
            <Option disabled>- Pilih Ukuran -</Option>
            <Option value="S">S</Option>
            <Option value="M">M</Option>
            <Option value="L">L</Option>
            <Option value="XL">XL</Option>
            <Option value="F">F</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Urutkan: </FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="sesuai">Paling Sesuai</Option>
            <Option value="terbaru">Terbaru</Option>
            <Option value="terendah">Harga Terendah</Option>
            <Option value="tertinggi">harga Tertinggi</Option>
            <Option value="jenis">Jenis Produk</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
