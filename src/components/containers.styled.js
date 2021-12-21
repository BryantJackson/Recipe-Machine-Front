import styled from "styled-components";
import { css } from "styled-components";

const HorizontalResizeRule = css`

    @media (min-width: 1155px) {
        max-width: 1113px;
        min-width: 1113px;
    }
`

export const StyledShadow = css`

    --shadow-color: 210deg 50% 75%;
    --shadow-elevated:
        -0.3px 0.5px 1.7px hsl(var(--shadow-color) / 0.33),
        -0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.33),
        -2px 4px 5px -1.7px hsl(var(--shadow-color) / 0.33),
        -4.8px 9.7px 12.2px -2.5px hsl(var(--shadow-color) / 0.33),
        -2px 5px 8px -3px rgb(0 0 0 / .25),
        -0.5px 0.5px 2.7px 0.8px rgb(0 0 0 / 0.2);

    
    box-shadow: var(--shadow-elevated);
`

export const Container = styled.div`
    ${HorizontalResizeRule}
    div {
    ${StyledShadow}
    }

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.1fr 2.5fr; 

    grid-template-areas: "title" "content";

    margin-left: 15px;
    margin-right: 7px;
    border-radius: 5px;

    transition: max-height 0.8s ease-in-out;

    ${ props => props.opened ? css`
        max-height: 1200px; 
        margin-bottom: 5px;

        @media (max-width: 450px) {
            margin-right: 10px;
        }
        ` : css`

        :hover {
            transform: translateY(-2px);
        }

        transition: transform 0.3s linear, max-height 0.8s ease-in-out;

        max-height: 41px; 
        margin-bottom: 20px;

        @media (max-width: 450px) {
            margin-bottom: 0px;
            margin-right: 10px;
        }
        
        `
    }
`;

export const PageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    overflow-x: hidden;

    @media (min-width: 1155px) {
        grid-template-columns: 0.7fr;
    }

    h2 {
        position: relative;
        top: -25px;
        left: 25px;
        height: 25px;
        max-width: 1140px;

        font-family: 'Yanone Kaffeesatz', sans-serif;
        font-size: 50px;
        text-shadow: -3.3px 2px 5px #00000052;

        transition: font-size 0.6s ease-in-out;

        span {
            text-decoration: underline;
            position: absolute;
            top: 45px;
            right: 45px;
            font-size: 0.85em;
        }

        @media screen and (max-width: 720px) {
            font-size: 35px;
            top: -15px;
            left: 30px;

            span { top: 35px; }
        }

        @media screen and (max-width: 450px) {
            font-size: 1.7rem;
            span{
                font-size: 1.3rem;
            }
        }
    }

    background-color: #CFE7F7db;
    border-left: 8px solid lightskyblue;
    border-top: 2px solid lightskyblue;
    border-radius: 15px;
    box-shadow: -2px 5px 30px 7px #00000047, -3px 3px 5px -1px #0000001f;
`

export const LinkContainer = styled.div`

    ${HorizontalResizeRule}
    ${StyledShadow}
    
    border-radius: 5px;
    margin-left: 15px;
    margin-right:  7px;
`

export const ButtonContainer = styled.div`

    display: grid;
    grid-template-columns: 0.1fr 1fr;
    max-height: 200px;
    margin-right: 7px;
    margin-left: 15px;
    align-items: center;

    h2 {
        text-align: right; 
        position: static; 
        font-size: 35px; 
        flex-grow: 1;
    }

    @media screen and (max-width: 450px) {
        padding-top: 10px;
        padding-bottom: 50px;
        max-width: 350px;

        h2{
            position: absolute;
            top: 50px;
        }
    }
`