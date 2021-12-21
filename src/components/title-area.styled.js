import styled from "styled-components";
import { css } from "styled-components";

export const TitleStyle = css`
    background-color: darkgray;
    border-radius: 5px; 
    padding-left: 5px;
    padding-right: 5px;
    max-height: 50px;
    cursor: pointer;

    color: whitesmoke;
    text-shadow: 0px 1px 3px rgb(0 0 0 / .95);
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 10%;
    white-space: nowrap;

    grid-area: "title";
    grid-template-columns: 1fr 1fr;
    display: grid;
    align-items: center;

    border-left: 4px solid #a2a2a2;
    border-bottom: 2px solid #a0a0a0;

    span {
        text-align: right;
        text-shadow: 0px 2px 8px rgb(0 0 0 / .75);
        font-weight: 600;
        font-style: oblique;
        font-size: 18px;
    }

`
export const TitleArea = styled.div`
    ${TitleStyle}

    @media screen and (max-width: 450px) {
        font-size: 0.8em;
        line-height: 0%;
    }
`;

export const StyledDateTitle = styled.div`
    ${TitleStyle}
    
    max-height: 60px;
    position: relative;
    z-index: 2;

    @media screen and (max-width: 450px) {
        font-size: 1rem;
    }
`;

export const StyledList = styled.ul`
    font-size: 13px;
    column-count: 3;
    
    display: flex;

    background-color: #50b3fa66;
    border-radius: 5px;
    box-shadow: inset 2px -1px 8px 2px #78bdf7d9;

    padding-top: 20px;
    padding-bottom: 15px;
    margin-top: -6px;
    max-height: 20px;
    position: relative;
    z-index: 1;
    
    list-style-type: none;

    li {
        color: black;
        padding-right: 20px;
        padding-left: 10px;
        margin-left: -25px;
        text-indent: -5px;
        flex: 1;
    }
    li:before {
        content: "- ";
        text-indent: -5px;
    }

    @media screen and (max-width: 450px) {
        font-size: 0.7rem;
        max-height: 40px;
    }
`