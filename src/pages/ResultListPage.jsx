import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import axios from 'axios';
import ResultListView from '../components/view/ResultListView';
import sampleImageContents from '../jsonDataset/sampleImageContents.json';
import sampleResults from '../jsonDataset/sampleResults.json';

const Wrapper = styled.div``;

function ResultListPage() {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    axios
      .post('https://bitwise.ljlee37.com:8080/requestList', {
        user_id: 'test',
      })
      .then((response) => {
        const out = response.data.queryResult.map((request) => ({
          resultId: request.request_id,
          imageUrl: request.path,
          imageAlt: decodeURIComponent(request.name),
          inference_status: request.status,
          class_category: request.request_result,
          date: request.upload_date_time,
        }));
        setRequests(() => out);
      })
      .catch(() => {
        const results = sampleResults.map((result) => ({
          ...result,
          imageUrl: sampleImageContents[Number(result.imageId)].url,
          imageAlt: sampleImageContents[Number(result.imageId)].alt,
        }));
        setRequests(() => results);
      });
  }, []);
  return (
    <Wrapper>
      <Typography variant="h5" gutterBottom>
        결과 목록 페이지
      </Typography>
      <ResultListView results={requests} />
    </Wrapper>
  );
}

export default ResultListPage;
