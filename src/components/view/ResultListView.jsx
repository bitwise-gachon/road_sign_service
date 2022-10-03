import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div``;

const ResultContainer = styled.div``;

const ResultItem = styled.div`
  height: 8rem;
  border-top: 1px solid grey;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 8rem;
  height: 8rem;
`;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const TextContainer = styled.div`
  padding: 2rem;
`;

function ResultListView({ results }) {
  const navigate = useNavigate();
  const linkToResultDetailPage = (resultId) => {
    navigate(resultId);
  };
  return (
    <Wrapper>
      <ResultContainer>
        {results.map((result) => (
          <ResultItem
            onClick={() => {
              linkToResultDetailPage(result.resultId);
            }}
          >
            <ImageContainer>
              <Image src={result.imageUrl} alt={result.imageAlt} />
            </ImageContainer>
            <TextContainer>
              <h4>{result.imageAlt}</h4>
              <p>{`${result.inference_status}`}</p>
              {result.inference_status === '분석완료' && (
                <p>{`${result.classCategoryName} (${result.class_category.toString()})`}</p>
              )}
            </TextContainer>
          </ResultItem>
        ))}
      </ResultContainer>
    </Wrapper>
  );
}
ResultListView.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      resultId: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      imageAlt: PropTypes.string.isRequired,
      inference_status: PropTypes.string.isRequired,
      class_category: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ResultListView;
