import axios from "axios";

// const newsAPI = axios.create({
//   baseURL: "https://nc-news-zypp.onrender.com/api",
// });

export function getArticles() {
  return axios
    .get("https://nc-news-zypp.onrender.com/api/articles")
    .then(({ data }) => {
      return data;
    });
}
