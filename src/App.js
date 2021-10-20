import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DayPlan from './components/day-plan';
import StyledRecipeCard from './components/recipe-card.styled';

function App() {
  const [items, setItems] = useState(null)

  const api = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    withCredentials: true
  })

  api.interceptors.request.use(
    function(config) {
      config.headers.withCredentials = true;
      return config
    },
    function(err) {
      return Promise.reject(err)
    }
  )

  useEffect(() => {
      api.get('/')
      .then(response => {
        setItems(response.data)
      })
  }, [])

  return (
    <div className="App">
      
      {/* {items && <StyledRecipeCard recipe={items} />} */}
      <h1>Meals</h1>

      {items && items.map((item) => {
        return <div>
          <p>{Object.keys(item)[0]}</p>
          <DayPlan meals={item}/>
          </div>
      })}
      {/* {items && <RecipeCard recipe={items}/>} */}
    </div>
  );
}

export default App;
