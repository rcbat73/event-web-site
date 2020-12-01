import styled from 'styled-components';
import Icon from './Icon';
import Button from './Button';

const ButtonLabel = styled.span`
    margin-right: 7px;
    font-size: 17px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 32px;
`;

const TextArrowButton = ({ label }) => {
    return (
        <ButtonContainer>
            <Button type="button" onClick={() => null} placement="center">
                <ButtonLabel>{label}</ButtonLabel>
                <Icon icon="chevron-right" size="1x" />
            </Button>
        </ButtonContainer>
    );
};

export default TextArrowButton;
