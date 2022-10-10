import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { IconButton, ImageList, ImageListItem } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { red } from '@mui/material/colors';

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

function ImageListView({ imageContents, onImageUrlDelete }) {
  const navigate = useNavigate();
  const linkToImageDetailPage = (key) => {
    navigate(key);
  };
  return (
    <ImageList cols={5} rowHeight={192}>
      {imageContents.map(({ key, url, alt }) => (
        <ImageListItem key={key}>
          <Image
            src={url}
            alt={alt}
            onClick={() => {
              linkToImageDetailPage(key);
            }}
            loading="lazy"
          />
          {onImageUrlDelete && (
            <IconButton
              sx={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                width: '1.25rem',
                height: '1.25rem',
              }}
              onClick={() => {
                onImageUrlDelete(key);
              }}
            >
              <RemoveCircleIcon
                sx={{
                  color: red[500],
                }}
              />
            </IconButton>
          )}
        </ImageListItem>
      ))}
    </ImageList>
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
