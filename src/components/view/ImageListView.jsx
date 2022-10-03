import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

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
  cursor: pointer;

`;

const DeleteButton = styled.img`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 1.25rem;
  height: 1.25rem;
`;

function ImageListView({ imageContents, onImageUrlDelete }) {
  const navigate = useNavigate();
  const linkToImageDetailPage = (key) => {
    navigate(key);
  };
  return (
    <Wrapper>
      <ImagesContainer>
        {imageContents.map(({ key, url, alt }) => (
          <ImageContainer key={key}>
            <Image
              src={url}
              alt={alt}
              onClick={() => {
                linkToImageDetailPage(key);
              }}
            />
            <DeleteButton
              src="delete.png"
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
ImageListView.propTypes = {
  imageContents: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      url: PropTypes.string,
      alt: PropTypes.string,
    }),
  ).isRequired,
  onImageUrlDelete: PropTypes.func.isRequired,
};

export default ImageListView;
