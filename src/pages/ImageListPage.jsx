/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import ImagesView from '../components/view/ImageListView';
import sampleImageContents from '../jsonDataset/sampleDetailImageContents.json';

const Wrapper = styled.div``;

function SortButton({ text, compareFn, setImageContents }) {
  return (
    <Button
      onClick={() => {
        setImageContents((state) => state.slice(0).sort(compareFn));
      }}
    >
      {text}
    </Button>
  );
}
SortButton.propTypes = {
  text: PropTypes.string.isRequired,
  compareFn: PropTypes.func.isRequired,
  setImageContents: PropTypes.func.isRequired,
};

const ascendingName = (a, b) => {
  const isLessThan = a.alt < b.alt;
  const isGreaterThan = a.alt > b.alt;
  if (isLessThan) {
    return -1;
  }
  if (isGreaterThan) {
    return 1;
  }
  return 0;
};

const ascendingId = (a, b) => {
  const isLessThan = a.key < b.key;
  const isGreaterThan = a.key > b.key;
  if (isLessThan) {
    return -1;
  }
  if (isGreaterThan) {
    return 1;
  }
  return 0;
};

const ascendingDate = (a, b) => Date.parse(a.date) - Date.parse(b.date);

const descendingDate = (a, b) => Date.parse(b.date) - Date.parse(a.date);

function ImageListPage() {
  const [searchedName, setSearchedName] = useState('');
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .post('https://bitwise.ljlee37.com:8080/imageList', {
        user_id: 'test',
      })
      .then((response) => {
        const out = response.data.queryResult.map((image) => ({
          key: image.hash,
          alt: decodeURIComponent(image.name),
          url: image.path,
          date: image.upload_date_time,
        }));
        return out;
      })
      .then((data) => {
        setImages(() => data);
      })
      .catch(() => {
        setImages(() => sampleImageContents);
      });
  }, []);

  const onImageUrlDelete = (key) => {
    if (
      // eslint-disable-next-line no-restricted-globals
      confirm(
        `${
          images.filter((image) => image.key === key)[0].alt
        } 이미지를 삭제하시겠습니까?`,
      )
    ) {
      axios
        .delete('https://bitwise.ljlee37.com:8080/image', {
          data: {
            user_id: 'test',
            imageId: key,
          },
        })
        .then((response) => {
          console.log(response);
          setImages((state) => state.filter((item) => item.key !== key));
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <Wrapper>
      <Typography variant="h5" gutterBottom>
        이미지 목록 페이지
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box component="span">
          <SortButton
            text="이름으로 정렬"
            compareFn={ascendingName}
            setImageContents={setImages}
          />
          <SortButton
            text="아이디로 정렬"
            compareFn={ascendingId}
            setImageContents={setImages}
          />
          <SortButton
            text="최신 순"
            compareFn={descendingDate}
            setImageContents={setImages}
          />
          <SortButton
            text="오래된 순"
            compareFn={ascendingDate}
            setImageContents={setImages}
          />
        </Box>

        <TextField
          size="small"
          value={searchedName}
          onChange={(event) => {
            setSearchedName(event.target.value);
          }}
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <ImagesView
        imageContents={images.filter(({ alt }) =>
          alt.toUpperCase().includes(searchedName.toUpperCase()),
        )}
        onImageUrlDelete={onImageUrlDelete}
      />
    </Wrapper>
  );
}

export default ImageListPage;
