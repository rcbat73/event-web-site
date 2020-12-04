import styled from 'styled-components';
import Icon from './Icon';
import GridContainer from './GridContainer';
import { socialMediaData } from '../constants';
import logoFooter from '../assets/img/logoFooter.png';

const ImageContainer = styled.div`
    text-align: center;
`;

const SettingsContainer = styled.div`
    @media (min-width: 425px) {
        margin-top: 10px;
        margin-left: 0;
    }

    @media (min-width: 1440px) {
        margin-left: 128px;
    }

    & > div {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 14px;

        @media (min-width: 320px) {
            justify-content: flex-start;
        }

        & > p {
            margin-right: 9px;

            @media (min-width: 1024px) {
                text-align: left;
            }
        }
    }
`;

const SocialMediaContainer = styled.div`
    @media (min-width: 320px) {
        margin-right: 0;
    }

    @media (min-width: 1440px) {
        margin-right: 256px;
    }

    & > div {
        &:nth-child(2) {
            @media (min-width: 320px) {
                grid-template-columns: repeat(4, auto);
                grid-gap: 17px;
                margin: 10px 0;
            }

            @media (min-width: 768px) {
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

    @media (min-width: 320px) {
        grid-template-columns: auto;
        margin-top: 20px;
    }

    @media (min-width: 425px) {
        margin-top: 40px;
    }

    @media (min-width: 768px) {
        grid-row-gap: 40px;
        margin-top: 20px;
    }

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-row-gap: auto;
        margin: 85px 40px 0;
    }
`;

const BottomContainer = styled.div`
    display: grid;

    @media (min-width: 320px) {
        margin-top: 0;
        margin-bottom: 20px;
        grid-template-columns: repeat(3, auto);
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(7, auto);
        margin-top: 68px;
    }

    & > a {
        padding: 5px 5px;
        color: var(--wild-sand);
        text-align: center;
        border-right: 1px solid var(--wild-sand);

        &:last-child {
            @media (min-width: 320px) {
                grid-column-start: span 3;
                border: none;
            }

            @media (min-width: 768px) {
                grid-column-start: auto;
            }
        }

        &:nth-child(3), :nth-child(6), last-child {
            @media (min-width: 320px) {
                border: none;
            }

            @media (min-width: 768px) {
                border-right: 1px solid var(--wild-sand);
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

    @media (min-width: 320px) {
        margin-top: 20px;
        height: auto;
    }

    @media (min-width: 768px) {
        min-width: 768px;
    }



    & > p {
        &:last-child {
            margin-top: 12px;

            @media (min-width: 320px) {
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
