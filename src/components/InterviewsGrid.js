import InterviewCard from './InterviewCard';
import GridContainer from './GridContainer';

const InterviewsGrid = ({data}) =>  {
    return (
        <GridContainer gap="24" amount={data.length} amountMobile="1" marginTop="54">
            {
                data.map(({ id, imgPath, description }) => (
                    <InterviewCard key={id} interviewImg={imgPath} description={description} />
                ))
            }
        </GridContainer>
    );
};

export default InterviewsGrid;
