import styled from 'styled-components';
import SearchBar from './SearchBar';
import LoggedUser from './LoggedUser';
import logo from '../assets/img/logoTop.png'

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Link = styled.a.attrs(({ href }) => ({ href }))`
    font-family: 'Centrale Sans';
    font-size: 14px;
    color: var(--alto-alpha);
    text-decoration: none;
`;

const Item = styled.li`
    height: ${({ height }) => height ? `${height}px` : 'auto'};
    padding: ${({ padding }) => padding};
    border-right: ${({ borderRight }) => borderRight}px solid var(--alto);

    @media (max-width: 768px) {
        &:nth-child(1) {
            padding-left: 0;
            padding-right: 0;
        }
    }
`;

const ItemContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    background-color: var(--plum-menu);

    @media (max-width: 768px) {
        padding: 10px 0;
    }

    @media (max-width: 425px) {
        max-width: 425px
    }
`;

const Menu = () => {
    return (
        <MenuContainer>
            <Nav>
                <ItemContainer>
                    <Item borderRight="0" padding="0 17px 0 0" height="48"><img src={logo} alt="Logo" /></Item>
                    <Item borderRight="1" padding="6px 21px 0 17px" height="27"><Link href="#Products">Products</Link></Item>
                    <Item borderRight="0" padding="6px 0 0 21px" height="27"><Link href="#Products">Product support</Link></Item>
                </ItemContainer>
                <ItemContainer>
                    <Item borderRight="0" padding="0 0 0 142px"><SearchBar /></Item>
                    <Item borderRight="0" padding="0 0 0 20px"><LoggedUser amount="1" /></Item>
                </ItemContainer>
            </Nav>
        </MenuContainer>
    );
};

export default Menu;
