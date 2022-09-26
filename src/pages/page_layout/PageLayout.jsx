import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PageNavigator from '../../components/navigation/PageNavigator';

const Wrapper = styled.div``;

const HeaderWrapper = styled.header`
  font-size: 2rem;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
`;

const NavigatorWrapper = styled.nav`
  flex-basis: 12rem;
  min-height: 32rem;
`;

const ArticleWrapper = styled.article`
  flex-grow: 1;
`;

const urlContents = [
  { title: '이미지 업로드', url: '/upload' },
  { title: '테스트', url: '/test' },
  { title: '이미지 목록', url: '/images' },
  { title: '이미지 상세', url: '/images/test' },
  { title: '결과 목록', url: '/results' },
  { title: '결과 상세', url: '/results/test' },
];

function PageLayout({ Article }) {
  return (
    <Wrapper>
      <HeaderWrapper>Road Sign Service</HeaderWrapper>
      <MainWrapper>
        <NavigatorWrapper>
          <PageNavigator urlContents={urlContents} />
        </NavigatorWrapper>
        <ArticleWrapper>
          <Article />
        </ArticleWrapper>
      </MainWrapper>
    </Wrapper>
  );
}
PageLayout.propTypes = {
  Article: PropTypes.func.isRequired,
};

export default PageLayout;
