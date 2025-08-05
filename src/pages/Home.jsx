import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Bring Nature to Your Desk</h1>
          <p>Beautiful plants to refresh your space and mind.</p>
          <div className="quotes">
  <p>“Plants give us oxygen for the lungs and for the soul.”</p>
  <p>“To plant a garden is to believe in tomorrow.”</p>
</div>

          <button className="hero-btn">Rent Now</button>
        </div>

        <div className="hero-image">
          <img src="/plants/intro.png" alt="Plants Collection" />
        </div>
      </section>

      {/* New About Section */}
      <section className="about">
        <div className="about-left">
          <h2>Bringing Nature to Your Home</h2>
        </div>
        <div className="about-right">
          <p>
            We offer a wide variety of houseplants, succulents, and air plants 
            to brighten your home and enhance your well-being. Whether you're a 
            seasoned plant parent or just starting your green journey, we have 
            the perfect plant for you.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
