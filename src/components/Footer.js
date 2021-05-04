import logo from "../assets/img/logo-ficoinmarket.svg";

const Footer = () => {
  return (
    <section className="footer">
      <footer className="footer-1 bg-footer pt-12 px-4">
        <div className="container mx-auto ">
          <div className="md:flex md:flex-wrap md:-mx-4">
            <div className=" md:w-full lg:w-2/5 xl:mt-0 xl:ml-auto">
              <div className="flex  mb-4 xl:justify-start">
                <a href="/">
                  <img src={logo} alt="Logo" />
                </a>
              </div>
              <p className="">
                Top cryptocurrency prices and charts, listed by market
                capitalization
              </p>
            </div>

            <div className=" md:w-1/3 mt-8  lg:w-1/5 lg:mt-0">
              <h5 className="text-xl font-bold mb-6">COMPANY</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Cool stuff
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Random feature
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Team feature
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Stuff for developers
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Another one
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div className="  md:w-1/3 mt-8  lg:w-1/5 lg:mt-0  ">
              <h5 className="text-xl font-bold mb-6">SUPPORT</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Resource
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Resource name
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Another resource
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div className=" md:w-1/3 lg:w-1/5 mt-8 lg:mt-0 ">
              <h5 className="text-xl font-bold mb-6">SOCIAL</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Team
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Locations
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Privacy
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className=" py-4 mt-4 border-t">
            <p className="text-footer">
              © 2021 FiCoinMarket. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};
export default Footer;
