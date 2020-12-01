import GridContainer from './GridContainer';

const ProductsGalery = ({data}) =>  {
    return (
        <GridContainer gap="14" amount={data.length} marginTop="140">
            {
                data.map(({ id, imgPath, description }) => (
                    <img key={id} src={imgPath} alt={description} />
                ))
            }
        </GridContainer>
    );
};

export default ProductsGalery;
