import styled from 'styled-components';

const InfoContainer = styled.div`
    margin-bottom: ${({ bottomMargin = 0 }) => bottomMargin}px;
    font-family: 'Centrale Sans';
    color: ${({ isDarkColor }) => isDarkColor ? 'var(--plum-menu)' : 'var(--wild-sand)'};

    @media (min-width: 320px) {
        margin: ${({ smallerMargin = 0 }) => smallerMargin}px 0;
        padding: 0 28px;
    }

    @media (min-width: 1920px) {
        margin-top: ${({ topMargin = 0 }) => topMargin}px;
        padding: 0 28px;
    }
`;

export default InfoContainer;
