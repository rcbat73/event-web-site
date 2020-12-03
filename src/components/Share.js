import styled from 'styled-components';
import shareWithUs from '../assets/img/shareWithUs.png';

const Text = styled.p`
    &:nth-child(1) {
        font-size: 34px;
        margin-top: 20px;

        @media (max-width: 768px) {
            font-size: 1.5em;
        }

        @media (max-width: 425px) {
            font-size: 1em;
            margin-top: 0;
        }
    }

    &:nth-child(2) {
        font-size: 55px;
        margin-top: 2px;

        @media (max-width: 768px) {
            font-size: 2em;
        }

        @media (max-width: 425px) {
            font-size: 1em;
        }
    }

    &:nth-child(3) {
        font-size: 21px;
        margin-top: 20px;

        @media (max-width: 768px) {
            font-size: 1em;
        }

        @media (max-width: 425px) {
            font-size: 0.8em;
            margin-top: 5px;
        }
    }
`;

const TextContainer = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    margin: 114px 0 0 510px;
    width: 420px;
    color: var(--wild-sand);

    @media (max-width: 768px) {
        width: 100%;
        margin: 10px;
    }

    @media (max-width: 425px) {
        width: 80%;
    }
`;

const ShareContainer = styled.div`
    position: relative;
    margin-top: 140px;
    color: var(--wild-sand);
    text-align: left;

    & > img {
        width: 100%;

        @media (max-width: 425px) {
            max-width: 425px
        }
    }

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
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
