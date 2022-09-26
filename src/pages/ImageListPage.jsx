import React, { useState } from 'react';
import styled from 'styled-components';
import ImagesView from '../components/view/ImagesView';

const sampleImageContents = [
  {
    key: 0,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/A2Warrego.svg/220px-A2Warrego.svg.png',
    alt: 'A "route confirmation" sign from wikipedia',
  },
  {
    key: 1,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Sturminster_Marshall%2C_new_signage_on_the_A350_-_geograph.org.uk_-_1741455.jpg/220px-Sturminster_Marshall%2C_new_signage_on_the_A350_-_geograph.org.uk_-_1741455.jpg',
    alt: 'Fingerposts and other road signage from wikipedia',
  },
  {
    key: 2,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Traffic_sign_in_London.png/220px-Traffic_sign_in_London.png',
    alt: 'Traffic sign in London from wikipedia',
  },
  {
    key: 3,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Road_sign_in_%C3%85land.jpg/220px-Road_sign_in_%C3%85land.jpg',
    alt: 'Road sign for roundabout from wikipedia',
  },
  {
    key: 4,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Remote_areas_ahead.jpg/220px-Remote_areas_ahead.jpg',
    alt: 'Sign in Australia from wikipedia',
  },
  {
    key: 5,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kuh-Warnung.jpg/220px-Kuh-Warnung.jpg',
    alt: 'Sign warning of cattle crossing from wikipedia',
  },
];

const Wrapper = styled.div``;

function ImageListPage() {
  const onImageUrlDelete = () => {};
  const [imageContents] = useState(sampleImageContents);
  return (
    <Wrapper>
      <h1>이미지 목록 페이지</h1>
      <ImagesView
        imageContents={imageContents}
        onImageUrlDelete={onImageUrlDelete}
      />
    </Wrapper>
  );
}

export default ImageListPage;
