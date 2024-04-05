import React from "react";

const SectionCards = ({ title, products, addBasketItem }) => {
  return (
    <section className="cards">
      <h2 className="cards__title">{title}</h2>
      <ul className="cards__list">
        {products.map((product) => (
          <li key={product.id} className="card">
            <img src={product.img} alt={product.title} className="card__img" />
            <span className="card__title">{product.title}</span>
            <span className="card__price">{product.price} ₽</span>
            <span className="card__rate">{product.rate}</span>
            <button
              className="card__btn"
              onClick={(e) => {
                e.preventDefault();
                addBasketItem(product.id);
              }}
            >
              Купить
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionCards;
