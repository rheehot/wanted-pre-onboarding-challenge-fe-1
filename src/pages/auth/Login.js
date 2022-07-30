import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Login() {
  const navigate = useNavigate();

  const gotodoList = () => {
    navigate("/todolist");
  };

  return (
    <Container>
      <SignUpBox>
        <Title>로그인</Title>
        <SignUpEmail type="text" name="email" placeholder="이메일" />
        <SignUpPw type="password" name="pw" placeholder="비밀번호" />
        <SignUpBtn onClick={gotodoList}>로그인하기</SignUpBtn>
      </SignUpBox>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  ${(props) => props.theme.flex.flexBox()}
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.lightGray};
`;

const SignUpBox = styled.div`
  ${(props) => props.theme.flex.flexBox("column")}
  padding: 20px;
  border: ${(props) => props.theme.borders.lightGray};
  border-radius: 5px;
  background-color: white;
`;

const Title = styled.h1`
  margin: 50px auto;
  font-size: 32px;
`;

const SignUpEmail = styled.input`
  height: 40px;
  width: 300px;
  margin: 5px 20px;
  padding: 0 5px;
  outline: none;
  border: ${(props) => props.theme.borders.lightGray};
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.lightGray};

  &:focus {
    border: ${(props) => props.theme.borders.gray};
  }
`;

const SignUpPw = styled(SignUpEmail)``;

const SignUpBtn = styled.button`
  width: 300px;
  margin: 20px auto;
  height: 40px;
  border: none;
  background-color: #1995f6;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;

  &:active {
    background-color: #b2dffc;
  }

  &:disabled {
    background-color: #b2dffc;
    cursor: default;
  }
`;
