import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { getHeadphoneById } from "../api";
import BasketCard from "../components/basketCard";

const BasketPage = () => {
  const [basketItemsInfo, setBasketInfo] = useState([]);
  const [basketItems, setBasketItems] = useState([]);
  const [countBasketItems, setCountBasketItems] = useState(0);

  useEffect(() => {
    const itemsInfo = JSON.parse(window.sessionStorage.getItem("basketItems"));

    if (!(itemsInfo === null)) {
      try {
        setBasketInfo(itemsInfo);
      } catch (e) {
        window.sessionStorage.removeItem("basketItems");
      }
    }
  }, []);
  useEffect(() => {
    if (basketItems.length === 0) {
      basketItemsInfo.map((info) => {
        let headphone = getHeadphoneById(info.id);
        if (headphone) {
          setBasketItems((prevState) => [...prevState, headphone]);
        }
      });
    }
    setCountBasketItems(
      basketItemsInfo.reduce((acc, item) => {
        return acc + item.count;
      }, 0)
    );
  }, [basketItemsInfo]);

  const findCountOfItem = (id) => {
    const itemInfo = basketItemsInfo.find((item) => item.id === id);
    return itemInfo.count;
  };
  const findSumOfItems = () => {
    return basketItems.reduce((acc, item) => {
      return (acc += item.price * findCountOfItem(item.id));
    }, 0);
  };

  const handleRemove = (id) => {
    const filteredItems = basketItems.filter((item) => item.id !== id);
    const filteredItemsInfo = basketItemsInfo.filter((item) => item.id !== id);
    setBasketItems(filteredItems);
    setBasketInfo(filteredItemsInfo);
    window.sessionStorage.setItem(
      "basketItems",
      JSON.stringify(filteredItemsInfo)
    );
  };

  const incrementItemCount = (id) => {
    const itemInfo = basketItemsInfo.find((item) => item.id === id);
    itemInfo.count += 1;
    const filteredBasketItemsInfo = basketItemsInfo.filter(
      (item) => item.id !== id
    );
    setBasketInfo([...filteredBasketItemsInfo, itemInfo]);
    window.sessionStorage.setItem(
      "basketItems",
      JSON.stringify([...filteredBasketItemsInfo, itemInfo])
    );
  };

  const decrementItemCount = (id) => {
    const itemInfo = basketItemsInfo.find((item) => item.id === id);
    if (itemInfo.count === 1) {
      handleRemove(id);
    } else {
      itemInfo.count -= 1;
      const filteredBasketItemsInfo = basketItemsInfo.filter(
        (item) => item.id !== id
      );
      setBasketInfo([...filteredBasketItemsInfo, itemInfo]);
      window.sessionStorage.setItem(
        "basketItems",
        JSON.stringify([...filteredBasketItemsInfo, itemInfo])
      );
    }
  };
  return (
    <>
      <Header countBasketItems={countBasketItems} />
      <main className="basket">
        <h1 className="basket__title">Корзина</h1>
        <div className="basket__wrapper">
          <ul className="basket-cards">
            {basketItems.map((product) => {
              const itemCount = findCountOfItem(product.id);
              return (
                <BasketCard
                  key={product.id}
                  itemData={product}
                  itemCount={itemCount}
                  handleRemove={handleRemove}
                  handleIncrement={incrementItemCount}
                  handleDecrement={decrementItemCount}
                />
              );
            })}
          </ul>
          {basketItems.length > 0 ? (
            <div className="basket__sidebar sidebar">
              <div className="sidebar__total">
                <span className="sidebar__total-title">ИТОГО</span>
                <span className="sidebar__total-price">{`${findSumOfItems()} ₽`}</span>
              </div>
              <button className="sidebar__button">Перейти к оформлению</button>
            </div>
          ) : (
            <p>Корзина пуста</p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BasketPage;
