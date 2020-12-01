import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Icon = ({ icon, size }) => (
    <IconContainer>
        <FontAwesomeIcon icon={icon} size={size} />
    </IconContainer>
);

export default Icon;
