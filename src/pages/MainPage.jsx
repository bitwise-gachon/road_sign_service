import React from 'react';
import ImageUploadBox from '../components/upload/ImageUploadBox';
import ImageUploader from '../components/upload/ImageUploader';

function MainPage() {
  return (
    <div>
      <ImageUploader />
      <ImageUploadBox />
    </div>
  );
}

export default MainPage;
