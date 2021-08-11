import PageUrl from '../../enums/PageUrl';
import SET_PAGE from './appActionTypes';
import { AppAction } from '../../interfaces/AppAction';

const setCurrentPage = (pageUrl: PageUrl): AppAction => ({ type: SET_PAGE, pageUrl });

export default setCurrentPage;
