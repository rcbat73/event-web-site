import styled from 'styled-components';
import shareWithUs from '../assets/img/shareWithUs.png';

const Text = styled.p`
    &:nth-child(1) {
        font-size: 34px;
        margin-top: 20px;

        @media (min-width: 320px) {
            font-size: 0.8em;
            margin-top: 0;
        }

        @media (min-width: 768px) {
            font-size: 1.5em;
        }

        @media (min-width: 1024px) {
            font-size: 2em;
        }

        @media (min-width: 1440px) {
            font-size: 34px;
            margin-top: 65px;
        }
    }

    &:nth-child(2) {
        font-size: 55px;
        margin-top: 2px;

        @media (min-width: 320px) {
            font-size: 1em;
        }

        @media (min-width: 768px) {
            font-size: 2em;
        }

        @media (min-width: 1024px) {
            font-size: 3em;
        }

        @media (min-width: 1440px) {
            font-size: 55px;
            margin-top: 0;
        }
    }

    &:nth-child(3) {
        font-size: 21px;
        margin-top: 20px;

        @media (min-width: 320px) {
            font-size: 0.6em;
            margin-top: 2px;
        }

        @media (min-width: 768px) {
            font-size: 1em;
        }

        @media (min-width: 1024px) {
            font-size: 2em;
        }

        @media (min-width: 1440px) {
            font-size: 21px;
        }

        @media (min-width: 1920px) {
            font-size: 21px;
            margin-top: 0;
        }
    }
`;

const TextContainer = styled.div`
    position: absolute;
    top: 0;
    z-index: 1;
    color: var(--wild-sand);

    @media (min-width: 320px) {
        min-width: 260px;
        margin: 10px;
    }

    @media (min-width: 768px) {
        min-width: 510px;
        margin: 40px;
    }

    @media (min-width: 1440px) {
        min-width: 412px;
    }

    @media (min-width: 1920px) {
        width: 438px;
        margin: 70px 0 0 510px;
    }
`;

const ShareContainer = styled.div`
    position: relative;
    color: var(--wild-sand);
    text-align: left;

    & > img {
        width: 100%;
    }

    @media (min-width: 320px) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }

    @media (min-width: 1440px) {
        margin-top: 140px;
    }

    @media (min-width: 1920px) {
        display: block;
    }
`;

const Share = () => {
    return (
        <ShareContainer>
            <img src={shareWithUs} alt="Share with us" />
            <TextContainer>
                <Text>Share</Text>
                <Text><strong>with us!</strong></Text>
                <Text>
                    Post your photos with #EVENT tag on Social Media and have a chance to see your photo here!
                </Text>
            </TextContainer>
        </ShareContainer>
    );
};

export default Share;
