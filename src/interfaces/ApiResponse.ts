import { Question } from './Question';

export interface ApiResponse {
  response_code: number;
  results: Array<Question>;
}
