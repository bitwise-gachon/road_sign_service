import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  border: 0px solid grey;
`;

const UploadBox = styled.div`
  background-color: lightgrey;
  height: 512px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const PopUpBox = styled.div`
  background-color: blue;
  color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3), 0px 6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  position: fixed;
  bottom: 16px;
  right: 20%;
  left: 20%;
  height: 128px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function ImageUploadBox({ id, onImageChange }) {
  const [isDragOver, setIsDragOver] = useState(false);
  return (
    <Wrapper>
      <label
        htmlFor={id}
        onDrop={(event) => {
          event.preventDefault();
          event.stopPropagation();
          setIsDragOver(false);
          const { files } = event.dataTransfer;
          onImageChange(files);
        }}
        onDragOver={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
        onDragLeave={() => {
          setIsDragOver(false);
        }}
        onDragEnter={() => {
          setIsDragOver(true);
        }}
      >
        <UploadBox>여기에 파일을 드래그하거나 클릭하여 업로드하세요.</UploadBox>
        <input
          type="file"
          multiple
          accept="image/*"
          id={id}
          onChange={(event) => {
            event.preventDefault();
            event.stopPropagation();
            const { files } = event.target;
            onImageChange(files);
          }}
          style={{ display: 'none' }}
        />
      </label>
      {isDragOver && <PopUpBox>드롭하여 파일을 업로드하세요!</PopUpBox>}
    </Wrapper>
  );
}
ImageUploadBox.propTypes = {
  id: PropTypes.string.isRequired,
  onImageChange: PropTypes.func.isRequired,
};

export default ImageUploadBox;
