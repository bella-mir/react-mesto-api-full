import { useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useForm } from "../hooks/useForm";

function EditProfilePopup(props) {

  const controlInput = useForm();

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    controlInput.setValues({
      name: currentUser.name,
      about: currentUser.about,
    });
  }, [currentUser, props.isOpen]);


  const handleSubmit = (e) => {
    const { name, about } = controlInput.values;
    e.preventDefault();
    props.onUpdateUser({
      name,
      about
    });
  };

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="form__input"
        type="text"
        id="name"
        name="name"
        placeholder="Имя"
        required
        minLength="2"
        maxLength="40"
        x={controlInput.handleChange}
        value={controlInput?.values?.name || ''}
      />
      <span className="form__error" id="name2-error"></span>
      <input
        className="form__input"
        type="text"
        id="occupation"
        name="about"
        placeholder="Профессия"
        required
        minLength="2"
        maxLength="200"
        onChange={controlInput.handleChange}
        value={controlInput?.values?.about || ''}
      />
      <span className="form__error" id="occupation-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
