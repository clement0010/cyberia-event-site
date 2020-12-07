import axios from 'axios';

interface UploadResponse {
  data: {
    imageURL: string;
  };
  status: number;
}

export default async function uploadService(file: string|Blob): Promise<UploadResponse> {
  const formData = new FormData();

  formData.append('file', file);

  return axios.post(`${process.env.VUE_APP_FILE_SUBMISSION_URL}api/upload/`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
