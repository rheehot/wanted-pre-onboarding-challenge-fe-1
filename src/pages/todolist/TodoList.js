import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

function Todolist() {
  const [boxToggle, setBoxToggle] = useState(false);
  const [todoInputs, setTodoInputs] = useState({
    id: "",
    title: "",
    content: "",
  });

  const onBox = () => {
    setBoxToggle(true);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setTodoInputs({
      ...todoInputs,
      [name]: value,
    });
  };

  const offBox = () => {
    setTodoInputs({
      id: "",
      title: "",
      content: "",
    });
    setBoxToggle(false);
  };

  return (
    <Container>
      <TodoListBox>
        <Title>To do List</Title>
        <InputBox>
          <TodoListTitle
            onChange={handleInput}
            isVaild={boxToggle}
            type="text"
            name="title"
            placeholder="제목"
            value={todoInputs.title}
          />
          <TodoListContent
            onChange={handleInput}
            isVaild={boxToggle}
            type="text"
            name="content"
            placeholder="내용"
            value={todoInputs.content}
          />
        </InputBox>
        <BtnBox>
          <SignUpBtn onClick={onBox}>작성하기</SignUpBtn>
          <SignUpBtn onClick={offBox} isVaild={boxToggle}>
            취소
          </SignUpBtn>
        </BtnBox>
      </TodoListBox>
    </Container>
  );
}

export default Todolist;

const Container = styled.div`
  ${(props) => props.theme.flex.flexBox()}
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.lightGray};
`;

const TodoListBox = styled.div`
  height: 400px;
  width: 350px;
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

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TodoListTitle = styled.input`
  height: 40px;
  width: 300px;
  margin: 5px 20px;
  padding: 0 5px;
  outline: none;
  border: ${(props) => props.theme.borders.lightGray};
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.lightGray};
  display: ${({ isVaild }) => (isVaild ? "block" : "none")};

  &:focus {
    border: ${(props) => props.theme.borders.gray};
  }
`;

const TodoListContent = styled.input`
  height: 100px;
  width: 300px;
  margin: 5px 20px;
  padding: 0 5px;
  outline: none;
  border: ${(props) => props.theme.borders.lightGray};
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.lightGray};
  display: ${({ isVaild }) => (isVaild ? "block" : "none")};

  &:focus {
    border: ${(props) => props.theme.borders.gray};
  }
`;

const BtnBox = styled.div`
  ${(props) => props.theme.flex.flexBox()}
`;

const SignUpBtn = styled.button`
  width: 100px;
  margin: 20px 20px;
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

  &:nth-child(2) {
    display: ${({ isVaild }) => (isVaild ? "block" : "none")};
  }
`;
