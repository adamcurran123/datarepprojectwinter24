import './read.css';

const Read = () => {
  const recipes = [
      { id: 1, name: "Spaghetti Bolognese", description: "A classic Italian pasta dish with rich tomato sauce." },
      { id: 2, name: "Chicken Curry", description: "A spicy and savory curry with tender chicken pieces." },
      { id: 3, name: "Vegetable Stir-fry", description: "A quick and healthy stir-fry loaded with fresh veggies." },
  ];

  return (
      <div>
          <h3>Recipes</h3>
          <ul>
              {recipes.map((recipe) => (
                  <li key={recipe.id}>
                      <h4>{recipe.name}</h4>
                      <p>{recipe.description}</p>
                  </li>
              ))}
          </ul>
      </div>
  );
};

export default Read;
