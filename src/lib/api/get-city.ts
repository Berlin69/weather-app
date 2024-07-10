import axios from 'axios';
import { appid } from './constants';

export const getCity = (
  searchValue: string,
  cb: (response: any) => void,
  loading: (boolean: boolean) => void
) => {
  axios
    .get('http://api.openweathermap.org/geo/1.0/direct', {
      params: {
        q: searchValue,
        limit: 5,
        appid: appid,
      },
    })
    .then((response) => cb(response.data))
    .finally(() => loading(false));
};
