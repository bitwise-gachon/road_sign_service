import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AppBar, Box, Typography } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import CollectionsIcon from '@mui/icons-material/Collections';
import ArticleIcon from '@mui/icons-material/Article';
import BugReportIcon from '@mui/icons-material/BugReport';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import PageNavigator from '../../components/navigation/PageNavigator';

const Wrapper = styled.div``;

const NavigatorWrapper = styled.nav`
  min-width: 12rem;
  min-height: 48rem;
`;

const urlContents = [
  { title: '이미지 업로드', url: '/upload', icon: <UploadIcon /> },
  { title: '테스트', url: '/test', icon: <BugReportIcon /> },
  { title: '이미지 목록', url: '/images', icon: <CollectionsIcon /> },
  { title: '결과 목록', url: '/results', icon: <ArticleIcon /> },
];

function PageLayout({ Article }) {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <AppBar sx={{ padding: 1 }}>
        <Typography
          sx={{ fontSize: '2rem', cursor: 'pointer' }}
          onClick={() => {
            navigate('/images');
          }}
        >
          Road Sign Service
        </Typography>
      </AppBar>
      <Box
        sx={{
          paddingTop: 8,
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
        <Box
          sx={{
            flexGrow: 1,
            padding: '1rem',
            minWidth: '32rem',
            backgroundColor: grey[100],
          }}
        >
          <Box
            sx={{
              maxWidth: '64rem',
            }}
          >
            <Article />
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
}
PageLayout.propTypes = {
  Article: PropTypes.func.isRequired,
};

export default PageLayout;
