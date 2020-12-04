import styled from 'styled-components';
import SearchBar from './SearchBar';
import LoggedUser from './LoggedUser';
import logo from '../assets/img/logoTop.png'

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;

const Link = styled.a.attrs(({ href }) => ({ href }))`
    font-family: 'Centrale Sans';
    font-size: 14px;
    color: var(--alto-alpha);
    text-decoration: none;
`;

const ItemContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 320px) {
        padding: 2px 0;
    }

    @media (min-width: 425px) {
        &:first-child {
            & > li:nth-child(2) {
                padding: 6px 21px 0 17px;
            }

            & > li:nth-child(3) {
                padding: 6px 0 0 21px;
            }
        }
    }

    @media (min-width: 1024px) {
        &:nth-child(2) {
            & > li:first-child {
                padding-left: 142px;
            }

            & > li:nth-child(2) {
                padding-left: 20px;
            }
        }
    }
`;

const Item = styled.li`
    height: ${({ height }) => height ? `${height}px` : 'auto'};
    padding: ${({ padding }) => padding};
    border-right: ${({ borderRight }) => borderRight}px solid var(--alto);

    @media (min-width: 320px) {
        padding-left: 4px;
        padding-right: 4px;
    }
`;

const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    background-color: var(--plum-menu);

    @media (min-width: 320px) {
        padding: 10px 0;
    }
`;

const Menu = () => {
    return (
        <MenuContainer>
            <Nav>
                <ItemContainer>
                    <Item borderRight="0" height="48"><img src={logo} alt="Logo" /></Item>
                    <Item borderRight="1" height="27"><Link href="#Products">Products</Link></Item>
                    <Item borderRight="0" height="27"><Link href="#Products">Product support</Link></Item>
                </ItemContainer>
                <ItemContainer>
                    <Item borderRight="0"><SearchBar /></Item>
                    <Item borderRight="0"><LoggedUser amount="1" /></Item>
                </ItemContainer>
            </Nav>
        </MenuContainer>
    );
};

export default Menu;
