import styled from 'styled-components';

const GridContainer = styled.div`
    display: grid;

    @media (min-width: 320px) {
        grid-template-columns: auto;
        grid-row-gap: 24px;
        margin-top: 20px;
    }

    @media (min-width: 768px) {
        grid-row-gap: 48px;
        margin-top: 54px;
    }

    @media (min-width: 1024px) {
        grid-column-gap: ${({ gap }) => gap}px;
        grid-template-columns: repeat(${({ amountMobile }) => amountMobile}, auto);
        margin-top: ${({ marginTop = 0 }) => marginTop}px;
    }

    @media (min-width: 1440px) {
        grid-column-gap: ${({ gap }) => gap}px;
        grid-template-columns: repeat(${({ amount }) => amount}, auto);
        margin-top: ${({ marginTop = 0 }) => marginTop}px;
    }
`;

export default GridContainer;
