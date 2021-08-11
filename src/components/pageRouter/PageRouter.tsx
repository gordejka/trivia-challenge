import React, { FC, useEffect, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import setCurrentPage from '../../store/application/appActions';
import PageUrl from '../../enums/PageUrl';
import { RootState } from '../../interfaces/RootState';

const PageRouter: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { currentPage, pages } = useSelector((state: RootState) => state.app);
  const questionsCount = useSelector((state: RootState) => state.quiz.questionsCount);
  const { push: historyPush } = useHistory();

  useEffect(() => {
    if (!questionsCount) {
      historyPush(PageUrl.START_PAGE);
    }
  }, []);

  return useMemo(() => {
    window.scroll(0, 0);
    let Component = pages.get(currentPage);
    const pageName = location.pathname;
    const page = pages.get(pageName as PageUrl);
    if (page) {
      Component = page;
      dispatch(setCurrentPage(pageName as PageUrl));
      return <Component />;
    }
    if (Component) {
      return <Component />;
    }
    return <></>;
  }, [location.pathname]);
};

export default PageRouter;
