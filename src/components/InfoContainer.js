import styled from 'styled-components';

const InfoContainer = styled.div`
    margin-top: ${({ topMargin = 0 }) => topMargin}px;
    margin-bottom: ${({ bottomMargin = 0 }) => bottomMargin}px;
    font-family: 'Centrale Sans';
    color: ${({ isDarkColor }) => isDarkColor ? 'var(--plum-menu)' : 'var(--wild-sand)'};

    @media (max-width: 768px) {
        padding: 0 48px;
    }

    @media (max-width: 425px) {
        margin: ${({ smallerMargin = 0 }) => smallerMargin}px 0;
        padding: 0;
    }
`;

export default InfoContainer;
