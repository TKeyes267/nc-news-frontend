import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-zypp.onrender.com/api",
});

export const getArticles = (topic, sort_by, order) => {
  let path = `/articles`;
  if (topic) path += `?topic=${topic}`;
  if (sort_by) path += `?sort_by=${sort_by}`;
  if (order) path += `?order=${order}`;

  return newsApi.get(path).then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchVotes = (article_id, value) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: value })
    .then(({ data }) => {
      return data.article;
    });
};

export const postComment = (article_id, body, username) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, {
      body: body,
      username: username,
    })
    .then(({ data }) => {
      return data;
    });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`).catch((err) => {
    console.log(err);
  });
};
