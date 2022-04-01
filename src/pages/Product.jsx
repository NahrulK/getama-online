import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 200;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 75%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-weight: 200;
  font-size: 20px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 2px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 10px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
  border: solid 1px teal;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: solid 2px teal;
  background-color: white;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://drive.google.com/uc?id=1YAWjnP64nnRO54MU8ypgzcBBgEXUo3Qh" />
        </ImgContainer>
        <InfoContainer>
          <Title>Kalitemu Super XL</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            voluptate fugiat quo fuga nesciunt natus earum libero a magni id est
            cupiditate placeat explicabo et, similique ad minima sapiente ipsam?
          </Desc>
          <Price>Rp. 1000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Warna Cat</FilterTitle>
              <FilterColor color="red" />
              <FilterColor color="teal" />
              <FilterColor color="brown" />
            </Filter>
            <Filter>
              <FilterTitle>Merek Cat</FilterTitle>
              <FilterSize>
                <FilterSizeOption>Tarta</FilterSizeOption>
                <FilterSizeOption>Nippon Paint</FilterSizeOption>
                <FilterSizeOption>Super Poll</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>TAMBAH KERANJANG</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
