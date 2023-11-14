import "./App.css";

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
      <Header />
      <Routes>
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/topics/:topic" element={<Topics />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
