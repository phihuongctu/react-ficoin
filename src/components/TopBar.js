import { FaBeer } from "react-icons/fa";
const TopBar = () => {
  return (
    <section className="top-bar">
      <div className="container max-w-screen-xl px-4 ">
        <ul>
          <li className="flex items-center ">
            <span className="flex items-center">
              <span>
                <FaBeer />
              </span>
              <span>Market Cap:</span>
            </span>
            <span className="global_data"> $2,381.53 B</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TopBar;
