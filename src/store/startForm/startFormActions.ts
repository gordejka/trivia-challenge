import SET_FORM_DATA from './startFormActionTypes';
import { StartFormData } from '../../interfaces/StartFormData';
import { StartFormAction } from '../../interfaces/StartFormAction';

const setFormData = (formData: StartFormData): StartFormAction => ({ type: SET_FORM_DATA, formData });

export default setFormData;
