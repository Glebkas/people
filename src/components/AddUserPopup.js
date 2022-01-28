import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddUserPopup(props) {
  return (
    <PopupWithForm
      name="add-user"
      title="New User"
      buttonCaption="Create"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        className="form__input"
        placeholder="Name"
        type="text"
        id="image-title"
        name="name"
        required
        minLength="1"
        maxLength="30"
      />

      <input
        className="form__input"
        placeholder="Email"
        type="email"
        name="email"
        required
        minLength="1"
        maxLength="30"
      />
      <input
        className="form__input"
        placeholder="Image link"
        type="url"
        id="image-url"
        name="link"
        required
      />
      <input
        className="form__input"
        placeholder="Location"
        type="text"
        id="location"
        name="location"
        required
      />
    </PopupWithForm>
  );
}

export default AddUserPopup;
