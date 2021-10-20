import React from 'react';
import StyledRecipeCard from './recipe-card.styled';

function DayPlan({meals}) {
    const MealDate = Object.keys(meals)

    return (
        <div>
            {meals[MealDate].map((meal) => {
                return <StyledRecipeCard recipe={meal} date={MealDate}/>
                // console.log(meal)
            })}
            {/* {console.log(MealDate)} */}
            
        </div>
    );
}

export default DayPlan;