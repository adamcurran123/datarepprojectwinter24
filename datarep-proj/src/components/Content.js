import React from 'react';
import './MasterStyle.css';
// putting together the main landing page
const Content = () => {
  return (
    <div className="content-container">
      <h1>Welcome to Recipe Haven</h1>
      <p>Your go-to place for delicious recipes. Whether you're a beginner or a seasoned chef, we have something for everyone!</p>

      <div className="image-container">
        <h2>Featured Recipes:</h2>
        <div className="image-card">
          <img src="/stirfry.jpg" alt="Stir Fry" className="recipe-image" />
          <p>A healthy and quick stir-fry loaded with fresh vegetables and savory sauces.</p>
        </div>
        <div className="image-card">
          <img src="/plating.jpg" alt="Plating" className="recipe-image" />
          <p>Learn how to plate your dishes like a pro with our expert tips and techniques.</p>
        </div>
      </div>

      <section className="about-us">
        <h2>About Us</h2>
        <p>At Recipe Haven, we're passionate about making cooking easy and enjoyable for everyone. Our recipes are designed to bring out the best in your kitchen, no matter your experience level. Join us and start creating amazing dishes today!</p>
      </section>
    </div>
  );
};

export default Content;
