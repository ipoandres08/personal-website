import env from '@beam-australia/react-env';
import $axios from 'axios';

export const axios = $axios.create();

axios.defaults.baseURL = env('API_URL');