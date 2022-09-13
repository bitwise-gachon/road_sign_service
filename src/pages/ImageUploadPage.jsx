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
  const [imageContents, setImageContents] = useState([]);
  const [imageUrlsCounter, setImageUrlsCounter] = useState(0);

  const toImageContents = (files) => {
    files.forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = () => {
        const { result } = reader;
        const imageContent = {
          key: imageUrlsCounter + index,
          file,
          alt: file.name,
          url: result,
        };
        setImageContents((state) => [...state, imageContent]);
      };
      reader.readAsDataURL(file);
    });
    setImageUrlsCounter((state) => state + files.length);
  };

  const onImageUpload = (files) => {
    toImageContents(Array.from(files));
  };

  const onImageUrlDelete = (deleteKey) => {
    const newImageUrls = imageContents.filter(
      (imageUrl) => imageUrl.key !== deleteKey,
    );
    setImageContents(newImageUrls);
  };

  const onImageSubmit = () => {
    imageContents.forEach((imageContent) => {
      const formData = new FormData();

      formData.append('file', imageContent.file);
      fetch('http://localhost:5000/upload-file', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    });
  };

  return (
    <Wrapper>
      <ImageUploadBox id="Upload_Box" onImageUpload={onImageUpload} />
      <ImagesView
        imageContents={imageContents}
        onImageUrlDelete={onImageUrlDelete}
      />
      <SubmitButton type="submit" onClick={onImageSubmit}>
        제출하기
      </SubmitButton>
    </Wrapper>
  );
}

export default ImageUploadPage;
