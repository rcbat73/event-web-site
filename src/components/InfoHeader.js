import styled from 'styled-components';

const ProductTitle = styled.div`
    text-align: left;

    & > p {
        &:first-child {
            font-size: 34px;

            @media (max-width: 768px) {
                font-size: 4em;
            }

            @media (max-width: 425px) {
                font-size: 1em;
            }
        }

        &:last-child {
            font-size: 55px;

            @media (max-width: 768px) {
                font-size: 4em;
            }

            @media (max-width: 425px) {
                font-size: 1em;
            }
        }
    }
`;

const InfoHeader = ({ text1, text2 }) => {
    return (
        <ProductTitle>
            <p>{text1}</p>
            <p><strong>{text2}</strong></p>
        </ProductTitle>
    );
};

export default InfoHeader;
