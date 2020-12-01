import styled from 'styled-components';

const ProductsHeaderContainer = styled.div`
    & > p {
        &:nth-child(1) {
            font-size: 34px;
        }

        &:nth-child(2) {
            font-size: 55px;
            font-weight: bold;
        }
    }
`;

const ProductsHeader = () => {
    return (
        <ProductsHeaderContainer>
            <p>Upcoming</p>
            <p>product news</p>
        </ProductsHeaderContainer>
    );
};

export default ProductsHeader;
