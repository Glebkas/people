import React from "react";

import Card from "./Card";

function Main(props) {
  return (
    <main className="main">
      <section className="cards">
        <div className="cards__list">
          {props.cards.map((card) => (
            <li>{card.name}</li>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
