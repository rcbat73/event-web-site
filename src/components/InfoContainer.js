import styled from 'styled-components';

const InfoContainer = styled.div`
    margin-top: ${({ topMargin }) => topMargin}px;
    font-family: 'Centrale Sans';
    color: ${({ isDarkColor }) => isDarkColor ? 'var(--plum-menu)' : 'var(--wild-sand)'};
`;

export default InfoContainer;
