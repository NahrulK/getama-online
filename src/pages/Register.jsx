import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1524235975426-093c4bf9a327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80")
    center;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: solid 0.01px teal;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>DAFTAR/BUAT AKUN</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last-name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="konfirmasi password" />
          <Agreement>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga
            officia eveniet, quis, illum obcaecati non tempore illo ut accusamus
            alias fugiat repellendus. Expedita quas, commodi placeat ducimus
            eius amet?
          </Agreement>
          <Button>BUAT AKUN</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
