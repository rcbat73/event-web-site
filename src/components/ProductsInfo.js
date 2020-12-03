import ProductsGrid from './ProductsGrid';
import InfoContainer from './InfoContainer';
import InfoHeader from './InfoHeader';
import { productsNewsData } from '../constants';

const ProductsInfo = () => {
    return (
        <InfoContainer topMargin="129" smallerMargin="40" isDarkColor>
            <InfoHeader text1="Upcoming" text2="product news" />
            <ProductsGrid data={productsNewsData} />
        </InfoContainer>
    );
};

export default ProductsInfo;
