import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import koreaRoadSigns from '../jsonDataset/koreaRoadSigns.json';
import sampleImageContents from '../jsonDataset/sampleImageContents.json';
import sampleResults from '../jsonDataset/sampleResults.json';

const Wrapper = styled.div`
`;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const RequestImageWrapper = styled.div`
  display: block;
  padding: 1rem;
`;

const ResultWrapper = styled.div`
  display: block;
  padding: 1rem;
`;

const RequestImage = styled.img`
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3), 0px 6px 20px rgba(0, 0, 0, 0.25);
`;

const RoadSignImageContainter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RoadSignImage = styled.img`
  width: 16rem;
`;

function ResultDetailPage() {
  const { resultId } = useParams();
  const selectedResult = sampleResults.find(
    (result) => result.resultId === resultId,
  );
  const selectedRoadSign = koreaRoadSigns.find(
    (sign) => sign.class_category === selectedResult.class_category,
  );
  const result = {
    ...selectedResult,
    imageUrl: sampleImageContents[Number(selectedResult.imageId)].url,
    imageAlt: sampleImageContents[Number(selectedResult.imageId)].alt,
    roadSignName: selectedRoadSign.title,
    roadSignImage: selectedRoadSign.image_src,
    roadSignsummary: selectedRoadSign.summary,
  };
  console.log(result.roadSignImage);
  return (
    <Wrapper>
      <h1>결과 상세 페이지</h1>
      <ArticleWrapper>
        <RequestImageWrapper>
          <h3>요청한 이미지</h3>
          <RequestImage src={result.imageUrl} alt={result.imageAlt} />
        </RequestImageWrapper>
        <ResultWrapper>
          <h3>{result.roadSignName}</h3>
          <RoadSignImageContainter>
            <RoadSignImage
              src={result.roadSignImage}
              alt={result.roadSignName}
            />
          </RoadSignImageContainter>
          <p>{result.roadSignsummary}</p>
        </ResultWrapper>
      </ArticleWrapper>
    </Wrapper>
  );
}

export default ResultDetailPage;
