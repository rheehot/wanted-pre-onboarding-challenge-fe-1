import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

function TodoListDetail({ contentData }) {
  const { title, content, id } = contentData;
  const [todoInputs, setTodoInputs] = useState({
    title: title,
    content: content,
  });

  useEffect(() => {
    setTodoInputs({
      title: title,
      content: content,
    });
  }, [title, content]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setTodoInputs({
      ...todoInputs,
      [name]: value,
    });
  };

  const handleUpdate = async (id) => {
    const { title, content } = todoInputs;
    try {
      await axios.put(
        `http://localhost:8080/todos/${id}`,
        {
          title,
          content,
        },
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      alert("수정완료");
    } catch (error) {
      alert(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/todos/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      alert("삭제완료");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container>
      <InputBox>
        <TodoListTitle
          onChange={handleInput}
          type="text"
          name="title"
          placeholder="제목"
          value={todoInputs.title}
        />
        <TodoListContent
          onChange={handleInput}
          type="text"
          name="content"
          placeholder="내용"
          value={todoInputs.content}
        />
      </InputBox>
      <BtnBox>
        <SignUpBtn onClick={() => handleUpdate(id)}>수정</SignUpBtn>
        <SignUpBtn
          onClick={() => {
            handleDelete(id);
          }}
        >
          삭제
        </SignUpBtn>
      </BtnBox>
    </Container>
  );
}

export default TodoListDetail;

const Container = styled.div``;

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
`;
