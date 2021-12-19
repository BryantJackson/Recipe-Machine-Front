import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { StyledButton } from './button.styled';
import { MdMenu } from 'react-icons/md';
import Cookies from 'js-cookie';

const StyledModal = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isAnimationActive, setIsAnimationActive] = useState(false)
    const [pastWeekDisabled, setPastWeekDisabled] = useState(true)

    const toggleOpenModal = () => {
        !isModalOpen ? setIsModalOpen(true) : setIsModalOpen(false);
    }

    const handleClick = (button) => {
        props.setCurrentUrl('/')
        props.setWorkingWeek(button.getAttribute('label'))
    }


    useEffect(() => {
        if(Cookies.get('previous-week')) {
            setPastWeekDisabled(false)
        }
    }, [])

    return (
        <ModalContainer>
            <ModalMenu opened={isModalOpen}>

                <StyledButton shadowColor={'238deg 96% 68%'} label='upcoming-week' onClick={(e) => {handleClick(e.target)}} >View Upcoming Week</StyledButton>
                <StyledButton shadowColor={'238deg 96% 68%'} label='current-week' onClick={(e) => {handleClick(e.target)}} >View Current Week</StyledButton>
                <StyledButton shadowColor={'238deg 96% 68%'} disabled={pastWeekDisabled} label='previous-week' onClick={(e) => {handleClick(e.target)} }>View Previous Week</StyledButton>
                <StyledButton shadowColor={'238deg 96% 68%'} onClick={() => {props.clickFunc()}}>Get New Mealplan</StyledButton>
                
            </ModalMenu>
            <ModalButton onClick={() => {toggleOpenModal()}} 
                        onAnimationIteration={() => {setIsAnimationActive(false)} }
                        isActive={isAnimationActive}
                        onMouseEnter={() => {setIsAnimationActive(true)}} >
                <MdMenu />
            </ModalButton>
        </ModalContainer>
    )
}

const jiggle = keyframes`
    from {
        left: 0px;
    }
    5% {
        left: 2px;
    }
    10% {
        left: -2px;
    }
    25% {
        left: 2px;
    }
    40% {
        left: -1px;
    }
    80% {
        left: 1px;
    }
    100% {
        left: 0px;
    }
`;

const ModalButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    z-index: 1501;

    background-color: #fcfcff;
    border-radius: 7px;
    border: 1px solid black;
    box-shadow: inset 2px -2px 12px -5px #000000d4, 
                -3px 4px 9px 0px rgb(0 0 0 / 31%);
    width: 40px;
    height: 40px;
    cursor: pointer;

    animation: ${props => props.isActive ? jiggle : null} 1s linear infinite;
    
    svg {
        height: 2em;
        width: 2em;
    }
`;

const ModalContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: -40px;
    padding-top: 10px;
    padding-right: 15px;
`

const ModalMenu = styled.div`

        display: grid;
        grid-template-rows: 0.25fr 0.25fr 0.25fr 0.25fr;
        align-items: center;
        justify-content: center;

        max-width: 250px;
        max-height: 350px;
        height: 1000px;
        width: 1000px;

        background-color: #979bfd;
        border: 1px solid black;
        box-shadow: -3px 10px 30px 0px rgb(0 0 0 / 0.35);

        position: relative;
        z-index: 1500;
        margin-bottom: -110%;

        ${props => props.opened ? css`display: grid` : css`display: none` }
    
`

export default StyledModal