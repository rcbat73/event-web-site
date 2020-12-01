import styled from 'styled-components';
import userIcon from '../assets/img/userIcon.svg'

const RedCircle = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    width: var(--number-position);
    height: var(--number-position);
    font-family: 'Centrale Sans';
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    line-height: var(--number-position);
    background-color: var(--mango-tango);
    border-radius: 50% 50%;
`;

const LoggedUserContainer = styled.div`
    position: relative;
    width: 25px;
    height: 24px;
    & > img {
        position: absolute;
        left: 0;
        bottom: 0;
    }
`;

const LoggedUser = ({ amount }) => {
    return (
        <LoggedUserContainer>
            <img src={userIcon} alt="Logged user"/>
            <RedCircle>{amount}</RedCircle>
        </LoggedUserContainer>
    );
};

export default LoggedUser;
