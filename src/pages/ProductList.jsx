import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";
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

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Produk: </FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>- Kategori Barang -</Option>
            <Option>Genteng </Option>
            <Option>Batu Bata</Option>
            <Option>Gerabah</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>- Jenis Barang -</Option>
            <Option>Genteng Buwung</Option>
            <Option>Genteng Kecil</Option>
            <Option>Genteng Besar</Option>
            <Option>Genteng Bali</Option>
            <Option>Genteng Mentah</Option>
            <Option>Batu Bata Biasa</Option>
            <Option>Batu Bata Premuim</Option>
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
