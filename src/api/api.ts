import { ApiResponse } from '../interfaces/ApiResponse';
import { API_START_URL } from '../constants/constants';

const getQuestions = (amount: string, difficulty: string): Promise<ApiResponse> => {
  return fetch(`${API_START_URL}?amount=${amount}&difficulty=${difficulty}&type=boolean`)
    .then(async response => {
      return response.json();
    })
    .catch(error => {
      throw error;
    });
};

export default getQuestions;
