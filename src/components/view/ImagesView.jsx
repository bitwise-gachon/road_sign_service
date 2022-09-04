import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  border: 1px solid grey;
`;

const Image = styled.img`
  border: 1px solid grey;
  padding: 8px;
  height: 128px;
`;

function ImagesView({ imageUrls }) {
  return (
    <Wrapper>
      {imageUrls.map((imageUrl, index) => (
        <Image src={imageUrl} alt={`${index}`} />
      ))}
    </Wrapper>
  );
}
ImagesView.propTypes = {
  imageUrls: PropTypes.string.isRequired,
};

export default ImagesView;
