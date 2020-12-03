import styled from 'styled-components';
import eventImg from '../assets/img/headerTopImg.png';

const TextContainer = styled.div`
    position: absolute;
    width: 980px;
    z-index: 1;
    padding: 0 14px;
    text-align: left;

    @media (max-width: 1204px) {
        width: 800px;
    }

    @media (max-width: 768px) {
        width: 480px;
    }

    @media (max-width: 425px) {
        width: 345px;
    }

    & > p {
        &:nth-child(1) {
            margin-top: 18px;
            font-size: 21px;

            @media (max-width: 425px) {
                margin-top: 5px;
                font-size: 1em;
            }
        }

        &:nth-child(2) {
            margin-top: 220px;
            font-size: 55px;

            @media (max-width: 1440px) {
                margin-top: 165px;
            }

            @media (max-width: 1024px) {
                margin-top: 65px;
                font-size: 3em;
            }

            @media (max-width: 768px) {
                margin-top: 25px;
                font-size: 3em;
            }

            @media (max-width: 425px) {
                margin-top: 10px;
                font-size: 1.8em;
            }
        }

        &:nth-child(3) {
            margin-top: 50px;
            font-size: 89px;

            @media (max-width: 1024px) {
                margin-top: 45px;
                font-size: 4em;
            }

            @media (max-width: 768px) {
                margin-top: 4px;
                font-size: 2em;
            }

            @media (max-width: 425px) {
                margin-top: 10px;
                font-size: 1.5em;
            }
        }

        &:nth-child(4) {
            margin-top: 30px;
            margin-left: 5px;
            font-size: 21px;

            @media (max-width: 425px) {
                margin-top: 10px;
                font-size: 1em;
            }
        }
    }
`;

const EventSeparator = styled.div`
    position: absolute;
    top: 56px;
    width: 100%;
    z-index: 1;
    border-bottom: 3px solid var(--wildsand-alpha);

    @media (max-width: 425px) {
        top: 30px;
    }
`;

const ImgContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: auto;
    text-align: center;
    font-family: 'Centrale Sans';
    color: var(--wild-sand);

    @media (max-width: 425px) {
        max-width: 425px
    }

    & > img {
        width: 100%;
    }
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
