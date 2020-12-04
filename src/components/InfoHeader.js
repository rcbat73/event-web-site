import styled from 'styled-components';

const ProductTitle = styled.div`
    text-align: left;

    & > p {
        &:first-child {
            @media (min-width: 425px) {
                font-size: 0.8em;
            }

            @media (min-width: 425px) {
                font-size: 1em;
            }

            @media (min-width: 768px) {
                font-size: 4em;
            }


        }

        &:last-child {

            @media (min-width: 320px) {
                font-size: 2em;
            }

            @media (min-width: 425px) {
                font-size: 0.8em;
            }

            @media (min-width: 768px) {
                font-size: 55px;
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
