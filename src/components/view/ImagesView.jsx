import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 100%;
  margin: 0.5rem 0;
`;

const ImagesContainer = styled.div`
  margin: 0.5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;

const ImageContainer = styled.div`
  position: relative;
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

const DeleteButton = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border-radius: 1rem;
  background-color: whitesmoke;
  width: 1.25rem;
  height: 1.25rem;
`;

function ImagesView({ imageContents, onImageUrlDelete }) {
  return (
    <Wrapper>
      업로드한 이미지들
      <ImagesContainer>
        {imageContents.map(({ key, url, alt }) => (
          <ImageContainer key={key}>
            <Image src={url} alt={alt} />
            <DeleteButton
              onClick={() => {
                onImageUrlDelete(key);
              }}
            />
          </ImageContainer>
        ))}
      </ImagesContainer>
    </Wrapper>
  );
}
ImagesView.propTypes = {
  imageContents: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      url: PropTypes.string,
      alt: PropTypes.string,
    }),
  ).isRequired,
  onImageUrlDelete: PropTypes.func.isRequired,
};

export default ImagesView;
