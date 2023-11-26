import styled from 'styled-components';

const NavBar = () => {
  return (
    <NavBarContainer>
      <ButtonContainer>
        <NavButton>Início</NavButton>
        <NavButton>Sobre Nós</NavButton>
        <NavButton>Unidades</NavButton>
        <NavButton>Convênios</NavButton>
        <NavButton>Manual de Coleta</NavButton>
        <NavButton>Coleta</NavButton>
      </ButtonContainer>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #800000;
`;

const ButtonContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  padding-left: 60px;
`

const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  color: white;

  &:hover {
    opacity: 0.5;
  }
`;


export default NavBar;