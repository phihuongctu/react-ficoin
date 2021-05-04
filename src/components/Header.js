import logo from "../assets/img/logo-ficoinmarket-black.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <section className="header">
      <div className="wrapper flex items-center px-4 justify-between ">
        <div className="logo mr-8">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="container-right flex items-center">
          <div className="search  ">
            <div className="bg-white flex items-center rounded-full shadow-xl">
              <input
                className="rounded-l-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none"
                id="search"
                type="text"
                placeholder="Search"
              />
              <div className="">
                <button className="text-white rounded-full p-3 hover:bg-blue-400 focus:outline-none flex items-center justify-center">
                  <AiOutlineSearch color="black"></AiOutlineSearch>
                </button>
              </div>
            </div>
          </div>
          <div className="noti ml-4">
            <button className=" text-white rounded-full hover:bg-blue-400 focus:outline-none w-10 h-10 flex items-center justify-center">
              <GrNotification></GrNotification>
            </button>
          </div>
          <div className="menu">
            <button className=" text-black rounded-full p-2 hover:bg-blue-400 focus:outline-none w-10 h-10 flex items-center justify-center">
              <GiHamburgerMenu></GiHamburgerMenu>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
