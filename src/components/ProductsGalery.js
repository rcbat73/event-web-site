import styled from 'styled-components';
import GridContainer from './GridContainer';

const ImageContainer = styled.div`
    img {
        width: 100%;
    }
`;

const ProductsGalery = ({data}) =>  {
    return (
        <GridContainer gap="14" amount={data.length} amountMobile="1" marginTop="140">
            {
                data.map(({ id, imgPath, description }) => (
                    <ImageContainer key={id}>
                        <img src={imgPath} alt={description} />
                    </ImageContainer>
                ))
            }
        </GridContainer>
    );
};

export default ProductsGalery;
