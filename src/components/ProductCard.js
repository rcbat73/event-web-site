import styled from 'styled-components';
import CardImgContainer from './CardImgContainer';
import triangleMask from '../assets/img/triangleMask.svg';

const CardContainer = styled.div`
    & > p {
        font-size: 17px;
        font-weight: bold;
        margin-top: 29px;

        @media (max-width: 425px) {
            text-align: left;
            margin: 10px 0 20px;
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
