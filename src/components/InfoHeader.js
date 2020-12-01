import styled from 'styled-components';

const Title = styled.p`
    font-size: 34px;
`;

const SubTitle = styled.p`
    font-size: 55px;
`;

const InfoHeader = ({ text1, text2 }) => {
    return (
        <>
            <Title>{text1}</Title>
            <SubTitle><strong>{text2}</strong></SubTitle>
        </>
    );
};

export default InfoHeader;
