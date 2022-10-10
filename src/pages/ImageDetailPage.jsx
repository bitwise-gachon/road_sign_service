import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import sampleImageContents from '../jsonDataset/sampleImageContents.json';

const Wrapper = styled.div``;

function ImageDetailPage() {
  const { imageId } = useParams();
  return (
    <Wrapper>
      <Typography variant="h5" gutterBottom>
        이미지 상세 페이지
      </Typography>
      {sampleImageContents
        .filter((element) => element.key === imageId)
        .map(({ key, url, alt }) => (
          <img key={key} src={url} alt={alt} />
        ))}
    </Wrapper>
  );
}

export default ImageDetailPage;
