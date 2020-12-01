import CaseStudyCard from './CaseStudyCard';
import GridContainer from './GridContainer';

const CaseStudiesGrid = ({data}) =>  {
    return (
        <GridContainer gap="24" amount={data.length} marginTop="54">
            {
                data.map(({ id, imgPath, description, date }) => (
                    <CaseStudyCard key={id} caseStudyImg={imgPath} description={description} date={date} />
                ))
            }
        </GridContainer>
    );
};

export default CaseStudiesGrid;
