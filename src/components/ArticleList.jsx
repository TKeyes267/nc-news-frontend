import { useState, useEffect } from "react";
import { getArticles } from "../Api";
import { Link, useSearchParams } from "react-router-dom";
import moment from "moment";
import Topics from "./Topics";
import Filter from "./Filter";

const ArticleList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [searchParams] = useSearchParams();

  const topic = searchParams.get("topic");
  const [order, setOrder] = useState("");
  const [sortBy, setSortBy] = useState("");

  // const handleOrderByChange = (event) => {
  //   setOrder(event.target.value);
  // };

  // const handleSortByChange = (event) => {
  //   setSortBy(event.target.value);
  // };

  useEffect(() => {
    setIsLoading(true);

    getArticles(topic, sortBy, order).then((data) => {
      console.log(sortBy);
      setArticles(data);
      setIsLoading(false);
    });
  }, [topic, sortBy, order]);

  console.log(articles);

  return (
    <main className="">
      <div className="flex flex-row justify-between bg-alto border-b-4 border-concrete">
        <Topics setArticles={setArticles} />
        <Filter
          sortBy={sortBy}
          setSortBy={setSortBy}
          order={order}
          setOrder={setOrder}
        />
      </div>
      <main className=" w-screen h-screen">
        <ul className="bg-plaster flex flex-row flex-wrap justify-between">
          {isLoading ? (
            <h2 className="font-poppins m-8 p-8 text-3xl">Loading...</h2>
          ) : (
            articles.map((article) => {
              return (
                <div className="bg-alto border-4 border-concrete xl:w-[310px] lg:w-[250px] m-8 flex flex-wrap hover:scale-105 hover:shadow-xl shadow-tar">
                  <Link
                    to={`/articles/${article.article_id}`}
                    className="flex flex-col justify-between bg-concrete"
                  >
                    <div className="text-plaster bg-concrete px-2 ">
                      <h3 className="pb-2 text-xl font-poppins border-b-2 border-alto py-2">
                        {article.title}
                      </h3>
                      <div className="flex justify-between">
                        <p className="text-sm py-2  font-poppins">
                          By {article.author}
                        </p>
                        <div className="flex flex-row items-center">
                          {article.votes > -1 ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 text-green"
                            >
                              <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 text-red"
                            >
                              <path d="M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.773c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z" />
                            </svg>
                          )}

                          <p className="text-sm py-2 pl-4 font-poppins">
                            {article.votes}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className=" bg-alto">
                      <img
                        src={article.article_img_url}
                        alt="article cover"
                        className="object-cover overflow-hidden h-48 w-96 "
                      />
                      <div className="flex flex-row justify-between items-center border-t-4 border-concrete">
                        <div className="flex flex-row px-2 items-center ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 text-concrete"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                              clipRule="evenodd"
                            />
                          </svg>

                          <p className="pl-2 font-poppins text-sm text-concrete">
                            {moment(article.created_at).format("MM/DD/YYYY")}
                          </p>
                        </div>
                        <div className="flex flex-row pl-4 pr-2 bg-concrete items-center border-l-4 border-concrete">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 text-alto"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 00-.266.112L8.78 21.53A.75.75 0 017.5 21v-3.955a48.842 48.842 0 01-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z"
                              clipRule="evenodd"
                            />
                          </svg>

                          <p className="p-2 font-poppins text-sm text-alto">
                            {article.comment_count}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          )}
        </ul>
      </main>
    </main>
  );
};

export default ArticleList;
