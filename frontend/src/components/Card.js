import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser._id;

  const cardDeleteButtonClassName = `place__remove ${
    isOwn ? "" : "place__remove_hidden"
  }`;

  const isLiked = card.likes? (card.likes.some((i) => i === currentUser._id)) : (false);

  const cardLikeButtonClassName = `place__like ${
    isLiked ? "place__like_active" : ""
  }`;

  function handleCardClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <article className="place">
      <img
        className="place__image"
        alt={card.name}
        src={card.link}
        onClick={handleCardClick}
      />
      <button
        type="button"
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
      ></button>
      <div className="place__info">
        <h2 className="place__name">{card.name}</h2>
        <div className="place__like-section">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <span className="place__like-count">{card.likes ? card.likes.length : 0}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
