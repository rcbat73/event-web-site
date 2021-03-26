import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as icons from './fontawesome';
import TimerBar from './components/TimerBar';
import Menu from './components/Menu';
import EventImg from './components/EventImg';
import ProductsInfo from './components/ProductsInfo';
import ProductsGalery from './components/ProductsGalery';
import CaseStudiesInfo from './components/CaseStudiesInfo';
import Share from './components/Share';
import InterviewsInfo from './components/InterviewsInfo';
import BoothMap from './components/BoothMap';
import ProductBrochures from './components/ProductBrochures';
import Footer from './components/Footer';
import { productsGaleryData } from './constants';

library.add(icons);

const AppContainer = styled.div`
    margin: auto;
    font-family: 'Centrale Sans';
    text-align: center;
    background-color: var(--wild-sand);

    @media (min-width: 1440px) {
        max-width: 1440px;
    }

    @media (min-width: 1920px) {
        max-width: 1920px;
    }

    & > header {
        color: var(--white);
    }

    & > main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const App = () => {
    return (
        <AppContainer>
            <header>
                <TimerBar days="45" hours="18" minutes="34" seconds="05" />
                <Menu />
                <EventImg />
            </header>
            <main>
                <ProductsInfo />
                <ProductsGalery data={productsGaleryData} />
                <CaseStudiesInfo />
                <Share />
                <InterviewsInfo />
                <BoothMap />
                <ProductBrochures />                
            </main>
			<Footer />
        </AppContainer>
    );
};

export default App;
