import React, { useState } from 'react';
import styled from 'styled-components';
import ImageUploadBox from '../components/upload/ImageUploadBox';
import ImagesView from '../components/view/ImagesView';

const Wrapper = styled.div`
  border: 1px solid grey;
`;

function ImageUploadPage() {
  const [imageUrls, setImageUrls] = useState([]);
  const onImageChange = (files) => {
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = (event) => {
        const { result } = event.target;
        if (result) {
          setImageUrls((state) => [...state, result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };
  return (
    <Wrapper>
      <ImageUploadBox onImageChange={onImageChange} />
      <ImagesView imageUrls={imageUrls} />
    </Wrapper>
  );
}

export default ImageUploadPage;
