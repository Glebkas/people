import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Users from "./components/Users";
import EditProfilePopup from "./components/EditProfilePopup";
import AddUserPopup from "./components/AddUserPopup";

function App() {
  const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
  const [isAddUserPopupOpen, setIsAddUserPopupOpen] = React.useState(false);

  function handleAddUserClick() {
    setIsAddUserPopupOpen(true);
  }

  function handleEditProfileClick(id) {
    setIsEditProfileOpen(true);
    console.log(id)
  }

  function handleUpdateUser(user) {
    console.log(user)
  }

  function closeAllPopups() {
    setIsEditProfileOpen(false);
    setIsAddUserPopupOpen(false);
  }

  return (
    <>
      <Header onaddProfileClick={handleAddUserClick} />
      <main className="main">
        <section className="cards">
          <Users onEditProfileClick={handleEditProfileClick}></Users>
        </section>
      </main>
      <Footer />
      <EditProfilePopup
        isOpen={isEditProfileOpen}
        onClose={closeAllPopups}
        onUserInfoUpdate={handleUpdateUser}
      />
      <AddUserPopup isOpen={isAddUserPopupOpen} onClose={closeAllPopups} />
    </>
  );
}

export default App;
