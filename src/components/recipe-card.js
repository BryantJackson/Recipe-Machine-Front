
function RecipeCard(props) {   
    const recipe = props.recipe
    const date = props.date
    
    return (
        <div className='container'>
            <div className='title-area'>
                <div className='recipe-name'>{recipe.name}</div>
                <div className='datetime'>{date}</div>
            </div>
            <div className='content'>
                <div className='recipe-info'>
                    <div className='ingredients'>
                        <ul>
                            {recipe.ingredients.map((ing) => (
                                <li>{ing}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='info'>
                        <ul>
                            <li>Calories: {recipe.calories}</li>
                            <li>Prep Time: {recipe.prep}</li>
                            <li>Cook Time: {recipe.cook}</li>
                            <li>Ready In: {recipe["ready in"]}</li>
                        </ul>
                    </div>
                </div>
                <div className='directions'>
                    <ol>
                    {recipe.directions.map((direct) => (
                                <li>{direct}</li>
                            ))}
                    </ol>
                </div>
            </div>
        </div>
    );

}

export default RecipeCard;