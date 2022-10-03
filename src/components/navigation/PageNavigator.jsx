import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #e7e7e7;
  width: 100%;
  height: 100%;
`;

const PageList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const PageItem = styled.li`
  padding: 1rem;
  margin: 0;
  :hover {
    background-color: lightgray;
  }
  cursor: pointer;
`;

function PageNavigator({ urlContents }) {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <PageList>
        {urlContents.map(({ url, title }) => (
          <PageItem key={title} onClick={() => navigate(url)}>
            <div
              onClick={() => navigate(url)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  navigate(url);
                }
              }}
              role="link"
              tabIndex={0}
            >
              {title}
            </div>
          </PageItem>
        ))}
      </PageList>
    </Wrapper>
  );
}
PageNavigator.propTypes = {
  urlContents: PropTypes.arrayOf(
    PropTypes.shape({ url: PropTypes.string, title: PropTypes.string }),
  ).isRequired,
};

export default PageNavigator;
