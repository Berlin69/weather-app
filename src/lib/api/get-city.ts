import axios from 'axios';

export const getCity = async (
  searchValue: string,
  cb: (response: any) => void,
  loading: (boolean: boolean) => void
) => {
  axios
    .get('/api/city', {
      params: {
        q: searchValue,
        limit: 5,
      },
    })
    .then((response) => cb(response.data))
    .finally(() => loading(false));
};
