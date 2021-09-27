import styled from "styled-components";
import {IconContext} from 'react-icons';
import {FiPlus, FiMinus} from 'react-icons/fi'


const Container = styled.div`
    max-width: 880px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 2.5fr; 

    grid-template-areas: "title" "content";
`;

const Heading  = styled.h4`
    padding-left: 25px;
    line-height: 0%;
    margin-bottom: 0px;
`

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
    white-space: nowrap;

    grid-area: "title";
    grid-template-columns: 1fr 1fr;
    display: grid;
    align-items: center;

    span {
        text-align: right;
    }

`;

const Content = styled.div`
    background-color: lightgray;
    border-radius: 5px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1.8fr 0.25fr;
    grid-column-gap: 10px;
    
`;

const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin-right: 10px;
    margin-top: 10px;
    min-height: 96%;
    
    justify-content: end;
    background-image: url("https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4019381.jpg");
    background-size: cover;
    

    img {
        width: 100%;
        height: auto;
    }

    div {
        background-color: #5d5555b5;
        border-radius: 5px;
        color: whitesmoke;
        box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);   
    }
`
const RecipeText = styled.div`
    background-color: whitesmoke;
    border-radius: 5px;
    margin: 10px;
    margin-bottom: 0px;
    padding-right: 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    li {
        padding-bottom: 10px;
    }
`
const RecipeTextBottom = styled.div`

    background-color: whitesmoke;
    border-radius: 5px;
    margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    grid-column: 1 / -1 ;
    
    ul {
        column-count: 2;
    }

    li {
        padding-bottom: 5px;
    }
    
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
                    <Heading>Directions:</Heading>
                    <ol>
                        {recipe.directions.map((direct) => (
                                    <li>{direct}</li>
                                ))}
                    </ol>
                </RecipeText>
                <ImgContainer>
                    {/* <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4019381.jpg" /> */}
                    <div>
                        <Heading>Info:</Heading>
                        <ul>
                            <li>Calories: {recipe.calories}</li>
                            <li>Prep Time: {recipe.prep}</li>
                            <li>Cook Time: {recipe.cook}</li>
                            <li>Ready In: {recipe["ready in"]}</li>
                        </ul>
                    </div>
                </ImgContainer>
                <RecipeTextBottom>
                    <Heading>Ingredients:</Heading>
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