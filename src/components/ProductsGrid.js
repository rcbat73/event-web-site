import ProductCard from './ProductCard';
import GridContainer from './GridContainer';

const ProductsGrid = ({data}) =>  {
    return (
        <GridContainer gap="24" amount={data.length} marginTop="54">
            {
                data.map(({ id, imgPath, description }) => (
                    <ProductCard key={id} productImg={imgPath} description={description} />
                ))
            }
        </GridContainer>
    );
};

export default ProductsGrid;
