import React from 'react';
import styled from 'styled-components';

const sampleImageContent = {
  key: 0,
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/A2Warrego.svg/220px-A2Warrego.svg.png',
  alt: 'A "route confirmation" sign from wikipedia',
};

const roadSignSummaries = [
  {
    class_num: 129,
    class_name: '과속방지턱',
    image_src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/South_Korea_road_sign_129.svg/180px-South_Korea_road_sign_129.svg.png',
    summary:
      '과속방지턱, 고원식 횡단보도, 고원식 교차로가 있는 지점 전 30~200m의 도로 우측에 설치되어 있다.',
  },
];

const Wrapper = styled.div`
  padding: 1rem;
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

const StyledImage = styled.img`
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3), 0px 6px 20px rgba(0, 0, 0, 0.25);
`;

function ResultDetailPage() {
  return (
    <Wrapper>
      <h1>결과 상세 페이지</h1>
      <ArticleWrapper>
        <RequestImageWrapper>
          <h3>요청한 이미지</h3>
          <StyledImage src={sampleImageContent.url} alt={sampleImageContent.alt} />
        </RequestImageWrapper>
        {roadSignSummaries
          .filter((x) => x.class_num === 129)
          .map((x) => (
            <ResultWrapper>
              <h2>{x.class_name}</h2>
              <img src={x.image_src} alt={x.class_name} />
              <p>{x.summary}</p>
            </ResultWrapper>
          ))}
      </ArticleWrapper>
    </Wrapper>
  );
}

export default ResultDetailPage;
