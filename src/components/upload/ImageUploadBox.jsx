import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
`;

const UploadBox = styled.div`
  background-color: lightgrey;
  height: 128px;
`;

function ImageUploadBox({ id, onImageChange }) {
  return (
    <Wrapper>
      <label
        htmlFor={id}
        onDrop={(event) => {
          event.preventDefault();
          event.stopPropagation();
          const { files } = event.dataTransfer;
          onImageChange(files);
        }}
        onDragOver={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        <UploadBox>드래그 앤 드롭</UploadBox>
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
    </Wrapper>
  );
}
ImageUploadBox.propTypes = {
  id: PropTypes.string.isRequired,
  onImageChange: PropTypes.func.isRequired,
};

export default ImageUploadBox;
