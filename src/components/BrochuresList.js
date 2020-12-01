import styled from 'styled-components';
import pdfIcon from '../assets/img/pdfIcon.svg';

const ItemContainer = styled.li`
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 17px;
    border-bottom: 2px solid var(--alto);
`;

const TextContainer = styled.div`
    margin-left: 12px;

    & > p {
        &:last-child {
            color: var(--dove-gray);
        }
    }
`;

const BrochuresList = ({ dataList }) => {
    return (
        <ul>
            {
                dataList.map(({ id, name, info }) => (
                    <ItemContainer key={id}>
                        <img src={pdfIcon} alt="Product brochure item" />
                        <TextContainer>
                            <p>{name}</p>
                            <p>{info}</p>
                        </TextContainer>
                    </ItemContainer>
                ))
            }
        </ul>
    );
};

export default BrochuresList;
