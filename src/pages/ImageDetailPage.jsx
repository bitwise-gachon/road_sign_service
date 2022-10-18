import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import sampleImageContents from '../jsonDataset/sampleDetailImageContents.json';

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
        .map((image) => (
          <div>
            <Typography>
              제목:
              {image.alt}
            </Typography>
            <Typography>
              날짜:
              {image.date}
            </Typography>
            <img key={image.key} src={image.url} alt={image.alt} />
          </div>
        ))}
    </Wrapper>
  );
}

export default ImageDetailPage;
