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
    z-index: 2;

    @media (min-width: 320px) {
        right: auto;
        top: auto;
    }

    @media (min-width: 768px) {
        right: 88px;
        top: 10px;
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
    height: 48px;
    font-size: 14px;
    background-color: var(--light-wisteria);

    @media (min-width: 320px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const TimerBar = ({ days, hours, minutes, seconds}) => {
    return (
        <TimerBarContainer >
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
