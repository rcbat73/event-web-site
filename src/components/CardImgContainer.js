import styled, { css } from 'styled-components';

const common = css`
    position: absolute;
    left: ${({ leftPos }) => leftPos}px;
    bottom: ${({ bottomPos }) => bottomPos}px;
    z-index: 1;
`;

const CardImgContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;

    & > img {
        &:last-child {
            ${common}
        }
    }

    & > button {
        &:last-child {
            ${common}
        }
    }
`;

export default CardImgContainer;
