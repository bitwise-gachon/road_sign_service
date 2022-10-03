import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PageNavigator from '../../components/navigation/PageNavigator';

const Wrapper = styled.div``;

const HeaderWrapper = styled.header`
  font-size: 2rem;
  padding: 1rem;
  background-color: #9adef7;
`;

const MainWrapper = styled.div`
  border-bottom: 1px solid grey;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: stretch;
`;

const NavigatorWrapper = styled.nav`
  min-width: 12rem;
  min-height: 48rem;
`;

const ArticleWrapper = styled.article`
  flex-grow: 1;
  padding: 1rem;
  min-width: 32rem;
  max-width: 64rem;
`;

const urlContents = [
  { title: '이미지 업로드', url: '/upload' },
  { title: '테스트', url: '/test' },
  { title: '이미지 목록', url: '/images' },
  { title: '결과 목록', url: '/results' },
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
