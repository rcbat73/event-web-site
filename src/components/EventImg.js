import styled from 'styled-components';
import eventImg from '../assets/img/headerTopImg.png';

const TextContainer = styled.div`
    position: absolute;
    z-index: 1;
    padding: 0 14px;
    text-align: left;

    @media (min-width: 425px) {
        max-width: 345px;
    }

    @media (min-width: 768px) {
        max-width: 480px;
    }

    @media (min-width: 1024px) {
        max-width: 970px;
    }

    & > p {
        &:nth-child(1) {

            @media (min-width: 320px) {
                margin-top: 5px;
                font-size: 1em;
            }

            @media (min-width: 1024px) {
                margin-top: 14px;
                font-size: 21px;
            }
        }

        &:nth-child(2) {
            @media (min-width: 320px) {
                margin-top: 10px;
                font-size: 1em;
            }

            @media (min-width: 375px) {
                margin-top: 30px;
            }

            @media (min-width: 425px) {
                margin-top: 20px;
                font-size: 1.8em;
            }

            @media (min-width: 768px) {
                margin-top: 35px;
                font-size: 2em;
            }

            @media (min-width: 1024px) {
                margin-top: 55px;
                font-size: 55px;
            }

            @media (min-width: 1440px) {
                margin-top: 80px;
            }

            @media (min-width: 1920px) {
                margin-top: 212px;
            }
        }

        &:nth-child(3) {
            @media (min-width: 320px) {
                margin-top: 10px;
                font-size: 1.2em;
            }

            @media (min-width: 425px) {
                font-size: 1.5em;
            }

            @media (min-width: 768px) {
                margin-top: 20px;
                font-size: 3em;
            }

            @media (min-width: 1024px) {
                margin-top: 20px;
                font-size: 4em;
            }

            @media (min-width: 1440px) {
                margin-top: 50px;
                font-size: 89px;
            }

            @media (min-width: 1920px) {
                margin-top: 57px;
            }
        }

        &:nth-child(4) {
            @media (min-width: 320px) {
                margin-top: 16px;
                margin-left: 5px;
                font-size: 1em;
            }

            @media (min-width: 425px) {
                margin-top: 10px;
            }

            @media (min-width: 768px) {
                margin-top: 30px;
            }

            @media (min-width: 1024px) {
                margin-top: 20px;
                font-size: 21px;
            }

            @media (min-width: 1440px) {
                margin-top: 30px;
            }
        }
    }
`;

const EventSeparator = styled.div`
    position: absolute;
    width: 100%;
    z-index: 1;
    border-bottom: 3px solid var(--wildsand-alpha);

    @media (min-width: 425px) {
        top: 30px;
    }

    @media (min-width: 1024px) {
        top: 60px;
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
