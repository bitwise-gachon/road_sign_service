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
  Grid,
  Typography,
} from '@mui/material';

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
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {results.map((result) => (
            <Grid item xs={6}>
              <Card
                sx={{
                  marginBottom: 4,
                }}
              >
                <CardActionArea
                  onClick={() => {
                    if (result.class_category !== null) {
                      linkToResultDetailPage(result.resultId);
                    }
                  }}
                >
                  <CardMedia sx={{ height: 128 }}>
                    <Image src={result.imageUrl} alt={result.imageAlt} />
                  </CardMedia>
                  <CardContent>
                    <TextContainer>
                      <Typography variant="h6">{result.imageAlt}</Typography>
                      <Typography>{`${result.inference_status}`}</Typography>
                      {result.class_category !== null && (
                        <Typography>
                          {`(${result.class_category.toString()})`}
                        </Typography>
                      )}
                    </TextContainer>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
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
