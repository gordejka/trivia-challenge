import PageUrl from '../enums/PageUrl';

export interface AppAction {
  type: string;
  pageUrl: PageUrl;
}
