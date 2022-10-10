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
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

const Wrapper = styled.div``;

const ResultContainer = styled.div``;

// const ResultItem = styled.div`
//   height: 8rem;
//   border-top: 1px solid grey;
//   padding: 1rem;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: left;
//   cursor: pointer;
// `;

// const ImageContainer = styled.div`
//   width: 8rem;
//   height: 8rem;
// `;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const TextContainer = styled.div`
  padding: 2rem;
`;

const status = [
  {
    name: '분석완료',
    icon: <CheckCircleOutlineIcon />,
  },
  {
    name: '분석중',
    icon: <HourglassTopIcon />,
  },
  {
    name: '요청됨',
    icon: <CheckCircleOutlineIcon />,
  },
];

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
                    linkToResultDetailPage(result.resultId);
                  }}
                >
                  <CardMedia sx={{ height: 128 }}>
                    <Image src={result.imageUrl} alt={result.imageAlt} />
                  </CardMedia>
                  <CardContent>
                    <TextContainer>
                      <Typography variant="h6">{result.imageAlt}</Typography>
                      <Typography>{`${result.inference_status}`}</Typography>
                      {result.inference_status === '분석완료' && (
                        <Typography>
                          {`${
                            result.classCategoryName
                          } (${result.class_category.toString()})`}
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
    }),
  ).isRequired,
};

// <ResultItem
// onClick={() => {
//   linkToResultDetailPage(result.resultId);
// }}
// >
{
  /* <ImageContainer>
  <Image src={result.imageUrl} alt={result.imageAlt} />
</ImageContainer>
<TextContainer>
  <h4>{result.imageAlt}</h4>
  <p>{`${result.inference_status}`}</p>
  {result.inference_status === '분석완료' && (
    <p>{`${result.classCategoryName} (${result.class_category.toString()})`}</p>
  )}
</TextContainer> */
}
// </ResultItem>

export default ResultListView;
