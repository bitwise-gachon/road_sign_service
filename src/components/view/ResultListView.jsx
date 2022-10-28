/* eslint-disable operator-linebreak */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import koreaRoadSigns from '../../jsonDataset/koreaRoadSigns.json';

const Wrapper = styled.div``;

const ResultContainer = styled.div``;

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
          <Card
            sx={{
              marginBottom: 4,
              display: 'flex',
            }}
          >
            <CardActionArea
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'left',
              }}
              onClick={() => {
                if (result.class_category !== null) {
                  linkToResultDetailPage(result.resultId);
                }
              }}
            >
              <CardMedia sx={{ width: 128 }}>
                <Image src={result.imageUrl} alt={result.imageAlt} />
              </CardMedia>
              <CardContent>
                <TextContainer>
                  <Typography variant="h6">{result.imageAlt}</Typography>

                  <Typography>{`${result.inference_status}`}</Typography>
                  {result.class_category !== null && (
                    <Typography>
                      {`${koreaRoadSigns
                        .find(
                          (sign) =>
                            // eslint-disable-next-line implicit-arrow-linebreak
                            sign.class_category === result.class_category,
                        )
                        .korean_title.concat(' 표지')}`}
                    </Typography>
                  )}
                  <Typography sx={{ color: 'gray', fontSize: '0.875rem' }}>
                    {`${new Date(result.date).toLocaleString()}에 업로드`}
                  </Typography>
                </TextContainer>
              </CardContent>
            </CardActionArea>
          </Card>
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
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ResultListView;
