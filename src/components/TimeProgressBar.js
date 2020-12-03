import styled from 'styled-components';

const TimeProgressBar = styled.div`
    position: absolute;
    left: 0;
    z-index: 1;
    width: calc(100% / 1.38);
    height: 48px;
    background: linear-gradient(to right, var(--plum), var(--fuchsia-pink));
`;

export default TimeProgressBar;
