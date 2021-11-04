import axios from 'axios';

const url = 'https://muucoop.herokuapp.com';

export default class FormsApi {
  async post(i, data) {
    try {
      const res = await axios.post(`${url}${i}`, data);
      return res.data;
    } catch (error) {
      console.log(error);
      return 'Error';
    }
  }
}
