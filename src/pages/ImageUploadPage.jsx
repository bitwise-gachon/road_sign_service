import { Alert, Button, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
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
  const [isProgressing, setIsProgressing] = useState(false);
  const [sended, setSended] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const toImageContents = (files) => {
    files.forEach((file, index) => {
      if (file.type === 'image/jpeg') {
        const reader = new FileReader();
        reader.onload = () => {
          const { result } = reader;
          const imageContent = {
            key: imageUrlsCounter + index,
            file: new File([file], encodeURIComponent(file.name), {
              type: file.type,
            }),
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
    if (imageContents.length !== 0) {
      setIsProgressing(true);
      const formData = new FormData();
      imageContents.forEach((imageContent) => {
        formData.append('photos', imageContent.file);
      });
      axios
        .post('https://bitwise.ljlee37.com:8080/upload', formData)
        .then((response) => {
          setSendSuccess(true);
        })
        .catch((err) => {
          setSendSuccess(false);
        })
        .finally(() => {
          setSended(true);
          setIsProgressing(false);
        });
    }
  };
  const button = () => {
    if (isProgressing) {
      return <CircularProgress />;
    }
    if (sended) {
      if (sendSuccess) {
        return <Alert severity="success">정상적으로 업로드 되었습니다.</Alert>;
      }
      return <Alert severity="error">업로드하는데 문제가 발생했습니다.</Alert>;
    }
    return (
      <Button
        type="submit"
        onClick={onImageSubmit}
        variant="contained"
        endIcon={<SendIcon />}
      >
        제출하기
      </Button>
    );
  };
  return (
    <Wrapper>
      <ImageUploadBox id="Upload_Box" onImageUpload={onImageUpload} />
      <ImagesView
        imageContents={imageContents}
        onImageUrlDelete={onImageUrlDelete}
      />
      {button()}
    </Wrapper>
  );
}

export default ImageUploadPage;
