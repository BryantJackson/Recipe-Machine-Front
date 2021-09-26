import React, { useEffect, useState } from 'react';
import axios from 'axios'
// import RecipeCard from './components/recipe-card'
import DayPlan from './components/day-plan';
import StyledRecipeCard from './components/recipe-card.styled';

function App() {
  const [items, setItems] = useState(null)

  useEffect(() => {
      axios('http://127.0.0.1:5000/get_recipe/dinner')
      .then(response => {
        setItems(response.data)
        // console.log(response)
      })
  }, [])

  return (
    <div className="App">
      
      {items && <StyledRecipeCard recipe={items} />}

      {/* {items && items.map((item) => (
        <DayPlan meals={item}/>
      ))} */}
      {/* {items && <RecipeCard recipe={items}/>} */}
    </div>
  );
}

export default App;
