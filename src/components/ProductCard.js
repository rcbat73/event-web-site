import styled from 'styled-components';
import CardImgContainer from './CardImgContainer';
import triangleMask from '../assets/img/triangleMask.svg';

const CardContainer = styled.div`
    & > p {
        font-size: 17px;
        font-weight: bold;
        text-align: left;

        @media (min-width: 320px) {
            margin: 10px 0 20px;
        }

        @media (min-width: 768px) {
            font-size: 2em;
            margin-top: 29px;
        }
    }
`;

const ProductCard = ({ productImg, description }) => {
    return (
        <CardContainer>
            <CardImgContainer leftPos="24" bottomPos="0" sidesMargin="20">
                <img src={productImg} alt={description} />
                <img src={triangleMask} alt="" />
            </CardImgContainer>
            <p>{description}</p>
        </CardContainer>
    );
}

export default ProductCard;
