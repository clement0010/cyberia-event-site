import axios from 'axios';

interface UploadResponse {
  data: {
    imageURL: string;
  };
  status: number;
}

export default async function uploadService(file: string|Blob, userId: string): Promise<UploadResponse> {
  const formData = new FormData();

  formData.append('file', file);

  return axios.post(`${process.env.VUE_APP_FILE_SUBMISSION_URL}/api/upload/${userId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}
