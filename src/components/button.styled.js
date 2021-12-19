import styled, { css } from "styled-components";
import { StyledShadow } from "./containers.styled";

export const StyledButton = styled.button`
    ${StyledShadow}

    --shadow-color: ${props => props.shadowColor ? (props.shadowColor) : "210deg 50% 75%" };

    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-evenly;

    height: 50px;
    width: auto;

    white-space: nowrap;
    font-family: "Chakra Petch", sans-serif;

    border-radius: 10px;
    background: linear-gradient( 192deg,#0000001f 7%, #dfdfdf 30%, transparent 58%), 
                linear-gradient( 41deg,#efefef -20%,#00000012 3%,#f0f0f038 62%,#efefef 90%), 
                linear-gradient( 9deg,#6f6f6f -30% ,#00000036 15%,#f4f4f4 63%),
                #efefef;
    border: 0px;
    border-bottom: 1px solid #00000057;
    border-left: 1px solid #00000061;

    span {
        font-size: 24px;
        margin-left: -25px;
        transition: all 0.6s ease-out;
    }

    svg {
        font-size: 2em;
        padding-right: 5px;
        color: rgb(0 0 0 / 0);
        transition: all 0.6s ease-out;
    }

    :hover {
        ${props => !props.disabled ? css`
            transform: scale(1.04, 1.04);
            border-bottom: 2px solid #777777dd;
            border-left: 2px solid #777777dd;
            box-shadow: -3px 5px 27px -10px #000000bb;

            span {
                transition: all 0.6s ease-out;
                margin-left: 2px;
            }

            svg {
                transition: all 0.6s ease-out;
                color: rgb(0 0 0 / 0.8);
            }

            margin-right: ${props => props.animationOffset ? props.animationOffset : "0px"}
        ` : false
        }
    }
    transition: all 0.6s ease-out;

    ${props => props.disabled ? css`transition: none;` : false}

`;

const SecondaryButtonStyle = css`
    ${StyledShadow};

    --base-color: ${props => props.baseColor ? (props.baseColor) : "35"};

    font-family: 'Roboto Condensed' , sans-serif;
    font-size: 1em;
    position: relative;
    z-index: 10;

    align-self: center;
    height: 45px;
    width: 7em;
    border-radius: 20px;
    border: 1px solid #b2884e;

    background: linear-gradient( 113deg, transparent -9%, hsl(0deg 0% 0% / 16%) 0%, transparent 23%), 
                linear-gradient( 72deg, transparent -9%, hsl(0deg 0% 0% / 7%) 0%, transparent 23%), 
                linear-gradient( 6deg, hsl(var(--base-color), 68%, 66%) 17%, hsl(var(--base-color), 68%, 90%) 65%, hsl(var(--base-color), 68%, 81%) 110%);

    :before {
        content: "";
        display: block;
        
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: -1;

        transform: scaleY(.2);
        
        border-radius: 20px;
        background: linear-gradient(0deg, #FFFFFF26 0%, #FFFFFFee 50%, #FFFFFF26 100%);
        opacity: 0;
        transition: all 0.3s;
    }
    :hover {
        color: black;
        z-index: 10;
    }

    :hover::before {
        background: linear-gradient(0deg, #FFFFFF18 0%, #FFFFFFdd 50%, #FFFFFF18 100%);
        opacity: 1;
        transform: scaleY(1);
        transition: transform 0.4s cubic-bezier(.89,1.25,.9,.77);
    }

    :active {
        transform: translate(-1px, 1px);
    }
`

export const SecondaryButton = styled.button`
    ${StyledShadow};
    ${SecondaryButtonStyle}
`;

export const StyledSubmit = styled.button.attrs(props => ({ type: 'submit', value: (props.value ? props.value : "Submit")}))`
    ${StyledShadow}
    ${SecondaryButtonStyle}
`