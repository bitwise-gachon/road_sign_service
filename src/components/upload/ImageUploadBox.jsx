import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  border: 1px solid grey;
`;

const UploadBox = styled.div`
  background-color: lightgrey;
  height: 64px;
`;

function ImageUploadBox({ id }) {
  const [images, setImages] = useState([]);
  const labelRef = useRef();
  const inputRef = useRef();
  const handleFiles = (files) => {
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = (event) => {
        const { result } = event.target;
        if (result) {
          setImages()
        }
      };
    });
  };
  return (
    <Wrapper>
      <label htmlFor={id} ref={labelRef}>
        <UploadBox>드래그 앤 드롭</UploadBox>
        <input
          type="file"
          multiple
          accept="image/*"
          id={id}
          ref={inputRef}
          onChange={(event) => {
            event.preventDefault();
            const { files } = event.target;
          }}
        />
      </label>
    </Wrapper>
  );
}
ImageUploadBox.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ImageUploadBox;
