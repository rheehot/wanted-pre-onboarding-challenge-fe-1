import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [userInputs, setUserInputs] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInputs({
      ...userInputs,
      [name]: value,
    });
  };

  const { email, password } = userInputs;
  const isInputCheck =
    email.includes("@") && email.includes(".") && password.length >= 8;

  const goSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/users/create", {
        email,
        password,
      });
      alert(res.data.message);
      navigate("/auth/login");
    } catch {
      alert("회원가입 실패");
    }
  };

  return (
    <Container>
      <SignUpBox>
        <Title>회원가입</Title>
        <SignUpEmail
          onChange={handleInput}
          type="text"
          name="email"
          placeholder="아이디(E-mail)을 입력해 주세요"
        />
        <SignUpPw
          onChange={handleInput}
          type="password"
          name="password"
          placeholder="비밀번호를 입력해 주세요"
        />
        <SignUpBtn disabled={!isInputCheck} onClick={goSignUp}>
          회원가입하기
        </SignUpBtn>
      </SignUpBox>
    </Container>
  );
}

export default Signup;

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
