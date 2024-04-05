import React, { useEffect, useState } from "react";
import SectionCards from "../components/sectionCards";
import { getHeadphones, getWirelessHeadphones } from "../api";
import Header from "../components/header";
import Footer from "../components/footer";

const MainPage = () => {
  const headphonesList = getHeadphones();
  const wirelessHeadphonesList = getWirelessHeadphones();
  const [basketItems, setBasketItems] = useState([]);
  const [countBasketItems, setCountBasketItems] = useState(0);
  const addBasketItem = (newItemId) => {
    let newItem;

    const sameItem = basketItems.find((item) => {
      return newItemId === item.id;
    });
    if (sameItem) {
      newItem = { id: newItemId, count: sameItem.count + 1 };
      const filteredBasketItems = basketItems.filter(
        (item) => item.id !== newItemId
      );
      setBasketItems([...filteredBasketItems, newItem]);
    } else {
      newItem = { id: newItemId, count: 1 };
      setBasketItems((prevState) => [...prevState, newItem]);
    }
  };
  useEffect(() => {
    window.sessionStorage.setItem("basketItems", JSON.stringify(basketItems));
    setCountBasketItems(
      basketItems.reduce((acc, item) => {
        return acc + item.count;
      }, 0)
    );
  }, [basketItems]);

  return (
    <>
      <Header countBasketItems={countBasketItems} />
      <main>
        <SectionCards
          title={"Наушники"}
          products={headphonesList}
          addBasketItem={addBasketItem}
        />
        <SectionCards
          title={"Беспроводные наушники"}
          products={wirelessHeadphonesList}
          addBasketItem={addBasketItem}
        />
      </main>
      <Footer />
    </>
  );
};
export default MainPage;
