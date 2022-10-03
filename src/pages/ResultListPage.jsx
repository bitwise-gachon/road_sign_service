import React from 'react';
import styled from 'styled-components';
import ResultListView from '../components/view/ResultListView';
import sampleImageContents from '../jsonDataset/sampleImageContents.json';
import sampleResults from '../jsonDataset/sampleResults.json';
import koreaRoadSigns from '../jsonDataset/koreaRoadSigns.json';

const Wrapper = styled.div``;

function ResultListPage() {
  const results = sampleResults.map((result) => ({
    ...result,
    imageUrl: sampleImageContents[Number(result.imageId)].url,
    imageAlt: sampleImageContents[Number(result.imageId)].alt,
    classCategoryName: koreaRoadSigns.find(
      (sign) => sign.class_category === result.class_category,
    ).title,
  }));
  return (
    <Wrapper>
      <h1>결과 목록 페이지</h1>
      <ResultListView results={results} />
    </Wrapper>
  );
}

export default ResultListPage;
