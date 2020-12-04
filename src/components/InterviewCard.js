import styled from 'styled-components';
import CardImgContainer from './CardImgContainer';
import Button from './Button';
import playIcon from '../assets/img/playIcon.svg';

const CardContainer = styled.div`
    @media (min-width: 20px) {
        margin-top: 20px;
    }
`;

const InterviewCard = ({ interviewImg, description }) => {
    return (
        <CardContainer>
            <CardImgContainer  leftPos="7" bottomPos="7">
                <img src={interviewImg} alt={description} />
                <Button type="button" onClick={() => null} placement="center">
                    <img src={playIcon} alt="Play" />
                </Button>
            </CardImgContainer>
        </CardContainer>
    );
};

export default InterviewCard;
