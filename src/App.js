import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";
import Topics from "./components/Topics";
import ArticleList from "./components/ArticleList";
import User from "./components/User";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/user" element={<User />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
