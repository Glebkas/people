import React from "react";

function Users(props) {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    async function getUsers() {
      const response = await fetch("https://randomuser.me/api/?results=10", {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });

      const data = await response.json();

      setUsers(data.results);
    }

    getUsers();
  }, []);

  const handleRemoveClick = (name) => {
    setUsers(users.filter((item) => item.name !== name));
  };

  const handleEditClick = (id) => {
    props.onEditProfileClick(id);
  };

  return (
    <div className="cards__list">
      {users.map((user) => (
        <li
          name={user.login.uuid}
          key={user.login.uuid}
          className="cards__list-item"
        >
          <div className="card">
            <button
              className="card__remove-button"
              onClick={() => handleRemoveClick(user.name)}
              type="button"
            ></button>
            <button
              className="card__edit-button"
              type="button"
              onClick={() =>
                handleEditClick(user.key)
              }
            ></button>
            <div className="card__top"></div>
            <img
              className="card__image"
              alt={user.name.first}
              src={user.picture.medium}
            />
            <div className="card__description">
              <h2 className="card__user-title">{user.name.title}</h2>
              <h2 className="card__name">{` ${user.name.first} ${user.name.last}`}</h2>
              <p className="card__location-top">{`${user.location.country}-${user.location.city}`}</p>
              <p className="card__location-bottom">
                {`${user.location.street.name} ${user.location.street.number}`}{" "}
              </p>
              <p className="card__email">{user.email} </p>
              <p className="card__id-number">{user.id.value} </p>

              <div className="card__like-container"></div>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
}

export default Users;
