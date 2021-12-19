import React, {useState} from 'react';
import StyledRecipeCard from './recipe-card.styled';
import { ButtonContainer, PageContainer } from './containers.styled';
import { useHistory } from 'react-router-dom';
import { StyledButton, SecondaryButton, StyledSubmit } from './button.styled';
import { FaArrowLeft } from 'react-icons/fa';

function DayPlan(props) {
    const [editMode, setEditMode] = useState(false);
    const makePostRequest = props.makePostRequest;
    const selectedDay = props.dayId;
    const workingWeek = props.workingWeek;
    const meals = props.meals;
    const MealDate = Object.keys(meals);

    let history = useHistory();

    function handleClick() {
        history.push('/')
    }

    function handleEditMode() {
        setEditMode(!editMode);
    }

    function handleRecipeUpdate(event) {
        event.preventDefault();
        setEditMode(!editMode);

        const elements = [...event.target.elements];
        const checkedElements = elements.filter(element => element.localName === "input").map(filteredElement => {return filteredElement.checked});
        event.target.reset();

        makePostRequest(`replace_selected_recipes/${selectedDay}`, {'selected-items' : checkedElements})
    }

    return (
        
            <PageContainer>
                <form onSubmit={(e) => {handleRecipeUpdate(e)}}>
                <ButtonContainer>
                    <StyledButton onClick={handleClick} animationOffset={"-28px"}>
                        <FaArrowLeft />
                        <span>Go Back</span> 
                    </StyledButton>
                    <div style={{display: "flex", justifyContent: "space-evenly"}}>
                        <h2 style={{textAlign: "right", position: "static", fontSize: "35px", flexGrow: "1"}} >{MealDate}</h2>
                        { workingWeek !== 'previous-week' ? <div style={{display: "flex", flexGrow: "1", justifyContent: "flex-end"}}>
                            {!editMode && <SecondaryButton onClick={() => {handleEditMode()}}>Replace Recipes</SecondaryButton>}
                            {editMode && <SecondaryButton onClick={() => {handleEditMode()}}>Cancel</SecondaryButton>}
                            {editMode && <StyledSubmit baseColor={100} value="Update">Update</StyledSubmit>}
                        </div> : false}
                    </div>
                </ButtonContainer>
                <div>
                {meals[MealDate].map((meal, index) => {
                    return <StyledRecipeCard recipe={meal} date={MealDate} key={index} recipeId={index} editMode={editMode}/>
                })}
                </div>
                </form>
            </PageContainer>
        
    );
}

export default DayPlan;