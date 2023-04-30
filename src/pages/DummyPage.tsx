import styled from 'styled-components';

import DummyBlock from '../components/DummyBlock';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
  max-width: 1400px;
`;

type DummyPageProps = {
    theme: string;
};

const DummyPage = ({theme}: DummyPageProps) => {
    return (
        <Container>
            <DummyBlock theme={theme} />
        </Container>
    );
};

export default DummyPage;