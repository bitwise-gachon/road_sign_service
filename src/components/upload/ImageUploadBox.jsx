import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

const Wrapper = styled.div`
  width: 100%;
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
  z-index: 5;
`;

function ImageUploadBox({ id, onImageUpload }) {
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
          onImageUpload(files);
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
        <Box
          sx={{
            height: '12rem',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            cursor: 'pointer',
            border: '3px dashed grey',
            backgroundColor: 'white',
          }}
        >
          <Typography>
            여기에 파일을 드래그하거나 클릭하여 업로드하세요.
          </Typography>
        </Box>
        <input
          type="file"
          multiple
          accept="image/jpeg"
          id={id}
          onChange={(event) => {
            event.preventDefault();
            event.stopPropagation();
            const { files } = event.target;
            onImageUpload(files);
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
  onImageUpload: PropTypes.func.isRequired,
};

export default ImageUploadBox;
