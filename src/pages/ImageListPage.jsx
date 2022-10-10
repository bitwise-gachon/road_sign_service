import { Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import ImagesView from '../components/view/ImageListView';
import sampleImageContents from '../jsonDataset/sampleImageContents.json';

const Wrapper = styled.div``;

function ImageListPage() {
  const [imageContents] = useState(sampleImageContents);
  return (
    <Wrapper>
      <Typography variant="h5" gutterBottom>
        이미지 목록 페이지
      </Typography>
      <ImagesView imageContents={imageContents} onImageUrlDelete={undefined} />
    </Wrapper>
  );
}

export default ImageListPage;
