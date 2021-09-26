import styled from "styled-components";
import {IconContext} from 'react-icons';
import {FiPlus, FiMinus} from 'react-icons/fi'


const Container = styled.div`
    display: grid;
    grid-template-columns: 0.9fr;
    grid-template-rows: 0.2fr 1.9fr; 
    color : blue;

    grid-template-areas: "title" "content";
`;

const TitleArea = styled.div`
    background-color: darkgray;
    border-radius: 5px; 
    padding-left: 5px;
    padding-right: 5px;

    color: whitesmoke;
    text-shadow: 1px 2px 5px #000022;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 10%;

    grid-area: "title";
    grid-template-columns: 1fr 1fr;
    display: grid;
    align-items: center;

    span {
        text-align: right;
    }

`;

const Content = styled.div`
    color: black;
    background-color: lightgray;
    display: grid;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 1fr;
    grid-column-gap: 20px;
`;

const ImgContainer = styled.div`
    display: flex;
    flex: 0 1 5%
    
    justify-content: end;
    background-color: whitesmoke;

    img {
        width: 50%;
        height: auto;
        margin-top: 3%;
        margin-right: 3%;
    }
`
const RecipeText = styled.div`
    background-color: whitesmoke;
    border-radius: 5px;
    margin: 10px;
    padding-right: 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    .bottom {
        grid-column: 1 / -1 ;
    }
`
const RecipeTextBottom = styled.div`
    background-color: whitesmoke;
    border-radius: 5px;
    margin: 10px;
    padding-right: 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    grid-column: 1 / -1 ;
    
`

// const TextBox = styled.span``;

function StyledRecipeCard(props) {   
    const recipe = props.recipe
    const date = "2020 date blah"
    
    return (
        <Container>
            <TitleArea>
                <p>{recipe.name}</p>
                <span>2021 bitches</span>
            </TitleArea>
            <Content>
                <RecipeText>
                    <ol>
                        {recipe.directions.map((direct) => (
                                    <li>{direct}</li>
                                ))}
                    </ol>
                </RecipeText>
                <div>
                    <ImgContainer>
                        <RecipeText>
                            <ul>
                                <li>Calories: {recipe.calories}</li>
                                <li>Prep Time: {recipe.prep}</li>
                                <li>Cook Time: {recipe.cook}</li>
                                <li>Ready In: {recipe["ready in"]}</li>
                            </ul>
                        </RecipeText>
                        <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4019381.jpg" />
                    </ImgContainer>
                </div>
                <RecipeTextBottom>
                    <ul>
                        {recipe.ingredients.map((ing) => (
                                        <li>{ing}</li>
                                    ))}
                    </ul>
                </RecipeTextBottom>
            </Content>
        </Container>
    );

}

export default StyledRecipeCard;