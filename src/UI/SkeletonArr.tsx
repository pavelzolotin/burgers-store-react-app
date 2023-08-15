import { useSelector } from 'react-redux';

import styled from 'styled-components';

import Skeleton from './Skeleton';
import { categoriesSelector } from '../redux/categories/selectors';

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10rem auto 0 auto;
  padding: 0 3rem;
  max-width: 140rem;

  @media (min-width: 1500px) {
    max-width: 150rem;
    padding: 3rem 0 0 0;
  }

  @media (max-width: 767px) {
    padding: 2rem 1rem;
    margin: 0 auto;
  }
`;

const Categories = styled.div``;

const H1 = styled.h1`
  font-family: 'Helvetica Neue Light';
  font-size: 6.2rem;
  letter-spacing: 1.4px;
  color: #f5f5f5;
  margin-bottom: 5rem;

  @media (max-width: 767px) {
    font-size: 4.2rem;
    margin-bottom: 2rem;
  }
`;

const SkeletonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SkeletonArr = () => {
    const {categories} = useSelector(categoriesSelector);

    const skeletons = [...Array(8)].map((_, i) => (
        <Skeleton key={i} />
    ));

  return (
      <Content>
          <Categories>
              <H1>{categories}</H1>
          </Categories>
          <SkeletonBox>
              {skeletons}
          </SkeletonBox>
      </Content>
  );
};

export default SkeletonArr;