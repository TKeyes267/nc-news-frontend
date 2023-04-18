import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";
import ArticleList from "./components/ArticleList";
import User from "./components/User";

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/articles"
            element={
              <ArticleList articles={articles} setArticles={setArticles} />
            }
          />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
