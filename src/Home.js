import "./index.css";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Sliders from "./components/Slider";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Api from "./api/axiosClient";
function Home() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <Header></Header>
      <main className="px-4">
        <Sliders></Sliders>
        <Api></Api>
        <Newsletter></Newsletter>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default Home;
