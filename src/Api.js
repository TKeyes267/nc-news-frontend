import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-zypp.onrender.com/api",
});

export const getArticles = () => {
  return newsApi
    .get("/articles")
    .then(({ data }) => {
      return data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getArticleById = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    })
    .catch((err) => {
      console.log(err);
    });
};
