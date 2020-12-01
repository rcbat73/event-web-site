import styled from 'styled-components';
import Icon from './Icon';
import GridContainer from './GridContainer';
import { socialMediaData } from '../constants';
import logoFooter from '../assets/img/logoFooter.png';

const SettingsContainer = styled.div`
    margin-left: 128px;

    & > div {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 14px;

        & > p {
            margin-right: 9px;
        }
    }
`;

const SocialMediaContainer = styled.div`
    margin-right: 256px;
`;

const TopContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 85px;
`;

const BottomContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, auto);
    margin-top: 68px;

    & > a {
        padding: 0 10px;
        color: var(--wild-sand);
        text-align: center;
        border-right: 1px solid var(--wild-sand);

        &:last-child {
            border: none;
        }
    }
`;

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 1920px;
    height: 356px;
    font-size: 14px;
    color: var(--wild-sand);
    margin-top: 145px;
    background: linear-gradient(to right, var(--wine-berry), var(--plum-menu));

    & > p {
        &:last-child {
            margin-top: 12px;
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
                <img src={logoFooter} alt="Logo" />
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
