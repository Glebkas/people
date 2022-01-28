import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUserInfoUpdate({
      name,
      location,
      email,
    });
  }

  return (
    <PopupWithForm
      className="popup popup_type_edit-profile"
      name="edit-profile"
      title="Edit profile"
      buttonCaption="Save"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="form__input"
        placeholder="Name"
        type="text"
        id="profile-name"
        name="name"
        maxLength="40"
        minLength="3"
        onChange={handleNameChange}
        value={name || ""}
        required
      />
      <span id="profile-name-error" className="form__error"></span>
      <input
        className="form__input"
        placeholder="Email"
        type="Email"
        id="email"
        name="email"
        maxLength="200"
        minLength="2"
        onChange={handleEmailChange}
        value={email || ""}
        required
      />
      <span id="profile-about-me-error" className="form__error"></span>
      <input
        className="form__input"
        placeholder="Location"
        type="text"
        id="location"
        name="location"
        maxLength="200"
        minLength="2"
        onChange={handleLocationChange}
        value={location || ""}
        required
      />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
