/* eslint-disable operator-linebreak */
import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import axios from 'axios';
import koreaRoadSigns from '../jsonDataset/koreaRoadSigns.json';
import sampleImageContents from '../jsonDataset/sampleImageContents.json';
import sampleResults from '../jsonDataset/sampleResults.json';

const Wrapper = styled.div``;

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
  max-height: 256px;
  max-width: 256px;
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

// ================================================
// START: 인용한 코드: https://hoyashu.tistory.com/36
let voices = [];

function setVoiceList() {
  voices = window.speechSynthesis.getVoices();
}
setVoiceList();
if (window.speechSynthesis.onvoiceschanged !== undefined) {
  window.speechSynthesis.onvoiceschanged = setVoiceList;
}

function speech(txt) {
  if (!window.speechSynthesis) {
    alert(
      '음성 재생을 지원하지 않는 브라우저입니다. 크롬, 파이어폭스 등의 최신 브라우저를 이용하세요',
    );
    return;
  }
  const lang = 'ko-KR';
  const utterThis = new SpeechSynthesisUtterance(txt);
  utterThis.onend = function () {
    console.log('end');
  };
  utterThis.onerror = function (event) {
    console.log('error', event);
  };
  let voiceFound = false;
  for (let i = 0; i < voices.length; i += 1) {
    if (
      voices[i].lang.indexOf(lang) >= 0 ||
      voices[i].lang.indexOf(lang.replace('-', '_')) >= 0
    ) {
      utterThis.voice = voices[i];
      voiceFound = true;
    }
  }
  if (!voiceFound) {
    alert('voice not found');
    return;
  }
  utterThis.lang = lang;
  utterThis.pitch = 1;
  utterThis.rate = 1; // 속도
  window.speechSynthesis.speak(utterThis);
}
// END: 인용한 코드: https://hoyashu.tistory.com/36
// ================================================
function ResultDetailPage() {
  useEffect(() => () => {
    window.speechSynthesis.cancel();
  });
  const { resultId } = useParams();
  const [result, setResult] = useState({});
  useEffect(() => {
    axios
      .post('https://bitwise.ljlee37.com:8080/requestDetail', {
        user_id: 'test',
        requestId: resultId,
      })
      .then((response) => {
        const out = response.data.queryResult.map((request) => ({
          resultId: request.request_id,
          imageUrl: request.path,
          imageAlt: request.name,
          imageId: request.hash,
          inference_status: request.status,
          class_category: request.request_result,
        }))[0];
        const selectedRoadSign = koreaRoadSigns.find(
          (sign) => sign.class_category === out.class_category,
        );

        const addedout = {
          ...out,
          roadSignName: selectedRoadSign.title,
          roadSignImage: selectedRoadSign.image_src,
          roadSignsummary: selectedRoadSign.summary,
        };
        setResult(() => addedout);
      })
      .catch(() => {
        const selectedResult = sampleResults.find(
          (request) => request.resultId === resultId,
        );
        const selectedRoadSign = koreaRoadSigns.find(
          (sign) => sign.class_category === selectedResult.class_category,
        );
        const out = {
          ...selectedResult,
          imageUrl: sampleImageContents[Number(selectedResult.imageId)].url,
          imageAlt: sampleImageContents[Number(selectedResult.imageId)].alt,
          roadSignName: selectedRoadSign.title,
          roadSignImage: selectedRoadSign.image_src,
          roadSignsummary: selectedRoadSign.summary,
        };
        setResult(out);
      });
  }, []);

  return (
    <Wrapper>
      <Typography variant="h5" gutterBottom>
        결과 상세 페이지
      </Typography>
      <ArticleWrapper>
        <RequestImageWrapper>
          <Typography variant="h6" sx={{ paddingBottom: 1 }}>
            요청한 이미지
          </Typography>
          <RequestImage src={result.imageUrl} alt={result.imageAlt} />
        </RequestImageWrapper>
        <ResultWrapper>
          <Typography variant="h6" sx={{ paddingBottom: 1 }}>
            {result.roadSignName}
          </Typography>
          <RoadSignImageContainter>
            <RoadSignImage
              src={result.roadSignImage}
              alt={result.roadSignName}
            />
          </RoadSignImageContainter>
          <Typography sx={{ paddingTop: 2 }}>
            {result.roadSignsummary}
          </Typography>
          <Button
            onClick={() => {
              speech(result.roadSignsummary);
            }}
            variant="contained"
            sx={{ marginTop: 2 }}
            startIcon={<PlayArrowIcon />}
          >
            읽기
          </Button>
          <Button
            onClick={() => {
              window.speechSynthesis.cancel();
            }}
            variant="contained"
            color="error"
            sx={{ marginTop: 2, marginLeft: 2 }}
            startIcon={<StopIcon />}
          >
            읽기중지
          </Button>
        </ResultWrapper>
      </ArticleWrapper>
    </Wrapper>
  );
}

export default ResultDetailPage;
