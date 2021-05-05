import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import banner1 from "../assets/img/Banner01.png";
import banner2 from "../assets/img/Banner07.png";
import banner3 from "../assets/img/Banner08.png";

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: transparent;
  color: #fff;
  margin: 15px;
  font-size: 4em;
`;
const Sliders = () => {
  // const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const items = [
    {
      title: "banner 1",
      bg: banner1,
    },
    {
      title: "banner 2",
      bg: banner2,
    },
    {
      title: "banner 3",
      bg: banner3,
    },
  ];
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <section className="slider mb-4">
      <Carousel breakPoints={breakPoints}>
        {items.map((item, index) => (
          <Item key={index}>
            <a href="/">
              <img src={item.bg} alt="" />
            </a>
          </Item>
        ))}
      </Carousel>
    </section>
  );
};
export default Sliders;
