import logo from "../assets/img/banner-newsletter.png";
const Newsletter = () => {
  return (
    <div className=" newsletter my-8 rounded-xl xl:flex xl:justify-end bg-gradient-to-r from-from-newsletter via-via-newsletter to-black ">
      <div className="container sm:mx-auto">
        <div className="block xl:flex justify-between xl:items-center lg:items-center md:flex">
          <div className="w-11/12 xl:w-4/12 mx-auto xl:mx-0 md:w-5/12">
            <h1 className="text-white text-3xl font-extrabold mb-3 pt-12 xl:pt-0">
              Be the first to know about Crypto news everyday
            </h1>
            <p className="text-lg text-footer mb-6">
              Get crypto analysis, news and updates right to your inbox! Sign up
              here so you don't miss a single newsletter.
            </p>
            <div className="flex w-full flex-wrap">
              <div className="w-full">
                <div className="flex flex-col mb-3">
                  <input
                    type="email"
                    id="email"
                    placeholder="johnstark97@gmail.com"
                    className="focus:outline-none focus:border-indigo-700 border-gray-300 border rounded-sm py-2 outline-none pl-2 pr-2"
                  />
                </div>
                <button
                  type="submit"
                  className="focus:outline-none bg-indigo-700 hover:bg-indigo-600 text-white text-base w-full py-3 px-6 rounded"
                >
                  Subscriber
                </button>
              </div>
            </div>
          </div>
          <div className="w-11/12 xl:w-5/12 mx-auto py-12 xl:mx-0 xl:mt-0 flex justify-end md:w-5/12  relative ">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
