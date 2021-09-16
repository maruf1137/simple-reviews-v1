import React from "react";
import Review from "./Review";
import { ImHome } from "react-icons/im";
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviws</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
