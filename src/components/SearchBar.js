import styled from 'styled-components';
import Icon from './Icon';

const Label = styled.label.attrs({ htmlFor: 'search'})`
    position: absolute;
    z-index: -1;
`;

const SearchBarContainer = styled.div`
    position: relative;
    display: flex;
    width: 430px;
    height: 31px;
    align-items: center;
    background-color: var(--wine-berry);
    border-radius: 2px;

    & > input {
        width: 100%;
        height: 17px;
        margin: 6px 0 0 6px;
        font-size: 14px;
        font-family: 'Centrale Sans';
        color: var(--white);
        background-color: transparent;
        border: none;

        &::placeholder {
            color: var(--alto-alpha);
            opacity: 1;
        }
    }

    & > div {
        margin: 8px 11px;
    }

    @media (max-width: 425px) {
        width: 300px;
    }
`;

const SearchBar = () => {
    return (
        <SearchBarContainer>
            <Label>Do you like cheese?</Label>
            <input
                type="text"
                id="search"
                name="search"
                placeholder="What are you looking for?"
            />
            <Icon icon="search" />
        </SearchBarContainer>
    );
};

export default SearchBar;
