import InfoContainer from './InfoContainer';
import InfoHeader from './InfoHeader';
import BrochuresList from './BrochuresList';
import TextArrowButton from './TextArrowButton';
import SelectBox from './SelectBox';
import { brochuresData } from '../constants';

const ProductBrochures = () => {
    return (
        <InfoContainer topMargin="129" isDarkColor>
            <InfoHeader text1="What’s on Event" text2="product brochures" />
            <SelectBox />
            <BrochuresList dataList={brochuresData} />
            <TextArrowButton label="See more" />
        </InfoContainer>
    );
};

export default ProductBrochures;
