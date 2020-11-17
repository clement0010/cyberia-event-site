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

  return axios.post(`http://localhost:3000/api/upload/${userId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}
