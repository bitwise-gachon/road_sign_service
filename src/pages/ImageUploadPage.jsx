import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ImageUploadBox from '../components/upload/ImageUploadBox';
import ImagesView from '../components/view/ImagesView';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;

const SubmitButton = styled.button`
  right: 0rem;
  height: 4rem;
  width: 8rem;
`;

function ImageUploadPage() {
  const [imageContents, setImageContents] = useState([]);
  const [imageUrlsCounter, setImageUrlsCounter] = useState(0);
  const navigate = useNavigate();

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
    const formData = new FormData();
    console.log(imageContents[0].file);
    formData.append('file', imageContents[0].file);
    formData.append('accept-charset', 'UTF-8');
    fetch('http://localhost:5000/upload-file', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        navigate('/result', {
          state: { imageContent: imageContents[0], response },
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
