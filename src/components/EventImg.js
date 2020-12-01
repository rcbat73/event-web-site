import styled from 'styled-components';
import eventImg from '../assets/img/headerTopImg.png';

const TextContainer = styled.div`
    position: absolute;
    width: 980px;
    z-index: 1;
    padding: 0 14px;

    & > p {
        &:nth-child(1) {
            margin-top: 18px;
            font-size: 21px;
        }

        &:nth-child(2) {
            margin-top: 220px;
            font-size: 55px;
        }

        &:nth-child(3) {
            margin-top: 50px;
            font-size: 89px;
        }

        &:nth-child(4) {
            margin-top: 30px;
            margin-left: 5px;
            font-size: 21px;
        }
    }
`;

const ImgContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    height: 864px;
    font-family: 'Centrale Sans';
    color: var(--wild-sand);

    & > img {
        position: absolute;
    }
`;

const EventSeparator = styled.div`
    position: absolute;
    top: 56px;
    width: 100%;
    z-index: 1;
    border-bottom: 3px solid var(--wildsand-alpha);
`;

const EventImg = () => {
    return (
        <ImgContainer>
            <img src={eventImg} alt="City of the event" />
            <EventSeparator />
            <TextContainer>
                <p>Event</p>
                <p>#EVENT</p>
                <p>The world’s biggest pro AV show</p>
                <p><i>11-14 February 2020</i></p>
            </TextContainer>
        </ImgContainer>
    );
};

export default EventImg;
