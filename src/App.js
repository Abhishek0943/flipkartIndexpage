
import styles from "./App.module.css"
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Footer from "./components/footer/Footer";
import Model from "./components/model/Model";
import { FaAngleDown } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function App() {
  const [isSidebar, setIsSidebar] = useState(false)
  const [value, setValue] = useState("")
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main} style={{ height: "70px" }}>
          <div className={styles.logo}>
            <img src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo-500x281.png" style={{width:"100px", marginTop:"10px"}} alt="" />
          </div>
          <div className={styles.search}>
            <IoSearch className={styles.searchIcon} />
            <input type="text" placeholder="Search for product, Brand and More" className={styles.searchInput} />
          </div>
          <div className={`${styles.options} ${isSidebar && styles.active}`} onClick={() => setIsSidebar(false)}>
            <div className={styles.login}>
              Login
            </div> <div className={styles.login}>
              Cart
            </div> <div className={styles.login}>
              Become to seller
            </div>
          </div>
          {
            isSidebar &&
            <div className={styles.background} onClick={() => setIsSidebar(false)}></div>
          }
          <FaBars className={styles.bar} onClick={() => setIsSidebar(true)} />

        </div>
      </div >
      <div style={{ height: "calc(100vh - 70px)", background: "#e6e6e6", maxWidth: "100vw", paddingTop: "10px" }}>
        <div style={{ display: "flex", flexDirection: "column", position: "relative", zIndex: "3" }}>


          <div className={`${styles.main} ${styles.topBar}`} style={{ padding: "20px", alignItems: "center", backgroundColor: "white", borderRadius: "5px", display: "flex", justifyContent: "space-between", gap: "20px", alignItems: "center", overflowX: "auto" }}>
            <div>
              <img src="https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" alt="" />
              <p>Grocery</p>
            </div>
            <div>
              <img src="https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100" alt="" />
              <p>Mobile</p>
            </div>
            <div>
              <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100" alt="" />
              <p>Fashion</p>
            </div>
            <div onMouseEnter={() => {
              setValue("Appliances")
            }}>
              <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="" />
              <p>Electronic <FaAngleDown style={{ paddingTop: "4px" }} /></p>
            </div>
            <div onMouseEnter={() => {
              setValue("Furniture")
            }}>
              <img src="https://rukminim1.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100" alt="" />
              <p>Furniture <FaAngleDown style={{ paddingTop: "4px" }} /></p>

            </div>
            <div>
              <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100" alt="" />
              <p>Appliances </p>
            </div>
            <div>
              <img src="https://rukminim1.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100" alt="" />
              <p>Travel</p>
            </div>
            <div>
              <img src="https://rukminim1.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100" alt="" />
              <p>Beauty, Toys</p>
            </div>
            <div>
              <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100" alt="" />
              <p>Two Wheelers</p>
            </div>

          </div>
          {
            value === "Furniture" ? <ul className={`${styles.main} ${styles.ul}`} style={{ gap: "0px", background: "white", right: "0px", flexDirection: "column", alignItems: "flex-start", padding: "20px", borderTop: "2px solid gray" }}>
              <li>Home Furnishings</li>
              <li>Furniture Studio</li>
              <li>Living Room Furniture</li>

            </ul> : value === "Appliances" ? <ul className={`${styles.main} ${styles.ul}`} style={{ gap: "0px", background: "white", right: "0px", flexDirection: "column", alignItems: "flex-start", padding: "20px", borderTop: "2px solid gray" }}>
              <li>Audio</li>
              <li>Camera</li>
              <li>Tv</li>
              <li>Gaming</li>
              <li>Laptop</li>
              <li>Power Bank</li>
            </ul> : null
          }

        </div>
        <div className={styles.main} style={{ display: "block", marginTop:"20px" }}>
          <Slider {...settings}>

            <div className="bannerImg">
              <img src="https://rukminim1.flixcart.com/fk-p-flap/480/80/image/cd7772dcad0158e8.jpg?q=20" style={{ minWidth: "100%", height: "100%", }} alt="" />
            </div>
            <div className="bannerImg">
              <img src="https://rukminim1.flixcart.com/fk-p-flap/480/80/image/b2132b52f8b2c7dd.jpg?q=20" style={{ minWidth: "100%", height: "100%", }} alt="" />
            </div>

          </Slider>
          <div style={{ width: "100%" }}></div>
        </div>
      </div>
      {
        value &&
        <Model onMouseEnter={() => setValue("")} />
      }
      <Footer />
    </>
  );
}


export default App;
