import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import sampleImageContents from '../jsonDataset/sampleImageContents.json';

const Wrapper = styled.div``;

function ImageDetailPage() {
  const { imageId } = useParams();
  return (
    <Wrapper>
      <h1>이미지 상세 페이지</h1>
      {sampleImageContents
        .filter((element) => element.key === imageId)
        .map(({ key, url, alt }) => (
          <img key={key} src={url} alt={alt} />
        ))}
    </Wrapper>
  );
}

export default ImageDetailPage;
