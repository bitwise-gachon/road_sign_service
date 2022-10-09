import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AppBar, Box, Typography } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import CollectionsIcon from '@mui/icons-material/Collections';
import ArticleIcon from '@mui/icons-material/Article';
import BugReportIcon from '@mui/icons-material/BugReport';
import PageNavigator from '../../components/navigation/PageNavigator';

const Wrapper = styled.div``;

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
  { title: '이미지 업로드', url: '/upload', icon: <UploadIcon /> },
  { title: '테스트', url: '/test', icon: <BugReportIcon /> },
  { title: '이미지 목록', url: '/images', icon: <CollectionsIcon /> },
  { title: '결과 목록', url: '/results', icon: <ArticleIcon /> },
];

function PageLayout({ Article }) {
  return (
    <Wrapper>
      <AppBar sx={{ padding: 1 }}>
        <Typography sx={{ fontSize: '2rem' }}>Road Sign Service</Typography>
      </AppBar>
      <Box
        sx={{
          paddingTop: 7,
          borderBottom: '1px solid grey',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'left',
          alignItems: 'stretch',
        }}
      >
        <NavigatorWrapper>
          <PageNavigator urlContents={urlContents} />
        </NavigatorWrapper>
        <ArticleWrapper>
          <Article />
        </ArticleWrapper>
      </Box>
    </Wrapper>
  );
}
PageLayout.propTypes = {
  Article: PropTypes.func.isRequired,
};

export default PageLayout;
