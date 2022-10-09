import React, { useState } from 'react';
import styled from 'styled-components';
import ImagesView from '../components/view/ImageListView';
import sampleImageContents from '../jsonDataset/sampleImageContents.json';

const Wrapper = styled.div``;

function ImageListPage() {
  const [imageContents] = useState(sampleImageContents);
  return (
    <Wrapper>
      <h1>이미지 목록 페이지</h1>
      <ImagesView
        imageContents={imageContents}
        onImageUrlDelete={undefined}
      />
    </Wrapper>
  );
}

export default ImageListPage;
