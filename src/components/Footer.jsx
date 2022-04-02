import {
  Facebook,
  GitHub,
  Instagram,
  MailOutlined,
  Phone,
  Room,
  YouTube,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>GETAMA</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iure
          neque quos quia. Fugit quaerat quidem reiciendis maxime aliquam unde
          quasi repellat vero dolorem, obcaecati autem dignissimos minus
          suscipit modi.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="C4302B">
            <YouTube />
          </SocialIcon>
          <SocialIcon color="21262C">
            <GitHub />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Daftar Link</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Genteng Baja Ringan</ListItem>
          <ListItem>Produk Tanah Liat</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Berita</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Cart</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Kebon Dewa, Desa Kalianyar,
          Kab. Lombok Timur, NTB 83663
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +62 877 6280 4486
        </ContactItem>
        <ContactItem>
          <MailOutlined style={{ marginRight: "10px" }} />{" "}
          khayattullah73@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
