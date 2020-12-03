import InterviewsGrid from './InterviewsGrid';
import InfoContainer from './InfoContainer';
import InfoHeader from './InfoHeader';
import TextArrowButton from './TextArrowButton';
import { interviewsData } from '../constants';

const InterviewsInfo = () => {
    return (
        <InfoContainer topMargin="129" smallerMargin="40" isDarkColor>
            <InfoHeader text1="Watch" text2="interviews" />
            <InterviewsGrid data={interviewsData} />
            <TextArrowButton label="Watch other interviews" />
        </InfoContainer>
    );
};

export default InterviewsInfo;
