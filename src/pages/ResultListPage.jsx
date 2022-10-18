import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import ResultListView from '../components/view/ResultListView';
import sampleImageContents from '../jsonDataset/sampleImageContents.json';
import sampleResults from '../jsonDataset/sampleResults.json';

const Wrapper = styled.div``;

function ResultListPage() {
  const results = sampleResults.map((result) => ({
    ...result,
    imageUrl: sampleImageContents[Number(result.imageId)].url,
    imageAlt: sampleImageContents[Number(result.imageId)].alt,
  }));
  return (
    <Wrapper>
      <Typography variant="h5" gutterBottom>
        결과 목록 페이지
      </Typography>
      <ResultListView results={results} />
    </Wrapper>
  );
}

export default ResultListPage;
