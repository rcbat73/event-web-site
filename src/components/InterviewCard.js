import CardImgContainer from './CardImgContainer';
import Button from './Button';
import playIcon from '../assets/img/playIcon.svg';

const InterviewCard = ({ interviewImg, description }) => {
    return (
        <>
            <CardImgContainer  leftPos="7" bottomPos="7">
                <img src={interviewImg} alt={description} />
                <Button type="button" onClick={() => null} placement="center">
                    <img src={playIcon} alt="Play" />
                </Button>
            </CardImgContainer>
        </>
    );
};

export default InterviewCard;
