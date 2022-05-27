import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Button = styled.button`
  margin: 30px auto;
  margin-right: 30px;
  padding: 0;

  overflow: hidden;

  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);

  background-color: teal;
  color: #ecf0f1;

  transition: background-color 0.3s;
`;

const Span = styled.span`
  display: block;
  padding: 6px 7px;
  color: #34495e;
  font-family: Trebuchet, Arial, sans-serif;
  text-align: center;
  text-decoration: none;
`;

// const Links = styled.a`
//   text-decoration: none;
//   hover: red;
// `;

const ButtonItemscat = ({ item }) => {
  return (
    <Button>
      <Span>
        <Link
          to={`/products/${item.cat}`}
          style={{ "text-decoration": "none", color: "white" }}
        >
          {item.title}
        </Link>
      </Span>
    </Button>
  );
};

export default ButtonItemscat;
