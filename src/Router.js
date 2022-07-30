import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import TodoList from "./pages/TodoList/TodoList";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todoList" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
