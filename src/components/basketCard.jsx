import React from "react";

const BasketCard = ({
  itemData,
  itemCount,
  handleRemove,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <li className="basket-cards__item basket-card">
      <button
        className="basket-card__remove-btn"
        onClick={() => handleRemove(itemData.id)}
      ></button>
      <div className="basket-card__info">
        <img
          src={itemData.img}
          alt={itemData.title}
          className="basket-card__img"
        />
        <div className="basket-card__text-info">
          <span className="basket-card__title">{itemData.title}</span>
          <span className="basket-card__price">{itemData.price} ₽</span>
        </div>
      </div>

      <div className="basket-card__footer">
        <div className="basket-card__actions actions">
          <button
            className="actions__item actions__decrement"
            onClick={() => handleDecrement(itemData.id)}
          ></button>
          {itemCount}
          <button
            className="actions__item actions__increment"
            onClick={() => handleIncrement(itemData.id)}
          ></button>
        </div>
        <div className="basket-card__real-price">
          {itemCount * itemData.price} ₽
        </div>
      </div>
    </li>
  );
};

export default BasketCard;
