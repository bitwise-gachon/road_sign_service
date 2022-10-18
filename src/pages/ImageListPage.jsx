import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImagesView from '../components/view/ImageListView';
import sampleImageContents from '../jsonDataset/sampleDetailImageContents.json';

const Wrapper = styled.div``;

function SortButton({ text, compareFn, setImageContents }) {
  return (
    <Button
      onClick={() => {
        setImageContents((state) => state.slice(0).sort(compareFn));
      }}
    >
      {text}
    </Button>
  );
}
SortButton.propTypes = {
  text: PropTypes.string.isRequired,
  compareFn: PropTypes.func.isRequired,
  setImageContents: PropTypes.func.isRequired,
};

const ascendingName = (a, b) => {
  const isLessThan = a.alt < b.alt;
  const isGreaterThan = a.alt > b.alt;
  if (isLessThan) {
    return -1;
  }
  if (isGreaterThan) {
    return 1;
  }
  return 0;
};

const ascendingId = (a, b) => a.key - b.key;

const ascendingDate = (a, b) => Date.parse(a.date) - Date.parse(b.date);

const descendingDate = (a, b) => Date.parse(b.date) - Date.parse(a.date);

function ImageListPage() {
  const [imageContents, setImageContents] = useState(sampleImageContents);

  return (
    <Wrapper>
      <Typography variant="h5" gutterBottom>
        이미지 목록 페이지
      </Typography>
      <SortButton
        text="이름으로 정렬"
        compareFn={ascendingName}
        setImageContents={setImageContents}
      />
      <SortButton
        text="아이디로 정렬"
        compareFn={ascendingId}
        setImageContents={setImageContents}
      />
      <SortButton
        text="최신 순"
        compareFn={descendingDate}
        setImageContents={setImageContents}
      />
      <SortButton
        text="오래된 순"
        compareFn={ascendingDate}
        setImageContents={setImageContents}
      />
      <ImagesView imageContents={imageContents} onImageUrlDelete={undefined} />
    </Wrapper>
  );
}

export default ImageListPage;
