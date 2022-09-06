import React, { useState } from 'react';
import styled from 'styled-components';
import ImageUploadBox from '../components/upload/ImageUploadBox';
import ImagesView from '../components/view/ImagesView';

const Wrapper = styled.div`
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem;
`;

const SubmitButton = styled.button`
  right: 0rem;
  height: 4rem;
  width: 8rem;
`;

function ImageUploadPage() {
  const [imageUrls, setImageUrls] = useState([]);
  const [imageUrlsCounter, setImageUrlsCounter] = useState(0);
  const onImageChange = (files) => {
    Array.from(files)
      .filter((file) => file.type.match('image.*'))
      .forEach((file, index) => {
        const reader = new FileReader();
        reader.onloadend = (event) => {
          const { result } = event.target;
          if (result) {
            const imageUrl = { key: imageUrlsCounter + index, value: result };
            setImageUrls((state) => [...state, imageUrl]);
          }
        };
        reader.readAsDataURL(file);
      });
    setImageUrlsCounter((state) => state + files.length);
  };
  const onImageUrlDelete = (deleteKey) => {
    const newImageUrls = imageUrls.filter(
      (imageUrl) => imageUrl.key !== deleteKey,
    );
    setImageUrls(newImageUrls);
  };
  return (
    <Wrapper>
      <ImageUploadBox id="Upload Box" onImageChange={onImageChange} />
      <ImagesView imageUrls={imageUrls} onImageUrlDelete={onImageUrlDelete} />
      <SubmitButton type="submit">제출하기</SubmitButton>
    </Wrapper>
  );
}

export default ImageUploadPage;
