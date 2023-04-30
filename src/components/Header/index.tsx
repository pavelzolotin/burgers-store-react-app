import styled from 'styled-components';

import ToggleTheme from '../../UI/ToggleTheme';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 3rem 4rem;
  background-color: ${({theme}) => theme.backgroundColor};
  transition: background-color .3s ease;
  z-index: 10;
`;

const LeftPart = styled.div``;

const RightPart = styled.div`
  display: flex;
  justify-content: end;
`;

type HeaderProps = {
    theme: string;
    setTheme: any;
};

const Header = ({theme, setTheme}: HeaderProps) => {
    return (
        <Container>
            <LeftPart></LeftPart>
            <RightPart>
                <ToggleTheme
                    theme={theme}
                    setTheme={setTheme}
                />
            </RightPart>
        </Container>
    );
};

export default Header;