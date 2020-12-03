import CaseStudiesGrid from './CaseStudiesGrid';
import InfoContainer from './InfoContainer';
import InfoHeader from './InfoHeader';
import TextArrowButton from './TextArrowButton';
import { caseStudiesData } from '../constants';

const CaseStudiesInfo = () => {
    return (
        <InfoContainer topMargin="129" smallerMargin="40" isDarkColor>
            <InfoHeader text1="Our" text2="case studies" />
            <CaseStudiesGrid data={caseStudiesData} />
            <TextArrowButton label="See other case studies" />
        </InfoContainer>
    );
};

export default CaseStudiesInfo;
