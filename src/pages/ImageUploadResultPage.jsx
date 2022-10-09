import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const Wrapper = styled.div``;

const Image = styled.img`
  height: 12rem;
`;

function ImageUploadResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const getData = () => {
    if (location.state) {
      console.log(location.state);
      return (
        <div>
          <Image src={location.state.imageContent.url} />
          <p>{location.state.response.data}</p>
        </div>
      );
    }
    return <p>받은 데이터가 없습니다.</p>;
  };
  const onClick = () => {
    navigate('/');
  };
  return (
    <Wrapper>
      <h2>결과 화면</h2>
      {getData()}
      <button type="submit" onClick={onClick}>
        되돌아가기
      </button>
    </Wrapper>
  );
}

export default ImageUploadResultPage;
