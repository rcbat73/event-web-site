import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Icon from './Icon';

const ButtonLabel = styled.span`
    margin: 7px;
    font-size: 14px;
`;

const Label = styled.span`
    margin-right: 22px;
    font-size: 14px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    & > button {
        width: 878px;
        background-color: var(--white);
        border: 1px solid var(--silver-chalice);

        @media (max-width: 768px) {
            width: 471px;
        }

        @media (max-width: 425px) {
            width: 310px;
        }
    }
`;

const ArrowContainer = styled.div`
    margin: 7px;
`;

const OptionsContainer = styled.ul`
    display: ${({ isClicked }) => isClicked ? 'block' : 'none'};
    position: absolute;
    width: 878px;
    left: 0;
    top: 31px;
    z-index: 1;
    background-color: var(--white);
    border: 1px solid var(--silver-chalice);

    & li {
        margin: 7px;
        padding: 5px;
        cursor: pointer;

        &:hover {
            background-color: var(--plum-menu);
            color: var(--white);
        }
    }
`;

const SelectBoxContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    margin: 54px 0;

    @media (max-width: 425px) {
        margin: 24px 0;
    }
`;

const SelectBox = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [selectedOption, setSelectedOption] = useState('All');

    const setSelectedHandler = (event) => {
        setSelectedOption(event.target.innerText);
        setIsClicked(false);
    }

    return (
        <SelectBoxContainer>
            <Label>Language</Label>
            <ButtonContainer>
                <Button type="button" onClick={() => setIsClicked(!isClicked)} placement="space-between">
                    <ButtonLabel>{selectedOption}</ButtonLabel>
                    <ArrowContainer>
                        <Icon icon="chevron-down" size="1x" />
                    </ArrowContainer>
                </Button>
                <OptionsContainer isClicked={isClicked}>
                    <li onClick={(e) => setSelectedHandler(e)}>All</li>
                    <li onClick={(e) => setSelectedHandler(e)}>English</li>
                    <li onClick={(e) => setSelectedHandler(e)}>Portuguese</li>
                    <li onClick={(e) => setSelectedHandler(e)}>Turkish</li>
                </OptionsContainer>
            </ButtonContainer>
        </SelectBoxContainer>
    );
};

export default SelectBox;
