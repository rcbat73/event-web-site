import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    justify-content: ${({ placement }) => placement};
    align-items: center;
    border: none;
    background: none;
`;

export default Button;
