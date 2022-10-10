import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ImageUploadBox from '../components/upload/ImageUploadBox';
import ImagesView from '../components/view/ImageListView';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;

function ImageUploadPage() {
  const [imageContents, setImageContents] = useState([]);
  const [imageUrlsCounter, setImageUrlsCounter] = useState(0);
  const navigate = useNavigate();

  const toImageContents = (files) => {
    files.forEach((file, index) => {
      console.log(file.type);
      if (file.type === 'image/jpeg') {
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
      }
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
    imageContents.forEach((imageContent) => {
      console.log(imageContent.file);
      formData.append('photos', imageContent.file);
    });
    fetch('http://ljlee-de.ddns.net:8080/upload', {
      method: 'POST',
      headers: {},
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
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
      <Button type="submit" onClick={onImageSubmit} variant="contained">
        제출하기
      </Button>
    </Wrapper>
  );
}

export default ImageUploadPage;
