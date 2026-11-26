import React from "react";

function HomePage() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="hero-label">SMARTER SHOPPING STARTS HERE</span>

        <h1>
          Compare Prices.
          <br />
          <span>Save More!</span>
        </h1>

        <p>
          Find affordable everyday products from local stores
          and markets. Compare prices and make smarter
          shopping decisions with UyMahal.
        </p>

        <div className="hero-buttons">
          <a href="#categories" className="primary-btn">
            Explore Products →
          </a>

          <a href="#comparison" className="secondary-btn">
            Compare Prices
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <strong>Easy</strong>
            <span>Price Checking</span>
          </div>
          <div>
            <strong>Smart</strong>
            <span>Shopping Choices</span>
          </div>
          <div>
            <strong>Local</strong>
            <span>Store Prices</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-shopping-icon">🛒</div>
        <div className="floating-item item-one">🍚</div>
        <div className="floating-item item-two">🥚</div>
        <div className="floating-item item-three">🥬</div>

        <div className="hero-note">
          <span>💰</span>
          <div>
            <strong>Shop wisely!</strong>
            <small>Compare before you buy.</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;