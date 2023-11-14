import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" bg-hero bg-no-repeat bg-cover bg-center bg-fixed w-screen h-[100dvh] flex flex-wrap justify-center content-center">
      <div className="bg-concrete p-4 flex flex-col justify-between items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-32 h-32 text-alto "
        >
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-alto text-2xl p-4">You are logged in as GUEST</p>

        <Link
          className="text-concrete hover:text-alto hover:border-2 hover:border-alto bg-alto p-4 mt-8 hover:bg-concrete"
          to="/articles"
        >
          <h2 className=" text-center">Go to Articles</h2>
        </Link>
      </div>
    </div>
  );
};

export default Login;
