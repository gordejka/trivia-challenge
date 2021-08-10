import { FC } from 'react';
import PageUrl from '../enums/PageUrl';

export interface AppState {
  pages: Map<PageUrl, FC>;
  currentPage: PageUrl;
}
