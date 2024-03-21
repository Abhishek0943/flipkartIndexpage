
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
import { FaAngleRight } from "react-icons/fa6";
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
            <img src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo-500x281.png" style={{ width: "100px", marginTop: "10px" }} alt="" />
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
      <div style={{ background: "#e6e6e6", maxWidth: "100vw", paddingTop: "10px", paddingBottom:"70px" }}>
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
        <div className={styles.main} style={{ display: "block", marginTop: "20px", width: "90% !important" }}>
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
        <div className={styles.main} style={{ display: "block", marginTop: "50px", background: "white", padding: "20px", borderRadius: "5px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: "1.5rem", fontWeight: "500" }}>Best of Electronics</p>  <div style={{ background: "blue", height: "30px", aspectRatio: "1", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%" }}><FaAngleRight color="white" /></div>
          </div>


          <div className={`${styles.main} ${styles.section}`} style={{ margin: "20px 0px", alignItems: "center", backgroundColor: "white", borderRadius: "5px", display: "flex", justifyContent: "space-between", gap: "20px", alignItems: "center", overflowX: "auto" }}>
            <div>
              <img src="https://static-ecapac.acer.com/media/catalog/product/v/2/v227q_3_2__1.png?optimize=high&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500&format=jpeg" alt="" />
              <p>LED Monitor</p>
              <p>$250</p>
            </div>
            <div>
              <img src="https://in.canon/media/image/2023/02/06/d2a14a492cb94cbab491012c291fd6f5_EOS+R8+RF24-50mm+f4.5-6.3+IS+STM+Front+Slant.png" alt="" />
              <p>Camera</p>
              <p>$10.5</p>
            </div>
            <div>
              <img src="https://5.imimg.com/data5/IR/AL/MY-7950336/viewsonic-dlp-projector-pa500s-500x500.jpg" alt="" />
              <p>Projector</p>
              <p>$16.12</p>
            </div>
            <div >
              <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="" />
              <p>Laptop</p>
              <p>$32.34</p>
            </div>
            <div >
              <img src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/54/1624431/1.jpg?7440" alt="" />
              <p>Projector</p>
              <p>$58</p>

            </div>
            <div>
              <img src="https://5.imimg.com/data5/SELLER/Default/2021/3/PA/ZQ/LT/121439134/epson-colore-printer-inkjet-500x500.jpg" alt="" />
              <p>Printer </p>
              <p>$50</p>
            </div>
            <div>
              <img src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/78/8635331/1.jpg?7680" alt="" />
              <p>Monitor</p>
              <p>$12.3</p>
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/I/618zZ7u3sUL._SX522_.jpg" alt="" />
              <p>MageGee Portable</p>
              <p>$49.99</p>
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/I/61XULBEea2L._SX522_.jpg" alt="" />
              <p>Keychron K8 Pro</p>
              <p>$94.99</p>
            </div>

          </div>
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
