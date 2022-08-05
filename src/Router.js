import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import TodoList from "./pages/todolist/TodoList";
import TodoListDetail from "./pages/todolist/TodoListDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/todoList" element={<TodoList />} />
        <Route path="/todoList/:id" element={<TodoListDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
