import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  margin: 0.5rem;
`;

const ImagesContainer = styled.div`
  margin: 0.5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;

const ImageContainer = styled.div`
  height: 12rem;
  border: 0.0625rem solid grey;
  border-radius: 0.5rem;
  padding: 0.25rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function ImagesView({ imageUrls }) {
  return (
    <Wrapper>
      업로드한 이미지들
      <ImagesContainer>
        {imageUrls.map((imageUrl, index) => (
          <ImageContainer>
            <Image src={imageUrl} alt={`${index}`} />
          </ImageContainer>
        ))}
      </ImagesContainer>
    </Wrapper>
  );
}
ImagesView.propTypes = {
  imageUrls: PropTypes.string.isRequired,
};

export default ImagesView;
