import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

import TodoListDetail from "./TodoListDetail";

function TodoListTitles() {
  const [todoData, setTodoData] = useState({});
  const [contentData, setContentData] = useState();

  const handleTitle = async (id) => {
    try {
      const res = await axios.get(`http://localhost:8080/todos/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setContentData(res.data.data);
    } catch (error) {
      alert(error);
    }
  };

  const { data } = todoData;

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
      <TitleBox>
        {contentData && <TodoListDetail contentData={contentData} />}
        {data?.map((data, id) => {
          return (
            <Title key={id} onClick={() => handleTitle(data.id)}>
              {data.title}
            </Title>
          );
        })}
      </TitleBox>
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
  padding: 10px;
`;

const Title = styled.div`
  font-weight: bold;
  margin: 10px 0;
  border-bottom: 1px solid lightgray;

  cursor: pointer;

  &:hover {
    color: gray;
  }
`;
