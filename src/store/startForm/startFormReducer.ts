import SET_FORM_DATA from './startFormActionTypes';
import { StartFormState } from '../../interfaces/StartFormState';
import { StartFormAction } from '../../interfaces/StartFormAction';

const initialState: StartFormState = {
  formData: {
    amount: '',
    difficulty: 'easy',
    type: true,
  },
  difficultyVariants: ['easy', 'hard'],
};

const startFormReducer = (state = initialState, action: StartFormAction): StartFormState => {
  switch (action.type) {
    case SET_FORM_DATA:
      return {
        ...state,
        formData: action.formData,
      };
    default:
      return state;
  }
};

export default startFormReducer;
