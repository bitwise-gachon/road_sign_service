import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid grey;
`;

const FieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
`;

const UploadButton = styled.button``;
const Image = styled.img`
  width: 100%;
  max-width: 360px;
`;

function ImageUploader() {
  const [file, setFile] = useState();
  const [fileUrl, setFileUrl] = useState();
  const onFileInputChange = (event) => {
    setFile(event.target.files[0]);
  };
  const onButtonClick = (event) => {
    event.preventDefault();
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setFileUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <Wrapper>
      <FieldSet>
        <legend>이미지 업로드</legend>
        <input type="file" onChange={onFileInputChange} />
        <UploadButton onClick={onButtonClick}>업로드</UploadButton>
        {fileUrl && <Image src={fileUrl} />}
      </FieldSet>
    </Wrapper>
  );
}

export default ImageUploader;
