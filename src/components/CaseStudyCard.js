import styled from 'styled-components';
import CardImgContainer from './CardImgContainer';
import Button from './Button';
import playIcon from '../assets/img/playIcon.svg';

const Text = styled.p`
    @media (max-width: 425px) {
        text-align: left;
    }

    &:nth-child(2) {
        font-size: 17px;
        font-weight: bold;
        margin: 20px 0 0 15px;
    }

    &:nth-child(3) {
        color: var(--dove-gray);
        font-size: 14px;
        margin: 9px 0 0 15px;
    }

    &:nth-child(4) {
        color: var(--dove-gray);
        font-size: 12px;
        margin: 38px 0 19px 15px;
    }
`;

const CardContainer = styled.div`
    box-shadow: 0 1px 4px 1px var(--shadow);

    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

const CaseStudyCard = ({ caseStudyImg, description, date }) => {
    return (
        <CardContainer>
            <CardImgContainer  leftPos="7" bottomPos="7">
                <img src={caseStudyImg} alt={description} />
                <Button type="button" onClick={() => null} placement="center">
                    <img src={playIcon} alt="Play" />
                </Button>
            </CardImgContainer>
            <Text>{description}</Text>
            <Text>{description}</Text>
            <Text><i>{date}</i></Text>
        </CardContainer>
    );
}

export default CaseStudyCard;
