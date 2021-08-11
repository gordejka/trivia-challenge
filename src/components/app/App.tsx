import React, { FC, useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PageRouter from '../pageRouter/PageRouter';
import Loader from '../loader/Loader';
import { RootState } from '../../interfaces/RootState';
import ErrorModal from '../modal/ErrorModal';

const App: FC = () => {
  const { isFetched } = useSelector((state: RootState) => state.quiz);
  const loader = useMemo(() => !isFetched && <Loader />, [isFetched]);

  return (
    <div>
      <BrowserRouter>
        <PageRouter />
      </BrowserRouter>
      {loader}
      <ErrorModal />
    </div>
  );
};

export default App;
