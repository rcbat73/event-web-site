import styled from 'styled-components';
import InfoContainer from './InfoContainer';
import InfoHeader from './InfoHeader';
import boothMap from '../assets/img/boothMap.svg';
import qrCode from '../assets/img/qrCode.svg';

const BoothMapImage = styled.img`
    margin-top: 48px;

    @media (min-width: 320px) {
        width: 260px;
    }

    @media (min-width: 425px) {
        width: 363px;
    }

    @media (min-width: 768px) {
        width: 674px;
    }

    @media (min-width: 1440px) {
        width: 960px;
    }


`;

const QrCodeContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 54px;

    & > p {
        margin-left: 16px;

        & > a {
            text-decoration: none;
            color: var(--wild-sand);
        }
    }
`;

const BoothMapContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: linear-gradient(to bottom right, var(--wine-berry), var(--plum-menu));

    @media (min-width: 320px) {
        margin-top: 20px;
    }

    @media (min-width: 768px) {
        margin-top: 145px;
        font-size: 12px;
    }


`;

const BoothMap = () => {
    return (
        <BoothMapContainer>
            <InfoContainer topMargin="124" bottomMargin="124" smallerMargin="25">
                <InfoHeader text1="Our" text2="booth" />
                <BoothMapImage src={boothMap} alt="Booth map" />
                <QrCodeContainer>
                    <img src={qrCode} alt="QR code"/>
                    <p>Scan the QR Code to see the venue on map. Or <a href="#someplace">Click here</a></p>
                </QrCodeContainer>
            </InfoContainer>
        </BoothMapContainer>
    );
};

export default BoothMap;
