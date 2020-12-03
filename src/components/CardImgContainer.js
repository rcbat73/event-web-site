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

        &:first-child {
            width: 100%;
        }

        &:last-child {
            ${common}
        }
    }

    & > button {
        ${common}
    }
`;

export default CardImgContainer;
