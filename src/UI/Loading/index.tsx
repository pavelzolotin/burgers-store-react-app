import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding: 15rem 0;
  max-width: 140rem;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20rem;
`;
const H2 = styled.h2`
  font-size: 2.4rem;
  color: #f5f5f5;
`;

const Loading = () => {
    return (
        <Container>
            <Content>
                <H2>Идёт загрузка...</H2>
            </Content>
        </Container>
    );
};

export default Loading;