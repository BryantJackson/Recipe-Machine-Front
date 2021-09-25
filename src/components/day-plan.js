import React from 'react';
import RecipeCard from './recipe-card';

function DayPlan({meals}) {
    const MealDate = Object.keys(meals)

    return (
        <div>
            {meals[MealDate].map((meal) => {
                return <RecipeCard recipe={meal} date={MealDate}/>
                // console.log(meal)
            })}
            {/* {console.log(meals[MealDate])} */}
            
        </div>
    );
}

export default DayPlan;