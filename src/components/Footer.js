import styled from 'styled-components';
import Icon from './Icon';
import GridContainer from './GridContainer';
import { socialMediaData } from '../constants';
import logoFooter from '../assets/img/logoFooter.png';

const ImageContainer = styled.div`
    text-align: center;
`;

const SettingsContainer = styled.div`
    margin-left: 128px;

    @media (max-width: 768px) {
        margin-left: 0;
    }

    @media (max-width: 425px) {
        margin-top: 10px;
    }

    & > div {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 14px;

        @media (max-width: 425px) {
            justify-content: flex-start;
        }

        & > p {
            margin-right: 9px;

            @media (max-width: 1024px) {
                text-align: left;
            }
        }
    }
`;

const SocialMediaContainer = styled.div`
    margin-right: 256px;

    @media (max-width: 768px) {
        margin-right: 0;
    }

    & > div {
        &:nth-child(2) {
            @media (max-width: 425px) {
                grid-template-columns: repeat(4, auto);
                grid-gap: 17px;
                margin: 10px 0;
            }
        }
    }
`;

const TopContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;

    @media (max-width: 1024px) {
        margin: 85px 40px 0;
    }

    @media (max-width: 425px) {
        grid-template-columns: auto;
        margin-top: 40px;
    }
`;

const BottomContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, auto);
    margin-top: 68px;

    @media (max-width: 425px) {
        margin-top: 0;
        margin-bottom: 20px;
        grid-template-columns: repeat(3, auto);
    }

    & > a {
        padding: 0 10px;
        color: var(--wild-sand);
        text-align: center;
        border-right: 1px solid var(--wild-sand);

        &:last-child {
            border: none;

            @media (max-width: 425px) {
                grid-column-start: span 3;
            }
        }
    }
`;

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 356px;
    font-size: 14px;
    color: var(--wild-sand);
    margin-top: 145px;
    background: linear-gradient(to right, var(--wine-berry), var(--plum-menu));

    @media (max-width: 768px) {
        width: 768px;
    }

    @media (max-width: 425px) {
        margin-top: 20px;
        max-width: 425px;
        height: auto;
    }

    & > p {
        &:last-child {
            margin-top: 12px;

            @media (max-width: 425px) {
                margin-bottom: 20px;
            }
        }
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <TopContainer>
                <SocialMediaContainer>
                    <p>Connect with Us</p>
                    <GridContainer gap="17" amount={socialMediaData.length} marginTop="10" >
                        {
                            socialMediaData.map(({ id, imgPath, description }) => (
                                <a key={id} href="#socialmedia"><img src={imgPath} alt={description} /></a>
                            ))
                        }
                    </GridContainer>
                </SocialMediaContainer>
                <ImageContainer><img src={logoFooter} alt="Logo" /></ImageContainer>
                <SettingsContainer>
                    <div>
                        <p>Select country/language  Global - English</p>
                        <Icon icon="chevron-right" size="1x" />
                    </div>
                    <div>
                        <p>Select Site</p>
                        <Icon icon="chevron-down" size="1x" />
                    </div>
                </SettingsContainer>
            </TopContainer>
            <BottomContainer>
                <a href="#someplace">News center</a>
                <a href="#someplace">Careers</a>
                <a href="#someplace">Contact</a>
                <a href="#someplace">Cookie Notice</a>
                <a href="#someplace">Privacy Notice</a>
                <a href="#someplace">Terms of use</a>
                <a href="#someplace">Product Security</a>
            </BottomContainer>
            <p>2020. All rights reserved.</p>
        </FooterContainer>
    );
};

export default Footer;
