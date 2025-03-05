
import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <img src="/images/image-omelette.jpeg" alt="Omelette" />

        <div className="banner">
          <h1>Simple Omelette Recipe</h1>
          <p className="description">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
              to perfection, optionally filled with your choice of cheese, vegetables, or meats.
          </p>
          <article className="prepTime">
            <h3>Preparation time</h3>
              <ul>
                <li><strong>Total:</strong> Approximately 10 minutes</li>
                <li><strong>Preparation:</strong> 5 minutes</li>
                <li><strong>Cooking:</strong> 5 minutes</li>
              </ul>
          </article>
        </div>
        <div className="ingredient">
          <h2>Ingredients</h2>
            <ul>
              <li>2-3 large asdasdasdasd</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>
        </div>

        <div className="instructions">
          <h2>Instructions</h2>
            <ol>
              <li><strong>Beat the eggs</strong>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
              You can add a tablespoon of water or milk for a fluffier texture.</li>
              <li><strong>Heat the pan</strong>: Place a non-stick frying pan over medium heat and add butter or oil.</li>
              <li><strong>Cook the omelette</strong>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
              the eggs evenly coat the surface.</li>
              <li><strong>Add fillings (optional)</strong>: When the eggs begin to set at the edges but are still slightly runny in the 
              middle, sprinkle your chosen fillings over one half of the omelette.</li>
              <li><strong>Fold and serve</strong>: As the omelette continues to cook, carefully lift one edge and fold it over the 
              fillings. Let it cook for another minute, then slide it onto a plate.</li>
              <li><strong>Enjoy</strong>: Serve hot, with additional salt and pepper if needed.</li>
            </ol>
        </div>

        <div className="nutrition">
          <h2>Nutrition</h2>
          <p>The table below shows nutritional values per serving without the additional fillings.</p>
          <article>
            <ul>
                <li>Calories <span>277kcal</span></li>
                <li>Carbs <span>0g</span></li>
                <li>Protein <span>20g</span></li>
                <li>Fat <span>22g</span></li>
            </ul>
          </article>
        </div>
      </div>
      <div className="attribution"> Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor. </a>
        <br />
        Coded by <a href="#">Siomeow</a>.
      </div>
    </>
  )
}

export default App

