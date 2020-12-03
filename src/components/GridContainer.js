import styled from 'styled-components';

const GridContainer = styled.div`
    display: grid;
    grid-column-gap: ${({ gap }) => gap}px;
    grid-template-columns: repeat(${({ amount }) => amount}, auto);
    margin-top: ${({ marginTop = 0 }) => marginTop}px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(${({ amountMobile }) => amountMobile}, auto);
    }

    @media (max-width: 425px) {
        grid-template-columns: auto;
        margin-top: 5px;
    }
`;

export default GridContainer;
