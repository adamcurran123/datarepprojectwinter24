import React from 'react';
import './Content.css';

const Content = () => {
  return (
    <div className="content-container">
      <h1>Welcome to Recipe Haven</h1>
      <p>Your go-to place for delicious recipes from around the world. Whether you're a beginner or a seasoned chef, we have something for everyone!</p>
      
      <section className="recipe-section">
        <h2>Featured Recipes</h2>
        <ul>
          <li><strong>Spaghetti Bolognese:</strong> A rich and hearty Italian classic made with ground beef, tomatoes, and herbs.</li>
          <li><strong>Chicken Curry:</strong> A flavorful and spicy curry with tender chicken pieces, served with rice.</li>
          <li><strong>Vegetable Stir-fry:</strong> A quick and healthy stir-fry with colorful vegetables and a savory sauce.</li>
        </ul>
      </section>
      
      <section className="about-us">
        <h2>About Us</h2>
        <p>At Recipe Haven, we believe that cooking should be fun and accessible for all. Our mission is to provide easy-to-follow recipes that anyone can enjoy, no matter their skill level.</p>
      </section>
    </div>
  );
}

export default Content;
