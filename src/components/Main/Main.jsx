import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import NavigateButtons from "../NavigateButtons/NavigateButtons";
import { storeData } from "../../assets/data/dummyData";
import Footer from "../Footer/Footer";
import ProductSection from "../ProductSection/ProductSection";

function Main() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const itemSet = new Set(storeData.map((item) => {
      return item.type;
    }));
    const itemList = [...itemSet];  // Changing Set to Array
    setItems(itemList);
  }, [])
  return (
    <div>
      <Navbar />
      <Slider />
      <NavigateButtons buttons={items} />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default Main;
