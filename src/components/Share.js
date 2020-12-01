import styled from 'styled-components';
import shareWithUs from '../assets/img/shareWithUs.png';

const Text = styled.p`
    &:nth-child(1) {
        font-size: 34px;
        margin-top: 20px;
    }

    &:nth-child(2) {
        font-size: 55px;
        margin-top: 2px;
    }

    &:nth-child(3) {
        font-size: 21px;
        margin-top: 20px;
    }
`;

const TextContainer = styled.div`
    position: absolute;
    z-index: 1;
    left: 510px;
    top: 114px;
    width: 420px;
    color: var(--wild-sand);
`;

const ShareContainer = styled.div`
    position: relative;
    margin-top: 140px;
    color: var(--wild-sand);
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
