import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

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
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Produk: </FilterText>
          <Select>
            <Option disabled selected>
              - Kategori Barang -
            </Option>
            <Option>Genteng </Option>
            <Option>Batu Bata</Option>
            <Option>Gerabah</Option>
          </Select>
          <Select>
            <Option disabled selected>
              - Jenis Barang -
            </Option>
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
          <Select>
            <Option selected>Paling Sesuai</Option>
            <Option>Terbaru</Option>
            <Option>Harga Terendah</Option>
            <Option>harga Tertinggi</Option>
            <Option>Jenis Produk</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
