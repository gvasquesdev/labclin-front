import styled from 'styled-components';
import logoImg from '../assets/labclin-logo.webp'
import Icon from '@mdi/react';
import { mdiPhone, mdiTestTube, mdiWhatsapp } from '@mdi/js';


const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logoImg} alt="Logo" />
      <CardsContainer>
        {/* Card 1 */}
        <Card>
          <Icon path={mdiPhone} size={3} color={'#800000'} rotate={360} />
          <CardTextBox>
            <Text1>Atendimento via Telefone</Text1>
            <Text2>(32) 3571-1599</Text2>
          </CardTextBox>
        </Card>

        {/* Card 2 */}
        <Card>
          <Icon path={mdiTestTube} size={3} color={'#800000'} />
          <CardTextBox>
            <Text1>Online</Text1>
            <LinkResults href='#'>
              <Text2>Ver resultados</Text2>
            </LinkResults>
          </CardTextBox>
        </Card>

        {/* Card 3 */}
        <Card>
          <Icon path={mdiWhatsapp} size={3} color={'#800000'} />
          <CardTextBox>
            <Text1>Informações e orçamentos</Text1>
            <Text2>(32) 99199-0239</Text2>
          </CardTextBox>
        </Card>
      </CardsContainer>
    </HeaderContainer>
  );
};


const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
`;

const Logo = styled.img`
  object-fit: fill;
  margin-left: 5%;
`;

const CardsContainer = styled.div`
  display: flex;
  margin-right: 6%;
`;

const Card = styled.div`
  width: 360px;
  display: flex;
  margin-left: 80px;
`;

const CardTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  color: grey;
`

const LinkResults = styled.a`
  text-decoration: none;

  &:hover {
    opacity: 0.5;
  }
`;

const Text1 = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: -10px;
  color: lightgrey;
`;

const Text2 = styled.p`
  font-size: 18px;
  font-weight: 800;
  color: grey;
`;

export default Header;