import { BsMoonFill, BsFillSunFill, BsCart3 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { pages } from "../constants/constant";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../useGlobleContext";
import { useEffect } from "react";

const Navbar = () => {
  const {
    showMenu,
    setShowMenu,
    darkMode,
    setDarkMode,
    activePage,
    totalAmount,
  } = useGlobalContext();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    }
  }, []);

  return (
    <>
      <header
        className="bg-neutral dark:bg-light_black py-2 padding"
        onClick={() => setShowMenu(() => false)}
      >
        <div className="max-w-6xl mx-auto flex justify-center sm:justify-end">
          <p className="text-slate-400 text-sm dark:text-slate-300 font-semibold mr-6">
            Hello, demo user
          </p>
          <Link to={"/login"}>
            <button
              type="button"
              className="text-sm text-light_blue border-[1px] uppercase border-light_blue rounded-lg px-2 font-semibold hover:bg-light_blue hover:text-slate-300 dark:text-light_pink dark:border-light_pink dark:hover:text-black dark:hover:bg-light_pink"
            >
              login
            </button>
          </Link>
        </div>
      </header>
      <nav className="w-full bg-light_gray dark:bg-dark relative">
        <div className="max-w-6xl mx-auto flex justify-between items-center padding py-2">
          <div className="flex justify-start">
            <Link
              to={"/"}
              className="bg-light_blue text-3xl font-semibold text-light_gray px-4 rounded-md hover:bg-blue-600 hidden lg:flex dark:bg-light_pink dark:text-dark"
            >
              C
            </Link>
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                className="text-2xl hover:bg-slate-300 px-4 py-2 rounded-md active:scale-95 dark:text-slate-300 dark:hover:bg-slate-700"
                onClick={() => setShowMenu((prev) => !prev)}
              >
                <RxHamburgerMenu />
              </button>
            </div>
            <div>
              <ul
                className={`flex flex-col bg-light_gray w-44 p-3 rounded-xl ${
                  showMenu
                    ? "absolute lg:hidden -bottom-[12.3rem] left-8"
                    : "hidden"
                } dark:bg-dark`}
              >
                {pages.map((page, index) => (
                  <li key={index}>
                    <Link
                      to={page.url}
                      className={`text-sm w-full flex justify-start py-1 px-2 rounded-lg dark:text-slate-300 ${
                        activePage === page.page
                          ? "bg-neutral text-slate-300 dark:bg-light_black"
                          : "text-slate-800 hover:bg-slate-300 dark:hover:bg-slate-800 "
                      } `}
                    >
                      {page.page}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul className="hidden lg:flex">
            {pages.map((page, index) => (
              <li key={index}>
                <Link
                  to={page.url}
                  className={`text-sm px-4 py-2 rounded-md dark:text-slate-300 ${
                    activePage === page.page
                      ? "bg-neutral text-slate-300 dark:bg-light_black"
                      : "text-slate-800 hover:bg-slate-300 dark:hover:bg-slate-800 "
                  } `}
                >
                  {page.page}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 text-dark_gray items-center dark:text-slate-300">
            <div
              className="cursor-pointer"
              onClick={() => {
                document.body.classList.toggle("dark");
                setDarkMode((prev) => {
                  localStorage.setItem("dark", !prev);
                  return !prev;
                });
              }}
            >
              {darkMode ? <BsFillSunFill /> : <BsMoonFill />}
            </div>

            <Link
              to={"/cart"}
              className="text-2xl px-3 py-3 rounded-full hover:bg-slate-300 relative dark:hover:bg-slate-600"
            >
              <BsCart3 />
              <p className="text-xs text-slate-200 absolute top-1 right-1 bg-light_blue px-2 rounded-lg dark:bg-light_pink dark:text-black">
                {totalAmount}
              </p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
