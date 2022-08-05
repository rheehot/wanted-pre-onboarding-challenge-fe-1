import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

function TodoListTitles() {
  const [todoData, setTodoData] = useState({});
  const [contentData, setContentData] = useState();

  const { data } = todoData;
  console.log(contentData);

  const handleTitle = async (id) => {
    try {
      const res = await axios.get(`http://localhost:8080/todos/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setContentData(res.data);
    } catch (error) {
      alert(error);
    }
  };

  const getTodoList = async () => {
    try {
      const res = await axios.get("http://localhost:8080/todos", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setTodoData(res.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <TodoListBox>
      {data?.map((data, i) => {
        return (
          <TitleBox key={i}>
            <Title onClick={() => handleTitle(data.id)}>{data.title}</Title>
            <ContentBox>
              <Content>{data.content}</Content>
              <BtnBox>
                <Btn>수정</Btn>
                <Btn>삭제</Btn>
              </BtnBox>
            </ContentBox>
          </TitleBox>
        );
      })}
    </TodoListBox>
  );
}

export default TodoListTitles;

const TodoListBox = styled.div`
  width: 350px;
  padding: 20px;
  border: ${(props) => props.theme.borders.lightGray};
  border-radius: 5px;
  background-color: white;
`;

const TitleBox = styled.div`
  ${(props) => props.theme.flex.flexBox("column", "", "space-between")}
  margin: 10px 0;
  border-bottom: 1px solid lightgray;
  padding: 10px;
`;

const ContentBox = styled.div`
  margin-top: 10px;
`;

const Content = styled.div``;

const Title = styled.div`
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

const BtnBox = styled.div`
  text-align: left;
  margin-top: 10px;
`;

const Btn = styled.button`
  margin: 0 3px;
  padding: 3px;
  border: none;
  background-color: #1995f6;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:active {
    background-color: #b2dffc;
  }
`;
