import styled from 'styled-components';
import TimeProgressBar from './TimeProgressBar';
import Button from './Button';
import closeIcon from '../assets/img/closeIcon.svg'

const IconCloseContainer = styled.div`
    position: absolute;
    top: var(--icon-position);
    right: var(--icon-position);
    width: var(--icon-position);
    height: var(--icon-position);
    z-index: 2;
`;

const TimerContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    right: 88px;
    top: 10px;
    z-index: 2;

    @media (max-width: 425px) {
        right: auto;
        top: auto;
    }

    & > p {
        width: 27px;
        height: 32px;
        margin: 4px 8px 0 0;
        font-size: 1em;
        text-align: center;
        color: var(--black);
    }
`;

const TimerBarContainer = styled.div`
    position: relative;
    width: 100%;
    height: 48px;
    font-family: 'Centrale Sans';
    font-size: 14px;
    background-color: var(--light-wisteria);

    @media (max-width: 1440px) {
        max-width: 1440px;
    }

    @media (max-width: 425px) {
        width: 425px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const TimerBar = ({ days, hours, minutes, seconds}) => {
    return (
        <TimerBarContainer>
            <TimeProgressBar />
            <TimerContainer>
                <p>{days}<br/>days</p>
                <p>{hours}<br/>hrs.</p>
                <p>{minutes}<br/>min</p>
                <p>{seconds}<br/>sec</p>
            </TimerContainer>
            <IconCloseContainer>
                <Button type="button" onClick={() => null} placement="center">
                    <img src={closeIcon} alt="Close"/>
                </Button>
            </IconCloseContainer>
        </TimerBarContainer>
    );
}

export default TimerBar;
