import styled from 'styled-components';

const GridContainer = styled.div`
    display: grid;
    grid-column-gap: ${({ gap }) => gap}px;
    grid-template-columns: repeat(${({ amount }) => amount}, auto);
    margin-top: ${({ marginTop }) => marginTop}px;
`;

export default GridContainer;
